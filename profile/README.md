<div align="center">

# DumbestBOT

**An on-demand coding agent for your repositories.**
Mention `@dumbestbot` on any issue or pull request — it investigates with real tools and reports back.

[![Release](https://img.shields.io/github/v/release/Shimba-crypto/DumbCode?label=DumbCode&sort=semver)](https://github.com/Shimba-crypto/DumbCode/releases)
[![Tests](https://img.shields.io/badge/tests-125%2F125-brightgreen)](https://github.com/Shimba-crypto/DumbCode/actions)
[![License](https://img.shields.io/github/license/Shimba-crypto/DumbCode)](https://github.com/Shimba-crypto/DumbCode/blob/main/LICENSE)

**[Install the App →](https://github.com/apps/dumbestbot)** · [DumbCode CLI](https://github.com/Shimba-crypto/DumbCode) · [Self-hosting](https://github.com/Shimba-crypto/DumbCode/blob/main/bot/README.md)

</div>

## Commands

| Mention | What happens |
|---|---|
| `@dumbestbot <question>` | Answers read-only — scours the repo with real agent tools (grep, git, file reads) and explains |
| `@dumbestbot review` | Reviews the PR's changes and posts a verdict with `file:line` findings |
| `@dumbestbot fix <thing>` | Applies a fix, pushes a branch, opens a PR *(operator opt-in)* |
| `@dumbestbot` | Usage help |

```text
@dumbestbot review
```

> **🤖 DumbestBOT** — 3 findings: `isAdmin()` crashes on `null` user (`e2e-sample.js:6`), `==` used in an authorization check (coercion risk — use `===`), no tests for either function. **VERDICT: FIX**

## Guardrails

- **Read-only by default** — questions and reviews can't write or run shell; `fix` is an explicit opt-in
- **Injection-fenced** — issue/PR text and tool output are wrapped as untrusted data; comments can't steer the agent
- **Audited** — every tool call lands in a provenance ledger (`dumbcode blame`), runs are permission-gated
- **Shallow & scoped** — per-repo checkouts, step caps, and no credential access

## Self-host your own

The bot is ~500 lines of zero-dependency Node — the same engine as the [DumbCode CLI](https://github.com/Shimba-crypto/DumbCode):

```powershell
git clone https://github.com/Shimba-crypto/DumbCode && cd DumbCode
npm run bot:setup -- --org YourOrg   # registers the GitHub App, writes bot/.env
npm run bot                          # webhook server on :4310
```

Full setup, permissions, and security notes: **[bot/README.md](https://github.com/Shimba-crypto/DumbCode/blob/main/bot/README.md)**.
