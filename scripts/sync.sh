#!/usr/bin/env bash
# ------------------------------------------------------------------
# PMM OS — Sync Script
# Pulls the latest knowledge base from the remote repo.
# Designed to run unattended via cron or launchd.
# ------------------------------------------------------------------
set -euo pipefail

# ── Configuration (override via environment variables) ────────────
REPO_DIR="${PMM_OS_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
BRANCH="${PMM_OS_BRANCH:-main}"
LOG_DIR="${PMM_OS_LOG_DIR:-$REPO_DIR/.sync}"
LOG_FILE="$LOG_DIR/sync.log"
MAX_LOG_LINES=500

# ── Helpers ───────────────────────────────────────────────────────
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"; }

trim_log() {
  if [ -f "$LOG_FILE" ] && [ "$(wc -l < "$LOG_FILE")" -gt "$MAX_LOG_LINES" ]; then
    tail -n "$MAX_LOG_LINES" "$LOG_FILE" > "$LOG_FILE.tmp" && mv "$LOG_FILE.tmp" "$LOG_FILE"
  fi
}

# ── Pre-flight checks ────────────────────────────────────────────
mkdir -p "$LOG_DIR"

if [ ! -d "$REPO_DIR/.git" ]; then
  log "ERROR: $REPO_DIR is not a git repository. Exiting."
  exit 1
fi

cd "$REPO_DIR"

# Check network connectivity (try to reach GitHub)
if ! git ls-remote --exit-code origin &>/dev/null; then
  log "WARNING: Cannot reach remote. Skipping sync (will retry next run)."
  exit 0
fi

# ── Sync ──────────────────────────────────────────────────────────
log "Starting sync in $REPO_DIR (branch: $BRANCH)"

# Stash any local changes so pull doesn't fail
STASH_RESULT=$(git stash 2>&1) || true
HAD_STASH=false
if [[ "$STASH_RESULT" != *"No local changes"* ]]; then
  HAD_STASH=true
  log "Stashed local changes"
fi

# Pull latest
if git pull origin "$BRANCH" --ff-only 2>&1 | tee -a "$LOG_FILE"; then
  log "Sync complete"
else
  log "WARNING: Fast-forward pull failed. You may have local commits that diverge from remote."
  log "Run 'cd $REPO_DIR && git status' to investigate."
fi

# Restore stashed changes
if [ "$HAD_STASH" = true ]; then
  if git stash pop 2>&1 | tee -a "$LOG_FILE"; then
    log "Restored local changes"
  else
    log "WARNING: Could not restore stashed changes cleanly. Run 'git stash pop' manually."
  fi
fi

trim_log
log "---"
