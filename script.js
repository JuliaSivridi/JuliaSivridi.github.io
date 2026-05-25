const translations = {
  en: {
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_title: 'AI-Assisted Full-Stack Developer | Business & Systems Analyst',
    hero_bio: 'Software developer and business analyst with 10+ years of experience in systems analysis, requirements engineering, and software development. Currently focusing on AI-assisted development: building PWA, Android apps, and Telegram bots — managing the full process from idea to deployment.',
    projects_heading: 'Projects',
    contact_heading: 'Contact',
    proj_oldgamez_desc: 'Telegram bot — a collection of classic mini-games',
    proj_purefeed_desc: 'Telegram bot — multi-channel feed with ad filtering and unread counter',
    proj_words_desc: 'PWA — personal vocabulary learning app. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.',
    proj_tasks_desc: 'PWA + Android — personal task manager. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.',
    proj_sudoku_desc: 'Android app — clean, minimal Sudoku',
    proj_films_desc: 'PWA — personal film library tracker. Runs in any browser, installs on Android/iOS. No backend — Google Sheets as database.',
    tag_telegram_bot: 'Telegram Bot',
    label_github: 'GitHub',
    label_github_web: 'GitHub Web',
    label_github_android: 'GitHub Android',
    label_live: 'Live',
    footer_copyright: '© 2025 Julia Sivridi',
  },
  fi: {
    nav_projects: 'Projektit',
    nav_contact: 'Yhteystiedot',
    hero_title: 'AI-avusteinen Full-Stack-kehittäjä | Liiketoiminta- ja järjestelmäanalyytikko',
    hero_bio: 'Ohjelmistokehittäjä ja liiketoiminta-analyytikko, jolla on yli 10 vuoden kokemus järjestelmäanalyysistä, vaatimusmäärittelystä ja ohjelmistokehityksestä. Tällä hetkellä keskityn AI-avusteiseen kehitykseen: rakennan PWA-sovelluksia, Android-sovelluksia ja Telegram-botteja — hallitsen koko prosessin ideasta julkaisuun.',
    projects_heading: 'Projektit',
    contact_heading: 'Yhteystiedot',
    proj_oldgamez_desc: 'Telegram-botti — kokoelma klassisia minipelejä',
    proj_purefeed_desc: 'Telegram-botti — monikanavainen syöte mainosten suodatuksella ja lukemattomien laskurilla',
    proj_words_desc: 'PWA — henkilökohtainen sanastojen oppimissovellus. Toimii kaikissa selaimissa, asentuu Android/iOS-laitteisiin. Ei taustapalvelinta — Google Sheets tietokantana.',
    proj_tasks_desc: 'PWA + Android — henkilökohtainen tehtävienhallintasovellus. Toimii kaikissa selaimissa, asentuu Android/iOS-laitteisiin. Ei taustapalvelinta — Google Sheets tietokantana.',
    proj_sudoku_desc: 'Android-sovellus — selkeä ja minimalistinen Sudoku',
    proj_films_desc: 'PWA — henkilökohtainen elokuvakirjaston seurantasovellus. Toimii kaikissa selaimissa, asentuu Android/iOS-laitteisiin. Ei taustapalvelinta — Google Sheets tietokantana.',
    tag_telegram_bot: 'Telegram-botti',
    label_github: 'GitHub',
    label_github_web: 'GitHub Web',
    label_github_android: 'GitHub Android',
    label_live: 'Live',
    footer_copyright: '© 2025 Julia Sivridi',
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
