# Scheduled Sync Guide

> **Using Claude (web or desktop)?** You don't need any of this. Claude reads directly from your GitHub repo — it's always up to date. This guide is for teams using **Cursor or VS Code**, where the repo is cloned locally and needs to be kept in sync.

Keep your local knowledge base up to date automatically. When someone on your team updates positioning, adds a battlecard, or publishes a new case study, your local copy pulls the changes on schedule — no manual `git pull` required.

---

## Quick Start (Admin)

You've forked the PMM OS and customized it. Now set up auto-sync and generate the command your team will use.

```bash
make setup
```

This walks you through choosing a schedule (default: 9 AM ET, Monday–Friday) and installs a cron job. At the end, it prints a one-liner you can share with your team.

**Want the defaults with no prompts?**

```bash
make setup  # or: ./scripts/setup-sync.sh --defaults
```

---

## Quick Start (Team Members)

Your admin will share a command that looks like this:

```bash
curl -sL https://raw.githubusercontent.com/YOUR-ORG/product-marketing-os/main/scripts/team-join.sh | bash -s -- https://github.com/YOUR-ORG/product-marketing-os.git
```

Paste it into your terminal. It:

1. Clones the repo to `~/pmm-os`
2. Installs the sync schedule (9 AM ET, weekdays)
3. Runs a test sync to confirm it works

That's it. Your knowledge base stays current automatically.

**Already cloned the repo?** Run this from inside it instead:

```bash
make setup
```

---

## How It Works

A cron job runs `scripts/sync.sh` on your chosen schedule. The sync script:

1. Checks network connectivity (skips gracefully if offline)
2. Stashes any local changes you've made
3. Pulls the latest from the remote
4. Restores your local changes
5. Logs everything to `.sync/sync.log`

Your local edits (drafts in `00-projects/`, notes, etc.) are never overwritten.

---

## Available Commands

| Command | What it does |
|---------|-------------|
| `make setup` | Install or change the sync schedule |
| `make sync` | Pull latest right now |
| `make status` | Show recent sync log entries |
| `make uninstall` | Remove the scheduled sync |

---

## Configuration

Override defaults with environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PMM_OS_DIR` | Repo root | Path to your local PMM OS repo |
| `PMM_OS_BRANCH` | `main` | Branch to pull from |
| `PMM_OS_LOG_DIR` | `.sync/` | Where sync logs are written |

Example: sync a different branch:

```bash
PMM_OS_BRANCH=staging make sync
```

---

## Slack Notifications (Optional)

Get notified in Slack when the knowledge base changes, so your team knows what's new without waiting for the next sync.

1. Create a [Slack Incoming Webhook](https://api.slack.com/messaging/webhooks)
2. In your GitHub fork: **Settings > Secrets and variables > Actions**
3. Add a secret named `SLACK_WEBHOOK_URL` with your webhook URL

The workflow at `.github/workflows/notify-context-update.yml` fires when knowledge base files are pushed to `main`. It posts which files changed and reminds people they can `make sync` immediately.

---

## Troubleshooting

**"Permission denied" when sync runs**
```bash
chmod +x scripts/sync.sh scripts/setup-sync.sh
```

**Sync runs but nothing changes**
- Check you're on the right branch: `git branch`
- Check the remote is correct: `git remote -v`
- Check the log: `cat .sync/sync.log`

**macOS: cron job doesn't seem to run**

macOS requires you to grant Full Disk Access to `cron`:

1. Open **System Settings > Privacy & Security > Full Disk Access**
2. Click **+**, press `Cmd+Shift+G`, type `/usr/sbin/cron`, and add it

Alternatively, use `launchd` (Apple's native scheduler):

```bash
cat > ~/Library/LaunchAgents/com.pmmos.sync.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.pmmos.sync</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>REPO_PATH/scripts/sync.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <array>
        <dict>
            <key>Hour</key>
            <integer>9</integer>
            <key>Minute</key>
            <integer>0</integer>
            <key>Weekday</key>
            <integer>1</integer>
        </dict>
        <dict>
            <key>Hour</key>
            <integer>9</integer>
            <key>Minute</key>
            <integer>0</integer>
            <key>Weekday</key>
            <integer>2</integer>
        </dict>
        <dict>
            <key>Hour</key>
            <integer>9</integer>
            <key>Minute</key>
            <integer>0</integer>
            <key>Weekday</key>
            <integer>3</integer>
        </dict>
        <dict>
            <key>Hour</key>
            <integer>9</integer>
            <key>Minute</key>
            <integer>0</integer>
            <key>Weekday</key>
            <integer>4</integer>
        </dict>
        <dict>
            <key>Hour</key>
            <integer>9</integer>
            <key>Minute</key>
            <integer>0</integer>
            <key>Weekday</key>
            <integer>5</integer>
        </dict>
    </array>
</dict>
</plist>
EOF
# Replace REPO_PATH with your actual path, then load it:
# launchctl load ~/Library/LaunchAgents/com.pmmos.sync.plist
```

**Windows**

Use Task Scheduler instead of cron:

1. Open **Task Scheduler** (search for it in Start)
2. Click **Create Basic Task**
3. Set trigger: Weekly, weekdays, 9:00 AM
4. Set action: **Start a program**
   - Program: `C:\Program Files\Git\bin\bash.exe`
   - Arguments: `-c "cd /path/to/pmm-os && bash scripts/sync.sh"`
5. Finish

Or use WSL if you have it — the cron setup works as-is inside WSL.

---

## Removing the Sync

```bash
make uninstall
```

This removes the cron job. Your repo and all files stay in place.
