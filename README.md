# AxisParts HK — preview

Статический сайт на Astro (`site/`). Исходники и preview — только на GitHub.

## Локально

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # http://localhost:4321
```

## GitHub

Репозиторий: https://github.com/NurzhanMukhitov/hk_draft

Каждый push в `main` → GitHub Actions проверяет сборку (`npm run build` в `site/`).

Показать клиенту: скриншоты (`site/scripts/capture-snaps.mjs` → папка на диске) или локальный `npm run dev` / `npm run preview`.

## Перенос на клиента (позже)

- GitHub: Transfer repository или новый репо + push.
- Хостинг и домен `axisparts.hk` — на стороне клиента, когда будет готово.

## Структура

```
site/          ← рабочий сайт
бриф/          ← бриф, исходники (не нужен для билда)
```
