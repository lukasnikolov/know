# Smart Engine v2.9 – Šablony epet / Dobrá Energie

Tato stránka je určena pro GitHub Pages `https://lukasnikolov.github.io/know/sablony/`.

- `index.html` – rozhraní katalogu a načtení aktuálních dat šablon.
- `style.css` – původní vzhled Smart Engine v2.9.
- `app.js` – funkce katalogu, vyhledávání, vyplnění proměnných a kopírování.
- `../sablony.js` – **jediný zdroj šablon** uložený v kořeni repozitáře `know`.

Když se změní kořenový `sablony.js` ve větvi `main`, nová verze se po nasazení GitHub Pages načte při každém novém otevření/obnovení stránky. Parametr `v=Date.now()` vynutí nový požadavek namísto staré cache prohlížeče. Není potřeba měnit commit SHA ani vloženou URL v Google Sites. Již otevřená karta se sama nepřenačte.

Do Google Sites vložte adresu `/know/sablony/` přes **Vložit > URL**, nikoli samostatný skript. Některá prostředí mohou blokovat schránku či localStorage; v tom případě otevřete aplikaci v samostatném okně.

**Bezpečnost:** Repozitář a GitHub Pages jsou veřejné. Do šablon a aplikace neukládejte důvěrná zákaznická data, hesla ani interní přístupové klíče.
