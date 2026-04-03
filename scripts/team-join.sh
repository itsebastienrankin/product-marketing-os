#!/usr/bin/env bash
# ------------------------------------------------------------------
# PMM OS — Team Join Script
# One-command setup for team members. Clones the repo, installs
# the sync schedule, and runs a test pull.
#
# Usage (team members paste this into their terminal):
#   curl -sL <raw-url>/scripts/team-join.sh | bash -s -- <repo-url>
#
# Or if already cloned:
#   ./scripts/team-join.sh
# ------------------------------------------------------------------
set -euo pipefail

INSTALL_DIR="${PMM_OS_DIR:-$HOME/pmm-os}"
BRANCH="${PMM_OS_BRANCH:-main}"

# ── Helpers ───────────────────────────────────────────────────────
info()  { echo "  $*"; }
bold()  { echo -e "\033[1m$*\033[0m"; }
green() { echo -e "\033[32m$*\033[0m"; }
red()   { echo -e "\033[31m$*\033[0m"; }

# ── Determine repo URL ───────────────────────────────────────────
REPO_URL="${1:-}"

if [ -z "$REPO_URL" ]; then
  # If no argument, check if we're already in a repo
  if [ -d ".git" ]; then
    REPO_URL=$(git remote get-url origin 2>/dev/null || echo "")
    INSTALL_DIR="$(pwd)"
  fi

  if [ -z "$REPO_URL" ]; then
    red "Error: No repo URL provided."
    echo ""
    info "Usage: curl -sL <raw-url>/scripts/team-join.sh | bash -s -- <repo-url>"
    info "   or: ./scripts/team-join.sh <repo-url>"
    exit 1
  fi
fi

echo ""
bold "PMM OS — Team Setup"
echo ""

# ── Clone or update ──────────────────────────────────────────────
if [ -d "$INSTALL_DIR/.git" ]; then
  info "Found existing repo at $INSTALL_DIR — updating..."
  cd "$INSTALL_DIR"
  git pull origin "$BRANCH" --ff-only
else
  info "Cloning to $INSTALL_DIR..."
  git clone -b "$BRANCH" "$REPO_URL" "$INSTALL_DIR"
  cd "$INSTALL_DIR"
fi

# ── Make scripts executable ──────────────────────────────────────
chmod +x scripts/sync.sh scripts/setup-sync.sh

# ── Install sync schedule (9 AM ET, Mon-Fri) ────────────────────
info "Installing sync schedule (9:00 AM ET, Monday-Friday)..."
bash scripts/setup-sync.sh --defaults

# ── Run test sync ────────────────────────────────────────────────
info "Running test sync..."
bash scripts/sync.sh

echo ""
green "You're all set!"
echo ""
info "Your knowledge base is at: $INSTALL_DIR"
info "It will automatically sync every weekday at 9:00 AM ET."
echo ""
info "Useful commands:"
info "  cd $INSTALL_DIR"
info "  make sync        # Sync now"
info "  make status      # Check last sync"
info "  make uninstall   # Remove the sync schedule"
echo ""
