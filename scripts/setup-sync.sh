#!/usr/bin/env bash
# ------------------------------------------------------------------
# PMM OS — Setup Scheduled Sync (Admin Installer)
# Installs a cron job that pulls the latest knowledge base on a
# schedule. Run this after forking/cloning the repo.
#
# Usage:
#   ./scripts/setup-sync.sh             # Interactive mode
#   ./scripts/setup-sync.sh --defaults  # 9 AM ET, Mon-Fri
#   ./scripts/setup-sync.sh --remove    # Remove the cron job
# ------------------------------------------------------------------
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SYNC_SCRIPT="$REPO_DIR/scripts/sync.sh"
CRON_MARKER="# PMM-OS-SYNC"

# ── Helpers ───────────────────────────────────────────────────────
info()  { echo "  $*"; }
bold()  { echo -e "\033[1m$*\033[0m"; }
green() { echo -e "\033[32m$*\033[0m"; }
red()   { echo -e "\033[31m$*\033[0m"; }

remove_existing_job() {
  if crontab -l 2>/dev/null | grep -q "$CRON_MARKER"; then
    crontab -l 2>/dev/null | grep -v "$CRON_MARKER" | crontab -
    info "Removed existing PMM OS sync job"
  fi
}

convert_et_to_local_hour() {
  local et_hour=$1
  # Use date command to convert ET to local timezone
  # ET offset: -5 (EST) or -4 (EDT)
  local et_offset
  if date -d "March 10" +%Z 2>/dev/null | grep -q "EDT"; then
    et_offset=-4
  else
    et_offset=-5
  fi

  # Get local UTC offset in hours
  local local_offset_sec
  local local_offset_hr
  local_offset_sec=$(date +%z | sed 's/\([+-]\)\(.\{2\}\)\(.\{2\}\)/\1(\2*3600+\3*60)/' | bc 2>/dev/null || echo "0")
  local_offset_hr=$((local_offset_sec / 3600))

  # Convert: local_hour = et_hour + (local_offset - et_offset)
  local diff=$((local_offset_hr - et_offset))
  local local_hour=$(( (et_hour + diff + 24) % 24 ))
  echo "$local_hour"
}

install_cron_job() {
  local hour=$1
  local minute=$2
  local days=$3  # cron day-of-week format

  remove_existing_job

  local cron_line="$minute $hour * * $days $SYNC_SCRIPT $CRON_MARKER"

  # Append to existing crontab
  (crontab -l 2>/dev/null; echo "$cron_line") | crontab -
}

generate_team_command() {
  local remote_url
  remote_url=$(cd "$REPO_DIR" && git remote get-url origin 2>/dev/null || echo "")

  if [ -z "$remote_url" ]; then
    info "Could not detect remote URL. Team members can run:"
    info "  curl -sL <YOUR_RAW_GITHUB_URL>/scripts/team-join.sh | bash -s -- <YOUR_REPO_URL>"
  else
    # Convert SSH URL to HTTPS if needed
    if [[ "$remote_url" == git@* ]]; then
      remote_url=$(echo "$remote_url" | sed 's|git@github.com:|https://github.com/|' | sed 's|\.git$||')
    fi
    remote_url="${remote_url%.git}"

    local raw_url="${remote_url/github.com/raw.githubusercontent.com}/main/scripts/team-join.sh"

    echo ""
    bold "Share this with your team:"
    echo ""
    echo "  curl -sL $raw_url | bash -s -- $remote_url.git"
    echo ""
    info "They paste that one line into their terminal and they're set up."
    info "It clones the repo, installs the sync schedule, and runs a test pull."
  fi
}

# ── Handle --remove ───────────────────────────────────────────────
if [ "${1:-}" = "--remove" ]; then
  remove_existing_job
  green "Sync schedule removed."
  exit 0
fi

# ── Ensure sync script is executable ─────────────────────────────
chmod +x "$SYNC_SCRIPT"

echo ""
bold "PMM OS — Scheduled Sync Setup"
echo ""

# ── Handle --defaults (9 AM ET, Mon-Fri) ─────────────────────────
if [ "${1:-}" = "--defaults" ]; then
  local_hour=$(convert_et_to_local_hour 9)
  install_cron_job "$local_hour" "0" "1-5"
  green "Installed: sync at ${local_hour}:00 local time (9:00 AM ET), Monday-Friday"
  generate_team_command
  exit 0
fi

# ── Interactive mode ──────────────────────────────────────────────
info "This will set up a cron job to automatically pull the latest"
info "knowledge base from GitHub on a schedule."
echo ""

# Ask for schedule
bold "When should the sync run?"
echo ""
echo "  1) 9:00 AM ET, Monday-Friday (recommended)"
echo "  2) Custom schedule"
echo ""
read -rp "  Choice [1]: " schedule_choice
schedule_choice="${schedule_choice:-1}"

if [ "$schedule_choice" = "1" ]; then
  local_hour=$(convert_et_to_local_hour 9)
  cron_minute="0"
  cron_days="1-5"
  info "Schedule: ${local_hour}:00 local time (9:00 AM ET), Monday-Friday"
else
  echo ""
  read -rp "  Hour (0-23, in your local time) [9]: " cron_hour
  cron_hour="${cron_hour:-9}"
  local_hour="$cron_hour"

  read -rp "  Minute (0-59) [0]: " cron_minute
  cron_minute="${cron_minute:-0}"

  echo ""
  echo "  Which days?"
  echo "    1) Monday-Friday"
  echo "    2) Every day"
  echo "    3) Custom (cron format, e.g. 1,3,5 for Mon/Wed/Fri)"
  read -rp "  Choice [1]: " day_choice
  day_choice="${day_choice:-1}"

  case "$day_choice" in
    1) cron_days="1-5" ;;
    2) cron_days="*" ;;
    3) read -rp "  Days (cron format): " cron_days ;;
    *) cron_days="1-5" ;;
  esac
fi

echo ""
install_cron_job "$local_hour" "$cron_minute" "$cron_days"
green "Sync schedule installed."

# ── Offer test run ───────────────────────────────────────────────
echo ""
read -rp "  Run a test sync now? [Y/n]: " test_run
test_run="${test_run:-Y}"

if [[ "$test_run" =~ ^[Yy] ]]; then
  echo ""
  bash "$SYNC_SCRIPT"
  green "Test sync complete. Check .sync/sync.log for details."
fi

# ── Generate team join command ───────────────────────────────────
generate_team_command

echo ""
info "To remove the sync schedule later: ./scripts/setup-sync.sh --remove"
info "To check sync logs: cat .sync/sync.log"
echo ""
