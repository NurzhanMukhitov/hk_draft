# AxisParts HK — preview

Статический сайт на Astro (`site/`). Preview для клиента; позже перенос на клиентские GitHub + Vercel.

## Локально

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # http://localhost:4321
```

## Деплой на Vercel (твой аккаунт)

1. Запушить репозиторий на GitHub.
2. [vercel.com/new](https://vercel.com/new) → Import Git Repository.
3. **Root Directory:** `site` (обязательно).
4. Framework: Astro (подтянется сам).
5. Deploy → получишь URL вида `axisparts-xxx.vercel.app`.

Дальше каждый `git push` в `main` обновляет preview.

## Перенос на клиента (позже)

- GitHub: Transfer repository или новый репо + push.
- Vercel: Add Project в их team / transfer project.
- Домен `axisparts.hk`: DNS у клиента → Vercel.

## Структура

```
site/          ← рабочий сайт (Vercel root)
бриф/          ← бриф, исходники (не нужен для билда)
```
