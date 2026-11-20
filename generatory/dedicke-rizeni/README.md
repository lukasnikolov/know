# DINHE – Generátory dědického řízení

Samostatný katalog 20 HTML generátorů ze zdrojového archivu DINHE.zip.

Všechny zdrojové HTML kódy byly zachovány a doplněny o společnou vzhledovou a UX vrstvu (assets/theme.css, assets/ui.js). V původních skriptech nebyly měněny business podmínky, výpočty, endpointy ani texty dopisů.

## Publikování

Cílová cesta: generatory/dedicke-rizeni/
Rozcestník: https://lukasnikolov.github.io/know/generatory/dedicke-rizeni/
Každý generátor: https://lukasnikolov.github.io/know/generatory/dedicke-rizeni/<slug>/

## Pozor

* Šablona „Více dědiců“ a šablona „Známe dědice (je pouze jeden)“ mají v ZIPu identický původní HTML obsah. Varianty je potřeba věcně prověřit.
* Endpointy Google Apps Script jsou převzaté ze zdrojových souborů beze změny. Externí generování PDF/Word je závislé na jejich provozu a přístupových oprávněních.
* Statické stránky na GitHub Pages mohou být veřejné. Neukládejte do repozitáře osobní údaje zákazníků ani tajné klíče.
* Vložená kopírovací UX vrstva zachovává pozici stránky a hlásí úspěch pouze po potvrzení kopírování.
* Ostatní generátory bez e-mailové sekce mají zachované původní interakce bez přidaných kopiovacích tlačítek.

## Struktura

- `index.html`: katalog s vyhledáváním, kategoriemi a stránkováním
- `assets/theme.css`: sdílený profesionální vzhled
- `assets/ui.js`: navigace, volitelný PDF import, toast a kopírování
- `<slug>/index.html`: původní HTML generátoru s odkazy na sdílené soubory
- `manifest.json`: seznam generátorů, cest a kontrolních součtů původního HTML
