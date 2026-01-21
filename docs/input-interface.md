# Input Interface Specification

This document defines how users submit project requests to the Gitx platform.

It describes supported input interfaces, required request structure, validation rules, and execution boundaries.

---

## Purpose

The input interface is the only entry point through which Gitx accepts project generation requests.

All inputs must be explicit, structured, and validated before any generation or execution occurs.

---

## Supported Interfaces

Gitx supports the following input interfaces:

### 1. X (Twitter) Commands

- Users submit requests via public X posts
- Requests must mention the official gitx-bot account
- The bot account is the only entity that listens to and processes X-based commands
- Commands are parsed from natural language with enforced structure

Official bot account:

    https://x.com/gitxbot

Example:

    @gitxbot create react landing page with auth and dashboard

---

### 2. Web Interface (Planned)

- Users submit requests via a web form
- Structured fields enforce required inputs
- Validation occurs before submission

Status: planned, not yet active

---

### 3. API Interface (Planned)

- Programmatic access for automated systems
- Requests submitted as structured payloads
- Requires authentication and rate limiting

Status: planned, not yet active

---

## Request Structure

Every project request must contain the following logical components:

### Required Fields

- Project intent  
  A clear description of what should be built

- Project type  
  Example: landing page, dashboard, API service, CLI tool

- Technology preference  
  Example: React, Next.js, Node.js, Python

---

### Optional Fields

- Styling or UI preferences
- Authentication requirements
- Deployment target
- Additional constraints or notes

---

## Validation Rules

Before a request is accepted:

- The request must be unambiguous
- The project scope must be reasonable for automated generation
- Required fields must be inferable or explicitly stated
- The request must not violate platform rules or restrictions

Invalid requests are rejected before generation.

---

## One-to-One Mapping Rule

Each valid input request results in:

- Exactly one project generation
- Exactly one repository creation
- Exactly one initial commit

Requests are never batched or merged.

---

## Execution Boundaries

Input interfaces do not:

- Execute code directly
- Create repositories
- Push commits

They only provide validated intent.

All execution is handled exclusively by the gitx-bot account.

---

## Rejected Requests

Gitx rejects requests that:

- Are vague or underspecified
- Attempt to modify existing repositories
- Request illegal or prohibited content
- Attempt to bypass platform authority rules

Rejected requests produce no side effects.

---

## Auditability

All accepted requests are:

- Logged internally
- Mapped to a single generated repository
- Traceable to an input source

This ensures accountability and system integrity.

---

## Future Extensions

Additional input interfaces may be added without modifying existing platform rules.

All new interfaces must conform to this specification.
