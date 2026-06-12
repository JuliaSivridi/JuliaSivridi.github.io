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
    proj_money_desc: 'Offline-first personal finance tracker PWA. Tracks expenses, income, transfers, and debts across multiple accounts with multi-currency support. Writes go to IndexedDB instantly — Google Sheets syncs asynchronously in the background, so the UI never waits for the network. Analytics with category donut charts, yearly income/expense overview, and a 12-month trailing bar chart. Data lives in your own Google Sheet.',
    proj_tasks_desc: 'Offline-first task manager with folders, labels, priorities, subtasks, recurring tasks, and Google Calendar integration. Syncs to your own Google Sheet. PWA for any browser + native Android app with home screen widgets.',
    proj_sudoku_desc: 'Clean, minimal Sudoku for Android. Three difficulty levels, pencil marks, auto-candidate hints, undo, and four color themes. Fully offline — no account needed.',
    proj_films_desc: 'Personal film-collection manager PWA. Browse, search, filter, and rate movies — data lives in your own Google Sheet. TMDB integration for posters, ratings, genres, and countries. Statistics page with a custom SVG donut chart. Virtual scroll handles collections of 3 000+ films.',
    proj_books_desc: 'Personal book-tracking PWA. Organize your reading list across Want / Reading / Read statuses. Search Google Books and FantLab simultaneously, auto-enrich with covers, genres, and Wikipedia links. Statistics page with donut charts by status, type, genre, author, decade, or series. Data lives in your own Google Sheet — no backend, no lock-in.',
    proj_tourney_desc: 'Telegram bot for running Single Elimination, Double Elimination, and Round Robin tournaments in a group chat. Two control modes that stay in sync: inline keyboard in chat for quick match results, and a Telegram Mini App with a visual bracket, winners/losers grids for Double Elimination, and a player statistics table. State persisted in PostgreSQL. Interface available in 6 languages.',
    proj_waterplant_desc: 'Lightweight PWA for tracking your plant watering schedule. Each plant shows a 7-day history strip — tap any day to toggle watered / not watered. Smart status colors (green / orange / red / grey) calculated automatically from each plant\'s custom watering frequency. No backend, no account — data lives in localStorage with JSON export/import for backup. Fully offline after the first load.',
    proj_halytys_desc: 'Self-hosted Telegram bot delivering real-time Finnish emergency alerts, powered by the official Pelastustoimi rescue services RSS feed (peto-media.fi) — the same source all third-party aggregator sites pull from. Subscribe via DM or wire a Telegram channel to one or more cities. Four sources with automatic fallback, deduplication across sources and check cycles, emoji-coded alert types, and 7-day event history.',
    proj_kindtube_desc: 'Android YouTube player for kids built around a parent-curated channel whitelist. The child sees only videos from approved channels — no algorithmic feed, no recommendations, no comments, no ads UI. Custom WebView player hides all YouTube chrome: no Subscribe buttons, no end-screen suggestions, no links out of the app. Non-embeddable videos are filtered out automatically so everything shown is guaranteed to play.',
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
    proj_money_desc: 'Offline-first-henkilökohtainen taloushallintasovellus PWA:na. Seuraa menoja, tuloja, siirtoja ja velkoja useilla tileillä monikäyttöisellä valuuttatuella. Kirjoitukset menevät IndexedDB:hen välittömästi — Google Sheets synkronoidaan taustalla asynkronisesti, joten käyttöliittymä ei odota verkkoa. Analytiikka kategoriadonitsikaavioilla, vuosittaisella tulo/meno-yhteenvedolla ja 12 kuukauden juoksevalla pylväskaaviolla. Data omassa Google Sheetissäsi.',
    proj_tasks_desc: 'Offline-first-tehtävienhallintasovellus, jossa kansiot, tunnisteet, prioriteetit, alitehtävät, toistuvat tehtävät ja Google Calendar -integraatio. Synkronoituu omaan Google Sheettiin. PWA selaimille + natiivi Android-sovellus kotinäyttöwidgeteillä.',
    proj_sudoku_desc: 'Selkeä, minimalistinen Sudoku Androidille. Kolme vaikeustasoa, muistiinpanomerkinnät, automaattiset ehdokkaat, kumoa-toiminto ja neljä väriteemaa. Täysin offline — ei tiliä tarvita.',
    proj_films_desc: 'Henkilökohtainen elokuvakokoelman hallintasovellus PWA:na. Selaa, etsi, suodata ja arvioi elokuvia — data omassa Google Sheetissä. TMDB-integraatio postereille, arvioille, genreille ja maille. Tilastot mukautetulla SVG-donitsikaaviolla. Virtuaaliviritys tukee yli 3 000 elokuvan kokoelmia.',
    proj_books_desc: 'Henkilökohtainen kirjanseuranta-PWA. Järjestä lukemislistasi Want / Reading / Read -tiloihin. Hae Google Booksista ja FantLabista samanaikaisesti, rikasta automaattisesti kansikuvilla, genreillä ja Wikipedia-linkeillä. Tilastot donitsikaaviolla tilan, tyypin, genren, tekijän, vuosikymmenen tai sarjan mukaan. Data omassa Google Sheetissäsi — ei taustajärjestelmää, ei riippuvuuksia.',
    proj_tourney_desc: 'Telegram-botti Single Elimination-, Double Elimination- ja Round Robin -turnausten järjestämiseen ryhmäkeskustelussa. Kaksi synkronoitua ohjausmuotoa: inlinenäppäimistö chatissa nopeisiin ottelutuloksiin ja Telegram Mini App visuaalisella turnaustaulukolla, voittajien ja häviäjien seurannoilla Double Eliminationissa sekä pelaajastatistiikkataulukolla. Tila tallennetaan PostgreSQL:ään. Käyttöliittymä saatavilla 6 kielellä.',
    proj_waterplant_desc: 'Kevyt PWA kasvien kastelun seurantaan. Jokaiselle kasville näytetään 7 päivän historiarivi — napauta päivää merkitäksesi kasteltu / ei kasteltu. Älykkäät tilavärit (vihreä / oranssi / punainen / harmaa) lasketaan automaattisesti kunkin kasvin kastelutaajuuden mukaan. Ei taustajärjestelmää, ei tiliä — data tallentuu localStorageen JSON-vienti/tuonti-toiminnolla varmuuskopiointia varten. Toimii täysin offline ensimmäisen latauksen jälkeen.',
    proj_halytys_desc: 'Itse isännöity Telegram-botti, joka toimittaa reaaliaikaiset suomalaiset hälytykset virallisen Pelastustoimen mediapalvelun RSS-syötteen kautta (peto-media.fi) — sama lähde, josta kaikki kolmansien osapuolten koostesivustot hakevat tietonsa. Tilaa ilmoitukset yksityisviestillä tai yhdistä Telegram-kanava yhteen tai useampaan kaupunkiin. Neljä hälytyslähde-sivustoa automaattisella varalähteiden ketjutuksella, tapahtumat deduplikoidaan, emoji-koodatut hälytyslajit ja 7 päivän tapahtumahistoria.',
    proj_kindtube_desc: 'Android-YouTube-soitin lapsille, joka perustuu vanhemman kokoamaan kanavien hyväksyntälistaan. Lapsi näkee vain hyväksyttyjen kanavien videoita — ei algoritmista syötettä, ei suosituksia, ei kommentteja, ei mainoksia. Mukautettu WebView-soitin piilottaa kaiken YouTuben käyttöliittymän: ei Tilaa-nappeja, ei loppunäytön suosituksia, ei linkkejä sovelluksesta ulos. Upotuskelvottomat videot suodatetaan automaattisesti pois, joten kaikki näytettävät videot toimivat varmasti.',
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

// Tech Stack filter
document.querySelectorAll('.stack-tag').forEach(chip => {
  chip.addEventListener('click', () => {
    const tech = chip.textContent.trim().toLowerCase();
    const isActive = chip.classList.toggle('active');
    document.querySelectorAll('.card-tags .tag').forEach(tag => {
      if (tag.textContent.trim().toLowerCase() === tech) {
        tag.classList.toggle('active', isActive);
      }
    });
  });
});

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
