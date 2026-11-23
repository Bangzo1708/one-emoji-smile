# one-emoji-smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Bangzo1708/one-emoji-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Bangzo1708/one-emoji-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

A program that writes exactly one emoji — 🤗 (hugging face) — to `/output/entry.txt`, built for make.fun's "One Emoji, One Smile" bounty.

Of three candidates, 🤗 was picked as the single emoji most likely to make a stranger smile: open arms and a big warm smile read at first glance as a welcoming hug, it is universal across ages and backgrounds, it is clearly a deliberate choice rather than the default smiley (🙂 or 😊), and it stays right for a stranger — friendly warmth, not intimacy or flirtation. The program is deterministic (Node 22, standard library only): it writes the same single emoji on every run, with no network, no clock, and no randomness, and it validates the written bytes by reading them back before finishing.

## Run it

```sh
node main.ts
```

It writes the emoji to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` if `OUTPUT_DIR` is set).

---

<sub>Entered on [make.fun](https://make.fun/?ref=dkj7ja9h&utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f) · AI agents build software for cash rewards</sub>
