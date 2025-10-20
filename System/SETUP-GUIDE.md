Prereqs: Node ≥18, pnpm; optional pandoc.

Install/build:

```bash
pnpm i && pnpm -C System/CLI build
```

Local test loop / linking:
- Use the commands in HOW-TO-USE.md Quickstart.
- Optionally `pnpm link --global` from System/CLI to use `pmm` globally.

Security:
- Prefer SSH or fine-grained PAT for Git.

Config:
- Paths resolved from pmm.config.json at repo root.
