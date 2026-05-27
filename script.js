const translations = {
  en: {
    nav_projects: 'Projects',
    nav_stack: 'Stack',
    nav_contact: 'Contact',
    hero_title: 'AI-Assisted Full-Stack Developer | Business & Systems Analyst',
    hero_bio: 'Software developer and business analyst with 10+ years of experience in systems analysis, requirements engineering, and software development. Currently focusing on AI-assisted development: building PWA, Android apps, and Telegram bots — managing the full process from idea to deployment.',
    stack_heading: 'Tech Stack',
    stack_languages: 'Languages',
    stack_frameworks: 'Frameworks & Libraries',
    stack_platforms: 'Platforms & Storage',
    projects_heading: 'Projects',
    contact_heading: 'Contact',
    proj_oldgamez_desc: 'Async Telegram bot with 15 classic mini-games (Tic-tac-toe, Blackjack, Battleship, Wordle, Minesweeper and more). Solo, private duel, and group modes. XP system, 7 levels, per-game leaderboards, and win streaks.',
    proj_purefeed_desc: 'Self-hosted Telegram feed aggregator. Monitors any channel via MTProto userbot, forwards content to a private destination, and filters out ads by keyword — while preserving unread counters.',
    proj_words_desc: 'Vocabulary learning PWA with three-stage spaced repetition: flashcards → multiple-choice → matching grid. Works with any language pair. Data lives in your own Google Sheet — no backend, no lock-in.',
    proj_tasks_desc: 'Offline-first task manager with folders, labels, priorities, subtasks, recurring tasks, and Google Calendar integration. Syncs to your own Google Sheet. PWA for any browser + native Android app with home screen widgets.',
    proj_sudoku_desc: 'Clean, minimal Sudoku for Android. Three difficulty levels, pencil marks, auto-candidate hints, undo, and four color themes. Fully offline — no account needed.',
    proj_films_desc: 'Film watchlist tracker — add, rate, and catalog movies. Data stored in your own Google Sheet. Runs in any browser and installs as a PWA on any device.',
    tag_telegram_bot: 'Telegram Bot',
    label_github: 'GitHub',
    label_github_web: 'GitHub Web',
    label_github_android: 'GitHub Android',
    label_live: 'Live',
    footer_copyright: '© 2026 Julia Sivridi',
  },
  fi: {
    nav_projects: 'Projektit',
    nav_stack: 'Teknologiat',
    nav_contact: 'Yhteystiedot',
    hero_title: 'AI-avusteinen Full-Stack-kehittäjä | Liiketoiminta- ja järjestelmäanalyytikko',
    hero_bio: 'Ohjelmistokehittäjä ja liiketoiminta-analyytikko, jolla on yli 10 vuoden kokemus järjestelmäanalyysistä, vaatimusmäärittelystä ja ohjelmistokehityksestä. Tällä hetkellä keskityn AI-avusteiseen kehitykseen: rakennan PWA-sovelluksia, Android-sovelluksia ja Telegram-botteja — hallitsen koko prosessin ideasta julkaisuun.',
    stack_heading: 'Teknologiat',
    stack_languages: 'Kielet',
    stack_frameworks: 'Viitekehykset ja kirjastot',
    stack_platforms: 'Alustat ja tallennus',
    projects_heading: 'Projektit',
    contact_heading: 'Yhteystiedot',
    proj_oldgamez_desc: 'Asynkroninen Telegram-botti, jossa 15 klassista minipeliä (ristinolla, blackjack, laivanupotus, sankarle, miinaharavija ja muita). Solo-, yksityinen dueli- ja ryhmäpelitilat. XP-järjestelmä, 7 tasoa, pelikohtaiset tulostaulukot ja voittoputket.',
    proj_purefeed_desc: 'Itse isännöity Telegram-syötteen koostaja. Seuraa kanavia MTProto-userbotilla, välittää sisällön yksityiseen kohdekanaväiseen ja suodattaa mainokset avainsanoilla — säilyttäen samalla lukemattomat laskurit.',
    proj_words_desc: 'Sanastojen oppiminen PWA:lla kolmivaiheisella toistomenetelmällä: muistikortit → monivalinta → yhdistämistehtävä. Toimii millä tahansa kieliparilla. Data omassa Google Sheetissä — ei taustajärjestelmää, ei riippuvuuksia.',
    proj_tasks_desc: 'Offline-first-tehtävienhallintasovellus, jossa kansiot, tunnisteet, prioriteetit, alitehtävät, toistuvat tehtävät ja Google Calendar -integraatio. Synkronoituu omaan Google Sheettiin. PWA selaimille + natiivi Android-sovellus kotinäyttöwidgeteillä.',
    proj_sudoku_desc: 'Selkeä, minimalistinen Sudoku Androidille. Kolme vaikeustasoa, muistiinpanomerkinnät, automaattiset ehdokkaat, kumoa-toiminto ja neljä väriteemaa. Täysin offline — ei tiliä tarvita.',
    proj_films_desc: 'Elokuvakirjaston seurantasovellus — lisää, arvioi ja luokittele elokuvia. Data omassa Google Sheetissä. Toimii kaikissa selaimissa ja asentuu PWA:ksi mille tahansa laitteelle.',
    tag_telegram_bot: 'Telegram-botti',
    label_github: 'GitHub',
    label_github_web: 'GitHub Web',
    label_github_android: 'GitHub Android',
    label_live: 'Live',
    footer_copyright: '© 2026 Julia Sivridi',
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage('en');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.card-img').forEach(slot => {
  slot.addEventListener('click', () => {
    const img = slot.querySelector('img');
    if (!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) closeLightbox();
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});
