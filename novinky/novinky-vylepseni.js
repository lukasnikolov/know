/* Znalostka — rozsireni novinek a klikaci kontakty, EPET + Dobra energie.
   Kompatibilni s puvodnim renderNews(), filtry, hledanim a strankovanim.
   Datovy format novinky.js:
     isNew: true                       => Novinka
     updatedAt: 'YYYY-MM-DD'           => Aktualizovano (datum upravy)
     status: 'new'|'updated'|'normal'  => volitelna rucni priorita.
*/
(() => {
  'use strict';

  const state = { onlyFresh: false };

  function statusOf(item) {
    const raw = String(item?.status || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (['new', 'novinka', 'nove'].includes(raw)) return 'new';
    if (['updated', 'aktualizovano', 'upraveno'].includes(raw)) return 'updated';
    if (['normal', 'sdeleni', 'bezne'].includes(raw)) return 'normal';
    if (item?.updatedAt || item?.updatedDate || item?.lastUpdated) return 'updated';
    if (item?.isNew === true) return 'new';
    return 'normal';
  }

  function getUpdates() {
    // Top-level const updates z novinky.js je dostupny i v dalsich classic scriptech.
    return typeof updates !== 'undefined' && Array.isArray(updates) ? updates : null;
  }

  function dateLabel(value) {
    if (!value) return '';
    const raw = String(value).slice(0, 10);
    const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return match ? Number(match[3]) + '. ' + Number(match[2]) + '. ' + match[1] : String(value);
  }

  function decorateCards() {
    const entries = getUpdates();
    const feed = document.getElementById('newsFeed');
    if (!feed || !entries) return;
    const byId = new Map(entries.map(item => [String(item.id), item]));

    feed.querySelectorAll('.news-card').forEach(card => {
      const detail = card.querySelector('.btn-detail-toggle[id^="btn-"]');
      if (!detail) return;
      const item = byId.get(detail.id.slice(4));
      if (!item) return;
      const kind = statusOf(item);
      card.dataset.newsStatus = kind;

      const row = card.querySelector('.news-title')?.parentElement;
      if (row && !row.querySelector('.news-status')) {
        const tag = document.createElement('span');
        tag.className = 'news-status news-status--' + kind;
        tag.textContent = { new: 'Novinka', updated: 'Aktualizováno', normal: 'Sdělení' }[kind];
        row.appendChild(tag);
      }

      const changed = item.updatedAt || item.updatedDate || item.lastUpdated;
      const meta = card.querySelector('.card-meta');
      if (changed && meta && !meta.querySelector('.news-updated-at')) {
        const label = document.createElement('span');
        label.className = 'news-updated-at';
        label.textContent = 'Upraveno: ' + dateLabel(changed);
        const published = meta.querySelector(':scope > span:first-child');
        if (published) published.after(label);
        else meta.prepend(label);
      }
    });
  }

  function enhanceNews() {
    const feed = document.getElementById('newsFeed');
    const oldRender = window.renderNews;
    if (!feed || typeof oldRender !== 'function' || !document.getElementById('mainSearch')) return;
    if (document.querySelector('.news-filterbar')) return;

    const controls = document.createElement('div');
    controls.className = 'news-filterbar';
    const title = document.createElement('span');
    title.className = 'news-filterbar__label';
    title.textContent = 'Přehled aktualizací';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'news-only-new';
    toggle.setAttribute('aria-pressed', 'false');
    toggle.setAttribute('aria-label', 'Zobrazit pouze novinky a aktualizovaná sdělení');
    toggle.innerHTML = 'Jen novinky a úpravy <span class="news-only-new__count">0</span>';
    controls.append(title, toggle);
    feed.before(controls);

    function updateCount() {
      const all = getUpdates();
      const count = all ? all.filter(item => statusOf(item) !== 'normal').length : 0;
      const countNode = toggle.querySelector('.news-only-new__count');
      if (countNode) countNode.textContent = String(count);
      toggle.disabled = !all;
    }

    // Puvodni logika zustava beze zmen. Pri aktivnim filtru se datove pole
    // docasne zuzi jen pro jedno synchronni vykresleni a pak se obnovi.
    window.renderNews = function (...args) {
      const all = getUpdates();
      if (state.onlyFresh && all) {
        const original = all.slice();
        try {
          all.splice(0, all.length, ...original.filter(item => statusOf(item) !== 'normal'));
          oldRender.apply(this, args);
        } finally {
          all.splice(0, all.length, ...original);
        }
      } else {
        oldRender.apply(this, args);
      }
      decorateCards();
      updateCount();
      if (state.onlyFresh && !feed.querySelector('.news-card, .feed-error')) {
        const empty = document.createElement('p');
        empty.className = 'news-empty';
        empty.textContent = 'V této kategorii nebo pro hledaný výraz nejsou žádné nové ani aktualizované informace.';
        feed.appendChild(empty);
      }
    };

    toggle.addEventListener('click', () => {
      state.onlyFresh = !state.onlyFresh;
      toggle.setAttribute('aria-pressed', String(state.onlyFresh));
      // Puvodni globalni let currentPage je z puvodniho skriptu.
      if (typeof currentPage !== 'undefined') currentPage = 1;
      window.renderNews();
    });

    updateCount();
    decorateCards(); // Funguje i tehdy, kdyz data dobehla pred timto skriptem.
  }

  function enhanceContacts() {
    const panel = document.querySelector('.floating-contacts');
    const oldTab = panel?.querySelector('.floating-tab');
    if (!panel || !oldTab) return;
    if (panel.classList.contains('contacts-enhanced')) return;

    panel.id ||= 'znalostka-contacts';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Rychlé kontakty epet a Dobrá energie');

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = oldTab.className;
    tab.innerHTML = oldTab.innerHTML;
    tab.title = oldTab.title || 'Zobrazit rychlé kontakty';
    tab.setAttribute('aria-controls', panel.id);
    tab.setAttribute('aria-expanded', 'false');
    oldTab.replaceWith(tab);

    const body = document.createElement('div');
    body.className = 'contacts-body';
    for (const element of [...panel.children]) {
      if (element !== tab) body.appendChild(element);
    }
    panel.appendChild(body);

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'contacts-close';
    close.setAttribute('aria-label', 'Zavřít rychlé kontakty');
    close.title = 'Zavřít kontakty';
    close.textContent = '×';
    panel.appendChild(close);

    let opened = false;
    function setOpen(next, restoreFocus = false) {
      opened = Boolean(next);
      panel.classList.toggle('is-open', opened);
      tab.setAttribute('aria-expanded', String(opened));
      tab.setAttribute('aria-label', opened ? 'Zavřít rychlé kontakty' : 'Otevřít rychlé kontakty');
      body.toggleAttribute('inert', !opened);
      body.setAttribute('aria-hidden', String(!opened));
      close.tabIndex = opened ? 0 : -1;
      if (restoreFocus) tab.focus();
    }

    tab.addEventListener('click', () => setOpen(!opened));
    close.addEventListener('click', () => setOpen(false, true));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && opened) setOpen(false, true);
    });
    document.addEventListener('pointerdown', e => {
      if (opened && !panel.contains(e.target)) setOpen(false);
    });
    setOpen(false);
    panel.classList.add('contacts-enhanced');
    document.documentElement.classList.add('contacts-js');
  }

  function initialize() {
    enhanceContacts();
    enhanceNews();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
