# Korespondence určená k tisku

18 generátorů pro epet a Dobrou Energii, připravených pro `generatory/korespondence/` v repozitáři `lukasnikolov/know`.

- Originální HTML, vstupy, JavaScript, Apps Script endpointy a texty dopisů byly zachovány. Přidány pouze odkazy na sdílenou vizuální vrstvu a identifikace šablony na body.
- Obrázky v `assets/` jsou originální podklady extrahované z dodaných DOCX. Změna rezervovaného příkonu používá vlastní dvojici podkladů.
- Měřítko 75 % je výchozí, zmenšuje se při nedostatku šířky; k dispozici 50 %, 100 % a celá stránka. Dlouhé dopisy se zobrazují jako prodloužený webový náhled, nikoli přesná stránková sazba Wordu.
- Prázdný dopis zachovává původní CKEditor i fallback.
- Konfigurace firemních údajů je oddělená. Původní texty šablon (včetně čísel uvedených v nich) a exportní payloady nejsou přepisovány.
- Ověřena shoda původních skriptů, formulářových prvků a markup náhledu před a po úpravě. Neověřeno v živé službě Apps Script ani v Google Sites.

## Nasazení
Rozbalte ZIP do kořene repozitáře (vznikne `generatory/korespondence/`), commitněte a publikujte GitHub Pages. Stávající `generatory/dedicke-rizeni/` se nemění. Pro lokální náhled spusťte v kořeni `python -m http.server 8000` a otevřete `http://localhost:8000/generatory/korespondence/`.
