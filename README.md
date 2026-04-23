# Shiny Head Card Party

A fast, browser-based card battle game for Poki-style web play.

## Current Rules

The game is a best-of-3 duel against the CPU.

Each round starts with both players drawing a 3-card hand:

- Your 3 cards are visible at the bottom-right.
- The CPU's 3 cards are hidden at the top-left.
- The large center card slots start as `?`.
- When a card is played, it flies from the hand into the large center slot and reveals its effect.

On your turn, choose one of your 3 visible cards or bank your current pot.

The goal is to score more safely banked points than the CPU before the round ends.

## Core Decisions

- Play a card to grow your risky pot.
- Bank to turn your risky pot into safe points.
- Predict whether the CPU is likely to attack, bank, or get punished by a hidden bad card.

Unbanked pot points can be lost, but banked points are safe.

## Card Types

- Plain: stable score.
- Shine: increases score pressure and shine multiplier.
- Wig: grants a shield.
- Wind: risky hazard, but can be countered by shield or wig effects.
- Mirror: copies or improves previous gains.
- Master: strong scoring and defensive value.
- King: steals unbanked pot unless protected.

## Deck Building Balance

Deck size is 18 cards. Repeated heads are allowed, but each type has a limit:

- Plain: 6
- Shine: 5
- Wig: 4
- Wind: 4
- Mirror: 4
- Master: 4
- King: 3

These limits keep the game from becoming pure luck and make deck construction more strategic.

## Gacha And Collection

Players earn points from CPU battles:

- Easy win: 1 point
- Normal win: 3 points
- Hard win: 5 points

Gacha costs:

- Pull 1: 10 points
- Pull 10: 100 points

Duplicates are allowed. Every 10 copies of the same head unlocks a cosmetic decoration.

## Local Run

```bash
node server.mjs
```

Then open:

```text
http://localhost:5173/
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to GitHub, enable Pages in the repository settings and use GitHub Actions as the source.
