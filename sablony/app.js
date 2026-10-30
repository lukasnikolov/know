    function catalog() {
      return {
        brand: 'epet', // Výchozí značka
        lname: '',
        gender: 'male',
        ean: '',
        adresa: '',
        odecetDatum: '',
        jistic: '',
        sazba: '',
        vs: '',
        smluvniUcet: '',
        castka: '',
        splatnost: '',
        dluhyRadky: '',
        additionalValues: {},
        additionalOpen: false,
        selected: null,
        selectedCopied: false,
        subjectCopyManual: false,
        all: [],
        filtered: [],
        q: '',
        category: 'all',
        activeSection: 'all',
        // Tematické záložky vznikají z původních kategorií; databáze šablon se nemění.
        mainSections: [
          { id: 'finance', label: 'Finance a platby', icon: 'bi-wallet2' },
          { id: 'contracts', label: 'Smlouvy a produkty', icon: 'bi-file-earmark-text' },
          { id: 'distribution', label: 'Měření a distribuce', icon: 'bi-speedometer2' },
          { id: 'readings', label: 'Samoodečty', icon: 'bi-clipboard-check' },
          { id: 'inheritance', label: 'Dědické řízení', icon: 'bi-bank' },
          { id: 'portal', label: 'Zákaznický portál', icon: 'bi-window-sidebar' },
          { id: 'fve', label: 'FVE a výkup', icon: 'bi-sun' },
          { id: 'customers', label: 'Péče o zákazníky', icon: 'bi-people' },
          { id: 'other', label: 'Ostatní', icon: 'bi-grid' }
        ],
        perPage: 8,
        page: 1,
        totalPages: 1,
        fuse: null,
        categories: [],
        categoryCounts: {},
        totalCount: 0,
        favoriteIds: [],
        toast: '',
        showAttachments: true,
        keysBound: false,
        compactList: false,
        customerOpen: false,
        supplyOpen: false,
        paymentsOpen: false,
        isMobile: false,
        mobileStep: 'templates',
        mediaQuery: null,
        clearConfirmArmed: false,
        clearConfirmTimer: null,

        getCategorySection(cat) {
          const name = this.normalizeCategoryName(cat);
          // Samoodečty, dědictví a portál jsou samostatné sekce; kontrolují se
          // před ostatními pravidly, aby žádná jejich podkategorie neskončila jinde.
          if (/samoodec|odec/.test(name)) return 'readings';
          if (/dedic|notar|pozustal/.test(name)) return 'inheritance';
          if (/zakaznicky portal|portal|pristup/.test(name)) return 'portal';
          // Pořadí dalších pravidel je důležité (např. výkup před elektřinou).
          if (/fve|fotovolta|mikrozdroj|vykup|sdilen|sdileni|odchylk/.test(name)) return 'fve';
          if (/spk|splatk|zaloh|bezzaloh|faktur|danov|plateb|platb|preplat|nedoplat|upom|dluh|inkaso|sipo|pokut|penal|saldo|jednotkova cena|vyuct|pohledav|finance/.test(name)) return 'finance';
          if (/reklamac|stiznost|nedoruc|zranitel|kontakt|telefon|e-mail|email|zakaznic/.test(name)) return 'customers';
          if (/mereni|spinani|odstavk|demont|montaz|distribuc|technic|elektrom|plynom|jistic|sazb|elektrin|plyn|reviz|hdo|pripojen/.test(name)) return 'distribution';
          if (/smlouv|prepis|vypoved|ukonc|retenc|nabid|produkt|cenik|fixac|prolong|sloucen|zmena dodavatel|zmena odberat/.test(name)) return 'contracts';
          return 'other';
        },

        getSectionCategories(section = this.activeSection) {
          return this.categories.filter(cat => cat !== 'all' && this.getCategorySection(cat) === section);
        },

        getSectionCount(section) {
          return this.getSectionCategories(section).reduce((sum, cat) => sum + (this.categoryCounts[cat] || 0), 0);
        },

        getSectionLabel(section) {
          return this.mainSections.find(item => item.id === section)?.label || 'Kategorie';
        },

        setSection(section) {
          this.activeSection = section;
          this.category = ['favorites', 'recent'].includes(section) ? section : 'all';
          this.page = 1;
          this.search();
        },

        setSubcategory(cat) {
          this.category = cat;
          this.page = 1;
          this.search();
        },

        setBrand(newBrand) {
          this.brand = newBrand;
          this.page = 1;
          this.search();
          this.showToast(newBrand === 'epet' ? "Přepnuto na EPET" : "Přepnuto na Dobrá Energie");
        },

        get isEanValid() {
          const entries = this.eanEntries;
          if (entries.length === 0) return null;
          return entries.every(code => this.isValidEanEic(code));
        },

        get eanEntries() {
          return this.parseEanEntries(this.ean);
        },

        get invalidEanCount() {
          return this.eanEntries.filter(code => !this.isValidEanEic(code)).length;
        },

        get eanTypeInfo() {
          const entries = this.eanEntries;
          if (entries.length === 0) return { label: 'EAN/EIC není vyplněn', icon: 'bi-info-circle' };
          if (entries.length > 1) {
            const eanCount = entries.filter(code => /^\d{18}$/.test(code)).length;
            const eicCount = entries.filter(code => /^[A-Z0-9]{16}$/.test(code)).length;
            const parts = [];
            if (eanCount) parts.push(`${eanCount}× EAN`);
            if (eicCount) parts.push(`${eicCount}× EIC`);
            return { label: `Rozpoznáno ${entries.length} kódů (${parts.join(', ')})`, icon: 'bi-list-check' };
          }
          const clean = entries[0];
          if (/^859182\d{12}$/.test(clean)) return { label: 'Rozpoznáno jako EAN elektřiny', icon: 'bi-lightning-charge' };
          if (/^\d{18}$/.test(clean)) return { label: 'Rozpoznáno jako EAN', icon: 'bi-upc-scan' };
          if (/^27ZG[A-Z0-9]{12}$/.test(clean)) return { label: 'Rozpoznáno jako EIC plynu', icon: 'bi-fire' };
          if (/^[A-Z0-9]{16}$/.test(clean)) return { label: 'Rozpoznáno jako EIC', icon: 'bi-fuel-pump' };
          return { label: 'Neznámý formát', icon: 'bi-question-circle' };
        },

        parseEanEntries(value) {
          const seen = new Set();
          return String(value || '')
            .split(/[\n,;]+/)
            .map(code => code.replace(/\s+/g, '').toUpperCase())
            .filter(code => code && !seen.has(code) && seen.add(code));
        },

        normalizeEanInput(value) {
          return this.parseEanEntries(value).join('\n');
        },

        isValidEanEic(code) {
          return /^\d{18}$/.test(code) || /^[A-Z0-9]{16}$/.test(code);
        },

        formatEanEic(code) {
          if (/^\d{18}$/.test(code)) return `EAN ${code}`;
          if (/^[A-Z0-9]{16}$/.test(code)) return `EIC ${code}`;
          return code;
        },

        formatJistic(value) {
          const raw = String(value || '').trim();
          if (!raw) return '';
          let v = raw
            .replace(/[xX×]/g, '×')
            .replace(/\s+/g, '')
            .replace(/A+$/i, '');
          if (/\d/.test(v)) v += ' A';
          return v;
        },

        formatSazba(value) {
          const raw = String(value || '').trim();
          if (!raw) return '';
          const clean = raw.replace(/\s+/g, '');
          const match = clean.match(/^([CD])(\d{2})D$/i);
          if (match) return `${match[1].toUpperCase()}${match[2]}d`;
          return clean.toUpperCase();
        },

        applyTechnicalChangeVariant(html) {
          const hasJistic = Boolean(String(this.jistic || '').trim());
          const hasSazba = Boolean(String(this.sazba || '').trim());

          const gap = String.raw`(?:\s|&nbsp;)*`;
          const openInline = String.raw`(?:<(?:strong|b|em|i|span)\b[^>]*>${gap})*`;
          const closeInline = String.raw`(?:${gap}<\/(?:strong|b|em|i|span)>)*`;
          const rateToken = String.raw`(?:\{XXXX\}|\{DISTRIBUČNÍ\s+SAZBA\}|\[DISTRIBUČNÍ\s+SAZBA\]|\{SAZBA\}|\[SAZBA\])`;
          const breakerToken = String.raw`(?:\{(?:XXX|XXXX)\s*A\}|\{HODNOTA\s+JISTIČE\}|\[HODNOTA\s+JISTIČE\])`;

          if (hasJistic && hasSazba) {
            const combinedChanges = new RegExp(
              `${gap}\/${gap}(${openInline})změnu(?=${gap}hodnoty${gap}hlavního${gap}jističe${gap}na)`,
              'giu'
            );
            return html.replace(combinedChanges, (_match, openingTags) => ` včetně ${openingTags}změny`);
          }

          if (!hasJistic && !hasSazba) return html;

          if (hasSazba) {
            const breakerClause = new RegExp(
              `${gap}\/${gap}${openInline}změnu${gap}hodnoty${gap}hlavního${gap}jističe${gap}na${gap}${openInline}${breakerToken}${closeInline}${closeInline}`,
              'giu'
            );
            return html.replace(breakerClause, '');
          }

          const rateClause = new RegExp(
            `${openInline}změnu${gap}distribuční${gap}sazby${gap}na${gap}${openInline}${rateToken}${closeInline}${closeInline}${gap}\/${gap}`,
            'giu'
          );
          return html.replace(rateClause, '');
        },

        get currentBrandColor() {
          return this.brand === 'epet' ? '#94C11F' : '#F99F1C';
        },

        get currentBrandTextColor() {
          return this.currentBrandColor;
        },

        applyBrandTableColors(html) {
          const root = document.createElement("div");
          root.innerHTML = String(html || "");

          const knownBrandColors = new Set([
            "#94c11f",
            "#f99f1c",
            "#f94c11f",
            "rgb(148,193,31)",
            "rgb(249,159,28)"
          ]);

          root.querySelectorAll("tr").forEach((row) => {
            const rawStyle = String(row.getAttribute("style") || "")
              .replace(/\s+/g, "")
              .toLowerCase();
            const normalizedColor = String(row.style.backgroundColor || "")
              .replace(/\s+/g, "")
              .toLowerCase();
            const hasKnownInlineColor = [...knownBrandColors]
              .some((color) => rawStyle.includes(color));

            if (
              !row.hasAttribute("data-brand-row") &&
              !hasKnownInlineColor &&
              !knownBrandColors.has(normalizedColor)
            ) {
              return;
            }

            row.setAttribute("data-brand-row", "");
            row.style.backgroundColor = this.currentBrandColor;
          });

          return root.innerHTML;
        },

        get customerFilledCount() {
          return [this.lname].filter(value => String(value || '').trim() !== '').length;
        },

        get supplyFilledCount() {
          return [this.ean, this.adresa, this.odecetDatum, this.jistic, this.sazba]
            .filter(value => String(value || '').trim() !== '').length;
        },

        get odecetDenMesic() {
          if (!this.odecetDatum) return '';
          const parts = String(this.odecetDatum).split('-');
          const month = Number(parts[1]);
          const day = Number(parts[2]);
          if (!Number.isInteger(day) || !Number.isInteger(month) || day < 1 || month < 1 || month > 12) return '';
          return `${day}. ${month}.`;
        },

        get paymentsFilledCount() {
          return [this.vs, this.smluvniUcet, this.splatnost, this.castka, this.dluhyRadky]
            .filter(value => String(value || '').trim() !== '').length;
        },

        // Neznámé položky ve složených závorkách vytvářejí vlastní pole.
        // Platí pro celou kategorii dědického řízení, ostatních kategorií se netýká.
        get additionalPlaceholderFields() {
          if (!this.selected || this.getCategorySection(this.selected.category) !== 'inheritance') return [];
          const html = String(this.selected.body || '').replace(/<table\b[^>]*>[\s\S]*?<\/table>/gi, '');
          const handled = new Set(['variabilní symbol', 'smluvní účet', 'datum splatnosti', 'částka', 'celková částka',
            'termín vystavení / odečtový měsíc', 'hodnota jističe', 'distribuční sazba', 'sazba', 'xxx a', 'xxxx a', 'xxxx']);
          const fields = [];
          const add = name => { if (!fields.includes(name)) fields.push(name); };
          for (const match of html.matchAll(/\{([^{}<>]+)\}/g)) {
            const name = match[1].trim();
            if (handled.has(name.toLocaleLowerCase('cs-CZ'))) continue;
            if (/^jméno\s*,\s*příjmení\s*,\s*datum narození\s*,\s*trvalý pobyt$/i.test(name)) {
              ['jméno', 'příjmení', 'datum narození', 'trvalý pobyt'].forEach(add);
            } else if (/^jméno\s+a\s+příjmení\s*,\s*datum narození\s*,\s*adresa zákazníka$/i.test(name)) {
              ['jméno a příjmení', 'datum narození', 'adresa zákazníka'].forEach(add);
            } else {
              add(name);
            }
          }
          return fields;
        },

        get additionalRelevantFilledCount() {
          return this.additionalPlaceholderFields.filter(field => String(this.additionalValues[field] || '').trim()).length;
        },

        get filledVariablesCount() {
          return this.customerFilledCount + this.supplyFilledCount + this.paymentsFilledCount + this.additionalRelevantFilledCount;
        },

        get requiredVariableKeys() {
          if (!this.selected?.body) return [];
          const html = String(this.selected.body);
          const text = this.stripHtml(html).replace(/ /g, ' ');
          const keys = [];
          const add = (key, condition) => { if (condition && !keys.includes(key)) keys.push(key); };

          add('lname', /(Vážený\s+pane|Vážená\s+pan[íi]|Dobrý\s+den,?\s*(?:pane|pan[íi])|(?:pane|pan[íi])\s+(?:X{2,}|XY)|[\[{]\s*PŘÍJMENÍ\s*[\]}])/i.test(text));
          add('ean', /\[EAN\/EIC\s+KÓD\]/i.test(html));
          add('adresa', /\[ADRESA\s+ODBĚRNÉHO\s+MÍSTA\]/i.test(html));
          add('odecetDatum', /[\[{]\s*termín\s+vystavení\s*\/\s*odečtový\s+měsíc\s*[\]}]/i.test(html));
          add('jistic', /[\[{](?:XXX|XXXX)\s*A[\]}]|[\[{]\s*HODNOTA\s+JISTIČE\s*[\]}]/i.test(html));
          add('sazba', /[\[{]\s*(?:DISTRIBUČNÍ\s+SAZBA|SAZBA)\s*[\]}]|\{XXXX\}/i.test(html));
          add('vs', /\[VARIABILNÍ\s+SYMBOL\]|\{variabilní\s+symbol\}/i.test(html));
          add('smluvniUcet', /\[SMLUVNÍ\s+ÚČET\]|\{smluvní\s+účet\}/i.test(html));
          add('splatnost', /\[DATUM\s+SPLATNOSTI\]|\{datum\s+splatnosti\}/i.test(html));
          add('castka', /\[(?:CELKOVÁ\s+)?ČÁSTKA\]|\{(?:celková\s+)?částka\}/i.test(html));
          add('dluhyRadky', /<table[^>]*class=["'][^"']*table-upominka/i.test(html));
          return keys;
        },

        get requiredGroups() {
          const keys = this.requiredVariableKeys;
          return {
            customer: keys.includes('lname'),
            supply: keys.some(key => ['ean', 'adresa', 'odecetDatum', 'jistic', 'sazba'].includes(key)),
            payments: keys.some(key => ['vs', 'smluvniUcet', 'splatnost', 'castka', 'dluhyRadky'].includes(key)),
            additional: this.additionalPlaceholderFields.length > 0
          };
        },

        get technicalChangeIsAlternative() {
          if (!this.selected?.body) return false;
          const text = this.stripHtml(String(this.selected.body)).replace(/ /g, ' ');
          return /změnu\s+distribuční\s+sazby\s+na.{0,100}\/\s*změnu\s+hodnoty\s+hlavního\s+jističe\s+na/i.test(text);
        },

        isVariableRequired(key) {
          return this.requiredVariableKeys.includes(key);
        },

        fieldIsFilled(key) {
          return String(this[key] || '').trim() !== '';
        },

        variableRequirementIsSatisfied(key) {
          if (this.technicalChangeIsAlternative && (key === 'jistic' || key === 'sazba')) {
            return this.fieldIsFilled('jistic') || this.fieldIsFilled('sazba');
          }
          return this.fieldIsFilled(key);
        },

        countFilledKeys(keys) {
          return keys.filter(key => this.requiredVariableKeys.includes(key) && this.fieldIsFilled(key)).length;
        },

        get requiredVariablesCount() {
          const keys = this.requiredVariableKeys;
          const alternativeTechnicalFields = this.technicalChangeIsAlternative
            && keys.includes('jistic') && keys.includes('sazba');
          return keys.length - (alternativeTechnicalFields ? 1 : 0) + this.additionalPlaceholderFields.length;
        },

        get filledRequiredVariablesCount() {
          const keys = this.requiredVariableKeys;
          const additionalFilled = this.additionalRelevantFilledCount;
          if (!this.technicalChangeIsAlternative || !keys.includes('jistic') || !keys.includes('sazba')) {
            return keys.filter(key => this.fieldIsFilled(key)).length + additionalFilled;
          }

          const otherFilled = keys
            .filter(key => key !== 'jistic' && key !== 'sazba')
            .filter(key => this.fieldIsFilled(key)).length;
          const technicalFilled = this.fieldIsFilled('jistic') || this.fieldIsFilled('sazba') ? 1 : 0;
          return otherFilled + technicalFilled + additionalFilled;
        },

        get customerRelevantFilledCount() {
          return this.countFilledKeys(['lname']);
        },

        get supplyRelevantFilledCount() {
          return this.countFilledKeys(['ean', 'adresa', 'odecetDatum', 'jistic', 'sazba']);
        },

        get paymentsRelevantFilledCount() {
          return this.countFilledKeys(['vs', 'smluvniUcet', 'splatnost', 'castka', 'dluhyRadky']);
        },

        syncRelevantVariableSections() {
          this.customerOpen = false;
          this.supplyOpen = false;
          this.paymentsOpen = false;
          this.additionalOpen = false;
          if (!this.selected || this.requiredVariablesCount === 0) return;

          // Automatické údaje z dědických šablon zpřístupníme hned po výběru.
          if (this.additionalPlaceholderFields.some(field => !String(this.additionalValues[field] || '').trim())) {
            this.additionalOpen = true;
            return;
          }

          const groups = [
            { name: 'customer', keys: ['lname'] },
            { name: 'supply', keys: ['ean', 'adresa', 'odecetDatum', 'jistic', 'sazba'] },
            { name: 'payments', keys: ['vs', 'smluvniUcet', 'splatnost', 'castka', 'dluhyRadky'] }
          ].filter(group => this.requiredGroups[group.name]);

          const target = groups.find(group => group.keys.some(key => this.requiredVariableKeys.includes(key) && !this.variableRequirementIsSatisfied(key))) || groups[0];
          if (target?.name === 'customer') this.customerOpen = true;
          if (target?.name === 'supply') this.supplyOpen = true;
          if (target?.name === 'payments') this.paymentsOpen = true;
        },

        setupResponsive() {
          this.mediaQuery = window.matchMedia('(max-width: 860px)');
          const update = () => {
            this.isMobile = this.mediaQuery.matches;
            if (!this.isMobile) this.mobileStep = 'templates';
          };
          update();
          if (this.mediaQuery.addEventListener) this.mediaQuery.addEventListener('change', update);
          else this.mediaQuery.addListener(update);
        },

        goMobileStep(step) {
          if ((step === 'variables' || step === 'preview') && !this.selected) {
            this.showToast('Nejprve vyberte šablonu.');
            return;
          }
          this.mobileStep = step;
          this.$nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
        },

        scrollPreviewIntoView() {
          if (window.matchMedia('(max-width: 860px)').matches) {
            this.$nextTick(() => {
              document.querySelector('.panel-editor')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            });
          }
        },

        async init() {
          this.bindKeys();
          this.setupResponsive();
          this.favoriteIds = this.readStoredFavoriteIds();
          try {
            // Šablony pocházejí vždy z aktuálního souboru know/main/sablony.js.
            await window.sablonyDataReady;
            if (!window.SABLONY || !Object.keys(window.SABLONY).length) {
              throw new Error('Soubor sablony.js neobsahuje žádné šablony.');
            }
            if (typeof Fuse !== 'function') {
              throw new Error('Nepodařilo se načíst knihovnu pro vyhledávání.');
            }
            this.all = normalizeFromDataObject(window.SABLONY);
            this.fuse = new Fuse(this.all, {
              keys: ['subject', 'body', 'category', 'tags'],
              threshold: 0.3
            });
            this.categories = ['all', ...new Set(this.all.map(t => t.category))].sort();
            this.search();
          } catch (error) {
            console.error('Načtení databáze šablon selhalo:', error);
            const banner = document.getElementById('templateLoadError');
            if (banner) {
              banner.style.display = 'block';
              banner.querySelector('[data-error-detail]').textContent = error?.message || 'Zkuste stránku obnovit.';
            }
          }
        },
        bindKeys() {
          if (this.keysBound) return;
          this.keysBound = true;
          window.addEventListener('keydown', (e) => {
            const k = (e.key || '').toLowerCase();
            const tag = (document.activeElement?.tagName || '').toUpperCase();
            const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) || document.activeElement?.isContentEditable;

            if (e.ctrlKey && k === 'enter' && this.selected) {
              e.preventDefault();
              this.copyRich(this.selected);
              return;
            }

            if (k === '/' && !isTyping) {
              e.preventDefault();
              document.getElementById('searchInput')?.focus();
            }
          });
        },

        isNew(dateStr) {
          if (!dateStr) return false;
          try {
            const now = new Date();
            const postDate = new Date(dateStr);
            const diffTime = Math.abs(now - postDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7;
          } catch (e) {
            return false;
          }
        },

        selectTemplate(t) {
          this.resetClearConfirmation();
          this.selected = t;
          this.selectedCopied = false;
          this.subjectCopyManual = false;
          this.showAttachments = true;
          this.rememberRecent(t.id);
          this.$nextTick(() => {
            this.syncRelevantVariableSections();
            if (this.isMobile) {
              this.mobileStep = this.requiredVariablesCount > 0 ? 'variables' : 'preview';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });
        },
        onFiltersChanged() {
          this.page = 1;
          this.search();
        },
        search() {
          const s = this.q ? this.fuse.search(this.q).map(r => r.item) : this.all;

          if (this.category === 'recent') {
            const recent = this.recentItems();
            this.filtered = this.q ? recent.filter(t => s.some(x => x.id === t.id)) : recent;
          } else if (this.category === 'favorites') {
            const favorites = this.favoriteItems();
            this.filtered = this.q ? favorites.filter(t => s.some(x => x.id === t.id)) : favorites;
          } else if (this.category !== 'all') {
            this.filtered = s.filter(t => t.category === this.category);
          } else if (this.activeSection !== 'all') {
            this.filtered = s.filter(t => this.getCategorySection(t.category) === this.activeSection);
          } else {
            this.filtered = s;
          }

          this.totalPages = Math.max(1, Math.ceil(this.filtered.length / this.perPage));
          if (this.page > this.totalPages) this.page = this.totalPages;
          this.totalCount = s.length;

          const counts = {};
          this.categories.forEach(c => counts[c] = 0);
          s.forEach(t => {
            counts[t.category] = (counts[t.category] || 0) + 1;
          });
          this.categoryCounts = counts;
        },
        pageItems() {
          return this.filtered.slice((this.page - 1) * this.perPage, this.page * this.perPage);
        },
        next() {
          if (this.page < this.totalPages) this.page++;
        },
        prev() {
          if (this.page > 1) this.page--;
        },
        setCategory(c) {
          // Zpětná kompatibilita s případnými dalšími odkazy na původní funkci.
          this.activeSection = ['all', 'favorites', 'recent'].includes(c) ? c : this.getCategorySection(c);
          this.category = c;
          this.page = 1;
          this.search();
        },

        stripHtml(html) {
          const div = document.createElement('div');
          div.innerHTML = html || '';
          return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
        },

        previewText(html) {
          const text = this.stripHtml(html);
          return text.length > 90 ? text.substring(0, 90) + '...' : text;
        },

        charCount(html) {
          return this.stripHtml(html).length;
        },

        normalizeCategoryName(cat) {
          return String(cat || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
        },

        getCategoryMeta(cat) {
          const name = this.normalizeCategoryName(cat);
          const rules = [
            { keys: ['nedorucen'], tone: 'cat-tone-nedorucenky', icon: 'bi-envelope-exclamation' },
            { keys: ['danove doklady', 'danovy doklad'], tone: 'cat-tone-doklady', icon: 'bi-file-earmark-ruled' },
            { keys: ['fakturace', 'faktury'], tone: 'cat-tone-fakturace', icon: 'bi-receipt-cutoff' },

            { keys: ['smluvni pokut', 'pokuta'], tone: 'cat-tone-pokuty', icon: 'bi-file-earmark-x' },
            { keys: ['zmeny platebniho zpusobu', 'zmena platebniho zpusobu', 'platebni zpusob'], tone: 'cat-tone-platebni-zpusob', icon: 'bi-credit-card' },
            { keys: ['spk', 'splatk'], tone: 'cat-tone-splatky', icon: 'bi-calendar2-week' },
            { keys: ['bezzalohovy'], tone: 'cat-tone-bezzalohovy', icon: 'bi-wallet' },
            { keys: ['zastaveni odpojeni', 'dluh', 'penal', 'upom'], tone: 'cat-tone-dluhy', icon: 'bi-exclamation-octagon' },
            { keys: ['preplat'], tone: 'cat-tone-preplatky', icon: 'bi-arrow-down-circle' },
            { keys: ['zalohy'], tone: 'cat-tone-finance', icon: 'bi-wallet2' },
            { keys: ['platby', 'finance', 'saldo'], tone: 'cat-tone-finance', icon: 'bi-cash-coin' },
            { keys: ['inkaso', 'sipo'], tone: 'cat-tone-inkaso', icon: 'bi-credit-card-2-front' },

            { keys: ['samoodec', 'odec'], tone: 'cat-tone-odecty', icon: 'bi-clipboard-check' },
            { keys: ['jednotkova cena'], tone: 'cat-tone-cena', icon: 'bi-calculator' },

            { keys: ['slouceni'], tone: 'cat-tone-slouceni', icon: 'bi-intersect' },
            { keys: ['prepis'], tone: 'cat-tone-smlouvy', icon: 'bi-person-lines-fill' },
            { keys: ['smlouv'], tone: 'cat-tone-smlouvy', icon: 'bi-file-earmark-text' },

            { keys: ['zmena typu mereni', 'mereni'], tone: 'cat-tone-mereni', icon: 'bi-speedometer' },
            { keys: ['spinani'], tone: 'cat-tone-spinani', icon: 'bi-clock-history' },
            { keys: ['odstavka'], tone: 'cat-tone-odstavka', icon: 'bi-power' },
            { keys: ['demont'], tone: 'cat-tone-montaz', icon: 'bi-wrench' },
            { keys: ['montaz'], tone: 'cat-tone-montaz', icon: 'bi-wrench-adjustable' },
            { keys: ['distribuc'], tone: 'cat-tone-distribuce', icon: 'bi-diagram-3' },
            { keys: ['techn'], tone: 'cat-tone-technicke', icon: 'bi-tools' },

            { keys: ['mikrozdroj'], tone: 'cat-tone-mikrozdroj', icon: 'bi-house-gear' },
            { keys: ['vykup'], tone: 'cat-tone-vykup', icon: 'bi-sunrise' },
            { keys: ['fve'], tone: 'cat-tone-fve', icon: 'bi-sun' },
            { keys: ['sdilena elektrina', 'sdileni'], tone: 'cat-tone-sdileni', icon: 'bi-share' },
            { keys: ['prevzeti odchylky', 'odchylk'], tone: 'cat-tone-odchylka', icon: 'bi-activity' },

            { keys: ['dedic', 'notar'], tone: 'cat-tone-dedictvi', icon: 'bi-bank' },
            { keys: ['reklam', 'stiz'], tone: 'cat-tone-reklamace', icon: 'bi-shield-check' },
            { keys: ['kontaktni osoby', 'kontakt', 'email', 'e-mail', 'telefon'], tone: 'cat-tone-kontakty', icon: 'bi-person-vcard' },
            { keys: ['zakaznicky portal', 'portal', 'pristup'], tone: 'cat-tone-portal', icon: 'bi-window-sidebar' },
            { keys: ['zranitelny zakaznik', 'zranitel'], tone: 'cat-tone-zranitelny', icon: 'bi-heart-pulse' },

            { keys: ['vypoved', 'ukonceni'], tone: 'cat-tone-vypovedi', icon: 'bi-door-open' },
            { keys: ['retenc', 'nabid'], tone: 'cat-tone-retence', icon: 'bi-person-check' },
            { keys: ['produkt', 'cenik', 'fix'], tone: 'cat-tone-produkt', icon: 'bi-box-seam' },
            { keys: ['plyn'], tone: 'cat-tone-plyn', icon: 'bi-fire' },
            { keys: ['elektrina', 'elektr'], tone: 'cat-tone-elektrina', icon: 'bi-lightning-charge' },
            { keys: ['ostatni'], tone: 'cat-tone-default', icon: 'bi-three-dots' }
          ];

          const match = rules.find(rule =>
            rule.keys.some(keyword => name.includes(keyword))
          );

          return match || {
            tone: 'cat-tone-default',
            icon: 'bi-file-earmark-text'
          };
        },

        getCategoryIcon(cat) {
          return this.getCategoryMeta(cat).icon;
        },

        getCategoryTone(cat) {
          return this.getCategoryMeta(cat).tone;
        },

        formatDate(dateStr) {
          if (!dateStr) return 'bez data';
          const d = new Date(dateStr);
          if (Number.isNaN(d.getTime())) return dateStr;
          return d.toLocaleDateString('cs-CZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
        },

        readStoredFavoriteIds() {
          try {
            const parsed = JSON.parse(localStorage.getItem('smartEngineFavoriteTemplates') || '[]');
            return Array.isArray(parsed) ? parsed : [];
          } catch (e) {
            return [];
          }
        },

        favoriteItems() {
          return this.favoriteIds.map(id => this.all.find(t => t.id === id)).filter(Boolean);
        },

        isFavorite(id) {
          return this.favoriteIds.includes(id);
        },

        toggleFavorite(template) {
          if (!template?.id) return;
          const exists = this.favoriteIds.includes(template.id);
          this.favoriteIds = exists
            ? this.favoriteIds.filter(id => id !== template.id)
            : [template.id, ...this.favoriteIds];
          try { localStorage.setItem('smartEngineFavoriteTemplates', JSON.stringify(this.favoriteIds)); } catch (_) { /* Úložiště může být v Google Sites zablokované. */ }
          this.showToast(exists ? 'Odebráno z oblíbených.' : 'Přidáno do oblíbených.');
          if (this.category === 'favorites') this.search();
        },

        getRecentIds() {
          try {
            return JSON.parse(localStorage.getItem('smartEngineRecentTemplates') || '[]');
          } catch (e) {
            return [];
          }
        },

        recentItems() {
          const ids = this.getRecentIds();
          return ids.map(id => this.all.find(t => t.id === id)).filter(Boolean);
        },

        rememberRecent(id) {
          if (!id) return;
          const ids = this.getRecentIds().filter(x => x !== id);
          ids.unshift(id);
          try { localStorage.setItem('smartEngineRecentTemplates', JSON.stringify(ids.slice(0, 12))); } catch (_) { /* Úložiště může být v Google Sites zablokované. */ }
          if (this.category === 'recent') this.search();
        },

        clearVariables() {
          const values = [
            this.lname,
            this.ean,
            this.adresa,
            this.odecetDatum,
            this.jistic,
            this.sazba,
            this.vs,
            this.smluvniUcet,
            this.castka,
            this.splatnost,
            this.dluhyRadky,
            ...Object.values(this.additionalValues)
          ];
          const hasData = values.some(value => String(value ?? '').trim() !== '');

          if (!hasData) {
            this.resetClearConfirmation();
            this.showToast('Není co vymazat.');
            return;
          }

          // Systémové confirm() bývá v zabezpečených iframech blokované.
          // Proto první kliknutí tlačítko pouze aktivuje a druhé mazání potvrdí.
          if (!this.clearConfirmArmed) {
            this.clearConfirmArmed = true;
            this.showToast('Klikněte na tlačítko ještě jednou pro potvrzení vymazání.');
            if (this.clearConfirmTimer) clearTimeout(this.clearConfirmTimer);
            this.clearConfirmTimer = setTimeout(() => {
              this.clearConfirmArmed = false;
              this.clearConfirmTimer = null;
            }, 4000);
            return;
          }

          this.resetClearConfirmation();

          this.lname = '';
          this.gender = 'male';
          this.ean = '';
          this.adresa = '';
          this.odecetDatum = '';
          this.jistic = '';
          this.sazba = '';
          this.vs = '';
          this.smluvniUcet = '';
          this.castka = '';
          this.splatnost = '';
          this.dluhyRadky = '';
          this.additionalValues = {};
          this.selectedCopied = false;
          this.$nextTick(() => this.syncRelevantVariableSections());
          this.showToast('Vyplněná pole byla vymazána.');
        },

        resetClearConfirmation() {
          this.clearConfirmArmed = false;
          if (this.clearConfirmTimer) {
            clearTimeout(this.clearConfirmTimer);
            this.clearConfirmTimer = null;
          }
        },

        // Viditelný předmět e-mailu (název šablony zůstává beze změny).
        get emailSubject() {
          const original = String(this.selected?.subject || '').trim();
          if (!original) return '';
          if (/,\s*zákaznický účet\s+\S+$/i.test(original)) return original;
          return `${original}, zákaznický účet XXXXXX`;
        },

        async copySubject() {
          if (!this.selected) return;
          const subject = this.emailSubject;
          this.subjectCopyManual = false;
          let copied = false;

          // 1) Synchronní kopírování během kliknutí – v Google Webech může
          // fungovat i tehdy, když je navigator.clipboard blokován iframe.
          const input = document.createElement('textarea');
          input.value = subject;
          input.readOnly = true;
          input.setAttribute('aria-hidden', 'true');
          input.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;';
          document.body.appendChild(input);
          try {
            input.focus({ preventScroll: true });
            input.select();
            input.setSelectionRange(0, subject.length);
            copied = document.execCommand('copy') === true;
          } catch (err) {
            console.debug('Subject legacy copy unavailable:', err);
          } finally {
            input.remove();
          }

          // 2) Moderní Clipboard API; jeho použití závisí na oprávněních
          // iframe, která Google Weby mohou zakázat.
          if (!copied) {
            try {
              if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                await navigator.clipboard.writeText(subject);
                copied = true;
              }
            } catch (err) {
              console.debug('Subject Clipboard API unavailable:', err);
            }
          }

          if (copied) {
            this.showToast('Předmět e-mailu byl zkopírován.');
            return;
          }

          // 3) Nelze obejít oprávnění Google Sites: zobrazíme skutečné
          // textové pole a jeho obsah vybereme pro ruční Ctrl+C / ⌘+C.
          this.subjectCopyManual = true;
          this.$nextTick(() => {
            const field = document.getElementById('subject-copy-fallback');
            if (!field) return;
            field.value = subject;
            field.focus({ preventScroll: true });
            field.select();
            field.setSelectionRange(0, subject.length);
          });
          this.showToast('Předmět je označený – stiskněte Ctrl+C.');
        },

        async copyPlain() {
          const el = document.querySelector('.preview-paper');
          if (!el) return;
          const plainText = el.innerText || '';
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(plainText);
            } else {
              const handler = (e) => {
                e.clipboardData.setData('text/plain', plainText);
                e.preventDefault();
              };
              document.addEventListener('copy', handler);
              document.execCommand('copy');
              document.removeEventListener('copy', handler);
            }
            this.selectedCopied = true;
            this.showToast("Zkopírováno jako prostý text.");
            setTimeout(() => this.selectedCopied = false, 2000);
          } catch (err) {
            console.error('Plain copy failed', err);
            this.showToast("Kopírování se nepodařilo.");
          }
        },

        getFileIcon(file) {
          const type = (file.type || (file.url ? file.url.split('.').pop().toLowerCase() : '')).toLowerCase();
          const icons = {
            'pdf': 'bi-file-earmark-pdf-fill text-danger',
            'xlsx': 'bi-file-earmark-excel-fill text-success',
            'xls': 'bi-file-earmark-excel-fill text-success',
            'docx': 'bi-file-earmark-word-fill text-primary',
            'doc': 'bi-file-earmark-word-fill text-primary',
            'zip': 'bi-file-earmark-zip-fill text-warning'
          };
          return icons[type] || 'bi-file-earmark';
        },

        sklonujPrijmeni(prijmeni, gender) {
          if (!prijmeni) return "XXXXX";
          const p = prijmeni.trim();

          if (gender === "male") {
            if (/^Jaroš$/i.test(p)) return "Jaroši";
            if (/berg$/i.test(p)) return p.replace(/berg$/i, "bergu");
            if (/ř$/i.test(p)) return p + "i";
            if (/el$/i.test(p)) return p.replace(/el$/i, "le");
            if (/al$/i.test(p)) return p + "e";
            if (/l$/i.test(p)) return p + "e";
            if (/vička$/i.test(p)) return p.replace(/vička$/i, "vičko");
            if (/ka$/i.test(p)) return p.replace(/ka$/i, "ko");
            if (/ák$/i.test(p)) return p.replace(/ák$/i, "áku");
            if (/ek$/i.test(p)) return p.replace(/ek$/i, "ku");
            if (/ík$/i.test(p)) return p.replace(/ík$/i, "íku");
            if (/ch$/i.test(p)) return p + "u";
            if (/ec$/i.test(p)) return p.replace(/ec$/i, "če");
            if (/eš$/i.test(p)) return p.replace(/eš$/i, "eši");
            if (/or$/i.test(p)) return p.replace(/or$/i, "ore");
            if (/oš$/i.test(p)) return p.replace(/oš$/i, "oši");
            if (/uš$/i.test(p)) return p.replace(/uš$/i, "uši");
            if (/[sj]$/i.test(p)) return p + "i";
            if (/áč$/i.test(p)) return p + "i";
            if (/(sch|ss|rz|z|x)$/i.test(p)) return p + "i";
            if (/a$/i.test(p)) return p.replace(/a$/i, "o");
            if (/[bdďfghklmnňpqrtťvw]$/i.test(p)) return p + "e";
            if (/[cčjřšžszx]$/i.test(p)) return p + "i";
            return p;
          }

          if (gender === "female") {
            if (/ová$/i.test(p)) return p;
            if (/a$/i.test(p)) return p.replace(/a$/i, "o");
            if (/e$/i.test(p)) return p;
            return p;
          }

          return p;
        },

        applyVariables(html) {
          if (!html) return html;
          let out = this.applyTechnicalChangeVariant(html);
          const markVar = (value) => `<span class="var-filled">${String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[ch]))}</span>`;

          // 1. OSLOVENÍ A POHLAVÍ
          if (this.gender === "female") {
            out = out.replace(/(<p>\s*Dobrý den,\s*)pane(\s+)/giu, "$1paní$2")
              .replace(/(<p>\s*)Vážený(\s+pane\b)/giu, "$1Vážená$2")
              .replace(/(\b)pane(\s+)(X{2,}|XY)/giu, "$1paní$2$3");
          } else {
            out = out.replace(/(<p>\s*Dobrý den,\s*)paní(\s+)/giu, "$1pane$2")
              .replace(/(<p>\s*)Vážená(\s+paní\b)/giu, "$1Vážený$2")
              .replace(/(\b)paní(\s+)(X{2,}|XY)/giu, "$1pane$2$3");
          }
          const ln = (this.lname || '').trim();
          const pan = this.sklonujPrijmeni(ln, 'male');
          const pani = this.sklonujPrijmeni(ln, 'female');
          const safeLn = ln ? ln.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "XXXXX";
          const WSP = String.raw`(?:\s|\u00A0)*`;
          const TAG = String.raw`(?:<[^>]+>${WSP})*`;
          const BOUND = String.raw`(^|[^\p{L}])`;
          const rules = [{
            re: new RegExp(`${BOUND}(Vážený${WSP}pane${WSP}${TAG})(X{2,}|XY|${safeLn})(\\s*[,.:;!?])?`, 'giu'),
            repl: (_m, before, prefix, _n, punc = '') => `${before}${prefix}${pan}${punc || ''}`
          },
          {
            re: new RegExp(`${BOUND}(Vážená${WSP}pan[íi]${WSP}${TAG})(X{2,}|XY|${safeLn})(\\s*[,.:;!?])?`, 'giu'),
            repl: (_m, before, prefix, _n, punc = '') => `${before}${prefix}${pani}${punc || ''}`
          },
          {
            re: new RegExp(`${BOUND}(pane${WSP}${TAG})(X{2,}|XY|${safeLn})(\\s*[,.:;!?])?`, 'giu'),
            repl: (_m, before, prefix, _n, punc = '') => `${before}${prefix}${pan}${punc || ''}`
          },
          {
            re: new RegExp(`${BOUND}(paní${WSP}${TAG})(X{2,}|XY|${safeLn})(\\s*[,.:;!?])?`, 'giu'),
            repl: (_m, before, prefix, _n, punc = '') => `${before}${prefix}${pani}${punc || ''}`
          }
          ];
          for (const r of rules) out = out.replace(r.re, r.repl);

          // 2. EAN/EIC A ADRESA
          const eanEntries = this.eanEntries;
          const targetEan = eanEntries.length
            ? eanEntries.map(code => markVar(this.formatEanEic(code))).join(', ')
            : "[EAN/EIC KÓD]";
          const targetAdresa = this.adresa ? markVar(this.adresa.trim()) : "[ADRESA ODBĚRNÉHO MÍSTA]";

          if (eanEntries.length > 1) {
            const beforeEan = String.raw`(?=(?:\s|&nbsp;|<[^>]+>)*\[EAN\/EIC\s+KÓD\])`;
            out = out.replace(new RegExp(String.raw`\bu(?:\s|&nbsp;)+odběrného(?:\s|&nbsp;)+místa${beforeEan}`, 'giu'), 'u odběrných míst');
            out = out.replace(new RegExp(String.raw`\bpro(?:\s|&nbsp;)+odběrné(?:\s|&nbsp;)+místo${beforeEan}`, 'giu'), 'pro odběrná místa');
          }

          out = out.replace(/(?:EAN\/EIC|EAN|EIC)[:\s]*((?:<[^>]+>\s*)*)\[EAN\/EIC KÓD\]/gi, "$1[EAN/EIC KÓD]");
          out = out.replace(/\[EAN\/EIC KÓD\]/g, targetEan);
          out = out.replace(/\[ADRESA ODBĚRNÉHO MÍSTA\]/g, targetAdresa);

          // 3. TECHNICKÉ ÚDAJE ODBĚRNÉHO MÍSTA
          const targetJistic = this.jistic ? markVar(this.formatJistic(this.jistic)) : "{XXX A}";
          const targetSazba = this.sazba ? markVar(this.formatSazba(this.sazba)) : "{XXXX}";

          out = out.replace(/\{XXX\s*A\}/gi, targetJistic);
          out = out.replace(/\{XXXX\s*A\}/gi, targetJistic);
          out = out.replace(/\{HODNOTA\s+JISTIČE\}/gi, targetJistic);
          out = out.replace(/\[HODNOTA\s+JISTIČE\]/gi, targetJistic);

          out = out.replace(/\{DISTRIBUČNÍ\s+SAZBA\}/gi, targetSazba);
          out = out.replace(/\[DISTRIBUČNÍ\s+SAZBA\]/gi, targetSazba);
          out = out.replace(/\{SAZBA\}/gi, targetSazba);
          out = out.replace(/\[SAZBA\]/gi, targetSazba);
          out = out.replace(/\{XXXX\}/g, targetSazba);

          // 4. TERMÍN VYSTAVENÍ / ODEČTOVÝ MĚSÍC
          const targetTerminVystaveni = this.odecetDenMesic
            ? markVar(this.odecetDenMesic)
            : "{termín vystavení / odečtový měsíc}";

          if (this.odecetDenMesic) {
            out = out.replace(
              /v\s+měsíci\s*[\{\[]\s*termín\s+vystavení\s*\/\s*odečtový\s+měsíc\s*[\}\]]/gi,
              `k ${targetTerminVystaveni}`
            );
          }

          out = out.replace(
            /[\{\[]\s*termín\s+vystavení\s*\/\s*odečtový\s+měsíc\s*[\}\]]/gi,
            targetTerminVystaveni
          );

          // Datum již končí tečkou, proto zabráníme zdvojení tečky na konci věty.
          out = out.replace(
            /(<span class="var-filled">\d{1,2}\.\s+\d{1,2}\.<\/span>)\./g,
            "$1"
          );

          // 5. PLATEBNÍ ÚDAJE
          const targetVs = this.vs ? markVar(this.vs.trim()) : "[VARIABILNÍ SYMBOL]";
          const targetSmluvniUcet = this.smluvniUcet ? markVar(this.smluvniUcet.trim()) : "[SMLUVNÍ ÚČET]";
          const targetCastka = this.castka ? markVar(this.castka.trim()) : "[ČÁSTKA]";
          const targetSplatnost = this.splatnost ? markVar(this.splatnost.trim()) : "[DATUM SPLATNOSTI]";
          const totalDluhu = this.debtRows().reduce((sum, row) => sum + this.parseMoney(row.castka), 0);
          const targetCelkovaCastka = totalDluhu > 0 ? markVar(this.formatMoney(totalDluhu)) : "[CELKOVÁ ČÁSTKA]";

          out = out.replace(/\[VARIABILNÍ SYMBOL\]/g, targetVs);
          out = out.replace(/\[SMLUVNÍ ÚČET\]/g, targetSmluvniUcet);
          out = out.replace(/\[ČÁSTKA\]/g, targetCastka);
          out = out.replace(/\[DATUM SPLATNOSTI\]/g, targetSplatnost);
          out = out.replace(/\[CELKOVÁ ČÁSTKA\]/g, targetCelkovaCastka);

          out = out.replace(/<table class="table-upominka">[\s\S]*?<\/table>/gi, this.debtTableHtml());
          out = out.replace(/\{variabilní symbol\}/gi, this.vs ? markVar(this.vs.trim()) : "{variabilní symbol}");
          out = out.replace(/\{smluvní účet\}/gi, this.smluvniUcet ? markVar(this.smluvniUcet.trim()) : "{smluvní účet}");
          out = out.replace(/\{datum splatnosti\}/gi, this.splatnost ? markVar(this.splatnost.trim()) : "{datum splatnosti}");
          out = out.replace(/\{částka\}/gi, this.castka ? markVar(this.castka.trim()) : "{částka}");
          out = out.replace(/\{celková částka\}/gi, targetCelkovaCastka);

          // 5b. AUTOMATICKÁ POLE VE SLOŽENÝCH ZÁVORKÁCH (celé dědické řízení)
          if (this.selected && this.getCategorySection(this.selected.category) === 'inheritance') {
            const getPart = key => {
              const value = String(this.additionalValues[key] || '').trim();
              return value ? markVar(value) : `{${key}}`;
            };
            const composed = `${getPart('jméno')} ${getPart('příjmení')}, nar. ${getPart('datum narození')}, trvale bytem ${getPart('trvalý pobyt')}`;
            out = out.replace(/\{jméno\s*,\s*příjmení\s*,\s*datum narození\s*,\s*trvalý pobyt\}/gi, composed);
            const composedCustomer = `${getPart('jméno a příjmení')}, nar. ${getPart('datum narození')}, bytem ${getPart('adresa zákazníka')}`;
            out = out.replace(/\{jméno\s+a\s+příjmení\s*,\s*datum narození\s*,\s*adresa zákazníka\}/gi, composedCustomer);
            for (const key of this.additionalPlaceholderFields) {
              const value = String(this.additionalValues[key] || '').trim();
              if (!value) continue;
              // Nahradí opakovaný výskyt stejné proměnné, v HTML zachová atributy a escapuje text.
              out = out.replace(/\{([^{}<>]+)\}/g, (whole, label) => label.trim() === key ? markVar(value) : whole);
            }
          }

          // 6. DYNAMICKÁ ZMĚNA TEXTŮ PODLE ZVOLENÉ ZNAČKY
          if (this.brand === 'de') {
            out = out.replace(/https:\/\/zakaznici\.epet\.cz\/login/gi, "https://zakaznici.dobra-energie.eu/");
            out = out.replace(/https:\/\/zakaznici\.epet\.cz\/forgotten-password/gi, "https://zakaznici.dobra-energie.eu/");
            out = out.replace(/info@epet\.cz/gi, "info@dobra-energie.eu");
            out = out.replace(/https:\/\/epet\.cz\/chci-prepsat-smlouvu-na-jinou-osobu-38/gi, "https://dobra-energie.eu/chci-prepsat-smlouvu-na-jinou-osobu-38");
            out = out.replace(/(?:\+420\s*)?255[\s-]*(?:70[\s-]*70[\s-]*99|707[\s-]*099)/g, "226 284 283");
            out = out.replace(/(?:<p>)?\s*V případě úhrady v EUR[\s\S]*?2108721845\/2700[\s\S]*?pod\s*stejným variabilním symbolem\.?\s*(?:<\/p>)?/gi, "");
            // Nejdříve nahradíme celý obchodní název včetně právní formy
            out = out.replace(
            /\b(?:epet(?:\s+energie)?|EP\s+ENERGY\s+TRADING),?(?:\s|&nbsp;)*a\.\s*s\.?/gi,
              "Dobrá Energie, s. r. o.,"
              );

                        // Poté případné názvy bez právní formy
                    out = out.replace(/\bepet\s+energie\b/gi, "Dobrá Energie");
out = out.replace(/\bepet\b/gi, "Dobrá Energie");
            out = out.replace(/27386643/g, "24240834");
            out = out.replace(/9960227\/0100/g, "3131444/0100");
          }

          out = this.applyBrandTableColors(out);
          return out;
        },

        escapeHtml(value) {
          return String(value ?? '').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[ch]));
        },

        parseMoney(value) {
          if (value === null || value === undefined) return 0;
          const cleaned = String(value)
            .replace(/\s|\u00A0/g, '')
            .replace(/Kč/gi, '')
            .replace(/,/g, '.')
            .replace(/[^0-9.-]/g, '');
          const num = Number(cleaned);
          return Number.isFinite(num) ? num : 0;
        },

        formatMoney(value) {
          const num = Number(value) || 0;
          return num.toLocaleString('cs-CZ', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        },

        debtRows() {
          const rows = [];
          const lines = (this.dluhyRadky || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
          for (const line of lines) {
            const parts = line.split(';').map(p => p.trim());
            rows.push({
              druh: parts[0] || 'Záloha',
              vs: parts[1] || '',
              smluvniUcet: parts[2] || '',
              splatnost: parts[3] || '',
              castka: parts[4] || ''
            });
          }
          if (!rows.length && (this.vs || this.smluvniUcet || this.splatnost || this.castka)) {
            rows.push({
              druh: 'Záloha',
              vs: this.vs,
              smluvniUcet: this.smluvniUcet,
              splatnost: this.splatnost,
              castka: this.castka
            });
          }
          if (!rows.length) {
            rows.push({ druh: 'Záloha', vs: '{variabilní symbol}', smluvniUcet: '{smluvní účet}', splatnost: '{datum splatnosti}', castka: '{částka}' });
            rows.push({ druh: 'Záloha', vs: '{variabilní symbol}', smluvniUcet: '{smluvní účet}', splatnost: '{datum splatnosti}', castka: '{částka}' });
          }
          return rows;
        },

        debtTableHtml() {
          const brandColor = this.currentBrandColor;
          const border = '#d1d5db';
          const rows = this.debtRows();
          const total = rows.reduce((sum, row) => sum + this.parseMoney(row.castka), 0);
          const totalText = total > 0 ? this.formatMoney(total) : '{celková částka}';
          const body = rows.map(row => `
            <tr>
              <td style="border:1px solid ${border}; padding:7px 8px;">${this.escapeHtml(row.druh || 'Záloha')}</td>
              <td style="border:1px solid ${border}; padding:7px 8px;">${this.escapeHtml(row.vs || '{variabilní symbol}')}</td>
              <td style="border:1px solid ${border}; padding:7px 8px;">${this.escapeHtml(row.smluvniUcet || '{smluvní účet}')}</td>
              <td style="border:1px solid ${border}; padding:7px 8px;">${this.escapeHtml(row.splatnost || '{datum splatnosti}')}</td>
              <td style="border:1px solid ${border}; padding:7px 8px; text-align:right; white-space:nowrap;">${this.escapeHtml(row.castka || '{částka}')}</td>
              <td style="border:1px solid ${border}; padding:7px 8px;">Kč</td>
            </tr>`).join('');
          return `
            <table class="table-upominka" style="width:100%; border-collapse:collapse; margin:14px 0 18px; font-family:Arial,sans-serif; font-size:11pt;">
              <thead>
                <tr>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:left;">Druh dokladu</th>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:left;">Variabilní symbol</th>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:left;">Smluvní účet</th>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:left;">Splatnost</th>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:right;">Částka</th>
                  <th style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:left;">Měna</th>
                </tr>
              </thead>
              <tbody>${body}</tbody>
              <tfoot>
                <tr>
                  <td colspan="4" style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:right;"><strong style="color:#ffffff;">Platby po splatnosti celkem</strong></td>
                  <td style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px; text-align:right; white-space:nowrap;"><strong style="color:#ffffff;">${this.escapeHtml(totalText)}</strong></td>
                  <td style="background:${brandColor}; color:#ffffff; border:1px solid ${border}; padding:7px 8px;"><strong style="color:#ffffff;">Kč</strong></td>
                </tr>
              </tfoot>
            </table>`;
        },

        showToast(msg) {
          this.toast = msg;
          setTimeout(() => this.toast = '', 2000);
        },

        async copyRich(t) {
          const el = document.querySelector('.preview-paper');
          const cleanHtml = sanitizeForCopy(el.innerHTML, this.currentBrandTextColor);
          const handler = (e) => {
            e.clipboardData.setData('text/html', cleanHtml);
            e.clipboardData.setData('text/plain', el.innerText);
            e.preventDefault();
          };
          document.addEventListener('copy', handler);
          try {
            const successful = document.execCommand('copy');
            if (successful) {
              this.selectedCopied = true;
              if (t && t.id) this.rememberRecent(t.id);
              this.showToast("Zkopírováno!");
              setTimeout(() => this.selectedCopied = false, 2000);
            }
          } catch (err) {
            console.error('Copy failed', err);
          } finally {
            document.removeEventListener('copy', handler);
          }
        },

        attachmentHref(file) {
          const originalUrl = String(file?.url || '').trim();

          if (!originalUrl) return '#';

          // ID z běžných Google Drive odkazů.
          const drivePatterns = [
            /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i,
            /drive\.google\.com\/open\?(?:[^#]*&)?id=([a-zA-Z0-9_-]+)/i,
            /drive\.google\.com\/uc\?(?:[^#]*&)?(?:export=[^&]+&)?id=([a-zA-Z0-9_-]+)/i
          ];

          for (const pattern of drivePatterns) {
            const match = originalUrl.match(pattern);
            if (match?.[1]) {
              // Přímé stažení uloženého souboru (PDF, DOCX, XLSX...).
              return `https://drive.google.com/uc?export=download&id=${encodeURIComponent(match[1])}`;
            }
          }

          // Google Sheets: exportujeme jako XLSX, aby kliknutí skutečně stáhlo soubor.
          const sheetMatch = originalUrl.match(/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/i);
          if (sheetMatch?.[1]) {
            return `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetMatch[1])}/export?format=xlsx`;
          }

          // Google Docs: export do DOCX.
          const docMatch = originalUrl.match(/docs\.google\.com\/document\/d\/([a-zA-Z0-9_-]+)/i);
          if (docMatch?.[1]) {
            return `https://docs.google.com/document/d/${encodeURIComponent(docMatch[1])}/export?format=docx`;
          }

          // Google Slides: export do PPTX.
          const slidesMatch = originalUrl.match(/docs\.google\.com\/presentation\/d\/([a-zA-Z0-9_-]+)/i);
          if (slidesMatch?.[1]) {
            return `https://docs.google.com/presentation/d/${encodeURIComponent(slidesMatch[1])}/export/pptx`;
          }

          // Ostatní bezpečné HTTP(S) odkazy ponecháme beze změny.
          try {
            const resolved = new URL(originalUrl, window.location.href);
            if (!['http:', 'https:'].includes(resolved.protocol)) return '#';
            return resolved.href;
          } catch (err) {
            console.error('Neplatný odkaz přílohy:', originalUrl, err);
            return '#';
          }
        }
      }
    }

    function sanitizeForCopy(html, colorHex) {
      const styleBlock = `
        <style>
          body, p, div, span, td, th {
            font-family: Arial, sans-serif;
            font-size: 11pt;
          }

          a {
            color: ${colorHex};
            font-weight: bold;
            text-decoration: none;
          }

          b, strong {
            color: ${colorHex};
            font-weight: bold;
          }

          em, i {
            color: ${colorHex};
            font-style: italic;
          }

          tr[data-brand-row],
          tr[data-brand-row] > th,
          tr[data-brand-row] > td {
            background-color: ${colorHex} !important;
          }
        </style>
      `;

      const root = document.createElement("div");
      root.innerHTML = html;

      // Odstranění nežádoucích pozadí mimo označené tabulkové řádky.
      root.querySelectorAll("*").forEach((element) => {
        if (element.closest(".table-upominka, tr[data-brand-row]")) {
          return;
        }

        element.style.background = "transparent";
        element.style.backgroundColor = "transparent";
      });

      // Barva se vloží přímo do HTML kvůli Outlooku a dalším e-mailovým klientům.
      root.querySelectorAll("tr[data-brand-row]").forEach((row) => {
        row.style.background = colorHex;
        row.style.backgroundColor = colorHex;

        row.querySelectorAll("th, td").forEach((cell) => {
          cell.style.background = colorHex;
          cell.style.backgroundColor = colorHex;
        });
      });

      return styleBlock + root.innerHTML;
    }

    function stableTemplateId(value) {
      const input = String(value || "template");
      let hash = 2166136261;

      for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
      }

      return `tpl-${(hash >>> 0).toString(36)}`;
    }

    function normalizeFromDataObject(obj) {
      return Object.entries(obj).map(([key, val]) => ({
        id: stableTemplateId(key),
        subject: key.replace(/Předmět\s*:\s*/i, ""),
        category: val.category || (val.tags && val.tags[0]) || "Ostatní",
        tags: Array.isArray(val.tags) ? val.tags : [],
        date: val.date || val.updated || null,
        body: val.text || "",
        attachments: Array.isArray(val.files)
          ? val.files.map((file) => {
              if (typeof file === "string") {
                return {
                  name: file.split("/").pop(),
                  url: file,
                  type: file.split(".").pop().toLowerCase()
                };
              }

              return file;
            })
          : []
      }));
    }
