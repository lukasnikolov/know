# Šablony zápisů do ZIS

Samostatná, kompaktní aplikace pro pracovní zápisy zákaznické péče. Vychází ze souboru **Vložený text(20261119-112933).txt** dodaného dne 19. 11. 2026.

**GitHub Pages:** https://lukasnikolov.github.io/know/nastroje/zapisy-zis/

## Funkce

- Katalog **20 originálních záznamů**; hlavní hladiny: Smlouva (10), Fakturace (8), Platby a upomínání (2).
- Hladina 1 a 2 vlevo, vyhledávání v názvu, textu a hladinách.
- Dvě kompaktní karty vedle sebe (na užší obrazovce jedna), stránkování po osmi záznamech.
- **Kopírovat** přímo na každé kartě: jedním kliknutím zkopíruje původní text zápisu bez otevírání bočního náhledu a zobrazí potvrzení o úspěchu.
- **Upravit** na kartě otevírá náhled s původními metadaty **Řešitel**, **Stav** a možností dočasné úpravy textu a kopírování. Pokud je schránka v prohlížeči zablokována, aplikace nabídne označený text k ručnímu kopírování.
- Navigace z aplikace [Dopisy](../dopisy/). Původní samostatná aplikace [Šablony úkolů](../../sablony/ukoly/) nebyla měněna.
- Žádné zákaznické hodnoty se neukládají do databáze ani do localStorage.

## Upozornění k původním datům

Převzato bez automatické korekce. U **18 z 20** záznamů se objevuje `ŘEŠITEL: UKONČENÍ RELACE` a `STAV: JÁ`, což podle významu vypadá prohozeně. Aplikace na to upozorňuje v náhledu. U položky **SPLÁTKOVÝ KALENDÁŘ - DOTAZ** je původní text s požadavkem na úhradu třetiny dluhu před žádostí; před použitím ověřte aktuálnost tohoto postupu. U položky o informativní SMS končí věta nedokončeně.

Před vložením do ZIS vždy zkontrolujte správnost zápisu, oprávnění, údaje o zákazníkovi, hlídané termíny i aktuální interní postupy. Repozitář a GitHub Pages jsou veřejné; do kódu nikdy nevkládejte skutečné osobní údaje zákazníků.
