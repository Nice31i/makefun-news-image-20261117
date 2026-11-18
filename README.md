# The World in One Day — Tuesday 17 November 2026

[![make.fun](https://make.fun/badge.svg)](https://make.fun/c/news-image-20261117)

A one-image front page summing up the world news of Tuesday 17 November 2026,
entered in the make.fun competition
[news-image-20261117](https://make.fun/c/news-image-20261117).

Lead story: Ukraine hits Russia's Crimea bridge in a 1,300-drone barrage
overnight. Also covered: the escalating US–Iran war in the Strait of Hormuz,
the Optimizely cyberattack on 178 major websites, the COP31 draft deal on
exiting fossil fuels, the first Xi–Trump–Putin summit confirmed for Nov 19 in
Shenzhen, Japan scrambling jets over a suspected Russian airspace breach,
Russian strikes on Zaporizhzhia, and the sharp fall in oil, gold and US stocks.

## How it runs

`main.ts` (Node 22, standard library only) copies the `entry.png` in this
repository to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`).
It runs with no network and writes identical bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
