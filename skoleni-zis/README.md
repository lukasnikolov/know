# Školicí manuály ZIS – rozcestník pro Znalostku

Tato složka obsahuje samostatnou vstupní stránku (`index.html`) a 31 původních HTML manuálů z dodaného ZIP souboru. Všechny manuály byly zkopírovány **beze změny jejich obsahu a odkazů**.

## Adresa po publikaci na GitHub Pages

Očekávaná adresa, pokud je GitHub Pages publikovaný z větve `main` a kořene repozitáře `lukasnikolov/know`:

`https://lukasnikolov.github.io/know/skoleni-zis/`

Při vložení na Google Sites použijte tuto URL nebo možnost Vložit → Adresa URL.

## Struktura

- `index.html` – responzivní rozcestník, vyhledávání bez diakritiky, filtrování podle školicího dne, odkazy na manuály.
- `1-den/` až `6-den/` – jednotlivé původní HTML manuály.
- `minimanualy/` – jednotlivé původní HTML minimanuály.
- `manifest.json` – seznam názvů a umístění všech manuálů.

Každý manuál se otevírá v nové záložce. Externí obrázky, videa, formuláře a dokumenty používají původní adresy a jejich dostupnost závisí na původních službách.

Při aktualizaci manuálu nahraďte odpovídající HTML soubor a zachovejte jeho název v cestě. Při přidání nového manuálu jej také přidejte do rozcestníku a `manifest.json`.
