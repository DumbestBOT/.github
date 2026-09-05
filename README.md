# DumbestBOT

An on-demand coding bot for your repositories, powered by [DumbCode](https://github.com/Shimba-crypto/DumbCode) — the open-source, zero-dependency agent CLI.

Mention `@dumbestbot` on any issue or pull request in a repo where the app is installed:

- `@dumbestbot <question>` — answers read-only, scouring the repo with real agent tools
- `@dumbestbot review` — reviews the presented changes and posts a verdict
- `@dumbestbot fix <thing>` — commits a fix and opens a PR (opt-in)

Same engine, same guardrails: every run is permission-gated, audited into a provenance ledger, and untrusted content from issues/PRs is fenced against prompt injection.

Self-host your own — see [DumbCode/bot](https://github.com/Shimba-crypto/DumbCode/blob/main/bot/README.md).
