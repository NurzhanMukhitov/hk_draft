# HK industrial preview

Статический сайт на Astro (`site/`). Исходники и preview — на GitHub.

## Живой сайт

**https://nurzhanmukhitov.github.io/hk_draft/**

Каждый push в `main` → GitHub Actions собирает `site/` и публикует на GitHub Pages.

## Локально

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # http://localhost:4321
```

Проверить сборку как на GitHub Pages:

```bash
cd site
BASE_PATH=/hk_draft npm run build
npm run preview -- --base /hk_draft
```

## GitHub

Репозиторий: https://github.com/NurzhanMukhitov/hk_draft

- `ci.yml` — проверка сборки на PR
- `deploy-pages.yml` — деплой на GitHub Pages

## Структура

```
site/          ← рабочий сайт
бриф/          ← бриф, исходники (не нужен для билда)
```
