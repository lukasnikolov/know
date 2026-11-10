# Smart dokumentace — EPET & Dobrá energie

Aplikace pro GitHub Pages. Vzhled a chování původního HTML byly zachovány; katalog dokumentů je oddělen od kódu.

## Soubory
- `index.html` – HTML rozhraní a externí knihovny Bootstrap, Font Awesome a Alpine.js
- `style.css` – vzhled, responzivita a barevné varianty EPET/DE
- `app.js` – vyhledávání, filtrování, oblíbené, historie, kopírování a stahování
- `dokumenty.js` – seznam dokumentů podle kategorií; nejčastěji upravovaný soubor

## Nasazení na GitHub Pages
1. V repozitáři `lukasnikolov/know` vytvoř složku `smart-dokumentace/` a vlož do ní uvedené čtyři soubory.
2. Pokud repozitář používá GitHub Pages z větve `main`, stránka se zveřejní na `https://lukasnikolov.github.io/know/smart-dokumentace/`.
3. V Google Sites můžeš vložit URL přes **Vložit > Vložit adresu URL**, případně jako odkaz.
4. Chceš-li přidat dokument, uprav `dokumenty.js`: v odpovídající kategorii přidej objekt se `name`, `url`, `format` a `brand` (`epet`/`de`/`shared`).

## Omezení a ochrana dat
- `know` je v současnosti **veřejný** repozitář. Všechny položky `dokumenty.js` včetně názvů a Google Drive URL budou veřejně čitelné, pokud je publikujete do tohoto repozitáře.
- Oprávnění k otevření dokumentů dál spravuje Google Drive. GitHub Pages dokumenty neukládá ani nezajistí jejich neveřejnost.
- GitHub Pages sám neposkytuje uživatelské heslo pro přístup k privátní aplikaci. Pro skutečné omezení přístupu je zapotřebí jiné řešení nasazení a autentizace.
- Oblíbené, nedávné a počty použití jsou uložené jen do localStorage daného prohlížeče; mezi kolegy se nesynchronizují.
- Není automatická synchronizace obsahu Google Drive ani automatické přidávání souborů. Katalog se aktualizuje úpravou `dokumenty.js` na GitHubu.
- Pro bezchybný chod je nutné internetové připojení kvůli externím knihovnám a Google Drive dokumentům.