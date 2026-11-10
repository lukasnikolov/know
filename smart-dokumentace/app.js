function documentApp() {
    return {
      activeBrand: 'epet',
      category: 'all',
      searchQuery: '',
      page: 1,
      itemsPerPage: 24,
      viewMode: 'grid',
      filtersOpen: false,
      sidebarOpen: false,
      formatFilter: 'all',
      commodityFilter: 'all',
      audienceFilter: 'all',
      distributorFilter: 'all',
      sortMode: 'name',
      favs: [],
      recent: [],
      usageCounts: {},
      toast: '',
      toastTimer: null,

      dataStore: window.SMART_DOCS_DATA,

      hashString(value) {
        let hash = 2166136261;
        for (let i = 0; i < value.length; i++) {
          hash ^= value.charCodeAt(i);
          hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
      },

      get allItems() {
        const items = [];
        for (const [category, docs] of Object.entries(this.dataStore)) {
          docs.forEach((sourceDoc, index) => {
            const brand = ['epet', 'de', 'shared'].includes(sourceDoc.brand) ? sourceDoc.brand : 'shared';
            const url = (sourceDoc.url || '').trim();
            const format = (sourceDoc.format || sourceDoc.type || 'soubor').toLowerCase();
            const identity = [brand, category, sourceDoc.name || '', url].join('|');
            const doc = {
              ...sourceDoc,
              url,
              format,
              brand,
              category,
              id: `doc-${this.hashString(identity)}`
            };
            doc.searchMeta = this.buildSearchMeta(doc);
            items.push(doc);
          });
        }
        return items;
      },

      buildSearchMeta(doc) {
        const text = this.normalizeText([doc.name, doc.category, doc.format, doc.brand, doc.tags || ''].join(' '));
        const commodities = [];
        const audiences = [];
        const distributors = [];

        if (/\b(plyn|gasnet|praz[- ]?plyn|ppas|eic)\b/.test(text)) commodities.push('plyn');
        if (/\b(ele|elektrina|elektřina|cez|čez|egd|eg\.d|pre|ean|jistic|jistič|sazb)\b/.test(text)) commodities.push('elektrina');
        if (/\b(dom|domacnost|domácnost|fyzick)\b/.test(text)) audiences.push('domacnost');
        if (/\b(firma|podnikatel|svj|pravnick)\b/.test(text)) audiences.push('firma');
        if (/\b(cez|čez)\b/.test(text)) distributors.push('cez');
        if (/\b(egd|eg\.d)\b/.test(text)) distributors.push('egd');
        if (/\bpre\b/.test(text)) distributors.push('pre');
        if (/\bgasnet\b/.test(text)) distributors.push('gasnet');
        if (/\b(praz[- ]?plyn|ppas)\b/.test(text)) distributors.push('ppas');
        if (/\bzmd\b/.test(text)) distributors.push('zmd');

        return { text, commodities, audiences, distributors };
      },

      get brandItems() {
        return this.allItems.filter(doc => doc.brand === 'shared' || doc.brand === this.activeBrand);
      },

      get currentCategories() {
        const counts = {};
        this.brandItems.forEach(doc => { counts[doc.category] = (counts[doc.category] || 0) + 1; });
        return Object.keys(counts).sort((a, b) => a.localeCompare(b, 'cs')).reduce((acc, key) => {
          acc[key] = counts[key];
          return acc;
        }, {});
      },

      get favCount() {
        return this.brandItems.filter(doc => this.favs.includes(doc.id)).length;
      },

      get recentCount() {
        const ids = new Set(this.brandItems.map(doc => doc.id));
        return this.recent.filter(item => ids.has(item.id)).length;
      },

      get activeLabel() {
        if (this.searchQuery.trim()) return `Výsledky pro „${this.searchQuery.trim()}“`;
        if (this.category === 'all') return 'Všechny dokumenty';
        if (this.category === 'fav') return 'Oblíbené dokumenty';
        if (this.category === 'recent') return 'Nedávno otevřené';
        return this.category;
      },

      get activeFiltersCount() {
        return [this.formatFilter, this.commodityFilter, this.audienceFilter, this.distributorFilter].filter(value => value !== 'all').length;
      },

      get activeFilterChips() {
        const labels = {
          formatFilter: { pdf: 'PDF', docx: 'Word', xlsx: 'Excel', image: 'Obrázky' },
          commodityFilter: { elektrina: 'Elektřina', plyn: 'Plyn' },
          audienceFilter: { domacnost: 'Domácnost', firma: 'Firma / podnikatel' },
          distributorFilter: { cez: 'ČEZ', egd: 'EG.D', pre: 'PRE', gasnet: 'GasNet', ppas: 'Pražská plynárenská', zmd: 'ZMD' }
        };
        return Object.keys(labels)
          .filter(key => this[key] !== 'all')
          .map(key => ({ key, label: labels[key][this[key]] }));
      },

      normalizeText(text) {
        if (!text) return '';
        return text.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      },

      matchesFormat(doc) {
        if (this.formatFilter === 'all') return true;
        if (this.formatFilter === 'docx') return ['doc', 'docx'].includes(doc.format);
        if (this.formatFilter === 'xlsx') return ['xls', 'xlsx'].includes(doc.format);
        if (this.formatFilter === 'image') return ['png', 'jpg', 'jpeg', 'webp'].includes(doc.format);
        return doc.format === this.formatFilter;
      },

      get filteredItems() {
        let result = [...this.brandItems];

        if (this.searchQuery.trim()) {
          const terms = this.normalizeText(this.searchQuery).split(/\s+/).filter(Boolean);
          result = result.filter(doc => terms.every(term => doc.searchMeta.text.includes(term)));
        } else if (this.category === 'fav') {
          result = result.filter(doc => this.favs.includes(doc.id));
        } else if (this.category === 'recent') {
          const positions = new Map(this.recent.map((item, index) => [item.id, index]));
          result = result.filter(doc => positions.has(doc.id)).sort((a, b) => positions.get(a.id) - positions.get(b.id));
        } else if (this.category !== 'all') {
          result = result.filter(doc => doc.category === this.category);
        }

        result = result.filter(doc => this.matchesFormat(doc));
        if (this.commodityFilter !== 'all') result = result.filter(doc => doc.searchMeta.commodities.includes(this.commodityFilter));
        if (this.audienceFilter !== 'all') result = result.filter(doc => doc.searchMeta.audiences.includes(this.audienceFilter));
        if (this.distributorFilter !== 'all') result = result.filter(doc => doc.searchMeta.distributors.includes(this.distributorFilter));

        if (this.category !== 'recent') {
          if (this.sortMode === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name, 'cs', { sensitivity: 'base' }));
          } else if (this.sortMode === 'category') {
            result.sort((a, b) => a.category.localeCompare(b.category, 'cs') || a.name.localeCompare(b.name, 'cs'));
          } else if (this.sortMode === 'popular') {
            result.sort((a, b) => (this.usageCounts[b.id] || 0) - (this.usageCounts[a.id] || 0) || a.name.localeCompare(b.name, 'cs'));
          } else if (this.sortMode === 'recent') {
            const positions = new Map(this.recent.map((item, index) => [item.id, index]));
            result.sort((a, b) => (positions.get(a.id) ?? 99999) - (positions.get(b.id) ?? 99999) || a.name.localeCompare(b.name, 'cs'));
          }
        }

        return result;
      },

      get totalPages() {
        return Math.max(1, Math.ceil(this.filteredItems.length / this.itemsPerPage));
      },

      get paginatedItems() {
        const safePage = Math.min(this.page, this.totalPages);
        const start = (safePage - 1) * this.itemsPerPage;
        return this.filteredItems.slice(start, start + this.itemsPerPage);
      },

      get pageStart() {
        return this.filteredItems.length ? (Math.min(this.page, this.totalPages) - 1) * this.itemsPerPage + 1 : 0;
      },

      get pageEnd() {
        return Math.min(Math.min(this.page, this.totalPages) * this.itemsPerPage, this.filteredItems.length);
      },

      get paginationItems() {
        const total = this.totalPages;
        const current = Math.min(this.page, total);
        if (total <= 7) return Array.from({ length: total }, (_, i) => ({ type: 'page', value: i + 1, key: `p-${i + 1}` }));

        const pages = new Set([1, total, current - 1, current, current + 1]);
        if (current <= 3) [2, 3, 4].forEach(p => pages.add(p));
        if (current >= total - 2) [total - 3, total - 2, total - 1].forEach(p => pages.add(p));
        const sorted = [...pages].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
        const output = [];
        sorted.forEach((value, index) => {
          if (index && value - sorted[index - 1] > 1) output.push({ type: 'ellipsis', key: `e-${sorted[index - 1]}-${value}` });
          output.push({ type: 'page', value, key: `p-${value}` });
        });
        return output;
      },

      initApp() {
        this.viewMode = localStorage.getItem('smartdocs_view') || 'grid';
        this.itemsPerPage = Number(localStorage.getItem('smartdocs_per_page')) || 24;
        this.usageCounts = this.safeJsonParse(localStorage.getItem('smartdocs_usage'), {});

        const storedFavs = this.safeJsonParse(localStorage.getItem('smartdocs_favs'), null)
          ?? this.safeJsonParse(localStorage.getItem('epet_favs'), []);
        this.favs = this.migrateFavorites(storedFavs);

        const storedRecent = this.safeJsonParse(localStorage.getItem('smartdocs_recent'), null)
          ?? this.safeJsonParse(localStorage.getItem('epet_recent'), []);
        this.recent = this.migrateRecent(storedRecent);

        this.persistState();
      },

      safeJsonParse(value, fallback) {
        try { return value ? JSON.parse(value) : fallback; } catch (error) { return fallback; }
      },

      migrateFavorites(values) {
        if (!Array.isArray(values)) return [];
        const ids = [];
        values.forEach(value => {
          if (typeof value !== 'string') return;
          if (value.startsWith('doc-')) ids.push(value);
          else this.allItems.filter(doc => doc.name === value).forEach(doc => ids.push(doc.id));
        });
        return [...new Set(ids)];
      },

      migrateRecent(values) {
        if (!Array.isArray(values)) return [];
        const output = [];
        values.forEach(item => {
          if (!item) return;
          if (typeof item === 'string' && item.startsWith('doc-')) {
            const doc = this.allItems.find(d => d.id === item);
            if (doc) output.push({ id: doc.id, openedAt: Date.now() });
            return;
          }
          if (item.id) {
            const doc = this.allItems.find(d => d.id === item.id);
            if (doc) output.push({ id: doc.id, openedAt: item.openedAt || Date.now() });
            return;
          }
          const trimmedUrl = (item.url || '').trim();
          const doc = this.allItems.find(d => d.url === trimmedUrl && (!item.name || d.name === item.name))
            || this.allItems.find(d => d.url === trimmedUrl);
          if (doc) output.push({ id: doc.id, openedAt: Date.now() });
        });
        return [...new Map(output.map(item => [item.id, item])).values()].slice(0, 30);
      },

      persistState() {
        localStorage.setItem('smartdocs_favs', JSON.stringify(this.favs));
        localStorage.setItem('smartdocs_recent', JSON.stringify(this.recent));
        localStorage.setItem('smartdocs_usage', JSON.stringify(this.usageCounts));
      },

      savePreferences() {
        localStorage.setItem('smartdocs_view', this.viewMode);
        localStorage.setItem('smartdocs_per_page', String(this.itemsPerPage));
      },

      setBrand(brand) {
        this.activeBrand = brand;
        this.page = 1;
        this.searchQuery = '';
        if (!['all', 'fav', 'recent'].includes(this.category) && !this.currentCategories[this.category]) this.category = 'all';
        this.sidebarOpen = false;
      },

      setCategory(cat) {
        this.category = String(cat);
        this.searchQuery = '';
        this.page = 1;
        this.sidebarOpen = false;
      },

      setViewMode(mode) {
        this.viewMode = mode;
        this.savePreferences();
      },

      isFav(doc) { return this.favs.includes(doc.id); },

      toggleFav(doc) {
        if (this.isFav(doc)) {
          this.favs = this.favs.filter(id => id !== doc.id);
          this.showToast('Odebráno z oblíbených');
        } else {
          this.favs = [...this.favs, doc.id];
          this.showToast('Přidáno do oblíbených');
        }
        this.persistState();
      },

      registerUse(doc, action = 'open') {
        this.usageCounts[doc.id] = (this.usageCounts[doc.id] || 0) + 1;
        this.usageCounts = { ...this.usageCounts };
        this.recent = [{ id: doc.id, openedAt: Date.now(), action }, ...this.recent.filter(item => item.id !== doc.id)].slice(0, 30);
        this.persistState();
      },

      openDocument(doc) { this.registerUse(doc, 'preview'); },

      async copyLink(doc) {
        const link = this.getPreviewLink(doc);
        try {
          await navigator.clipboard.writeText(link);
          this.showToast('Odkaz zkopírován');
        } catch (error) {
          const textarea = document.createElement('textarea');
          textarea.value = link;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          textarea.remove();
          this.showToast('Odkaz zkopírován');
        }
      },

      clearFilters() {
        this.formatFilter = 'all';
        this.commodityFilter = 'all';
        this.audienceFilter = 'all';
        this.distributorFilter = 'all';
        this.sortMode = 'name';
        this.page = 1;
      },

      clearAllSearch() {
        this.searchQuery = '';
        this.category = 'all';
        this.clearFilters();
      },

      removeFilter(key) {
        if (key in this) this[key] = 'all';
        this.page = 1;
      },

      goToPage(target) {
        this.page = Math.min(Math.max(1, target), this.totalPages);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },

      handleShortcut(event) {
        const tag = (event.target.tagName || '').toLowerCase();
        const editing = ['input', 'textarea', 'select'].includes(tag) || event.target.isContentEditable;
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
          event.preventDefault();
          this.$refs.searchInput.focus();
        } else if (event.key === '/' && !editing) {
          event.preventDefault();
          this.$refs.searchInput.focus();
        } else if (event.key === 'Escape') {
          if (this.sidebarOpen) this.sidebarOpen = false;
          else if (this.searchQuery) { this.searchQuery = ''; this.page = 1; }
        }
      },

      showToast(message) {
        clearTimeout(this.toastTimer);
        this.toast = message;
        this.toastTimer = setTimeout(() => { this.toast = ''; }, 2100);
      },

      getPreviewLink(doc) {
        const url = (doc.url || '').trim();
        if (!url) return '#';
        let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match) return `https://drive.google.com/file/d/${match[1]}/view`;
        match = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
        if (match) return `https://docs.google.com/document/d/${match[1]}/preview`;
        match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
        if (match) return `https://docs.google.com/spreadsheets/d/${match[1]}/preview`;
        return url;
      },

      getDownloadLink(doc) {
        const url = (doc.url || '').trim();
        if (!url) return '#';
        let match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match) return `https://drive.google.com/uc?export=download&id=${match[1]}`;
        match = url.match(/\/document\/d\/([a-zA-Z0-9_-]+)/);
        if (match) {
          const ext = doc.format === 'pdf' ? 'pdf' : 'docx';
          return `https://docs.google.com/document/d/${match[1]}/export?format=${ext}`;
        }
        match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
        if (match) return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=xlsx`;
        return url;
      },

      getBrandLabel(brand) {
        return { epet: 'EPET', de: 'DE', shared: 'Společné' }[brand] || 'Společné';
      },

      getCategoryIcon(category) {
        const text = this.normalizeText(category);
        if (text.includes('dedick')) return 'fa-users';
        if (text.includes('reklamac')) return 'fa-exclamation-circle';
        if (text.includes('vypoved') || text.includes('odstoupen')) return 'fa-sign-out';
        if (text.includes('samoodect')) return 'fa-tachometer';
        if (text.includes('distribuc')) return 'fa-bolt';
        if (text.includes('kauce')) return 'fa-lock';
        if (text.includes('sablon')) return 'fa-file-text-o';
        if (text.includes('cestne')) return 'fa-check-square-o';
        if (text.includes('zranitel')) return 'fa-heart-o';
        if (text.includes('bezzaloh')) return 'fa-calendar-o';
        return 'fa-folder-o';
      },

      getFaIcon(format) {
        const map = {
          pdf: 'fa-file-pdf-o',
          docx: 'fa-file-word-o',
          doc: 'fa-file-word-o',
          xlsx: 'fa-file-excel-o',
          xls: 'fa-file-excel-o',
          png: 'fa-file-image-o',
          jpg: 'fa-file-image-o',
          jpeg: 'fa-file-image-o',
          webp: 'fa-file-image-o'
        };
        return map[(format || '').toLowerCase()] || 'fa-file-o';
      }
    };
  }
