/* Termine, Fristen und Formulare
   Hier pflegst du die Inhalte. Monate sind 1-basiert (1 = Januar).
   id muss eindeutig bleiben, sonst gehen gespeicherte Häkchen verloren.
   kind: 't' = Termin (grau, links), 'f' = Frist (schwarz, rechts).
   info: pro Zeile ein Array aus Text, B('fett') und A('Link', 'mailto:...'). */
(function () {
  'use strict';

  var BASE = 'https://www.hsbi.de/media/fachbereiche/gestaltung/studierende/studiengangs-downloads/gestaltung-bgs/';
  var PO = 'https://www.hsbi.de/media/hochschulverwaltung/dezernat-ii/studserv/pruefungsangelegenheiten/studiengangs-downloads/gestaltung-bgs/';
  var F = {
    antrag: { label: 'Antrag Abschlussarbeit', href: BASE + 'fb1-abschlussarbeit-ba-antrag.pdf', size: '118 KB' },
    merk: { label: 'Merkblatt', name: 'Merkblatt Abschlussarbeit', href: BASE + 'fb1-abschlussarbeit-merkblatt.pdf', size: '254 KB' },
    abgabe: { label: 'Abgabe und Eigenständigkeit', href: BASE + 'fb1-abschlussarbeit-abgabe-selbstaendigkeit.pdf', size: '145 KB' },
    frist: { label: 'Fristverlängerung', href: BASE + 'fb1-abschlussarbeit-fristverlaengerung.pdf', size: '64 KB' },
    po24: { label: 'Prüfungsordnung 2024', href: PO + 'studiengangspruefungsordnung-bachelor-gestaltung-version-2024.pdf' },
    po19: { label: 'Prüfungsordnung 2019', href: PO + 'studiengangspruefungsordnung-bachelor-gestaltung-version-2019-(fassung-2023).pdf' },
    cat: { label: 'CAT-Portal', href: 'https://cat.hsbi.de/hio/pages/cs/sys/portal/hisinoneStartPage.faces', ext: true }
  };
  var FORM_ORDER = ['antrag', 'merk', 'abgabe', 'frist', 'po24', 'po19'];
  var B = function (t) { return { k: 'b', t: t }; };
  var A = function (t, href) { return { k: 'a', t: t, href: href }; };
  var NIEVES = A('Nieves de la Fuente Gutiérrez', 'mailto:nieves.de_la_fuente_gutierrez@hsbi.de');
  var JUNGE = A('Andrea Junge', 'mailto:andrea.junge@hsbi.de');

  var EVENTS = [
    { id: 'anmeldung-start', d: [2026, 10, 13], kind: 't', title: 'Anmeldung Bachelorarbeit startet',
      info: [['Anmeldezeitraum bis ', B('Mi, 28.10.2026, 12:00 Uhr')], ['Bearbeitungszeit: drei Monate bzw. 13 Wochen'], ['Anmeldeformular und Merkblatt zur Thesis ausfüllen']],
      files: ['antrag', 'merk'] },
    { id: 'anmeldeschluss', d: [2026, 10, 28, 12, 0], kind: 'f', title: 'Anmeldeschluss Bachelorarbeit', deadline: true,
      info: [[B('12:00 Uhr')], ['Antrag Abschlussarbeit vollständig einreichen']], files: ['antrag'] },
    { id: 'zulassung', d: [2026, 11, 3], kind: 't', title: 'Zulassung Bachelor',
      info: [['Ab jetzt läuft die Bearbeitungszeit von 13 Wochen'], ['Rücktritt bis max. vier Wochen nach der Zulassung möglich, siehe Prüfungsordnung']],
      files: ['merk', 'po24'] },
    { id: 'modul-anmeldung', d: [2026, 11, 30], kind: 't', title: 'Anmeldung Modulprüfungen',
      info: [['Erster Prüfungstermin, Anmeldung über das CAT-Notenportal'], ['bis ', B('Mo, 14.12.2026')]], files: ['cat'] },
    { id: 'raumvergabe', d: [2026, 12, 1, 17, 0], kind: 't', title: 'Raumvergabe Werkschau', tag: 'Anwesenheitspflicht',
      info: [[B('17:00 Uhr'), ', Videostudio R 401'], ['Mit Werkschau-Team und Raumkommission'], ['Anwesenheitspflicht oder eine Vertreter:in schicken']] },
    { id: 'modul-pruefung', d: [2027, 1, 18], kind: 't', title: 'Prüfungszeitraum Modulprüfungen',
      info: [['bis Do, 28.01.2027'], ['Ab Fr, 29.01. ist Werkschauaufbau']] },
    { id: 'textteil', d: [2027, 1, 19, 12, 0], kind: 'f', title: 'Abgabe Textteil', deadline: true,
      info: [[B('12:00 Uhr'), ', Textteil per Mail an deine Prüfer:innen (', NIEVES, ')'],
             ['Zeitgleich das Formular »Abgabe + Eigenständigkeit« an ', JUNGE],
             ['Fristverlängerung nur per Antrag an den Prüfungsausschuss und mit ärztlicher Bescheinigung']],
      files: ['abgabe', 'frist'] },
    { id: 'aufbau', d: [2027, 1, 29], kind: 't', title: 'Ausstellungsaufbau', info: [['bis Mo, 01.02.2027']] },
    { id: 'werk', d: [2027, 2, 2, 10, 0], kind: 'f', title: 'Abgabe Werk', tag: 'Anwesenheitspflicht', deadline: true, final: true,
      info: [['Raumabnahme = Frist Werk (Projektteil)'], ['Rundgang ab ', B('10:00 Uhr')]], files: ['merk'] },
    { id: 'kolloquien', d: [2027, 2, 2, 14, 0], kind: 't', title: 'Kolloquien',
      info: [['Präsentation des Werks'], ['ab 14:00 Uhr, bis Do, 04.02.2027']] },
    { id: 'brandschutz', d: [2027, 2, 4, 10, 0], kind: 't', title: 'Rundgang Brandschutz-Gutachter',
      info: [['ab 10:00 Uhr'], ['Keine Anwesenheit nötig, Nachbesserungsbedarf wird mitgeteilt']] },
    { id: 'presse', d: [2027, 2, 4, 11, 0], kind: 't', title: 'Pressegespräch', info: [['11:00 Uhr']] },
    { id: 'eroeffnung', d: [2027, 2, 5, 18, 0], kind: 't', title: 'Werkschau-Eröffnung',
      info: [['ab 18:00 Uhr'], ['Eröffnung, Verabschiedung und Rundgang']] },
    { id: 'ausstellung', d: [2027, 2, 6, 11, 0], kind: 't', title: 'Öffentliche Ausstellung',
      info: [['11:00 bis 18:00 Uhr'], ['auch So, 07.02.2027']] }
  ];

  /* ── Ab hier ist Technik ───────────────────────────────── */
  var KEY = 'abschluss-2027:done';
  var MONTHS = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  var WD = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  var p2 = function (n) { return (n < 10 ? '0' : '') + n; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ICON_DN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>';
  var ICON_DN18 = ICON_DN.replace('width="16" height="16"', 'width="18" height="18"');
  var ICON_EXT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  var ICON_CHECK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="square" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  EVENTS.forEach(function (e) {
    e.t = new Date(e.d[0], e.d[1] - 1, e.d[2], e.d[3] || 0, e.d[4] || 0);
    e.dayKey = e.d[0] + '-' + p2(e.d[1]) + '-' + p2(e.d[2]);
  });

  var done = {};
  try { (JSON.parse(localStorage.getItem(KEY) || '[]') || []).forEach(function (id) { done[id] = true; }); } catch (err) { done = {}; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(Object.keys(done))); } catch (err) { /* Privatmodus o. ä. */ } }

  function part(p) {
    if (typeof p === 'string') return esc(p);
    if (p.k === 'b') return '<strong>' + esc(p.t) + '</strong>';
    return '<a href="' + esc(p.href) + '">' + esc(p.t) + '</a>';
  }
  function fileLink(k) {
    var f = F[k];
    return '<a class="dl" href="' + esc(f.href) + '" target="_blank" rel="noopener">' + (f.ext ? ICON_EXT : ICON_DN) + '<span>' + esc(f.label) + '</span></a>';
  }
  function evHtml(e) {
    var cid = 'ck-' + e.id, isF = e.kind === 'f';
    return '<div class="ev ' + e.kind + (done[e.id] ? ' done' : '') + '" data-id="' + e.id + '">' +
      '<label class="ck" for="' + cid + '"><input type="checkbox" id="' + cid + '"' + (done[e.id] ? ' checked' : '') + '>' +
      '<span class="box">' + ICON_CHECK + '</span><span class="sr">' + esc(e.title) + ' als erledigt markieren</span></label>' +
      '<p class="meta"><span class="bdg k">' + (isF ? 'Frist' : 'Termin') + '</span>' + (e.tag ? '<span class="bdg">' + esc(e.tag) + '</span>' : '') + '</p>' +
      '<p class="ti">' + esc(e.title) + '</p>' +
      (e.info ? '<ul class="info">' + e.info.map(function (line) { return '<li>' + line.map(part).join('') + '</li>'; }).join('') + '</ul>' : '') +
      (e.files ? '<div class="dls">' + e.files.map(fileLink).join('') + '</div>' : '') +
      '</div>';
  }
  function renderCalendar() {
    var html = '', lastMonth = '', i = 0, today = new Date(); today.setHours(0, 0, 0, 0);
    while (i < EVENTS.length) {
      var first = EVENTS[i], same = [];
      while (i < EVENTS.length && EVENTS[i].dayKey === first.dayKey) same.push(EVENTS[i++]);
      var mk = MONTHS[first.t.getMonth()] + ' ' + first.t.getFullYear();
      if (mk !== lastMonth) {
        if (lastMonth) html += '</div>';
        html += '<h2 class="month">' + mk + '</h2><div class="cal">';
        lastMonth = mk;
      }
      var dayDate = new Date(first.t); dayDate.setHours(0, 0, 0, 0);
      html += '<div class="day' + (dayDate < today ? ' past' : '') + '">' +
        '<div class="sp"><span class="wd">' + WD[first.t.getDay()] + '</span><span class="num">' + p2(first.t.getDate()) + '</span></div>' +
        '<div class="cl">' + same.filter(function (e) { return e.kind === 't'; }).map(evHtml).join('') + '</div>' +
        '<div class="cr">' + same.filter(function (e) { return e.kind === 'f'; }).map(evHtml).join('') + '</div></div>';
    }
    document.getElementById('cal').innerHTML = html + (lastMonth ? '</div>' : '');
  }
  function renderForms() {
    document.getElementById('forms').innerHTML = FORM_ORDER.map(function (k) {
      var f = F[k];
      return '<li class="dl-item"><p class="n">' + esc(f.name || f.label) + '</p>' +
        '<a class="btn" href="' + esc(f.href) + '" target="_blank" rel="noopener">' + ICON_DN18 +
        '<span>PDF laden' + (f.size ? ' <span class="sz">(' + f.size + ')</span>' : '') + '</span></a></li>';
    }).join('');
  }

  function fmt(ms) {
    if (ms <= 0) return 'erreicht';
    var m = Math.floor(ms / 60000), d = Math.floor(m / 1440), h = Math.floor((m % 1440) / 60);
    return d + ' T ' + p2(h) + ':' + p2(m % 60);
  }
  function fmtDate(t) {
    return WD[t.getDay()] + ', ' + p2(t.getDate()) + '.' + p2(t.getMonth() + 1) + '.' + t.getFullYear() +
      (t.getHours() || t.getMinutes() ? ', ' + p2(t.getHours()) + ':' + p2(t.getMinutes()) + ' Uhr' : '');
  }
  function renderHero() {
    var now = Date.now(), $ = function (id) { return document.getElementById(id); };
    var deadlines = EVENTS.filter(function (e) { return e.deadline; });
    var dl = deadlines.filter(function (e) { return !done[e.id] && e.t.getTime() > now; })[0];
    var btn = $('nextHref');
    if (dl) {
      $('nextTitle').textContent = dl.title;
      $('nextDate').textContent = fmtDate(dl.t);
      var f = dl.files && F[dl.files[0]];
      btn.hidden = !f;
      if (f) { btn.href = f.href; btn.querySelector('span').textContent = f.label + ' laden'; }
    } else {
      var all = deadlines.every(function (e) { return done[e.id]; });
      $('nextTitle').textContent = all ? 'Alle Fristen erledigt' : 'Keine offenen Fristen';
      $('nextDate').textContent = all ? 'Glückwunsch, jetzt nur noch feiern.' : '';
      btn.hidden = true;
    }
    var nextEv = EVENTS.filter(function (e) { return !done[e.id] && e.t.getTime() > now; })[0];
    $('tNext').textContent = nextEv ? fmt(nextEv.t.getTime() - now) : 'keiner';
    var fin = EVENTS.filter(function (e) { return e.final; })[0];
    $('tEnd').textContent = fmt(fin.t.getTime() - now);
    var n = EVENTS.filter(function (e) { return done[e.id]; }).length;
    $('progTxt').textContent = n + ' von ' + EVENTS.length;
    $('progBar').style.width = Math.round(n / EVENTS.length * 100) + '%';
    $('reset').hidden = n === 0;
  }

  document.getElementById('cal').addEventListener('change', function (ev) {
    var input = ev.target;
    if (input.type !== 'checkbox') return;
    var box = input.closest('.ev'), id = box.getAttribute('data-id');
    if (input.checked) done[id] = true; else delete done[id];
    box.classList.toggle('done', input.checked);
    save();
    renderHero();
  });
  document.getElementById('reset').addEventListener('click', function () {
    if (!window.confirm('Alle Häkchen entfernen?')) return;
    done = {};
    save();
    renderCalendar();
    renderHero();
  });

  /* Zweite Ebene: aktiven Abschnitt markieren */
  var links = [].slice.call(document.querySelectorAll('.si'));
  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  links.forEach(function (a) { a.addEventListener('click', function () { setActive(a.getAttribute('href').slice(1)); }); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    ['kalender', 'formulare', 'kontakt'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }

  renderCalendar();
  renderForms();
  renderHero();
  setInterval(renderHero, 30000);
})();
