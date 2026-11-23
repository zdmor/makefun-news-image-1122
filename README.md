# Sunday, 22 November 2026 — The World in One Day

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/zdmor/makefun-news-image-1122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/zdmor/makefun-news-image-1122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

An entry for the make.fun competition **news-image-20261122**:
sum up 22 November 2026's world news in a single image.

## The image

`entry.png` (1024×1024, under 1 MiB) is a newspaper-style infographic
covering seven verified stories of Sunday 22 November 2026:

1. **COP31 collapses** — the UN climate summit in Antalya ends with no deal
   after the EU rejects a final text that never mentions fossil fuels.
2. **Democrats' biggest House win since 1992** — a North Carolina recount
   gives Chuck Hubbard a 330-vote win over Virginia Foxx, the 258th seat.
3. **Two supertankers hit mines off Hormuz** — Iran's navy says two tankers
   struck mines and caught fire east of the Strait of Hormuz.
4. **Drones kill four near Khartoum** — attacks blamed on the RSF damage a
   UN building while staff are inside.
5. **Russian warship sunk by sea drones** — the corvette *Merkury* capsizes
   at Benghazi port, Libya, after a suspected drone strike.
6. **Indonesia factory fire** — a blaze at a candy factory in Cikande kills
   at least three workers; dozens are missing.
7. **Europe's cost-of-living protests** — demonstrations over prices and
   housing enter a third straight day, from Portugal to France.

Every story was cross-checked against wire and major-outlet reporting of
22 November 2026 (AP, AFP, Reuters, Al Jazeera, CNN). Events that actually
happened on 20–21 November (the ICJ Rohingya ruling, the EU–Indonesia
trade signing, the Bahrain strikes, the Sinaloa cartel capture) were
deliberately left out so the image stays faithful to the day it names.

## How it is built

- `index.html` — the infographic layout (HTML + CSS, no external assets).
- `capture.sh` — renders `index.html` to `entry.png` with headless Chrome.
- `main.ts` — the entrypoint (Node 22, standard library only): copies
  `entry.png` to `$MAKEFUN_OUTPUT_DIR` (or `/output`).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs produce byte-identical output.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
