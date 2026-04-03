# PMM OS — Makefile
# Shorthand commands for common operations.

.PHONY: help setup sync status uninstall

help: ## Show available commands
	@echo ""
	@echo "  PMM OS Commands"
	@echo "  ───────────────────────────────"
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  make %-12s %s\n", $$1, $$2}'
	@echo ""

setup: ## Set up scheduled sync (interactive)
	@bash scripts/setup-sync.sh

sync: ## Pull latest knowledge base now
	@bash scripts/sync.sh

status: ## Show last sync status
	@if [ -f .sync/sync.log ]; then \
		echo ""; \
		echo "  Last 10 sync entries:"; \
		echo "  ─────────────────────"; \
		tail -n 10 .sync/sync.log; \
		echo ""; \
	else \
		echo "  No sync log found. Run 'make setup' first."; \
	fi

uninstall: ## Remove the sync schedule
	@bash scripts/setup-sync.sh --remove
