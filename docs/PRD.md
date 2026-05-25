# PRD: Portfolio Website — juliasivridi.github.io

## Описание
Одностраничный сайт-портфолио. Аудитория — потенциальные работодатели и фриланс-клиенты в Европе.
Языки: английский (по умолчанию) и финский, переключатель в шапке.

## Сущности
Статичный сайт, данные захардкожены в HTML/JS. Никакого бэкенда.

## Структура файлов
```
Portfolio-Web/
  index.html
  style.css
  script.js
  favicon.png   ← предоставляется пользователем
  docs/
```

## Секции страницы

### Header (sticky)
- Логотип/имя: "Julia Sivridi" (текст, слева)
- Навигация: ссылки на секции — Projects, Contact
- Переключатель языка: EN | FI (справа)

### Hero
- Имя: Julia Sivridi
- Должность: AI-Assisted Full-Stack Developer | Business & Systems Analyst
- Профиль: "Software developer and business analyst with 10+ years of experience in systems analysis, requirements engineering, and software development. Currently focusing on AI-assisted development: building PWA, Android apps, and Telegram bots — managing the full process from idea to deployment."
- Без фото, без кнопок CTA

### Projects
Сетка карточек. На каждой карточке:
- Название проекта
- Краткое описание
- Теги типа платформы (Telegram Bot / PWA / Android)
- Ссылки: GitHub и Live (иконки + текст)

Карточки:

1. **Old Gamez**
   - Description: Telegram bot — a collection of classic mini-games
   - Tags: Telegram Bot
   - GitHub: https://github.com/JuliaSivridi/OldGamez
   - Live: https://t.me/oldgamez_bot

2. **Pure Feed**
   - Description: Telegram bot — multi-channel feed with ad filtering and unread counter
   - Tags: Telegram Bot
   - GitHub: https://github.com/JuliaSivridi/PureFeed
   - Live: https://t.me/pure_feed_bot

3. **Words**
   - Description: PWA — personal vocabulary learning app. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.
   - Tags: PWA
   - GitHub: https://github.com/JuliaSivridi/Words_PWA
   - Live: https://stler-words.vercel.app/

4. **Tasks**
   - Description: PWA + Android — personal task manager. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.
   - Tags: PWA, Android
   - GitHub (web): https://github.com/JuliaSivridi/Tasks_PWA
   - GitHub (android): https://github.com/JuliaSivridi/Tasks_Android
   - Live: https://stler-tasks.vercel.app/

5. **Sudoku**
   - Description: Android app — clean, minimal Sudoku
   - Tags: Android
   - GitHub: https://github.com/JuliaSivridi/Sudoku
   - Live: https://play.google.com/store/apps/details?id=io.github.juliasivridi.sudoku

6. **Films**
   - Description: PWA — personal film library tracker. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.
   - Tags: PWA
   - GitHub: https://github.com/JuliaSivridi/Films_PWA
   - Live: https://stler-films.netlify.app/

### Contact
- LinkedIn: https://www.linkedin.com/in/stler/
- Email: julia.sivridi@gmail.com
- GitHub: https://github.com/JuliaSivridi/

### Footer
- Копирайт: © 2025 Julia Sivridi
- Ссылки: GitHub, LinkedIn

## Переключение языков
- Два языка: EN (по умолчанию) / FI
- Переключатель в шапке страницы
- Переключение без перезагрузки (JS)
- Реализация: `data-i18n` атрибуты + JS-словарь
- Переводятся: все тексты UI, описания проектов, профиль в Hero, теги
- Финский перевод генерирует Claude Code

## UI система
- Material Design 3
- Material Icons Outlined
- Цветовая схема: взята из проекта Tasks-PWA (warm orange primary, нейтральные фоны)
  - Light: `--primary: hsl(25, 75%, 55%)`, bg белый, border `hsl(0,0%,88%)`
  - Dark: `--primary: hsl(25, 65%, 63%)`, bg `hsl(0,0%,11%)`
  - Авто-переключение: `prefers-color-scheme` — да
- Border radius: 0.5rem
- Анимации: нет (статика)

## Никнейм Stler
- Имя: "Julia Sivridi" (крупно)
- Под именем: "@Stler" (мелко, приглушённый цвет)

## SEO и мета-теги
- Favicon: `favicon.png` в корне проекта, `<link rel="icon" type="image/png" href="favicon.png">`
- `<meta description>`, Open Graph — не приоритет (решение отложено)
- Аналитика: нет

## Деплой
- GitHub Pages, репозиторий: JuliaSivridi/JuliaSivridi.github.io
- Ветка: main (стандарт для user pages на GitHub)
- Кастомный домен: нет
- URL: https://juliasivridi.github.io
