# gitx-bot Specification

This document defines the behavior and responsibilities of the gitx-bot system account.

The bot acts as an automated project builder and repository creator for Gitx Lab.

---

## Scope

gitx-bot is responsible for:
- Creating new repositories for generated projects
- Committing generated project files
- Pushing repositories to the Gitx Lab organization

gitx-bot does not modify the core platform repository.

---

## Trigger Conditions

gitx-bot is activated when:
- A valid project request is received from a supported input interface
- Project artifacts have been successfully generated

Each trigger results in exactly one repository creation.

---

## Repository Creation Rules

- A new repository is created for every project request
- Repositories are created under the Gitx Lab organization
- Repositories are independent and isolated

---
## Naming Convention

Generated repositories follow this pattern:

    project-<descriptor>

Examples:
- project-react-landing
- project-dashboard-ui
- project-api-service

---

## Commit Behavior

- All commits are authored by the gitx-bot account
- Initial commit includes the full generated project
- Commit messages use descriptive, action-based language

Example:

    initialize generated project
    
---

## Visibility Rules

- Generated repositories are public by default
- Private repositories may be supported in future iterations
- Visibility is applied at repository creation time

---

## Ownership and Access

- All generated repositories are owned by the Gitx Lab organization
- Users do not receive write access by default
- Repositories are provided as generated outputs, not collaborative workspaces

---

## Non-Goals

gitx-bot does not:
- Modify existing generated repositories unless explicitly requested
- Merge user-submitted pull requests
- Act as a long-term project maintainer

The bot’s responsibility ends after successful repository creation and initial project generation.

---

## Authority Model

Gitx separates platform authority from automated actions.

### Human Authority

- The Gitx platform is owned and maintained by a human operator
- Core specifications and system design are authored manually
- Platform rules are defined before any automation occurs

### Bot Authority

- The `gitx-bot` account is the only entity allowed to:
  - Create new repositories
  - Push generated project files
  - Author commits for generated projects

- The bot operates strictly within predefined rules
- The bot cannot modify core platform specifications

### Generation Authority

- Grok is used exclusively as a generation engine
- Grok has no direct access to GitHub
- All outputs from Grok are validated and applied by `gitx-bot`

---

## Trust Boundaries

Gitx enforces strict separation between control layers.

- Human operators define intent and constraints
- Generation engines produce candidate outputs
- The execution bot applies changes in a controlled environment

At no point does a generation engine gain execution authority.
