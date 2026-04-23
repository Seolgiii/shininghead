# Shiny Head Card Party - Poki Notes

## Current Build

- Default language: English
- Runtime language switch: English, Japanese, and Korean from the in-game Settings modal.
- Runtime: Plain HTML/CSS/JavaScript
- Network dependencies: Poki SDK only
- Game entry: `index.html`
- Local test URL: `http://localhost:5173`
- Core loop: Flip or Bank
- VS mode: Separate player and CPU decks, best-of-three match
- CPU rivals: Shiny Head, Shinier Head, Blinding Head
- Solo Run and Daily Deck have been removed to keep the loop focused.
- Retention hooks: Shine meter, multiplier, combos, 100-card Head Dex, free custom battle decks, gacha shop
- First-run guidance: an in-match Flip then Bank tutorial teaches the core risk loop without a text-heavy manual.
- Skill feedback: turn-by-turn risk tips explain when to chase, bank, or use a shielded flip.
- Economy: Battle points are earned from CPU wins and spent on gacha pulls only.
- Battle win rewards: 1 / 3 / 5 points by CPU difficulty.
- Test/default wallet: 50,000 points so the shop loop can be exercised immediately.
- Gacha costs: 10 points for one pull, 100 points for ten pulls.
- Gacha buttons show compact coin pricing; rarity rates live in the top-right rates popup.
- Duplicate pulls are allowed; every 10 copies of a head unlocks a cosmetic decoration.
- Gacha results render directly in the shop grid without a blocking reveal popup.
- Short missions reward repeat play: win battles, pull heads, and find new heads for bonus points.
- Collection grades: SSS, SS, S, A, B, C, D
- Collection cards open detail popups; locked heads show a visual silhouette preview without a question mark.
- Newly unlocked cards play a grade-based reveal animation.
- Deck building is separated from Collection; players can freely add/remove collected heads for no point cost.
- Audio feedback is generated with Web Audio for flips, banks, gacha pulls, rare cards, busts, wins, and mission bonuses.
- Settings include language and sound toggles.
- Deck synergy now rewards focused deck building with starting bonuses.

## SDK Hooks

- `PokiSDK.init()` runs on startup.
- `PokiSDK.gameLoadingFinished()` runs after init completes or fails gracefully.
- `PokiSDK.commercialBreak()` runs after the player presses Play/Daily/Play Again and before gameplay starts.
- `PokiSDK.gameplayStart()` runs when a round actually begins.
- `PokiSDK.gameplayStop()` runs on round end, restart, or returning to menu.
- `PokiSDK.rewardedBreak()` runs from the result screen when the player chooses `Watch Ad: 2x Coins`.

## Next Release Tasks

- Add static and animated Poki thumbnails.
- Test in Poki Inspector.
- Tune difficulty after 20-30 real play sessions.
- Tune Shine Coin payouts and deck generation cost.
- Add card sorting/filter controls for the Head Dex.
- Add a stronger first-time tutorial for Flip vs Bank.
