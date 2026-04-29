// ===== Společný blok: Zákaznický portál (upravíš na jednom místě) =====
const PORTAL_URL = "https://zakaznici.epet.cz/login";
const PORTAL_BLOCK = `
<p>Rádi bychom Vás také informovali, že požadavky můžete řešit i přes náš Zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu <a href="${PORTAL_URL}" target="_blank">Zákaznický portál</a></p>`;

// ===== Společný blok: Oslovení (sjednocené) =====
// Pozn.: Výchozí je "pane". V UI se automaticky přepíná na "paní" dle volby pohlaví.
const OSLOVENI_BLOCK = `<p>Dobrý den, pane XXX,</p>`;

// ===== Společný blok: Údaje odběrného místa (EAN/EIC a Adresa) =====
// Hodnoty zadané zde se automaticky propíší do všech textů šablon
const EAN_BLOCK = "[EAN/EIC KÓD]";
const ADRESA_BLOCK = "[ADRESA ODBĚRNÉHO MÍSTA]";
// ===== Společný blok: Platební údaje (kompaktní verze) =====
const PLATBA_BLOCK = `
<p>
  <b>Platební údaje:</b><br>
  Číslo účtu: <b>9960227/0100</b><br>
  Variabilní symbol: <b>[VARIABILNÍ SYMBOL]</b><br>
  Částka k úhradě: <b>[ČÁSTKA] Kč</b><br>
  Splatnost: <b>[DATUM SPLATNOSTI]</b> vždy k 15. dni v měsíci
</p>`;
// ===============================================
// =====================================================================

const data = {
        /* ========================= Nedoručenky ========================= */

"Nedoručený platební kalendář – opětovné zaslání": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu Vám zasíláme platební kalendář k dodávce elektřiny/plynu pro následující období.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Nedoručenky"]
},
"Nedoručený úvodní dopis – opětovné zaslání": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám, že jste si za dodavatele energií vybral právě společnost epet. Věříme, že s našimi službami budete spokojeni.</p>

<p>V příloze tohoto e-mailu Vám zasíláme <strong>Uvítací dopis</strong>, <strong>Rekapitulaci smlouvy</strong> a případně také rozpis zálohových plateb pro následující období dodávky, tedy <strong>Platební kalendář</strong>, který je v souladu s Vaší smlouvou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Nedoručenky"]
},
"Nedoručená upomínka – opětovné zaslání": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás upozornit, že u Vaší smlouvy evidujeme neuhrazenou platbu / neuhrazené platby. V příloze tohoto e-mailu naleznete detailní informace.</p>

<p>Prosíme Vás o kontrolu plateb a v případě prodlení žádáme o urychlené uhrazení dlužné částky.</p>

<p>Nedojde-li k uhrazení pohledávky do 5 pracovních dnů od data odeslání této upomínky, budeme nuceni vystavit penalizační fakturu a účtovat Vám úroky z prodlení a smluvní pokutu dle <em>Všeobecných obchodních podmínek</em>.</p>

<p>Jedná-li se o neuhrazenou zálohu, upozorňujeme, že přijaté platby jsou použity na úhradu nejstarších neuhrazených předpisů záloh. Dodržováním předpisu záloh předejdete nesprávnému přiřazování plateb.</p>

<p>V případě nejasností nás prosím kontaktujte na zákaznické lince nebo e-mailem uvedeným na dokladu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Nedoručenky"]
},
         /* ========================= Fakturace ========================= */
"Opravná faktura – oprava fakturačních údajů": {
    date: "2026-04-21",
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme v rámci interní kontroly zjistili, že u Vaší smlouvy došlo v minulosti k nesprávnému nastavení fakturačních údajů, které nebylo v plném souladu s uzavřenou smlouvou.</p>

<p>Z tohoto důvodu byla nyní provedena oprava vyúčtování tak, aby odpovídalo podmínkám sjednaným ve smlouvě, kterou jste s námi uzavřel/a. Oprava se týká minulého období a je zohledněna formou opravné faktury.</p>

<p>Rádi bychom Vás ujistili, že:</p>
<ul>
  <li>nejde o změnu smluvních podmínek,</li>
  <li>nejde o nové poplatky,</li>
  <li>jedná se výhradně o narovnání fakturace dle původní smlouvy.</li>
</ul>

<p>Chápeme, že tato situace může vzbuzovat otázky. Pokud budete potřebovat podrobnější vysvětlení nebo si budete přát projít konkrétní položky opravné faktury, je Vám naše zákaznická linka plně k dispozici.</p>

<p>Děkujeme za pochopení a omlouváme se za komplikace spojené s touto administrativní chybou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Opravná data distributora – vystavení opravné faktury": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme od distributora obdrželi opravná data pro fakturaci za období <strong>{DD. MM. RRRR – DD. MM. RRRR}</strong>.</p>

<p>Na základě této skutečnosti Vám byla vystavena opravná faktura, která Vám dorazí v samostatném e-mailu nebo poštou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Fakturace po samoodečtu – vysvětlení periodické faktury (Backbilling faktura)": {
    text: `${OSLOVENI_BLOCK}
<p>tato záležitost souvisí s fakturou vystavenou dne <strong>{DD. MM. RRRR}</strong>, kterou jsme Vám zaslali na základě Vámi nahlášeného samoodečtu.</p>

<p>Následně Vám byla zaslána také standardní periodická faktura vystavená na základě odečtů od distributora. Tato faktura má číslo <strong>{číslo tiskového dokladu}</strong>.</p>

<p>V této periodické faktuře je zaznamenáno i období, které již bylo zahrnuto v předchozí faktuře vystavené na základě Vámi zaslaného samoodečtu. Tuto periodickou fakturu jsme na základě požadavků distributora povinni pravidelně vystavit.</p>

<p>V detailním rozpisu periodické faktury si však můžete všimnout, že položky, které byly zahrnuty do faktury vystavené na základě samoodečtu, jsou v periodické faktuře odečteny, tedy uvedeny se znaménkem minus.</p>

<p>Nemusíte se tedy obávat, vyúčtována je pouze skutečná spotřeba, která doposud fakturována nebyla.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Kopie faktury – opětovné zaslání": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vám v příloze tohoto e-mailu zasíláme kopii faktury za dodávky energií.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"SPOT ceny – návod a výpočetní tabulka": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete návod a výpočetní tabulku, pomocí kterých si můžete ověřit výpočet ceny SPOT.</p>

${PORTAL_BLOCK}`,
    files: [
        { name: "NÁVOD NA VÝPOČET SPOT", url: "https://drive.google.com/file/d/1Mf1XabKRmCZM2kqQNztQvnMKsuip-_Tq/view?usp=drive_link", type: "pdf", brand: "epet" },
        { name: "SPOT VÝPOČTOVÁ TABULKA", url: "https://docs.google.com/spreadsheets/d/1zmjmJaIwwL7bH5X9yyuL_2qP9G4UKhoo6dGtyKXyBaY/edit?usp=drive_link", type: "xls" }
    ],
    tags: ["Fakturace"]
},
"Krátké první vyúčtování – sladění s odečtovým cyklem": {
    text: `${OSLOVENI_BLOCK}
<p>faktura byla vystavena z důvodu zahájení dodávky energií k Vaší smlouvě, která začala platit dne <strong>{DD. MM. RRRR}</strong>.</p>

<p>Váš distributor má však pro odběrné místo nastaven pravidelný odečtový měsíc <strong>{název měsíce}</strong>. Z tohoto důvodu byla první faktura vystavena pouze za období od <strong>{DD. MM. RRRR}</strong> do <strong>{DD. MM. RRRR}</strong>, aby byl zajištěn soulad s pravidelnými odečty a zúčtovacím obdobím stanoveným distributorem.</p>

<p>Další faktury již budou standardně vystavovány podle dohodnutého fakturačního cyklu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Zálohy ve vyúčtovací faktuře – vysvětlení": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vám poskytli stručné vysvětlení, jak dochází k započítávání uhrazených záloh ve Vašich vyúčtovacích fakturách.</p>

<ul>
  <li><strong>Zálohy jsou zúčtovány pouze tehdy, pokud byly uhrazeny</strong> na náš účet nejpozději k datu vystavení, respektive k datu uskutečnění zdanitelného plnění (DUZP), vyúčtovací faktury.</li>
  <li>Rozhodujícím faktorem pro zúčtování zálohy je <strong>zúčtovací období</strong>, nikoliv samotné datum vystavení faktury.</li>
  <li>Pokud faktura pokrývá více než polovinu daného zúčtovacího období, například období končí <strong>po 15. dni v měsíci</strong>, záloha za daný měsíc se zúčtuje v plné výši.</li>
  <li>Pokud období končí <strong>do 15. dne v měsíci</strong>, záloha za daný měsíc se přesune do následující vyúčtovací faktury.</li>
</ul>

<p><strong>Shrnutí:</strong></p>

<ul>
  <li>Záloha se započítá pouze tehdy, když byla uhrazena do data vystavení / DUZP faktury.</li>
  <li>Klíčové je zúčtovací období, nikoliv datum vystavení faktury.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Mimořádná fakturace – DUZP nelze zpětně upravit": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail a požadavek na úpravu <strong>data uskutečnění zdanitelného plnění (DUZP)</strong> u mimořádné fakturace.</p>

<p>Rádi bychom Vás informovali, že <strong>DUZP nelze u mimořádné fakturace stanovit ani upravit zpětně dle přání zákazníka</strong>. DUZP je stanoveno <strong>dnem skutečného zjištění a potvrzení odečtových dat distributorem</strong>.</p>

<p>V souladu se zákonem č. 235/2004 Sb., o dani z přidané hodnoty, a zákonem č. 458/2000 Sb., energetický zákon, je dodavatel povinen vycházet z <strong>potvrzených údajů o spotřebě od distributora</strong> jako provozovatele měření. Samoodečet nahlášený zákazníkem, včetně fotodokumentace, slouží jako podklad k ověření, <strong>není však závazným fakturačním údajem</strong>.</p>

<p>Upozorňujeme, že nahlášení odečtových hodnot zákazníkem <strong>nezaručuje jejich automatickou akceptaci distributorem</strong> – může dojít k jejich zamítnutí nebo úpravě, například z důvodu nesouladu s historií spotřeby.</p>

<p>Z výše uvedených důvodů tedy <strong>není možné vystavit mimořádnou fakturu k Vámi požadovanému datu ani k tomuto datu stanovit DUZP</strong>. Jakmile od distributora obdržíme potvrzená fakturační data, bude faktura vystavena automaticky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Potvrzení přijetí formuláře a zahájení měsíční fakturace výkupu z naší strany" : {
    date: "2026-02-10",
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme, že jsme z Vaší strany obdrželi řádný souhlas týkající se fakturace výkupu elektřiny.</p>

<p>Na základě tohoto potvrzení Vás informujeme, že od této chvíle bude fakturace za výkup elektřiny probíhat z naší strany. Faktury za výkup budou vystavovány pravidelně v měsíčním intervalu, a to dle platných smluvních podmínek a dostupných měřených dat.</p>

<p>Děkujeme za Vaši součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Výkup elektřiny – nesouhlas s fakturací z naší strany": {
    date: "2026-02-10",
    text: `${OSLOVENI_BLOCK}
<p>tímto potvrzujeme, že jsme obdrželi Vaše vyjádření nesouhlasu s tím, aby fakturace výkupu elektřiny byla zajišťována z naší strany.</p>

<p>Na základě tohoto nesouhlasu Vás informujeme, že z naší strany nebude docházet k vystavování faktur za výrobu / výkup elektřiny.</p>

<p>Děkujeme za Vaši součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},
"Změna fakturačního cyklu – z měsíční na roční": {
    date: "2026-04-10",
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> došlo ke změně fakturačního cyklu z <strong>měsíční fakturace na roční</strong>.</p>

<p>Vyúčtovací faktury Vám budou nově vystavovány k <strong>{termín vystavení / odečtový měsíc}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Fakturace"]
},      
      /* ========================= Smlouvy ========================= */
"Potvrzení změny korespondenční adresy": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vás informujeme, že jsme pro odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong> upravili doručovací adresu na <strong>{nová doručovací adresa}</strong>.</p>

<p>Děkujeme Vám za aktualizaci kontaktních údajů.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Změna adresy odběrného místa – doložení dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>abychom mohli adresu odběrného místa u Vašeho zákaznického účtu změnit, budeme potřebovat doložit výpis z katastru nemovitostí, případně doklad o změně adresy, který Vám vydá obecní nebo městský úřad.</p>

<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Potvrzení změny adresy odběrného místa": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili adresu odběrného místa na <strong>{nová adresa odběrného místa}</strong>.</p>

<p>Děkujeme Vám za sdělení informace.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Změna trvalého bydliště – doložení dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>abychom mohli adresu trvalého bydliště u Vašeho zákaznického účtu změnit, budeme potřebovat doložit čestné prohlášení, jehož vzor zasíláme v příloze. Podepsaný sken tohoto prohlášení nám prosím zašlete na e-mail <strong>info@epet.cz</strong>.</p>

<p>Pokud byste změnu adresy raději doložili prostřednictvím kopie občanského průkazu, je nutné na této kopii z důvodu ochrany osobních údajů začernit všechny osobní údaje kromě <strong>jména a příjmení</strong>, <strong>data narození</strong> a <strong>adresy trvalého bydliště</strong>.</p>

<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/10vEwfyGojwqZ81yvP6xSLI-krF7sD0c0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1t-FFOcEzZWbmqzf-EL40m1hJ78dimmJE/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1tUTwgDiU9L4dTsoa_DfHvDrIJi4IDTuQ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - z C na D", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1HKsGDY14VD8bREp744I2ze7EXC29j7J6/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ z PO – změna sazby Firma → Dom", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Xra9Xs7KsPb-Tua_2V_8NE1F1__uCoo2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1BjeKuD2NOpyYjJCMO2TnU2tTrST3musN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/18CENh1sJWOtFSE7yiU8yNE1MopDxRhbi/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1RSfEY2py1TVAD-PNSK6F0IaWZtH_msub/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1VGTUSlS0NyAxG40XNawIsEsC73eLJ8vT/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1U-7HjEN_2Otc_Nqyc0SEEAVh-4-TbXh0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1e4hYb1RV5JyLxw9z3r3AibD29KA8cW5C/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1Ttt9kAPVvlk4_CvrkuLfz87KFFOT59W2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/19EgEqT3RMRUXJ7keWbJAcrwDZmp0zFPJ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1teyOWAV6mLki32XdqwKdzbdEmYMs-EL_/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1LrIXIU7SsdgKDCHOgxjk0WakJhKKAvps/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/18XD0We0JIohhqFO6h-a4DC5zHbnPq1VI/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1G6jgmnroL1sMOkjuCCz7N5MdYiryCvYr/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1SecyeJ5rUUHr1bZTw4jDwLa6imC1RXLO/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/15-HQqHUBlD-AuKxwl9lcTf2sm-ldW8_4/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1KTVPgMxS2QOKx4P38gyfYfgGAHvybg6n/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1X_9l-Wolx3jGoA_vKBLc50qfAX5FCQ3j/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOMÁCNOST", type: "pdf", brand: "de" }
    ],
    tags: ["Smlouvy"]
},
"Potvrzení změny trvalého bydliště": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili adresu Vašeho trvalého bydliště na <strong>{nová adresa trvalého bydliště}</strong>.</p>

<p>Děkujeme Vám za sdělení informace.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Změna sídla společnosti – doložení dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>abychom mohli adresu sídla společnosti u Vašeho zákaznického účtu změnit, budeme potřebovat doložit výpis z obchodního rejstříku. Pokud v něm provedená změna ještě není zapsána, můžete změnu doložit také zasláním notářského zápisu.</p>

<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Potvrzení změny sídla společnosti": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili adresu sídla společnosti na <strong>{nová adresa sídla společnosti}</strong>.</p>

<p>Děkujeme Vám za sdělení informace.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Zrušení zasílání SMS o přijaté platbě": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme, že jsme zrušili zasílání informativních SMS zpráv o přijaté platbě na telefonní číslo <strong>{telefonní číslo}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Kopie smlouvy – opětovné zaslání": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vám v příloze tohoto e-mailu zasíláme kopii Smlouvy o sdružených službách dodávky elektřiny/plynu č. <strong>{číslo smlouvy}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Potvrzení změny způsobu zasílání dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme, že jsme pro zákaznický účet číslo <strong>{číslo zákaznického účtu}</strong> nastavili zasílání korespondence způsobem: <strong>{Českou poštou na doručovací adresu / e-mailem / e-mailem i Českou poštou na doručovací adresu}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Přetržka při změně dodavatele – vysvětlení ochranné lhůty": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že o registraci odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> jsme požádali k nejbližšímu legislativně možnému termínu, tedy k datu <strong>{DD. MM. RRRR}</strong>.</p>

<p>Aktuálně registrace odběrného místa k naší společnosti probíhá v pořádku.</p>

<p>Odběrné místo se od <strong>{DD. MM. RRRR}</strong> nachází v ochranné lhůtě 10 pracovních dní, během které zákazníkovi nehrozí neoprávněný odběr.</p>

<p>Jakmile bude odběrné místo u naší společnosti aktivní, dojde na pokyn distributora k posunu data přihlášení zpět do minulosti tak, aby navazovalo na termín ukončení smlouvy u původního dodavatele.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Změna příjmení – doložení dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>pro změnu příjmení budeme potřebovat Vaši součinnost. Prosíme o doložení kopie občanského průkazu, na které bude začerněna Vaše fotografie, číslo občanského průkazu, rodné číslo a Váš podpis. Bez začerněných údajů nemůžeme doklad přijmout.</p>

<p>Občanský průkaz můžete nahradit čestným prohlášením, které Vám zasíláme v příloze tohoto e-mailu.</p>

<p>Čestné prohlášení prosím vyplňte, podepište a naskenované zašlete zpět na náš e-mail <strong>info@epet.cz</strong>.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/10vEwfyGojwqZ81yvP6xSLI-krF7sD0c0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1t-FFOcEzZWbmqzf-EL40m1hJ78dimmJE/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1tUTwgDiU9L4dTsoa_DfHvDrIJi4IDTuQ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - z C na D", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1HKsGDY14VD8bREp744I2ze7EXC29j7J6/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ z PO – změna sazby Firma → Dom", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Xra9Xs7KsPb-Tua_2V_8NE1F1__uCoo2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1BjeKuD2NOpyYjJCMO2TnU2tTrST3musN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/18CENh1sJWOtFSE7yiU8yNE1MopDxRhbi/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1RSfEY2py1TVAD-PNSK6F0IaWZtH_msub/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1VGTUSlS0NyAxG40XNawIsEsC73eLJ8vT/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1U-7HjEN_2Otc_Nqyc0SEEAVh-4-TbXh0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1e4hYb1RV5JyLxw9z3r3AibD29KA8cW5C/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1Ttt9kAPVvlk4_CvrkuLfz87KFFOT59W2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/19EgEqT3RMRUXJ7keWbJAcrwDZmp0zFPJ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1teyOWAV6mLki32XdqwKdzbdEmYMs-EL_/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1LrIXIU7SsdgKDCHOgxjk0WakJhKKAvps/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/18XD0We0JIohhqFO6h-a4DC5zHbnPq1VI/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1G6jgmnroL1sMOkjuCCz7N5MdYiryCvYr/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1SecyeJ5rUUHr1bZTw4jDwLa6imC1RXLO/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/15-HQqHUBlD-AuKxwl9lcTf2sm-ldW8_4/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1KTVPgMxS2QOKx4P38gyfYfgGAHvybg6n/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1X_9l-Wolx3jGoA_vKBLc50qfAX5FCQ3j/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOMÁCNOST", type: "pdf", brand: "de" }
    ],
    tags: ["Smlouvy"]
},
"Potvrzení změny příjmení": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za doložení podkladů ke změně příjmení.</p>

<p>Potvrzujeme, že změna příjmení byla v našem systému provedena.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
"Potvrzení změny kontaktních údajů": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání aktuálních kontaktních údajů a potvrzujeme jejich zaevidování k Vašemu zákaznickému účtu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smlouvy"]
},
       /* ========================= Distribuční změny ========================= */
"Změna rezervovaného příkonu – doložení dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>kontaktujeme Vás na základě informace od distributora, že u Vašeho odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> došlo ke snížení/navýšení rezervovaného příkonu.</p>

<p>Abychom mohli tuto změnu zpracovat i v našem systému, prosíme Vás o doložení následujících dokumentů:</p>

<ul>
  <li>Kopie smlouvy o připojení, kterou Vám distributor vystavil.</li>
  <li>Revizní zpráva.</li>
  <li>Vyplněný formulář „Žádost o změnu smlouvy – Domácnost/Firma“, který naleznete v příloze tohoto e-mailu.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" }
    ],
    tags: ["Distribuční změny"]
},
"Připojení mikrozdroje – montáž 4Q elektroměru": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že nás distributor informoval o plánované montáži nového 4Q elektroměru u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Montáž měřidla provede distributor dne <strong>{DD. MM. RRRR}</strong>.</p>

<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude montáž měřidla probíhat. Zároveň si prosím připravte aktuální <strong>revizní zprávu</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
 "Změna jističe / distribuční sazby – tepelné čerpadlo ČEZ/EG.D": {
    text: `${OSLOVENI_BLOCK}
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby v souvislosti s tepelným čerpadlem. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>

<p>Jedná se o:</p>
<ul>
  <li><strong>Žádost o změnu smlouvy</strong></li>
  <li><strong>Žádost o připojení</strong> – dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</li>
</ul>

<p>Doručit nám je můžete prostřednictvím e-mailu nebo poštou. Žádáme Vás o kompletní vyplnění ve spolupráci s revizním technikem, jedině tak bude požadavek distributorem přijat. Na vyřízení požadavku má distributor 30 kalendářních dní.</p>

<p>Po uplynutí této lhůty Vám distributor zašle Smlouvu o připojení. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či data, kdy byl podíl uhrazen.</p>

<p>Podepsaný originál <strong>Smlouvy o připojení</strong> a <strong>revizní zprávu</strong>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím naskenujte a zašlete na e-mail <strong>info@epet.cz</strong>, případně je okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

<p>Dále nám prosím zašlete <strong>protokol o instalaci tepelného čerpadla</strong> a <strong>výpočet tepelných ztrát</strong>. Dokumenty předáme distributorovi, který je vyžaduje pro změnu distribuční sazby.</p>

<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/11lbuZv6IW4UO4Jmejzy__ZxKf9v1Ispz/view?usp=drive_link", name: "ZMĚNA SAZBY A JISTIČE - EGD - DOM+PODN", type: "pdf" },
        { url: "https://drive.google.com/open?id=1jEHuxEKF7kiW2dCL2ejMCV-hd6NrOJeh", name: "ŽÁDOST O PŘIPOJENÍ ČEZ", type: "pdf" }
    ],
    tags: ["Distribuční změny"]
},
 "Změna jističe / distribuční sazby – ČEZ/EG.D": {
    text: `${OSLOVENI_BLOCK}
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>

<p>Jedná se o:</p>
<ul>
  <li><strong>Žádost o změnu smlouvy</strong></li>
  <li><strong>Žádost o připojení</strong> – dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</li>
</ul>

<p>Doručit nám je můžete prostřednictvím e-mailu nebo poštou. Žádáme Vás o kompletní vyplnění ve spolupráci s revizním technikem, jedině tak bude požadavek distributorem přijat. Na vyřízení požadavku má distributor 30 kalendářních dní.</p>

<p>Po uplynutí této lhůty Vám distributor zašle Smlouvu o připojení. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či data, kdy byl podíl uhrazen.</p>

<p>Podepsaný originál <strong>Smlouvy o připojení</strong> a <strong>revizní zprávu</strong>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím naskenujte a zašlete na e-mail <strong>info@epet.cz</strong>, případně je okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/11lbuZv6IW4UO4Jmejzy__ZxKf9v1Ispz/view?usp=drive_link", name: "ZMĚNA SAZBY A JISTIČE - EGD - DOM+PODN", type: "pdf" },
        { url: "https://drive.google.com/open?id=1jEHuxEKF7kiW2dCL2ejMCV-hd6NrOJeh", name: "ŽÁDOST O PŘIPOJENÍ ČEZ", type: "pdf" }
    ],
    tags: ["Distribuční změny"]
},
 "Změna jističe / distribuční sazby – PRE": {
    text: `${OSLOVENI_BLOCK}
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>

<p>Jedná se o:</p>
<ul>
  <li><strong>Žádost o změnu smlouvy</strong> – tento dokument nám zašlete prostřednictvím e-mailu na adresu <strong>info@epet.cz</strong> nebo poštou na adresu naší společnosti.</li>
  <li><strong>Žádost o připojení</strong> – jedná se o dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</li>
</ul>

<p>Originál žádosti o připojení zašlete na adresu <strong>PREdistribuce, a.s., Svornosti 3199/19a, 150 00 Praha 5</strong>.</p>

<p>Na vyřízení požadavku má distributor 30 kalendářních dní. Po uplynutí této lhůty Vám distributor zašle <strong>Smlouvu o připojení</strong>. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či data, kdy byl podíl uhrazen.</p>

<p>Podepsaný originál <strong>Smlouvy o připojení</strong> a <strong>revizní zprávu</strong>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím naskenujte a zašlete na e-mail <strong>info@epet.cz</strong>, případně je okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/open?id=11unN2RyEHVpvPrIy57bLQVpsy0OldIbw", name: "Žádost o smlouvu o připojení PRE.pdf", type: "pdf" }
    ],
    tags: ["Distribuční změny"]
},
"Změna jističe / distribuční sazby – tepelné čerpadlo PRE": {
    text: `${OSLOVENI_BLOCK}
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby v souvislosti s tepelným čerpadlem. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>

<p>Jedná se o:</p>
<ul>
  <li><strong>Žádost o změnu smlouvy</strong> – tento dokument nám zašlete prostřednictvím e-mailu na adresu <strong>info@epet.cz</strong> nebo poštou na adresu naší společnosti.</li>
  <li><strong>Žádost o připojení</strong> – jedná se o dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</li>
</ul>

<p>Originál žádosti o připojení zašlete na adresu <strong>PREdistribuce, a.s., Svornosti 3199/19a, 150 00 Praha 5</strong>.</p>

<p>Na vyřízení požadavku má distributor 30 kalendářních dní. Po uplynutí této lhůty Vám distributor zašle <strong>Smlouvu o připojení</strong>. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či data, kdy byl podíl uhrazen.</p>

<p>Podepsaný originál <strong>Smlouvy o připojení</strong> a <strong>revizní zprávu</strong>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím naskenujte a zašlete na e-mail <strong>info@epet.cz</strong>, případně je okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

<p>Dále nám prosím zašlete <strong>protokol o instalaci tepelného čerpadla</strong> a <strong>výpočet tepelných ztrát</strong>. Dokumenty předáme distributorovi, který je vyžaduje pro změnu distribuční sazby.</p>

<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/open?id=11unN2RyEHVpvPrIy57bLQVpsy0OldIbw", name: "Žádost o smlouvu o připojení PRE.pdf", type: "pdf" }
    ],
    tags: ["Distribuční změny"]
},
"Ověření hodnoty jističe – nesoulad s distributorem": {
    text: `${OSLOVENI_BLOCK}
<p>Váš distributor nás upozornil, že hodnota hlavního jističe, kterou eviduje, se liší od hodnoty uvedené na Vašem zákaznickém účtu.</p>

<p>Rádi bychom Vás proto požádali o sdělení skutečné hodnoty hlavního jističe u níže uvedeného odběrného místa.</p>

<p>Jedná se o odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Doložení podkladů ke změně hlavního jističe – ČEZ/EG.D": {
    text: `${OSLOVENI_BLOCK}
<p>Váš distributor nám sdělil, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> byla sjednána nová hodnota hlavního jističe, a to <strong>{XXX A}</strong>.</p>

<p>Rádi bychom Vás požádali o potvrzení této informace a doložení následujících dokumentů:</p>

<ul>
  <li><strong>Smlouva o připojení</strong></li>
  <li><strong>Revizní zpráva</strong> od elektrikáře</li>
</ul>

<p>Dokumenty nám můžete zaslat naskenované na e-mail <strong>info@epet.cz</strong>, případně poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

<p>Po obdržení potřebných podkladů změnu zaevidujeme na Vašem zákaznickém účtu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Změna jističe / distribuční sazby – oznámení termínu": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme vyřízení Vašeho požadavku na změnu distribuční sazby na <strong>{XXXX}</strong> / změnu hodnoty hlavního jističe na <strong>{XXXX A}</strong> u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

<p>Distributor tuto změnu provede k datu <strong>{DD. MM. RRRR}</strong>.</p>

<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude servisní zakázka probíhat. Připravte si také aktuální revizní zprávu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Změna jističe / distribuční sazby – potvrzení provedení": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme vyřízení Vašeho požadavku na změnu distribuční sazby na <strong>{XXXX}</strong> / změnu hodnoty hlavního jističe na <strong>{XXXX A}</strong> u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

<p>Distributor tuto změnu provedl k datu <strong>{DD. MM. RRRR}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Změna jističe / distribuční sazby – nový termín z důvodu závad": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme přijetí Vašeho požadavku na změnu hodnoty hlavního jističe / distribuční sazby na <strong>{XXXX}</strong> u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

<p>Distributor nás však informoval, že z důvodu zjištěné závady na odběrném místě nebylo možné plánovanou změnu uskutečnit v původním termínu.</p>

<p>Byl stanoven nový termín realizace změny, a to v rozmezí <strong>{DD. MM. RRRR – DD. MM. RRRR}</strong>.</p>

<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude servisní zásah probíhat, a o přípravu aktuální revizní zprávy.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Žádost o připojení (ŽOP) – doplnění údajů": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole podkladů pro <strong>{zde doplnit účel požadavku}</strong> jsme zjistili, že v žádosti chybějí následující údaje: <strong>{zde doplnit chybějící údaje}</strong>.</p>

<p>Prosíme Vás tedy o jejich doplnění, případně o doplnění podpisu. Opravené podklady nám následně zašlete zpět na e-mail <strong>info@epet.cz</strong>.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Doložení předávacího protokolu – nenavazující stavy": {
    text: `${OSLOVENI_BLOCK}
<p>kontaktoval nás Váš distributor ohledně nenavazujících stavů na Vašem měřidle.</p>

<p>Pro opravu stavů distributor vyžaduje předávací protokol k datu fyzického přepisu smlouvy. Pokud je Váš předávací protokol podepsán k jinému datu než k <strong>{DD. MM. RRRR}</strong>, prosíme Vás o jeho opravu.</p>

<p>Fyzický přepis smlouvy proběhl dne <strong>{DD. MM. RRRR}</strong>, proto Vás prosíme o doplnění právě tohoto data do předávacího protokolu.</p>

<p>Jakmile nám opravený protokol zašlete, předáme jej distributorovi, který následně provede úpravu stavů měřidla.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/open?id=1RRcnxT7Qik3mExjXMhERqRSNCKbHIWGn", name: "PŘEDÁVACÍ PROTOKOL", type: "pdf", brand: "epet" }
    ],
    tags: ["Distribuční změny", "Reklamace", "Fakturace"]
},
"Změna distribuční sazby z C na D u SVJ – doložení podkladů": {
    text: `${OSLOVENI_BLOCK}
<p>abychom mohli u distributora zažádat o změnu typu distribuční sazby z kategorie C na kategorii D, prosíme Vás o vyplnění a zaslání potřebného dokumentu.</p>

<p>Jedná se o:</p>
<ul>
  <li><strong>Čestné prohlášení</strong></li>
</ul>

<p>Rádi bychom Vás upozornili, že v důsledku změny distribuční sazby může dojít ke změně ceny regulovaných i neregulovaných položek souvisejících s provedenou změnou.</p>

<p>Zároveň bychom Vás chtěli informovat, že technik distributora si na místě ověří, zda se skutečně jedná o společné prostory domu. V opačném případě nebude změna provedena.</p>

<p>Všechny potřebné dokumenty k vyplnění zasíláme v příloze tohoto e-mailu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČP z PO - Pro změnu sazby z Firmy na DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12D_dEsRwYzt-bvlM47ABI3NMkejBW5ub/view?usp=drive_link", name: "ČP z PO - Pro změnu sazby z Firmy na DOM", type: "pdf", brand: "de" }
    ],
    tags: ["Distribuční změny"]
},
"Změna distribuční sazby z C na D u SVJ – potvrzení": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že na základě Vaší žádosti došlo dne <strong>{DD. MM. RRRR}</strong> ke změně distribuční sazby z <strong>{C..d}</strong> na <strong>{D..d}</strong> u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>V příloze tohoto e-mailu Vám zasíláme nový ceník, který obsahuje ceny pro sazby v kategorii D.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Žádost o Smlouvu o připojení – podáno o SOP": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání vyplněných dokumentů.</p>

<p>Potvrzujeme, že jsme na základě doložených podkladů podali u příslušného distributora žádost o vystavení nové <strong>Smlouvy o připojení</strong>.</p>

<p>Distributor má na vyřízení požadavku lhůtu <strong>30 kalendářních dní</strong>. Po jejím uplynutí Vám zašle Smlouvu o připojení.</p>

<p>Ve Smlouvě o připojení bude uvedeno, jaké změny je třeba realizovat na odběrném místě. Pokud v ní naleznete informaci o nutnosti úhrady podílu, prosíme o doložení potvrzení o platbě, případně o uvedení data, kdy byl podíl uhrazen.</p>

<p>Po podpisu smlouvy prosíme o její zaslání následovně:</p>

<ul>
  <li><strong>originál podepsané Smlouvy o připojení</strong> zašlete zpět distributorovi,</li>
  <li><strong>kopii podepsané smlouvy</strong> zašlete také nám, ideálně elektronicky na e-mail <a href="mailto:info@epet.cz">info@epet.cz</a>, případně poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
"Požadavek na změnu jističe / sazby – ZK doložil SOP - čekáme na termín": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání požadovaných dokumentů k Vaší žádosti o změnu distribuční sazby / změnu hodnoty hlavního jističe.</p>

<p>Potvrzujeme, že jsme na základě Vámi doložených podkladů předali požadavek k posouzení a zpracování příslušnému distributorovi.</p>

<p>Distributor nám následně sdělí konkrétní termín realizace změny. Jakmile od něj obdržíme potvrzení plánovaného termínu, budeme Vás neprodleně informovat.</p>

<p>V případě potřeby doplnění dalších údajů nebo upřesnění Vás budeme kontaktovat.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Distribuční změny"]
},
        /* ========================= Demontáže ========================= */
"Sloučení odběrných míst – zaslání formulářů": {
    date: "2026-04-23",
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu Vám zasíláme formuláře potřebné pro sloučení Vašich odběrných míst.</p>

<p>Pro úspěšné vyřízení prosíme o vyplnění přiložené <strong>Žádosti o ukončení smlouvy</strong> k odběrnému místu, které bude zrušeno, tedy demontováno. Do důvodu demontáže prosím výslovně uveďte <strong>„Sloučení jednoho OM do druhého“</strong> a doplňte informaci, ze kterého EAN/EIC kódu do kterého ke sloučení dochází.</p>

<p><em>Upozornění pouze pro elektřinu:</em> Pokud bude v souvislosti se sloučením docházet k navýšení kapacity hlavního jističe u aktivního, tedy zůstávajícího odběrného místa, je nutné doložit také <strong>Žádost o změnu smlouvy</strong> a platnou <strong>revizní zprávu</strong>.</p>

<p>Vyplněné a podepsané dokumenty nám prosím zašlete zpět jako odpověď na tento e-mail. Dokumenty můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení smlouvy", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení smlouvy", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/17jVzJYN7fq_zsdPM3SSoU4upzVz8AK3p/view?usp=drive_web", name: "ČEZ žádost o ukončení - Trvalá demontáž", type: "pdf" },
        { url: "https://drive.google.com/file/d/12Eoap_GDC4Xk0AzSHbF_mOwdvFlgRhzR/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/12CT6MT_Gus66fuAu57Wl1ssRwQgsyU1u/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/11yiwMdyFSYdMhLsMcs2m4J7SnBINalP5/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1c8dHbNdew3iNov6il1s1MCJQJ7t039aL/view?usp=drive_link", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže", "Sloučení OM"]
},
"Ukončení smlouvy s demontáží elektroměru – sezónní odběr firma ČEZ": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma</strong> a <strong>Žádost o demontáž měřicího zařízení</strong>.</p>

<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k žádosti doložit plnou moc opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>

<p>Prosíme o vyplnění a zaslání dokumentů zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: "ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" },
        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/10t69I9lbEjebbTMXSxaSaImxW7oX1WYr/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží elektroměru – domácnost ČEZ": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Domácnost</strong> a <strong>Žádost o demontáž měřicího zařízení</strong>.</p>

<p>Prosíme o jejich vyplnění a zaslání zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/10OtoVJApxNBiA_L8C0G2qjxaK22VNczx/view?usp=drive_web", name: "Žádost o ukončení_DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/17jVzJYN7fq_zsdPM3SSoU4upzVz8AK3p/view?usp=drive_web", name: "ČEZ žádost o ukončení - Trvalá demontáž", type: "pdf" },
        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: "ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží elektroměru – domácnost EG.D/PRE": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Domácnost</strong>.</p>

<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokument můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/10OtoVJApxNBiA_L8C0G2qjxaK22VNczx/view?usp=drive_web", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží elektroměru – firma ČEZ": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma</strong> a <strong>Žádost o demontáž měřicího zařízení</strong>.</p>

<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k žádosti doložit plnou moc opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>

<p>Prosíme o vyplnění a zaslání dokumentů zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/10t69I9lbEjebbTMXSxaSaImxW7oX1WYr/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/17jVzJYN7fq_zsdPM3SSoU4upzVz8AK3p/view?usp=drive_web", name: "ČEZ žádost o ukončení - Trvalá demontáž", type: "pdf" },
        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: "ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží elektroměru – firma EG.D/PRE": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma</strong>.</p>

<p>Podklad musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k žádosti doložit plnou moc opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>

<p>Prosíme o vyplnění a zaslání dokumentu zpět na naši e-mailovou adresu. Dokument můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/10t69I9lbEjebbTMXSxaSaImxW7oX1WYr/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží plynoměru – domácnost EG.D/PPD/GasNet": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky plynu do odběrného místa – Domácnost</strong>.</p>

<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokument můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/10DdFgk1KL9NBIYUv3tpcMvVjEFurYSJV/view?usp=drive_web", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže"]
},
"Ukončení smlouvy s demontáží plynoměru – firma EG.D/PPD/GasNet": {
    text: `${OSLOVENI_BLOCK}
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o <strong>Žádost o ukončení smlouvy / dodávky plynu do odběrného místa – Maloodběratel</strong>.</p>

<p>Podklad musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k žádosti doložit plnou moc opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>

<p>Prosíme o vyplnění a zaslání dokumentu zpět na naši e-mailovou adresu. Dokument můžete také zaslat poštou na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/107d2e5AsO-8YueDmW5V4ia1tNLKF8V9k/view?usp=drive_web", name: "Žádost o ukončení", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/13HAJSD1s13kpkpwDMRy3ZNCXNCIKJj8X/view?usp=drive_link", name: "Žádost o ukončení", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/10t69I9lbEjebbTMXSxaSaImxW7oX1WYr/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf", brand: "de" }
    ],
    tags: ["Demontáže"]
},
"Přijetí žádosti o demontáž měřidla": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme přijetí Vaší žádosti o demontáž měřidla na odběrném místě <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Podklady jsme předali příslušnému distributorovi. Jakmile nám žádost potvrdí, sdělíme Vám termín návštěvy technika.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Demontáže"]
},
"Demontáž měřidla – Termín demontáže měřidla": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že nás distributor kontaktoval s termínem demontáže měřidla pro odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Demontáž proběhne dne <strong>{DD. MM. RRRR}</strong>.</p>

<p>Přesný čas demontáže nám distributor nesdělil. V případě potřeby Vás však bude s předstihem informovat.</p>

<p>Pokud odběrné místo není volně přístupné, prosíme Vás o umožnění přístupu k měřidlu, aby demontáž mohla bez problémů proběhnout.</p>

<p>Konečné vyúčtování Vám bude zasláno přibližně do 14 dnů od data demontáže.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Demontáže"]
},
"Demontáž měřidla – neprovedeno z důvodu nezpřístupnění": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že demontáž měřidla na odběrném místě <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>, plánovaná na den <strong>{DD. MM. RRRR}</strong>, nebyla provedena, protože odběrné místo nebylo zpřístupněno.</p>

<p>S novým termínem demontáže měřidla Vás bude kontaktovat přímo distributor.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Demontáže"]
},
       /* ========================= Ostatní ========================= */
"Potvrzení přijetí požadavku": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme za zaslání Vašeho požadavku. Rádi bychom Vás informovali, že jsme jej zaevidovali a v tuto chvíli je v řešení.</p>

<p>O dalším postupu nebo vyřešení požadavku Vás budeme informovat nejpozději do <strong>{DD. MM. RRRR}</strong>.</p>

<p>V případě jakýchkoliv dotazů se na nás neváhejte obrátit.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Ostatní"]
},
"Žádost o přiřazení zákazníka pod obchodního zástupce": {
    text: `${OSLOVENI_BLOCK}
<p>žádost o přiřazení zákazníka pod konkrétního obchodního zástupce prosím zašlete na e-mail <strong>poptavky@epet.cz</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Ostatní"]
},
"Žádost o doložení podkladů pro vyřízení požadavku": {
    text: `${OSLOVENI_BLOCK}
<p>aby bylo možné vyřídit Váš požadavek, potřebujeme Vaši součinnost.</p>

<p>Konkrétně Vás prosíme o doložení <strong>{zde uvést požadované podklady}</strong>, a to z důvodu <strong>{zde uvést důvod požadavku na doložení}</strong>.</p>

<p>Vše potřebné nám prosím zašlete nejpozději do <strong>{DD. MM. RRRR}</strong>.</p>

<p>V případě, že požadovanou dokumentaci do výše uvedeného termínu neobdržíme, nebude možné Váš požadavek dále vyřídit a situace bude z naší strany považována za uzavřenou.</p>

<p>Děkujeme za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Ostatní"]
},
"Zpětná vazba – zaslání hodnotícího formuláře": {
    text: `${OSLOVENI_BLOCK}
<p>na základě telefonického hovoru Vám zasíláme odkaz pro zanechání zpětné vazby, na které nám velmi záleží.</p>

<p>Hodnocení můžete vyplnit prostřednictvím tohoto <a href="https://g.page/r/CXbczwzq5JZ8EB0/review" target="_blank" rel="noopener noreferrer">odkazu</a>.</p>

<p>Děkujeme Vám za Váš čas.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Ostatní"]
},
"Obchodní zástupce – chybějící plná moc k zastupování": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že jsme obdrželi Váš požadavek. Abychom jej však mohli vyřídit, je nutné doložit platnou plnou moc k zastupování zákazníka, kterou v našem systému aktuálně neevidujeme.</p>

<p>Prosíme Vás o její zaslání, ideálně v odpovědi na tento e-mail. Do doby doložení platné plné moci bohužel nemůžeme Váš požadavek přijmout k řešení ani zpracovat.</p>

<p>Děkujeme za pochopení a součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Ostatní"]
},
      /* ========================= Samoodečty ========================= */
"Doložení protokolu o výměně měřidla": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale Váš požadavek na vystavení faktury na základě doručených podkladů se nám nepodařilo vyřešit, protože odečtové hodnoty měřidla na sebe nenavazují. Důvodem může být výměna měřidla, která proběhla na odběrném místě.</p>

<p>V případě, že k výměně měřidla skutečně došlo, prosíme Vás o urychlené doložení protokolu o výměně měřidla. Tento protokol bývá přiložen přímo u měřidla.</p>

<p>Pokud protokol nenaleznete, kontaktujte prosím svého distributora, který Vám může vystavit jeho opis.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Zamítnutí konečného samoodečtu – doručeno po termínu": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale Vámi zaslané odečtové hodnoty měřidla již není možné zpracovat, protože nám byly doručeny po stanoveném termínu.</p>

<p>Faktura Vám bude vystavena na základě odečtových hodnot, případně odhadu spotřeby, které nám zašle distributor.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Ověření stavů měřidla – zamítnutý odečet distributorem": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že odečty, které jste nám nahlásili, byly distributorem zamítnuty. Důvodem zamítnutí je skutečnost, že stavy nenavazují na poslední evidovaný odečet.</p>

<p>Prosíme Vás proto o ověření a zaslání správného stavu měřidla, případně o zaslání fotografie měřidla s aktuálním stavem.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Zamítnutí odečtů – nenavazující stavy": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že odečty, které jste nám nahlásil/a pro odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong>, byly distributorem zamítnuty. Důvodem zamítnutí je skutečnost, že stavy nenavazují na poslední evidovaný odečet.</p>

<p>Prosíme Vás proto o ověření a zaslání správného stavu měřidla. Případně nám můžete zaslat fotografii měřidla s aktuálním stavem.</p>

<p>Fotografie by měla obsahovat viditelné datum pořízení, například formou datumovky přímo na fotografii, případně pomocí lístečku s uvedeným datem přiloženého k měřidlu.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Nezpracovaný odečet – omluva zákazníkovi": {
    text: `${OSLOVENI_BLOCK}
<p>omlouváme se, ale Váš požadavek na vystavení faktury na základě nahlášených odečtových hodnot měřidla se nám nepodařilo zpracovat v termínu.</p>

<p>Faktura Vám bude vystavena na základě dat, která nám doručí distributor.</p>

<p>Velice se za tuto skutečnost omlouváme a děkujeme za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Počáteční stav měřidla – předání původnímu dodavateli": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale Váš požadavek na evidenci počátečního odečtového stavu měřidla není možné z naší strany zpracovat.</p>

<p>Tento údaj je třeba sdělit Vašemu původnímu dodavateli, který na základě těchto hodnot vystaví konečnou fakturu.</p>

<p>Při nejbližší fakturaci na tento stav měřidla navážeme.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Žádost o zaslání fotografie měřidla": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že odečty, které jste nám nahlásil/a pro odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong>, byly distributorem zamítnuty.</p>

<p>Prosíme Vás proto o ověření a zaslání správného stavu měřidla, případně o zaslání fotografie měřidla s aktuálním stavem.</p>

<p>Fotografie by měla obsahovat viditelné datum pořízení, například formou datumovky přímo na fotografii, případně pomocí lístečku s uvedeným datem přiloženého k měřidlu.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí samoodečtu pro mimořádnou fakturaci - s tabulkami": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali.</p>

<p>Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu. Tento schvalovací proces může trvat <strong>2–3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>

<p>Abychom Vám do budoucna mohli vyúčtování připravit ještě rychleji, přikládáme evidenční tabulku, která může celý proces usnadnit a zrychlit. Jedná se o doporučený nástroj – alternativně můžete odečty nahlásit také přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

<p><strong>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od jeho provedení.</li>
  <li><strong>Plyn:</strong> odečet musí být proveden <strong>k poslednímu dni v měsíci</strong> a nahlášen <strong>do 5 kalendářních dnů</strong>.</li>
</ul>

<p><strong>Pro správné zpracování v evidenční tabulce doporučujeme vyplnit:</strong></p>

<p><strong>Při mimořádném vyúčtování elektřiny:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování</li>
</ul>

<p><strong>Při mimořádném vyúčtování plynu:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování s DUF</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí samoodečtu pro mimořádnou fakturaci – bez tabulek": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali.</p>

<p>Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu. Schvalovací proces může trvat <strong>2–3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>

<p>Pro rychlejší zpracování budoucích odečtů doporučujeme využít <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznický portál</strong></a>.</p>

<p><strong>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od provedení odečtu.</li>
  <li><strong>Plyn:</strong> odečet musí být proveden <strong>k poslednímu dni v měsíci</strong> a nahlášen <strong>do 5 kalendářních dnů</strong>.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí kontrolního samoodečtu - s tabulkami": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako <strong>kontrolní odečet</strong>, tedy bez vystavení mimořádné faktury.</p>

<p>Odečet bude zohledněn při příští periodické fakturaci.</p>

<p>Abychom příště mohli Váš požadavek zpracovat ještě rychleji, přikládáme evidenční tabulku, která může celý proces usnadnit a zrychlit. Jedná se o <strong>doporučený nástroj</strong> – alternativně můžete odečty jednoduše nahlásit i přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

<p><strong>Termíny pro nahlášení kontrolních odečtů:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od provedení odečtu.</li>
  <li><strong>Plyn:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 14 kalendářních dnů</strong>.</li>
</ul>

<p><strong>Pro správné zpracování odečtu v tabulce doporučujeme vyplnit:</strong></p>

<p><strong>Při hlášení kontrolního odečtu pro elektřinu i plyn:</strong></p>

<ul>
  <li><strong>Typ odečtu:</strong> Samoodečet</li>
  <li><strong>Důvod odečtu:</strong> Kontrolní</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí kontrolního samoodečtu – bez tabulek": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako <strong>kontrolní odečet</strong>, tedy bez vystavení mimořádné faktury.</p>

<p>Odečet bude zohledněn při příští periodické fakturaci.</p>

<p>Pro rychlejší zpracování budoucích odečtů Vás žádáme, abyste je nově hlásili přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

<p><strong>Termíny pro nahlášení kontrolních odečtů:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od provedení odečtu.</li>
  <li><strong>Plyn:</strong> odečet lze nahlásit k libovolnému datu, musí být však nahlášen <strong>do 14 kalendářních dnů</strong>.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Mimořádné vyúčtování k 31.12. – pokyny k nahlášení samoodečtu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail. K Vašemu dotazu ohledně <strong>mimořádného vyúčtování k 31.12.20XX</strong> nabízíme dvě možnosti nahlášení odečtů.</p>

<ol>
  <li><strong>Vyplnění evidenční tabulky</strong> – naleznete ji v příloze tohoto e-mailu. Po vyplnění nám ji prosím zašlete zpět e-mailem, nejpozději do níže uvedených termínů.</li>
  <li><strong>Zadání odečtů</strong> prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</li>
</ol>

<p><strong>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze provést k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od provedení odečtu. Pokud je odečet proveden k <strong>31.12.20XX</strong>, nahlášení musí proběhnout nejpozději do <strong>20.01.20XX</strong>.</li>
  <li><strong>Plyn:</strong> odečet musí být proveden <strong>k poslednímu dni v měsíci</strong> a nahlášen <strong>do 5 kalendářních dnů</strong> od provedení, tedy nejpozději do <strong>05.01.20XX</strong>.</li>
</ul>

<p><strong>Pro správné zpracování odečtu v evidenční tabulce doporučujeme vyplnit:</strong></p>

<p><strong>Při mimořádném vyúčtování elektřiny:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování</li>
</ul>

<p><strong>Při mimořádném vyúčtování plynu:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování s DUF</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí samoodečtu pro mimořádnou fakturaci – Zákazník zadal již do portálu (duplicitní odečet)": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali.</p>

<p>Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu. Schvalovací proces může trvat <strong>2–3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>

<p>Abychom příště mohli Váš požadavek zpracovat ještě rychleji, zasíláme Vám v příloze evidenční tabulku, do které můžete odečtové hodnoty vyplnit a následně nám ji zaslat e-mailem.</p>

<p>Odečty je také možné nahlásit přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

<p>Pokud odečty zadáte přímo do portálu a zobrazí se <strong>zelená zpráva o úspěšném přijetí</strong>, není nutné nás dále kontaktovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>

<p><strong>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze provést k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od jeho provedení.</li>
  <li><strong>Plyn:</strong> odečet musí být proveden <strong>k poslednímu dni v měsíci</strong> a nahlášen <strong>do 5 kalendářních dnů</strong>.</li>
</ul>

<p><strong>Pro správné zpracování v evidenční tabulce doporučujeme vyplnit:</strong></p>

<p><strong>Při mimořádném vyúčtování elektřiny:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování</li>
</ul>

<p><strong>Při mimořádném vyúčtování plynu:</strong></p>
<ul>
  <li><strong>Typ odečtu:</strong> Mimořádné vyúčtování</li>
  <li><strong>Důvod odečtu:</strong> Mimořádné vyúčtování s DUF</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí kontrolního samoodečtu – Zákazník zadal již do portálu (duplicitní odečet)": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako <strong>kontrolní odečet</strong>, tedy bez vystavení mimořádné faktury.</p>

<p>Odečet bude zohledněn při příští periodické fakturaci.</p>

<p>Abychom příště mohli Váš požadavek zpracovat ještě rychleji, zasíláme Vám v příloze evidenční tabulku, do které můžete odečtové hodnoty vyplnit a následně nám ji zaslat e-mailem.</p>

<p>Odečty měřidel můžete také nahlásit přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

<p>Pokud odečty zadáte přímo do portálu a zobrazí se <strong>zelená zpráva o úspěšném přijetí</strong>, není nutné nás dále kontaktovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>

<p><strong>Termíny pro nahlášení kontrolních odečtů:</strong></p>

<ul>
  <li><strong>Elektřina:</strong> odečet lze provést k libovolnému datu, musí být však nahlášen <strong>do 20 kalendářních dnů</strong> od jeho provedení.</li>
  <li><strong>Plyn:</strong> odečet lze provést k libovolnému datu, musí být však nahlášen <strong>do 14 kalendářních dnů</strong>.</li>
</ul>

<p><strong>Pro správné zpracování odečtu v tabulce doporučujeme vyplnit:</strong></p>

<p><strong>Při hlášení kontrolního odečtu pro elektřinu i plyn:</strong></p>

<ul>
  <li><strong>Typ odečtu:</strong> Samoodečet</li>
  <li><strong>Důvod odečtu:</strong> Kontrolní</li>
</ul>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí konečného samoodečtu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání konečného samoodečtu. Tímto potvrzujeme jeho přijetí a nyní čekáme na schválení dat ze strany distributora.</p>

<p>Tento schvalovací proces může trvat <strong>2–3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením konečné faktury.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Konečný samoodečet – nahlášeno před termínem ukončení smlouvy": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za nahlášení samoodečtu ke konečné faktuře.</p>

<p>Dovolujeme si Vás informovat, že Vaše smlouva bude ukončena k datu <strong>{termín ukončení smlouvy}</strong>. Z tohoto důvodu je možné zadat stav samoodečtu až po tomto datu, a to nejpozději do <strong>{termín pro nahlášení samoodečtu}</strong>.</p>

<p>Prosíme Vás tedy o nahlášení samoodečtu v uvedeném termínu, aby mohla být konečná faktura vystavena s odpovídající spotřebou.</p>

<p>Odečty měřidel můžete nahlásit také prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí konečného samoodečtu – Zákazník zadal již do portálu (duplicitní odečet)": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na konečný samoodečet jsme zpracovali.</p>

<p>Nyní čekáme na schválení dat ze strany distributora, abychom mohli následně vystavit konečnou fakturu. Tento schvalovací proces může trvat <strong>2–3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>

<p>Pokud odečty zadáte přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a> a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618", name: "ŠABLONA PRO E-MAIL", type: "xls" },
        { url: "https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519", name: "ŠABLONA PRO PORTÁL", type: "xls" }
    ],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí samoodečtu k aktivaci smlouvy": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet k aktivaci smlouvy jsme zpracovali.</p>

<p>Tímto potvrzujeme jeho přijetí a zaevidování jako počáteční stav.</p>

<p>Upozorňujeme, že na základě tohoto samoodečtu nedochází k vystavení faktury. Tento stav však bude zohledněn při řádné periodické fakturaci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Potvrzení přijetí samoodečtu k aktivaci smlouvy – duplicitní zadání v portálu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet k aktivaci smlouvy jsme zpracovali.</p>

<p>Tímto potvrzujeme jeho přijetí a zaevidování jako počáteční stav.</p>

<p>Upozorňujeme, že na základě tohoto samoodečtu nedochází k vystavení faktury. Tento stav však bude zohledněn při řádné periodické fakturaci.</p>

<p>Pokud odečty zadáte přímo prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznického portálu</strong></a> a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
"Zamítnutí samoodečtu – překročen limit 10 samoodečtů za rok": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za požadavek na zadání samoodečtu.</p>

<p>U daného odběrného místa již v tomto kalendářním roce nelze přijmout další běžný samoodečet, protože byl vyčerpán roční limit <strong>10 samoodečtů</strong>.</p>

<p>Současně připomínáme, že v rámci roku lze zadat ještě jeden mimořádný samoodečet k <strong>31. 12. 20XX</strong>. Tento odečet můžete zadat standardním způsobem stejným kanálem jako obvykle a bude použit pro uzavření roku.</p>

<p><strong>Praktické doporučení:</strong></p>

<p>Aby nedocházelo k duplicitám a zbytečnému vyčerpání limitu, <strong>nedoporučujeme hlásit samoodečet v měsíci, kdy má distributor plánovaný řádný odečet</strong>.</p>

<ul>
  <li><strong>Proč:</strong> Řádný odečet distributora je pro vyúčtování nadřazený a nahradí samoodečet. Nahlášení stavu ve stejném měsíci proto nepřinese výhodu a může být zamítnuto jako duplicitní, čímž může dojít k vyčerpání limitu.</li>
  <li><strong>Příklad:</strong> Pokud víte, že distributor provádí řádný odečet v dubnu, samoodečet v dubnu neposílejte. Stav případně nahlaste v březnu nebo květnu.</li>
</ul>

<p>Tento princip platí jak u elektřiny, tak u plynu.</p>

<p>Děkujeme Vám za pochopení a spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Samoodečty"]
},
/* ========================= Reklamace ========================= */
"Potvrzení přijetí reklamace": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme Vám tímto přijetí Vaší reklamace, jejíž obsah je blíže specifikován níže.</p>
<p>U Vaší reklamace evidujeme následující údaje:</p>
<p>Datum přijetí reklamace: <strong>{DD. MM. RRRR}</strong></p>
<p>Důvod reklamace: <strong>{zde doplnit, co zákazník reklamuje a z jakého důvodu}</strong></p>
<p>Dovolujeme si Vás informovat, že reklamaci nyní řešíme. Jakmile budeme mít k dispozici vyjádření o výsledku šetření, budeme Vás informovat, nejpozději však do 15 dnů od potvrzeného data přijetí veškerých potřebných informací.</p>
<p>V případě, že bude reklamace předána provozovateli distribuční soustavy k posouzení, lhůta pro její vyřízení se pozastavuje po dobu řešení na straně provozovatele.</p>
<p><strong>Dále si Vás dovolujeme upozornit, že reklamace nemá odkladný účinek na splatnost vyúčtovaných plateb ani záloh dle smlouvy. Stávající vyúčtované platby či zálohy je tedy nutné i přes podanou reklamaci uhradit.</strong></p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Potvrzení přijetí reklamace – nekompletní podklady": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme Vám tímto přijetí Vaší reklamace, jejíž obsah je blíže specifikován níže.</p>
<p>U Vaší reklamace evidujeme následující údaje:</p>
<p>Datum přijetí/uplatnění reklamace: <strong>{DD. MM. RRRR}</strong></p>
<p>Důvod reklamace: <strong>{zde doplnit důvod reklamace}</strong></p>
<p>Abychom se mohli Vaší reklamací zabývat, potřebujeme z Vaší strany doložit následující podklady:</p>
<p><strong>{zde uvést, co je potřeba od zákazníka doložit pro kompletní reklamaci}</strong></p>
<p>V této souvislosti bychom Vás rádi upozornili, <strong>že dokud neobdržíme chybějící podklady potřebné ke kompletnímu posouzení reklamace, nebude reklamace z naší strany dále řešena a zároveň neběží lhůta pro její vyřízení.</strong></p>
<p>Lhůta pro vyřízení reklamace začne běžet až po doložení výše požadovaných dokumentů či informací.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Uzavření reklamace – oprávněná": {
    text: `${OSLOVENI_BLOCK}
<p>reagujeme tímto na Vaši reklamaci, kterou jsme přijali dne <strong>{DD. MM. RRRR}</strong>, týkající se <strong>{zde doplnit důvod reklamace}</strong>.</p>
<p>Vaši reklamaci jsme z naší strany důkladně prošetřili, vyhodnotili a k dnešnímu dni ji uzavíráme jako oprávněnou.</p>
<p>Dovolujeme si Vás informovat, že opravnou fakturu Vám vystavíme a zašleme v nejbližších dnech, a to na <strong>{Váš e-mail / Vaši doručovací adresu}</strong>.</p>
<p>Omlouváme se za případné komplikace a děkujeme za pochopení.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Uzavření reklamace – neoprávněná": {
    text: `${OSLOVENI_BLOCK}
<p>reagujeme tímto na Vaši reklamaci, kterou jsme přijali dne <strong>{DD. MM. RRRR}</strong>, týkající se <strong>{zde doplnit důvod reklamace}</strong>.</p>
<p>Vaši reklamaci jsme z naší strany důkladně prošetřili, vyhodnotili a k dnešnímu dni ji uzavíráme jako neoprávněnou.</p>
<p>Důvodem zamítnutí reklamace je: <strong>{zde uvést důvod zamítnutí reklamace}</strong>.</p>
<p>Zákazníci, kteří jsou spotřebiteli ve smyslu § 419 zákona č. 89/2012 Sb., občanský zákoník, se mohou v souladu s § 17 odst. 7 písm. e) zákona č. 458/2000 Sb., energetický zákon, ve znění pozdějších předpisů, v případě vzniklého sporu obracet na Energetický regulační úřad (<a href="https://eru.gov.cz/" target="_blank" rel="noopener noreferrer">www.eru.cz</a>), jakožto orgán mimosoudního řešení sporů v oblasti energetiky.</p>
<p>Energetický regulační úřad může rozhodnout spor mezi zákazníkem a společností EP ENERGY TRADING, a.s., o splnění povinností z uzavřené smlouvy, jejímž předmětem je dodávka nebo distribuce elektřiny nebo plynu, a dále spor o určení, zda taková smlouva vznikla, trvá, nebo zanikla, a kdy se tak stalo.</p>
<p>Děkujeme za pochopení a omlouváme se za případné komplikace, které Vám tato situace mohla způsobit.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Výzva k doložení podkladů pro zpracování reklamace": {
    text: `${OSLOVENI_BLOCK}
<p>obdrželi jsme od Vás dne <strong>{DD. MM. RRRR}</strong> požadavek na reklamaci vyúčtování. Následně jsme Vás požádali o doplnění podkladů, aby bylo možné reklamaci řádně posoudit a vyřídit.</p>
<p>Konkrétně Vás prosíme o doložení: <strong>{zde uvést požadované podklady}</strong>, a to z důvodu: <strong>{zde uvést důvod požadavku na doložení}</strong>.</p>
<p>Vše potřebné nám prosím zašlete nejpozději do <strong>{DD. MM. RRRR}</strong>.</p>
<p>V případě, že požadovanou dokumentaci do výše uvedeného termínu neobdržíme, nebude možné Váš požadavek dále vyřídit a situace bude z naší strany považována za uzavřenou.</p>
<p>Děkujeme za pochopení.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Uzavření požadavku pro nedoplnění požadovaných podkladů": {
    text: `${OSLOVENI_BLOCK}
<p>obdrželi jsme od Vás dne <strong>{DD. MM. RRRR}</strong> požadavek na reklamaci vyúčtování. Následně jsme Vás požádali o doplnění podkladů, aby bylo možné reklamaci řádně posoudit a vyřídit.</p>
<p>Tímto Vás informujeme, že Váš požadavek na reklamaci uzavíráme jako neoprávněný, jelikož jsme k němu neobdrželi všechny potřebné podklady a informace, a to i přes opakované urgence.</p>
<p>Pokud budete mít zájem reklamaci znovu uplatnit, prosíme o zaslání nového požadavku, včetně všech potřebných podkladů.</p>
<p>Děkujeme Vám za pochopení.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
"Pozastavení reklamace – předání na distribuci": {
    text: `${OSLOVENI_BLOCK}
<p>obdrželi jsme od Vás dne <strong>{DD. MM. RRRR}</strong> požadavek na reklamaci týkající se <strong>{zde doplnit důvod reklamace}</strong>.</p>
<p>Rádi bychom Vás touto cestou informovali, že jsme reklamaci předali příslušnému distributorovi, který má nyní 60 dní na její posouzení.</p>
<p>Naše lhůta pro vyřízení reklamace se během této doby pozastavuje a začne znovu běžet až po obdržení vyjádření od distributora.</p>
<p>Děkujeme Vám za pochopení.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Reklamace"]
},
/* ========================= Dědické řízení ========================= */
"Úmrtí odběratele – doložení dokladů a další postup": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, že řešíte tuto smutnou událost. Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat Vaši součinnost.</p>

<p>Zejména je důležité nám doručit <strong>kopii úmrtního listu</strong> a následně také <strong>usnesení z dědického řízení</strong>.</p>

<p>Současně Vás prosíme o sdělení, na koho má být odběrné místo přepsáno, případně zda budete odběrné místo ukončovat s demontáží měřidla.</p>

<p>V případě <em>přepisu odběrného místa</em> můžete využít tento <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">on-line formulář pro přepis odběrného místa</a>.</p>

<p>Děkujeme Vám za součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
 "Dědické řízení – urgence doložení usnesení": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, že řešíte tuto smutnou událost. Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat Vaši součinnost.</p>

<p>Zejména je důležité, abyste nám doručil/a:</p>
<ul>
  <li>kopii <strong>úmrtního listu</strong>,</li>
  <li>kopii <strong>usnesení z dědického řízení</strong>.</li>
</ul>

<p>Do doložení usnesení bude případný přeplatek blokován proti vyplacení, a to až do sdělení výsledku dědického řízení.</p>

<p>Dále Vás prosíme o sdělení, jak si přejete s odběrným místem dále naložit, tedy zda požadujete:</p>
<ul>
  <li>přepis odběrného místa na nového odběratele, nebo</li>
  <li>ukončení odběrného místa s demontáží měřidla.</li>
</ul>

<p>V případě <em>přepisu odběrného místa</em> můžete využít tento <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">on-line formulář pro přepis odběrného místa</a>.</p>

<p>Děkujeme Vám za součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – vyplacení přeplatku na bankovní účet": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslané dokumenty týkající se úmrtí pana/paní <strong>{jméno zemřelého}</strong>. Na základě doloženého usnesení z dědického řízení evidujeme, že oprávněným dědicem je <strong>{jméno dědice}</strong>.</p>

<p>Na zákaznickém účtu zesnulého evidujeme přeplatek ve výši <strong>{výše přeplatku} Kč</strong>, který je možné vyplatit.</p>

<p>Protože si přejete, aby byl přeplatek vyplacen na bankovní účet <strong>{číslo účtu}</strong>, je nutné doložit <strong>čestné prohlášení</strong>. Tento dokument slouží jako potvrzení a souhlas dědice s vyplacením přeplatku na uvedený účet.</p>

<p>U podpisu na čestném prohlášení je nutné <strong>úřední ověření podpisu</strong> – lze jej provést na Czech POINTu, například na poště, obecním úřadě či matrice, případně u notáře.</p>

<p>Vyplněné a ověřené čestné prohlášení nám prosím zašlete:</p>
<ul>
  <li>e-mailem na adresu <strong>info@epet.cz</strong>, nebo</li>
  <li>poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

<p>Jakmile obdržíme kompletní dokumentaci, zajistíme vyplacení přeplatku na uvedený účet.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – potvrzení přijetí dokumentů": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování.</p>

<p>Po ukončení smlouvy a dodávek do odběrného místa Vám bude vystavena konečná faktura. Přeplatky nebo nedoplatky budou řešeny s osobou oprávněnou dle rozhodnutí o dědickém řízení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení", "Přepisy"]
},
"Dědické řízení – podklady k vyplacení přeplatku předány na finance": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání požadovaných dokumentů. Vaše podklady jsme předali příslušnému oddělení k dalšímu zpracování.</p>

<p>Jakmile dojde k vyplacení přeplatku, budeme Vás o této skutečnosti informovat.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – více dědiců a vyplacení přeplatku na jeden účet": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání usnesení o dědictví. Vážíme si Vaší spolupráce.</p>

<p>V e-mailu uvádíte, že si přejete přeplatek vyplatit na konkrétní bankovní účet. Abychom mohli tento krok uskutečnit, je nutné doložit <strong>čestné prohlášení</strong>, které přikládáme v příloze tohoto e-mailu.</p>

<ul>
  <li>Čestné prohlášení musí podepsat všichni dědicové uvedení v usnesení.</li>
  <li>Jelikož jsou v usnesení uvedeni <strong>{počet dědiců}</strong> dědicové, je nutné zaslat čestné prohlášení ve <strong>{počet vyhotovení čestného prohlášení}</strong> vyhotoveních, každé podepsané příslušnou osobou.</li>
  <li>U všech podpisů je nutné úřední ověření – lze jej provést na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice.</li>
  <li>Vyplněné, podepsané a úředně ověřené dokumenty nám prosím zašlete zpět v odpovědi na tento e-mail nebo poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

<p>Jakmile obdržíme všechny potřebné dokumenty, přeplatek bude vyplacen na uvedený účet.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – více dědiců a upřesnění vyplacení přeplatku": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání usnesení o dědictví. Vážíme si Vaší spolupráce.</p>

<p>Po kontrole doloženého usnesení jsme zjistili, že je v něm uvedeno více dědiců. Abychom mohli pokračovat ve vyplacení přeplatku, prosíme Vás o upřesnění, zda si přejete přeplatek vyplatit na jeden bankovní účet, nebo zda má být přeplatek rozdělen mezi jednotlivé dědice.</p>

<p>V případě, že má být celý přeplatek vyplacen pouze na jeden bankovní účet, je nutné doložit <strong>čestné prohlášení</strong>, které přikládáme v příloze tohoto e-mailu.</p>

<ul>
  <li>Čestné prohlášení musí podepsat všichni dědicové uvedení v usnesení.</li>
  <li>Jelikož jsou v usnesení uvedeni <strong>{počet dědiců}</strong> dědicové, je nutné zaslat čestné prohlášení ve <strong>{počet vyhotovení čestného prohlášení}</strong> vyhotoveních, každé podepsané příslušnou osobou.</li>
  <li>U všech podpisů je nutné úřední ověření – lze jej provést na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice.</li>
  <li>Vyplněné, podepsané a úředně ověřené dokumenty nám prosím zašlete zpět v odpovědi na tento e-mail nebo poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

<p>Jakmile obdržíme Vaše upřesnění, případně kompletní potřebné dokumenty, budeme moci pokračovat ve zpracování požadavku.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – vysvětlení požadavku na čestné prohlášení": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš dotaz ohledně požadavku na doložení čestného prohlášení pro vyplacení přeplatku po úmrtí zákazníka.</p>

<p>Rozumíme, že se tento požadavek může jevit jako nadbytečný, pokud již bylo doloženo usnesení z dědického řízení. Čestné prohlášení však v tomto případě neslouží k prokazování dědictví jako takového, ale k potvrzení způsobu vyplacení přeplatku.</p>

<p>Pokud je v usnesení uvedeno více dědiců a celý přeplatek má být vyplacen pouze na jeden konkrétní bankovní účet, potřebujeme doložit souhlas všech dědiců s tímto způsobem výplaty.</p>

<p><strong>Požadavek na čestné prohlášení vychází zejména z těchto důvodů:</strong></p>

<ul>
  <li><strong>Ochrana oprávněných osob</strong> – čestné prohlášení slouží jako potvrzení, že všichni dědicové uvedení v usnesení souhlasí s vyplacením přeplatku na konkrétní účet.</li>
  <li><strong>Právní jistota</strong> – dokument pomáhá předcházet případným sporům mezi dědici ohledně rozdělení přeplatku.</li>
  <li><strong>Soulad s interními postupy</strong> – tento postup zajišťuje, že výplata přeplatku proběhne bezpečně a v souladu s doloženými podklady.</li>
</ul>

<p>Z tohoto důvodu je nutné, aby čestné prohlášení podepsali všichni dědicové uvedení v usnesení o dědictví. U podpisů je zároveň nutné úřední ověření.</p>

<p>Jakmile nám bude čestné prohlášení doloženo, budeme moci pokračovat ve zpracování výplaty přeplatku na uvedený bankovní účet.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – žádost o bankovní účet pro vyplacení přeplatku": {
    text: `${OSLOVENI_BLOCK}
<p>na základě doručeného usnesení o dědickém řízení nám byl sdělen Váš status jednoho z dědiců po zemřelém zákazníkovi / zemřelé zákaznici <strong>{jméno zemřelého}</strong>.</p>

<p>V souvislosti s touto skutečností bychom Vás rádi informovali, že na zákaznickém účtu zesnulého evidujeme přeplatek, který je možné vyplatit.</p>

<p>Abychom mohli přistoupit k jeho výplatě, je třeba z Vaší strany doložit:</p>

<ul>
  <li><strong>čestné prohlášení o souhlasu s vyplacením přeplatku</strong> – slouží jako potvrzení, že souhlasíte s vyplacením příslušné částky na základě dědictví. U podpisu je nutné úřední ověření, které lze provést na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice.</li>
  <li><strong>číslo bankovního účtu</strong>, na který si přejete přeplatek poukázat.</li>
</ul>

<p>Oba výše uvedené údaje jsou nezbytné k provedení platby. Formulář čestného prohlášení Vám zasíláme v příloze tohoto e-mailu.</p>

<p>Vyplněné, vlastnoručně podepsané a úředně ověřené čestné prohlášení nám prosím zašlete e-mailem na adresu <strong>info@epet.cz</strong> nebo poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – žádost o doplnění usnesení při zastavení řízení": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za doložené usnesení o pozůstalosti po panu/paní <strong>{jméno zemřelého}</strong>.</p>

<p>Dovolujeme si Vás informovat, že z předloženého usnesení vyplývá, že dědické řízení bylo soudem zastaveno z důvodu majetku nepatrné hodnoty a nebyl v něm určen žádný dědic.</p>

<p>Vzhledem k tomu, že z doloženého dokumentu nevyplývá, na koho má případný přeplatek přejít, nemůžeme bez dalšího právního podkladu přistoupit k jeho vyplacení.</p>

<p><strong>Pro další posouzení Vás prosíme o doložení doplňujícího dokumentu, například:</strong></p>

<ul>
  <li>doplnění usnesení, ze kterého bude zřejmé, komu má být případný přeplatek vyplacen, nebo</li>
  <li>nového rozhodnutí soudu / notáře, které určí osobu oprávněnou k převzetí přeplatku.</li>
</ul>

<p>Jakmile obdržíme doplňující právní dokument, budeme moci vyplacení přeplatku znovu posoudit.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – žádost o usnesení a informace k čestnému prohlášení": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, že řešíte tuto smutnou událost. Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat Vaši součinnost.</p>

<p>Zejména je důležité, abyste nám doručil/a:</p>

<ul>
  <li>kopii <strong>úmrtního listu</strong>,</li>
  <li>kopii <strong>usnesení z dědického řízení</strong>.</li>
</ul>

<p>Do doby doložení usnesení bude případný přeplatek blokován proti vyplacení. Vyplacení bude možné až po sdělení výsledku dědického řízení.</p>

<p>V případě, že bude v doloženém usnesení uvedeno více dědiců a přeplatek má být vyplacen pouze na jeden bankovní účet, bude nutné doložit také <strong>čestné prohlášení</strong>.</p>

<p>Čestné prohlášení musí být vyplněno a podepsáno všemi dědici uvedenými v usnesení. U všech podpisů je nutné úřední ověření – lze jej provést na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice.</p>

<p>Děkujeme Vám za pochopení. V případě jakýchkoli dotazů jsme Vám rádi k dispozici.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – urgence přepisu odběrného místa (Šablona č.1)": {
    text: `${OSLOVENI_BLOCK}
<p>stále evidujeme nevyřešený požadavek týkající se přepisu smlouvy na odběr energií po zemřelém/zemřelé <strong>{jméno zemřelého}</strong>.</p>

<p>Rádi bychom Vás informovali o nutnosti provést přepis na nového odběratele. Tento krok je nezbytný pro zajištění kontinuity dodávky energií na odběrném místě <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Prosíme Vás, abyste co nejdříve kontaktoval/a naši zákaznickou podporu na telefonním čísle <strong>255 70 70 99</strong> nebo e-mailem na <strong>info@epet.cz</strong>, kde Vám poskytneme veškeré potřebné informace k přepisu smlouvy.</p>

<p>Přepis je možné dořešit také prostřednictvím <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">on-line formuláře pro přepis odběrného místa</a>.</p>

<p>Děkujeme Vám za součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – opakovaná urgence přepisu odběrného místa (Šablona č.2)": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás znovu upozornili na nutnost přepsání smlouvy na odběr energií na nového odběratele.</p>

<p>Původní smlouva byla uzavřena na zemřelého/zemřelou <strong>{jméno zemřelého}</strong> a je nezbytné uzavřít novou smlouvu, aby byla zajištěna kontinuální dodávka energií na odběrném místě <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Dosud jsme neobdrželi odpověď na naši předchozí výzvu. Prosíme Vás, abyste co nejdříve kontaktoval/a naši zákaznickou podporu na telefonním čísle <strong>255 70 70 99</strong> nebo e-mailem na <strong>info@epet.cz</strong>, kde Vám poskytneme veškeré potřebné informace k přepisu smlouvy.</p>

<p>Přepis je možné dořešit také prostřednictvím <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">on-line formuláře pro přepis odběrného místa</a>.</p>

<p>Pokud nebude přepis smlouvy proveden do <strong>{DD. MM. RRRR}</strong>, budeme nuceni přistoupit k dalším krokům směřujícím k přerušení dodávky energií na uvedeném odběrném místě. Tento krok je nezbytný pro zajištění správné evidence a správy odběrného místa.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – výzva k úhradě dlužných plateb (Šablona č.3)": {
    text: `${OSLOVENI_BLOCK}

<p>dovolujeme si Vás informovat, že společnost <strong>EP ENERGY TRADING, a.s.</strong>, IČO <strong>27386643</strong>, se sídlem Klimentská 46, 110 00 Praha 1, obdržela informaci o skončení řízení o pozůstalosti, resp. dědického řízení, po zákazníkovi <strong>{jméno, příjmení, datum narození, trvalý pobyt}</strong> dále jen <strong>„Zůstavitel“</strong>.</p>

<p>Na základě pravomocného rozhodnutí o dědictví bylo naší společnosti sděleno, že právním nástupcem Zůstavitele v oblasti dodávky energií do odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> dále jen <strong>„Odběrné místo“</strong>, zajišťované naší společností na základě Smlouvy o sdružených službách dodávky elektřiny/plynu uzavřené mezi naší společností a Zůstavitelem dále jen <strong>„Smlouva“</strong>, se stala/staly tato osoba / tyto osoby:</p>

<ul>
  <li><strong>{jméno, příjmení, datum narození, trvalý pobyt}</strong></li>
  <li><strong>{jméno, příjmení, datum narození, trvalý pobyt}</strong></li>
</ul>

<p>Dnem, kdy rozhodnutí o dědictví nabylo právní moci, přechází práva a povinnosti vyplývající ze Smlouvy na právního nástupce Zůstavitele. Od tohoto okamžiku je právní nástupce Zůstavitele zákazníkem naší společnosti a je povinen plnit mimo jiné také platební povinnosti sjednané ve Smlouvě, zejména úhradu zálohových plateb a vyúčtování.</p>

<p>Aktuálně u odběrného místa evidujeme následující pohledávku, dále jen <strong>„Pohledávka“</strong>:</p>

<table class="table-upominka">
  <thead>
    <tr>
      <th>Druh dokladu</th>
      <th>Variabilní symbol</th>
      <th>Smluvní účet</th>
      <th>Splatnost</th>
      <th>Částka</th>
      <th>Měna</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;"><strong>Platby po splatnosti celkem</strong></td>
      <td><strong>{celková částka}</strong></td>
      <td><strong>Kč</strong></td>
    </tr>
  </tfoot>
</table>

<p>Na základě výše uvedeného Vás vyzýváme k úhradě Pohledávky na účet č. <strong>9960227/0100</strong> s variabilním symbolem <strong>{variabilní symbol}</strong>, a to do <strong>10 dnů</strong> od data doručení této výzvy.</p>

<p>Upozorňujeme Vás, že dodávky energií do odběrného místa ze strany naší společnosti na základě Smlouvy v současné době nadále probíhají. Nebude-li Pohledávka uhrazena, budeme nuceni přistoupit k dalším krokům, včetně procesu přerušení dodávky energií do odběrného místa.</p>

<p>Zároveň můžeme přistoupit k vymáhání Pohledávky dostupnými právními prostředky, například soudní cestou, v rámci které může dojít k navýšení dlužné částky zejména o náklady soudního řízení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Oslovení notáře – žádost o informace k dědickému řízení": {
    text: `<p>Vážený pane magistře / Vážená paní magistro,</p>

<p>tímto Vás zdvořile žádáme o sdělení informací týkajících se probíhajícího dědického řízení u zákazníka, respektive zůstavitele naší společnosti:</p>

<p><strong>{jméno a příjmení, datum narození, adresa zákazníka}</strong></p>

<p>Na výše uvedeného zůstavitele evidujeme Smlouvu o sdružených službách dodávky <strong>{elektřiny / plynu}</strong>, dále jen <strong>„Smlouva“</strong>, ze které vyplývají, případně mohou vyplynout nároky naší společnosti ve smyslu úhrady zálohových plateb sjednaných ve Smlouvě a úhrady přeplatku nebo nedoplatku plynoucího z vystavení konečné faktury.</p>

<ul>
  <li><strong>Číslo smlouvy:</strong> {číslo smlouvy}</li>
  <li><strong>Datum podpisu smlouvy:</strong> {DD. MM. RRRR}</li>
  <li><strong>Datum zahájení dodávek:</strong> {DD. MM. RRRR}</li>
  <li><strong>Doba trvání smlouvy:</strong> {XX měsíců}</li>
</ul>

<p>V souvislosti s výše uvedenými nároky naší společnosti a v rámci prevence před vznikem či zvýšením pohledávek vyplývajících ze Smlouvy Vás žádáme o sdělení těchto informací:</p>

<ul>
  <li>kdo je správcem pozůstalosti,</li>
  <li>jména a kontaktní údaje potenciálních dědiců,</li>
  <li>zda bylo dědické řízení uzavřeno a jaký je jeho výsledek.</li>
</ul>

<p>Prosíme o zaslání informací do datové schránky <strong>e5kgtt5</strong> nebo na e-mail <strong>info@epet.cz</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Výzva k úhradě dluhu – potenciální dědic a aktivní odběr (Šablona č.5)": {
    text: `${OSLOVENI_BLOCK}

<p>obracíme se na Vás jakožto na potenciálního dědice pana/paní <strong>{jméno, příjmení, datum narození, trvalý pobyt}</strong>, dále jen <strong>„Zůstavitel“</strong>.</p>

<p>Naše společnost <strong>EP ENERGY TRADING, a.s.</strong>, IČO <strong>27386643</strong>, se sídlem Klimentská 46, 110 00 Praha 1, je na základě Smlouvy o sdružených službách dodávky elektřiny/plynu č. <strong>{číslo smlouvy}</strong>, uzavřené mezi naší společností a Zůstavitelem, dále jen <strong>„Smlouva“</strong>, dodavatelem elektřiny/plynu do odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>, dále jen <strong>„Odběrné místo“</strong>.</p>

<p>Aktuálně u odběrného místa evidujeme následující pohledávku, dále jen <strong>„Pohledávka“</strong>:</p>

<table class="table-upominka">
  <thead>
    <tr>
      <th>Druh dokladu</th>
      <th>Variabilní symbol</th>
      <th>Smluvní účet</th>
      <th>Splatnost</th>
      <th>Částka</th>
      <th>Měna</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;"><strong>Platby po splatnosti celkem</strong></td>
      <td><strong>{celková částka}</strong></td>
      <td><strong>Kč</strong></td>
    </tr>
  </tfoot>
</table>

<p>V této souvislosti Vás žádáme o sdělení identifikačních a kontaktních údajů osoby, která spravuje pozůstalost, a to v rozsahu jméno, příjmení, adresa trvalého pobytu, telefonní číslo a e-mail.</p>

<p>Do doby pravomocného ukončení dědického řízení je vhodné zajistit úhradu evidovaných pohledávek, aby nedocházelo k jejich dalšímu navyšování ani k riziku přerušení dodávky energií do odběrného místa.</p>

<p><strong>Upozorňujeme Vás, že dodávky energií do odběrného místa ze strany naší společnosti na základě Smlouvy v současné době nadále probíhají. Nebude-li Pohledávka uhrazena, může být zahájen proces přerušení dodávky energií do odběrného místa.</strong></p>

<p>Současně může dojít k vymáhání dlužné částky dostupnými právními prostředky, včetně případného navýšení o související náklady, například náklady soudního řízení nebo právního zastoupení.</p>

<p>Žádáme Vás tímto o:</p>
<ul>
  <li>sdělení identifikačních a kontaktních údajů osoby spravující pozůstalost,</li>
  <li>úhradu výše uvedené Pohledávky na účet č. <strong>9960227/0100</strong> s variabilním symbolem <strong>{variabilní symbol}</strong>.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Výzva k úhradě dluhu – potenciální dědic a neaktivní odběr (Šablona č.6)": {
    text: `${OSLOVENI_BLOCK}

<p>obracíme se na Vás jakožto na potenciálního dědice pana/paní <strong>{jméno, příjmení, datum narození, trvalý pobyt}</strong>, dále jen <strong>„Zůstavitel“</strong>.</p>

<p>Naše společnost <strong>EP ENERGY TRADING, a.s.</strong>, IČO <strong>27386643</strong>, se sídlem Klimentská 46, 110 00 Praha 1, byla na základě Smlouvy o sdružených službách dodávky elektřiny/plynu č. <strong>{číslo smlouvy}</strong>, uzavřené mezi naší společností a Zůstavitelem, dále jen <strong>„Smlouva“</strong>, dodavatelem elektřiny/plynu do odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>, dále jen <strong>„Odběrné místo“</strong>.</p>

<p>Aktuálně u odběrného místa evidujeme následující pohledávku, dále jen <strong>„Pohledávka“</strong>:</p>

<table class="table-upominka">
  <thead>
    <tr>
      <th>Druh dokladu</th>
      <th>Variabilní symbol</th>
      <th>Smluvní účet</th>
      <th>Splatnost</th>
      <th>Částka</th>
      <th>Měna</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>{variabilní symbol}</td>
      <td>{smluvní účet}</td>
      <td>{datum splatnosti}</td>
      <td>{částka}</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;"><strong>Platby po splatnosti celkem</strong></td>
      <td><strong>{celková částka}</strong></td>
      <td><strong>Kč</strong></td>
    </tr>
  </tfoot>
</table>

<p>V této souvislosti Vás žádáme o sdělení identifikačních a kontaktních údajů osoby, která spravuje pozůstalost, a to v rozsahu jméno, příjmení, adresa trvalého pobytu, telefonní číslo a e-mail.</p>

<p>Do doby pravomocného ukončení dědického řízení je vhodné zajistit úhradu evidovaných pohledávek, aby nedocházelo k jejich dalšímu navyšování.</p>

<p><strong>Upozorňujeme Vás, že nebude-li Pohledávka uhrazena, může naše společnost přistoupit k vymáhání dlužné částky dostupnými právními prostředky, například soudní cestou. V takovém případě může dojít k navýšení dlužné částky zejména o náklady soudního řízení.</strong></p>

<p>Žádáme Vás tímto o:</p>
<ul>
  <li>sdělení identifikačních a kontaktních údajů osoby spravující pozůstalost, a to do <strong>10 dnů</strong> od doručení této výzvy, nebo</li>
  <li>úhradu Pohledávky na účet č. <strong>9960227/0100</strong> s variabilním symbolem <strong>{variabilní symbol}</strong>, a to do <strong>10 dnů</strong> od doručení této výzvy.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Dědické řízení"]
},
"Dědické řízení – usnesení doloženo před ukončením smlouvy": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování.</p>

<p>Po ukončení smlouvy a dodávky do odběrného místa vystavíme konečnou fakturu. Případný přeplatek či nedoplatek bude vypořádán s osobou oprávněnou dle usnesení o dědictví.</p>

<p>V usnesení je jako dědic/dědička uveden/a <strong>{jméno dědice}</strong>. Pro vyplacení případného přeplatku na bankovní účet přikládáme k vyplnění čestné prohlášení.</p>

<p>Prosíme o dodržení těchto náležitostí:</p>
<ul>
  <li>čestné prohlášení musí podepsat dědic uvedený v usnesení,</li>
  <li>podpis musí být úředně ověřen – ověření je možné na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice,</li>
  <li>vyplněný, podepsaný a úředně ověřený dokument nám prosím zašlete zpět v odpovědi na tento e-mail nebo poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

<p>Jakmile obdržíme všechny potřebné dokumenty a dojde k ukončení smlouvy, bude případný přeplatek vyplacen na uvedený účet.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
"Dědické řízení – usnesení doloženo před ukončením smlouvy, více dědiců": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování.</p>

<p>Po ukončení smlouvy a dodávky do odběrného místa vystavíme konečnou fakturu. Případný přeplatek či nedoplatek bude vypořádán s osobou oprávněnou dle usnesení o dědictví.</p>

<p>V usnesení je uvedeno více dědiců: <strong>{jména dědiců}</strong>. Pro vyplacení případného přeplatku na bankovní účet přikládáme k vyplnění čestné prohlášení.</p>

<p>Prosíme o dodržení těchto náležitostí:</p>
<ul>
  <li>čestné prohlášení musí doložit <strong>všichni dědicové</strong> uvedení v usnesení,</li>
  <li>každý dědic vyplní a podepíše <strong>vlastní formulář</strong>, tedy počet prohlášení odpovídá počtu dědiců,</li>
  <li>u všech podpisů je nutné úřední ověření – ověření je možné na Czech POINTu, například na poště nebo obecním úřadě, případně u notáře či na matrice,</li>
  <li>vyplněná, podepsaná a úředně ověřená prohlášení od všech dědiců nám prosím zašlete zpět v odpovědi na tento e-mail nebo poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 00 Praha 1</strong>.</li>
</ul>

<p>Jakmile obdržíme všechny potřebné dokumenty a dojde k ukončení smlouvy, bude případný přeplatek vyplacen na uvedený účet.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1m3O0pkyRUfeZnSs25g2MSAJ04NL1Izaf/view?usp=drive_link", name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/114oUZ3oe18YtppLhYOfTFLDu4JN-BkEp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1nCXJL0WiMyeujCtDlA-WsVGP_Io6lHbp/view?usp=drive_link", name: "ČP - Souhlas s nevyplacením přeplatku", type: "pdf", brand: "epet" }
    ],
    tags: ["Dědické řízení"]
},
        /* ========================= Platby ========================= */
"Platební údaje pro úhradu záloh": {
    date: "2026-04-01",
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za e-mail. Na základě Vašeho požadavku Vám níže zasíláme potřebné údaje pro úhradu zálohových plateb:</p>

${PLATBA_BLOCK}

<p>Pro úplnost Vám v příloze tohoto e-mailu zasíláme také aktuální <strong>Platební kalendář</strong>, ve kterém najdete přehledný rozpis záloh pro následující období.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Platba na ukončené odběrné místo – vrácení platby": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme obdrželi platbu ve výši <strong>{částka} Kč</strong> pro zákaznický účet <strong>{číslo zákaznického účtu}</strong> pod variabilním symbolem <strong>{variabilní symbol platby}</strong>.</p>

<p>Jedná se však o odběrné místo, které již bylo u naší společnosti ukončeno. Z tohoto důvodu vracíme platbu zpět na bankovní účet, ze kterého byla uhrazena.</p>

<p>Žádáme Vás, abyste již platby na tento smluvní účet nezasílali a zrušili si případný trvalý příkaz.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Upomínka před předáním k vymáhání": {
    text: `${OSLOVENI_BLOCK}
<p>dnes jsme se Vás pokusili telefonicky kontaktovat, bohužel neúspěšně, proto volíme tuto formu kontaktu.</p>

<p>I přes opakované výzvy evidujeme ke dni <strong>{DD. MM. RRRR}</strong> pohledávky v celkové výši <strong>{částka} Kč</strong>. Tato částka zahrnuje:</p>

<ul>
  <li>zálohové platby za měsíce: <strong>{měsíc}</strong>, <strong>{měsíc}</strong>, <strong>{měsíc}</strong>,</li>
  <li>nedoplatek z faktury vystavené dne <strong>{DD. MM. RRRR}</strong>, splatné ke dni <strong>{DD. MM. RRRR}</strong>.</li>
</ul>

<p>Kopii faktury Vám zasíláme v příloze.</p>

<p>Vyzýváme Vás k neprodlené úhradě. Platbu v CZK proveďte na:</p>

<ul>
  <li>bankovní účet číslo <strong>9960227/0100</strong>,</li>
  <li>variabilní symbol <strong>{variabilní symbol}</strong>,</li>
  <li>nejpozději do <strong>{DD. MM. RRRR}</strong>.</li>
</ul>

<p>V případě úhrady v EUR proveďte platbu na bankovní účet číslo <strong>2108721845/2700</strong> pod stejným variabilním symbolem.</p>

<p>Pokud jste platbu již uskutečnili, zašlete nám prosím doklad o úhradě na e-mail <strong>info@epet.cz</strong>, abychom ji mohli ve spolupráci s naším finančním oddělením dohledat.</p>

<p>Nedojde-li k úhradě ve výše uvedené lhůtě, můžeme přistoupit k procesu přerušení dodávky energií do odběrných míst, ke kterým se neuhrazené platby vztahují.</p>

<p>Platby po splatnosti mohou být dále řešeny soudní cestou. V takovém případě může dojít k navýšení dlužné částky také o náklady soudního řízení.</p>

<p>V případě, že ve výše uvedené lhůtě neobdržíme na e-mail <strong>info@epet.cz</strong> doklad o provedení platby, distributor negarantuje zastavení procesu přerušení dodávky energií.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Platba neevidována – žádost o doložení potvrzení": {
    text: `${OSLOVENI_BLOCK}
<p>Vámi uvedenou platbu ve výši <strong>{částka} Kč</strong> v systému neevidujeme.</p>

<p>Prosíme Vás proto o zaslání potvrzení o provedení platby na e-mail <strong>info@epet.cz</strong>. Potvrzení následně předáme našemu finančnímu oddělení k dohledání platby.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Platba dohledána – zákaznický účet je uhrazen": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslané potvrzení o platbě.</p>

<p>Rádi bychom Vás informovali, že se nám na základě tohoto potvrzení podařilo platbu dohledat. Na Vašem zákaznickém účtu nyní evidujeme vše v pořádku uhrazeno.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Platby pod nesprávným variabilním symbolem": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že pravidelné zálohové platby hradíte pod nesprávným variabilním symbolem.</p>

<p>U následujících plateb prosím uvádějte variabilní symbol <strong>{variabilní symbol}</strong>.</p>

<p>Pro jistotu Vám v příloze zasíláme také aktuální rozpis záloh, kde je tento variabilní symbol uveden.</p>

<p>Vaši platbu tak budeme moci rychleji identifikovat a správně zaevidovat na Váš zákaznický účet.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Platby bez variabilního symbolu": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že pravidelné zálohové platby hradíte bez uvedení variabilního symbolu.</p>

<p>U následujících plateb prosím uvádějte variabilní symbol <strong>{variabilní symbol}</strong>.</p>

<p>Pro jistotu Vám v příloze zasíláme také aktuální rozpis záloh, kde je tento variabilní symbol uveden.</p>

<p>Vaši platbu tak budeme moci rychleji identifikovat a správně zaevidovat na Váš zákaznický účet.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Zpětné přiřazení plateb – Zpětné hrazení záloh": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že za měsíc <strong>{MM. RRRR}</strong> neevidujeme z Vaší strany úhradu zálohové platby.</p>

<p>Z tohoto důvodu jsou Vaše současné platby přiřazovány k měsícům, ve kterých úhrada nebyla provedena.</p>

<p>Pokud jste chybějící platbu již uhradil/a, prosíme Vás o zaslání potvrzení o provedení této platby.</p>

<p>Pokud k úhradě skutečně nedošlo, zašlete prosím platbu ve výši <strong>{částka} Kč</strong> na účet <strong>9960227/0100</strong> pod variabilním symbolem <strong>{variabilní symbol}</strong>.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Inkaso – ověření nastavení úhrady záloh": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že se nám nedaří inkasovat platby z uvedeného bankovního účtu.</p>

<p>Rádi bychom Vás proto požádali o kontrolu správnosti čísla účtu a nastavení podmínek inkasa u Vaší banky.</p>

<p>V současnosti u Vás evidujeme číslo účtu: <strong>{číslo bankovního účtu}</strong>.</p>

<p>Jelikož se nám nepodařilo inkasovat aktuálně splatnou zálohovou platbu, uhraďte ji prosím jednorázově převodem na účet <strong>9960227/0100</strong> pod variabilním symbolem <strong>{variabilní symbol}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"SIPO – ověření spojovacího čísla": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že se nám nedaří inkasovat platby prostřednictvím SIPO.</p>

<p>Rádi bychom Vás proto požádali o kontrolu spojovacího čísla, které naleznete na SIPO složence v pravém horním rohu na druhém řádku.</p>

<p>V současnosti u Vás evidujeme spojovací číslo: <strong>{spojovací číslo}</strong>.</p>

<p>Jelikož se nám nepodařilo inkasovat aktuálně splatnou zálohovou platbu, uhraďte ji prosím jednorázově převodem na účet <strong>9960227/0100</strong> pod variabilním symbolem <strong>{variabilní symbol}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Nesrovnalosti ve způsobu úhrady zálohových plateb": {
    text: `${OSLOVENI_BLOCK}
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že využíváte jiný způsob úhrady zálohových plateb, než byl sjednán ve smlouvě nebo dohodnut v minulosti.</p>

<p>Rádi bychom Vás proto požádali o potvrzení, jakým způsobem máme trvale nastavit úhradu zálohových plateb na Vašem zákaznickém účtu.</p>

<p>Vaše platby tak budeme moci přehledně a rychle evidovat.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Konfirmace závazků – nepotvrzujeme": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale naše společnost konfirmace závazků nepotvrzuje.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Žádost o doplnění čísla bankovního účtu pro přeplatky": {
    text: `${OSLOVENI_BLOCK}
<p>v rámci kontroly doložené smlouvy jsme zjistili, že byla označena možnost vyplácení přeplatků na bankovní účet. Ve smlouvě však není uvedeno číslo účtu, na který by měly být případné přeplatky zasílány.</p>

<p>Dovolujeme si Vás proto požádat o jeho doplnění. Číslo účtu nám můžete zaslat odpovědí na tento e-mail nebo jej sdělit prostřednictvím telefonického hovoru na naší zákaznické lince.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Potvrzení dohody o zápočtu faktur": {
    text: `${OSLOVENI_BLOCK}
<p>v návaznosti na náš telefonický hovor si Vám dovolujeme potvrdit, že jsme se dohodli na provedení zápočtu vzájemných pohledávek, konkrétně u faktur č. <strong>{číslo faktury}</strong> a č. <strong>{číslo faktury}</strong>.</p>

<p>Příslušný zápočet Vám bude zaslán k potvrzení v průběhu několika následujících pracovních dnů.</p>

<p>Děkujeme Vám za součinnost.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},        
"Vrácení platby uhrazené pod chybným variabilním symbolem (Otevřené platby)": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že částka ve výši <strong>{částka} Kč</strong>, kterou jste uhradil/a pod chybným variabilním symbolem, Vám bude vrácena na bankovní účet číslo <strong>{číslo bankovního účtu}</strong>.</p>

<p>Upozorňujeme, že platby je nutné hradit výhradně pod správným variabilním symbolem uvedeným v <strong>Platebním kalendáři</strong>, který naleznete v příloze tohoto e-mailu.</p>

<p>Zároveň Vám v příloze zasíláme <strong>daňový doklad</strong> k vrácené platbě.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Vrácení platby uhrazené nad rámec platebního kalendáře (Otevřené platby)": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že částka ve výši <strong>{částka} Kč</strong>, kterou jste uhradil/a nad rámec předepsaných záloh, Vám bude vrácena na bankovní účet číslo <strong>{číslo bankovního účtu}</strong>.</p>

<p>Zároveň si Vás dovolujeme upozornit, že platby byly hrazeny ve vyšší výši, než stanovuje aktuální rozpis záloh. Doporučujeme proto upravit trvalý příkaz dle <strong>platného Platebního kalendáře</strong>, který Vám zasíláme v příloze tohoto e-mailu.</p>

<p>V příloze Vám zároveň zasíláme <strong>daňový doklad</strong> k vrácené platbě.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Vrácení platby uhrazené nad rámec platebního kalendáře": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail.</p>

<p>Rádi bychom Vás informovali, že částka <strong>{vrácená částka} Kč</strong>, kterou jste obdržel/a dne <strong>{datum vratky}</strong>, byla z naší strany vrácena na základě Vámi provedené platby ve výši <strong>{uhrazená částka} Kč</strong>.</p>

<p>Po posledním vyúčtování ze dne <strong>{datum vyúčtování}</strong> došlo k úpravě platebního kalendáře, ve kterém je aktuální výše měsíční zálohy stanovena na <strong>{aktuální záloha} Kč</strong>. Z Vaší strany nám však nadále chodí platby ve výši <strong>{výše trvalé platby} Kč</strong>, tedy vyšší částky, než odpovídá aktuálnímu platebnímu kalendáři.</p>

<p>Z tohoto důvodu vracíme rozdíl mezi uhrazenou částkou a výší zálohy uvedenou v platebním kalendáři zpět na Váš účet. Stejným způsobem jsme Vám vraceli i platby v měsících <strong>{měsíce předchozích vratek}</strong>.</p>

<p>Aby nedocházelo k dalším vratkám plateb, doporučujeme jednu z následujících možností:</p>

<ul>
  <li>upravit trvalý příkaz na částku odpovídající aktuální výši záloh, tedy <strong>{aktuální záloha} Kč</strong>, nebo</li>
  <li>informovat nás, zda si přejete navýšit zálohy na Vámi preferovanou částku <strong>{výše trvalé platby} Kč</strong>. Na základě Vašeho potvrzení bychom následně upravili platební kalendář.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
"Potvrzení o platbě zasláno – platba zatím není evidována": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail a zaslané potvrzení o provedené úhradě <strong>{dlužné faktury / zálohy}</strong>.</p>

<p>V tuto chvíli však přijatou platbu v systému zatím neevidujeme.</p>

<p>Rádi bychom Vás informovali, že připsání platby na náš účet může standardně trvat <strong>2–3 pracovní dny</strong>, a to v závislosti na mezibankovním zpracování. Jakmile bude platba zaevidována v našem systému, projeví se u Vašeho zákaznického účtu.</p>

<p>Stav úhrady můžete kdykoliv ověřit také v <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer"><strong>Zákaznickém portálu</strong></a> v sekci <strong>Platby a zálohy</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Platby"]
},
        /* ========================= Zálohy ========================= */
"Úprava výše záloh – navýšení na žádost zákazníka dle § 11 odst. 6": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme Vám změnu zálohových plateb na částku <strong>{částka zálohy} Kč</strong>. Tato změna bude provedena od <strong>{MM. RRRR}</strong>.</p>

<p>Nový platební kalendář Vám bude zaslán v samostatném e-mailu nebo poštou.</p>

<p><em>Informujeme Vás, že v důsledku navýšení záloh může při vyúčtování vzniknout vyšší přeplatek. Vzhledem k této úpravě již rozpis záloh neodpovídá postupu dle § 11 odst. 6 energetického zákona.</em></p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Změna výše záloh – žádost o fotografii měřidla - Stávající zákazník / evidujeme fakturu": {
    text: `${OSLOVENI_BLOCK}
<p>pro posouzení změny zálohy na Vámi požadovanou výši Vás prosíme o zaslání aktuální fotografie měřidla.</p>

<p>Na základě doložené fotografie bude Váš požadavek předán příslušnému oddělení k posouzení. O výsledku Vás následně budeme informovat.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Změna výše záloh – nový zákazník, žádost o podklady/neevidujeme vystavenou fakturu": {
    text: `${OSLOVENI_BLOCK}
<p>pro posouzení změny zálohy na Vámi požadovanou výši Vás prosíme o zaslání aktuální fotografie měřidla a konečného vyúčtování od původního dodavatele.</p>

<p>Na základě doložených dokumentů bude Váš požadavek předán příslušnému oddělení k posouzení. O výsledku Vás následně budeme informovat.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Snížení zálohových plateb – zamítnutí požadavku": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale Vašemu požadavku na snížení zálohových plateb nemůžeme v tuto chvíli vyhovět.</p>

<p>Výše záloh stanovená v platebním kalendáři se odvíjí od smluvní ceny a očekávaného množství dodané energie.</p>

<p>Pokud disponujete informacemi, které prokazují důvodné snížení spotřeby na daném odběrném místě, například instalace fotovoltaické elektrárny, přechod na jiný způsob vytápění, instalace plynového kotle či tepelného čerpadla, případně konečné vyúčtování od původního dodavatele, prosíme Vás o jejich doložení.</p>

<p>Pro posouzení požadavku nám můžete doložit například <strong>protokol o instalaci</strong>, <strong>konečné vyúčtování</strong> a <strong>aktuální fotografii měřidla s datumovkou</strong>.</p>

<p>Po obdržení podkladů požadavek na úpravu výše záloh znovu posoudíme.</p>

<p>Rádi našim zákazníkům vyhovíme, ale musíme mít k dispozici podklady potvrzující, že je snížení záloh opodstatněné. Cílem je předejít vzniku vysokého nedoplatku v ročním vyúčtování.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Kopie platebního kalendáře": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku Vám zasíláme kopii platebního kalendáře k dodávkám energií.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Platební kalendář jako daňový doklad": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že platební kalendář, který jsme Vám zaslali, splňuje zákonné náležitosti a slouží jako daňový doklad.</p>

<p>Samostatný daňový doklad k platbě vystavujeme pouze na přijaté platby, které jsou uhrazeny nad rámec částek stanovených platebním kalendářem.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Potvrzení změny výše záloh": {
    text: `${OSLOVENI_BLOCK}
<p>potvrzujeme Vám změnu zálohových plateb na částku <strong>{částka zálohy} Kč</strong>. Tato změna bude provedena od <strong>{MM. RRRR}</strong>.</p>

<p>Nový platební kalendář Vám bude zaslán v samostatném e-mailu nebo poštou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Snížení zálohových plateb – zamítnutí na minimální částku": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale měsíční zálohy nelze snížit na Vámi požadovanou částku.</p>

<p>Součástí plateb za dodávku energií jsou také položky, které je nutné pravidelně hradit, například distribuční poplatky. Pokud by byly zálohy sníženy na Vámi požadovanou částku, nemuselo by docházet k pokrytí těchto nákladů.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
"Platební kalendář – nový zákazník": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám, že jste si vybral/a naši společnost pro dodávky energií.</p>

<p>Rádi bychom Vás informovali, že k vystavení a odeslání platebního kalendáře, tedy rozpisu záloh, dochází standardně <strong>do 14 dnů od data zahájení dodávek</strong>.</p>

<p>Ve Vašem případě začínají dodávky u naší společnosti od <strong>{datum zahájení dodávek}</strong>, proto Vás prosíme o krátké strpení.</p>

<p>Jakmile bude platební kalendář vystaven, bude Vám automaticky zaslán na e-mail uvedený ve smlouvě.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zálohy"]
},
        /* ========================= SPK ========================= */
"Žádost o splátkový kalendář – podmínky posouzení": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za žádost o vystavení splátkového kalendáře (SPK). Rádi bychom Vás informovali o podmínkách, které je nutné splnit, aby mohla být Vaše žádost posouzena.</p>

<ul>
  <li><strong>Stav záloh:</strong> Je nezbytné, aby byly uhrazeny všechny zálohy po splatnosti. Pokud máte aktuálně neuhrazené zálohy, prosíme o jejich doplacení před podáním žádosti o SPK. <strong>{zde případně doplnit informaci, zda evidujeme zálohy po splatnosti}</strong></li>

  <li><strong>Úhrada části dluhu:</strong> Podle našich podmínek je nutné uhradit alespoň <strong>1/3 celkového dluhu</strong>. Ve Vašem případě se jedná o částku <strong>{částka} Kč</strong>. Toto opatření slouží k prokázání zájmu o řádné vyřízení dluhu. Po provedení této platby je třeba zaslat potvrzení o úhradě.</li>

  <li><strong>Podmínky splátkového kalendáře:</strong> Splátkový kalendář je možné rozložit maximálně do <strong>3 splátek</strong>.</li>

  <li><strong>Další kroky:</strong> Po úhradě 1/3 dluhu prosíme vyčkejte <strong>2–3 pracovní dny</strong> na připsání platby. Poté kontaktujte naši zákaznickou linku, ideálně telefonicky. Vaši žádost následně předáme finančnímu oddělení k vystavení splátkového kalendáře.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["SPK"]
},
"Splátkový kalendář – schválení a vystavení": {
    text: `${OSLOVENI_BLOCK}
<p>chtěli bychom Vás informovat, že jsme schválili Vaši žádost o poskytnutí splátkového kalendáře.</p>

<p>Splátkový kalendář se vztahuje k faktuře s variabilním symbolem <strong>{variabilní symbol}</strong>, která byla vystavena za dodávku elektřiny/plynu.</p>

<p>Jednotlivé splátky dlužné částky prosím hraďte dle níže uvedeného rozpisu a platebních údajů:</p>

<ul>
  <li><strong>Variabilní symbol:</strong> {variabilní symbol}</li>
  <li><strong>Částka splátky:</strong> {částka} Kč</li>
  <li><strong>Bankovní spojení:</strong> 9960227/0100</li>
  <li><strong>První splátka je splatná ke dni:</strong> {DD. MM. RRRR}</li>
</ul>

<p>Detailní rozpis splátek najdete v dokumentu přiloženém v příloze tohoto e-mailu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://docs.google.com/document/d/13fDHRHzFAzN79kNSr-ECLBv4lUedUvLNxvxAJ7KeIO4/edit?usp=drive_link", name: "Splátkový kalendář - rozpis splátek", type: "doc", brand: "epet" },
        { url: "https://docs.google.com/document/d/1xdJaEgbORi0v3vWVu-P_X1Y0glCwx32j1gn48m_TbUs/edit?usp=drive_link", name: "Splátkový kalendář - rozpis splátek", type: "doc", brand: "de" }
    ],
    tags: ["SPK"]
},
"Splátkový kalendář – výzva k úhradě neuhrazených splátek": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že k datu <strong>{DD. MM. RRRR}</strong> Vám byl schválen splátkový kalendář k nedoplatkové faktuře ve výši <strong>{částka} Kč</strong>.</p>

<p>O této skutečnosti jsme Vás informovali e-mailem / telefonicky dne <strong>{DD. MM. RRRR}</strong>. Součástí informace byl také rozpis jednotlivých měsíčních splátek.</p>

<p>Do dnešního dne však evidujeme, že splátky nebyly uhrazeny. Žádáme Vás proto o nápravu této situace.</p>

<p>V opačném případě dojde ke zrušení splátkového kalendáře a celý dluh ve výši <strong>{částka} Kč</strong> bude nutné uhradit neprodleně v plné výši.</p>

<p>Pokud platba nebude provedena, může být pohledávka předána k dalšímu vymáhání.</p>

<p>Děkujeme Vám za pochopení a věříme v rychlé vyřešení této záležitosti.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["SPK"]
},
       /* ========================= Změny platebního způsobu ========================= */
"Změna bankovního účtu pro zasílání přeplatků": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme, že jsme změnili číslo bankovního účtu pro zasílání přeplatků za odběr energií.</p>

<p>Nové číslo bankovního účtu je <strong>{číslo bankovního účtu}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změny platebního způsobu"]
},
"Změna bankovního účtu pro inkaso záloh": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme nastavení nového čísla bankovního účtu pro úhradu zálohových plateb prostřednictvím inkasa.</p>

<p>Nové číslo bankovního účtu je <strong>{číslo bankovního účtu}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změny platebního způsobu"]
},
"Změna úhrady záloh prostřednictvím SIPO - Před 24. dnem v měsíci": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme změnu způsobu úhrady zálohových plateb.</p>

<p>Nově budou Vaše zálohové platby hrazeny prostřednictvím SIPO. Evidované spojovací číslo je <strong>{spojovací číslo}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změny platebního způsobu"]
},
"Změna úhrady záloh prostřednictvím SIPO - Po 24. dni v měsíci": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme změnu způsobu úhrady zálohových plateb.</p>

<p>Nově budou Vaše zálohové platby hrazeny prostřednictvím SIPO. Evidované spojovací číslo je <strong>{spojovací číslo}</strong>.</p>

<p>Jelikož však již byla v tomto měsíci uzavřena lhůta pro předání požadavků na SIPO, je nutné, abyste v následujícím měsíci uhradili zálohu ještě stávajícím způsobem.</p>

<p>Další měsíce budou již hrazeny dle nově nastaveného SIPO.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změny platebního způsobu"]
},
"Změna zasílání přeplatků ze složenky na bankovní účet": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku potvrzujeme, že jsme nastavili změnu způsobu zasílání případných přeplatků za odběr energií.</p>

<p>Případné přeplatky budou nově zasílány na bankovní účet číslo <strong>{číslo bankovního účtu}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změny platebního způsobu"]
},
        /* ========================= Kontaktní osoby ========================= */
"Přidání kontaktní osoby – žádost o doložení oprávnění": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale v tuto chvíli Vás neevidujeme jako kontaktní osobu oprávněnou k vyřizování požadavků a sdělování informací k zákaznickému účtu.</p>
<p>Proto Vás prosíme o doložení plné moci, případně o zaslání žádosti o přidání Vašeho kontaktu. Žádost by měla být zaslána kontaktní osobou z e-mailové adresy, kterou v našem systému evidujeme.</p>
<p>V plné moci nebo žádosti prosím uveďte celé jméno, e-mailovou adresu a telefonní číslo osoby, která má být jako kontaktní osoba doplněna.</p>
<p>Po doplnění kontaktní osoby Vám budeme moci sdělovat podrobnější informace týkající se odběru energií.</p>
<p>Děkujeme Vám za pochopení.</p>
${PORTAL_BLOCK}`,
    files: [],
    tags: ["Kontaktní osoby"]
},
"Požadavek zaslán z neevidovaného kontaktního e-mailu": {
    text: `${OSLOVENI_BLOCK}
<p>je nám líto, ale Váš požadavek nemůžeme v tuto chvíli zpracovat, protože e-mailovou adresu, ze které nám píšete, neevidujeme jako kontaktní.</p>

<p>Prosíme Vás o zaslání požadavku z e-mailové adresy, která je u Vaší smlouvy vedena jako kontaktní. Případně nás můžete kontaktovat telefonicky.</p>

<p>Na základě telefonického hovoru provedeme Vaši identifikaci a následně můžeme aktualizovat kontaktní údaje.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Kontaktní osoby"]
},
"Obchodní zástupce – chybějící plná moc k zastupování": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail.</p>

<p>Bohužel neevidujeme podepsanou plnou moc opravňující k zastupování zákazníka, a z tohoto důvodu nemůžeme Váš požadavek v tuto chvíli zpracovat.</p>

<p>Prosíme Vás proto o doložení platné plné moci. Po jejím obdržení se Vaším požadavkem budeme dále zabývat.</p>

<p>Děkujeme Vám za pochopení a spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Kontaktní osoby"]
},
       /* ========================= Dopisy ========================= */
 "Dopis – postup pro zaslání k tisku": {
    text: `<p>na základě potřeby zaslat zákazníkovi dopis prostřednictvím ZIS Vám zasíláme postup, který je nutné dodržet:</p>

<ul>
  <li>
    <strong>E-mail je třeba zaslat na adresu:</strong><br>
    <strong>tisk@epet.cz</strong>
  </li>

  <li>
    <strong>Předmět e-mailu musí být přesně uveden jako:</strong><br>
    <code>korespondence určená k tisku</code><br>
    <em>Jiný předmět není možné uvést – systém jej nezpracuje.</em>
  </li>

  <li>
    <strong>Do přílohy přiložte dokument určený k odeslání zákazníkovi:</strong><br>
    <strong>formát PDF</strong><br>
    <em>Jiný formát není přípustný.</em><br>
    <strong>Název souboru:</strong> <code>příjmení zákazníka_dopis</code>
  </li>

  <li>
    <strong>Pokud přikládáte dokument typu PK, FA nebo kopii smlouvy, musí být vždy přiložen také dopis.</strong><br>
    <em>Nelze odeslat samotný dokument bez doprovodného dopisu.</em>
  </li>
</ul>

<p><strong>Vzorový text e-mailu:</strong></p>

<blockquote style="border-left: 4px solid #ccc; margin: 0 0 1em 0; padding-left: 1em;">
Ahoj,<br>
prosím o zaslání dopisu za Epet na adresu:<br><br>
Jan Omáčka<br>
Ohořov 414<br>
000 00 Pampeliškov<br><br>
Děkuji
</blockquote>

<p><strong>Další možnosti:</strong></p>

<ul>
  <li>
    Pro ruční úpravu dopisu si můžete stáhnout šablonu ze znalostní báze:<br>
    <a href="https://sites.google.com/view/znalostn-bze/%C5%A1ablony/%C5%A1ablona-e-mail-korespondence-ur%C4%8Den%C3%A1-k-tisku?authuser=0" target="_blank" rel="noopener noreferrer">
      Znalostní báze – Šablona e-mail: korespondence určená k tisku
    </a><br>
    Sekce <strong>Šablony ke stažení</strong>.
  </li>

  <li>Doporučujeme využít také automatické generátory dopisů, které zajistí správné vyplnění a profesionální výstup.</li>

  <li>
    V rámci výše uvedené znalostní báze je také dostupná možnost automatického vygenerování e-mailu pro zaslání na odpovědnou osobu, tedy na <strong>tisk@epet.cz</strong>.
  </li>
</ul>`,
    files: [
        { url: "https://drive.google.com/file/d/10vEwfyGojwqZ81yvP6xSLI-krF7sD0c0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1t-FFOcEzZWbmqzf-EL40m1hJ78dimmJE/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN.", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1tUTwgDiU9L4dTsoa_DfHvDrIJi4IDTuQ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - z C na D", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1HKsGDY14VD8bREp744I2ze7EXC29j7J6/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ z PO – změna sazby Firma → Dom", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Xra9Xs7KsPb-Tua_2V_8NE1F1__uCoo2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1BjeKuD2NOpyYjJCMO2TnU2tTrST3musN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/18CENh1sJWOtFSE7yiU8yNE1MopDxRhbi/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1RSfEY2py1TVAD-PNSK6F0IaWZtH_msub/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1VGTUSlS0NyAxG40XNawIsEsC73eLJ8vT/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1U-7HjEN_2Otc_Nqyc0SEEAVh-4-TbXh0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD -DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1e4hYb1RV5JyLxw9z3r3AibD29KA8cW5C/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD -FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1Ttt9kAPVvlk4_CvrkuLfz87KFFOT59W2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/19EgEqT3RMRUXJ7keWbJAcrwDZmp0zFPJ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1teyOWAV6mLki32XdqwKdzbdEmYMs-EL_/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1LrIXIU7SsdgKDCHOgxjk0WakJhKKAvps/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/18XD0We0JIohhqFO6h-a4DC5zHbnPq1VI/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1G6jgmnroL1sMOkjuCCz7N5MdYiryCvYr/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN.-DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1SecyeJ5rUUHr1bZTw4jDwLa6imC1RXLO/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/15-HQqHUBlD-AuKxwl9lcTf2sm-ldW8_4/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD -DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1KTVPgMxS2QOKx4P38gyfYfgGAHvybg6n/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1X_9l-Wolx3jGoA_vKBLc50qfAX5FCQ3j/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOMÁCNOST", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/12D_dEsRwYzt-bvlM47ABI3NMkejBW5ub/view?usp=drive_link", name: "ČP z PO - Pro změnu sazby z Firmy na DOM", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/13tl9M1pc5K7KoAzQ66RQFrlw7Pt4Qe-X/view?usp=drive_link", name: "ČP - Z PO NA FO", type: "pdf", brand: "de" }
    ],
    generators: [
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-aktualizace-kontaktních-údajů", name: "Aktualizace kontaktních údajů – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-kopie-faktury", name: "Kopie faktury – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-kopie-platebního-kalendáře", name: "Kopie platebního kalendáře – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-kopie-smlouvy", name: "Kopie smlouvy – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-neproběhlé-sipo-ověření-spojovacího-čísla", name: "Neproběhlé SIPO – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-neuhrazené-pohledávky", name: "Neuhrazené pohledávky – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-ověření-nastavení-způsobu-úhrady-záloh-přes-inkaso", name: "Ověření úhrady záloh – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-plánovaná-odstávka-dodávek-energií", name: "Plánovaná odstávka – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-prosba-o-doložení-předávacího-protokolu", name: "Doložení předávacího protokolu – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-úhrada-konečné-faktury-dědické-řízení", name: "Úhrada konečné faktury – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-výzva-k-úhradě-smluvní-pokuty-dodávky-nezahájeny", name: "Výzva k úhradě – nezahájené dodávky – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-výzva-k-úhradě-smluvní-pokuty-předčasně-ukončené-dodávky", name: "Výzva k úhradě – předčasné ukončení – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-měření-z-b-na-c", name: "Změna měření B → C – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-měření-z-c-na-b", name: "Změna měření C → B – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-příjemní-zaslání-čp", name: "Změna příjmení – zaslání ČP – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-rezervovaného-příkonu", name: "Změna rezervovaného příkonu – generátor" },
        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-trvalé-adresy", name: "Změna trvalé adresy – generátor" }
    ],
    tags: ["Dopisy"]
},
        /* ========================= Montáže ========================= */
"Montáž měřidla – potvrzení termínu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš zájem o odběr energií od společnosti epet.</p>

<p>Rádi bychom Vás informovali, že jsme zpracovali Váš požadavek na montáž měřidla u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Montáž měřidla provede distributor dne <strong>{DD. MM. RRRR}</strong> v čase <strong>{HH:MM}</strong>.</p>

<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude montáž měřidla probíhat. Zároveň si prosím připravte revizní zprávu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Montáže"]
},
        /* ========================= Přepisy ========================= */
"Přepis odběrného místa – zaslání odkazu na formulář": {
    text: `${OSLOVENI_BLOCK}
<p>na základě naší telefonické dohody Vám zasíláme odkaz na elektronický formulář pro přepis odběrného místa.</p>

<p>Formulář můžete vyplnit a odeslat prostřednictvím následujícího odkazu: <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">Formulář k přepisu odběrného místa</a>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přepisy"]
},
"Přepis odběrného místa – bez odkazu na formulář": {
    text: `${OSLOVENI_BLOCK}
<p>stále evidujeme nevyřešený požadavek týkající se přepisu smlouvy na odběr energií po zemřelém/zemřelé <strong>{jméno zemřelého}</strong>.</p>

<p>Rádi bychom Vás informovali o nutnosti provést přepis na nového odběratele. Tento krok je nezbytný pro zajištění kontinuity dodávky energií na odběrném místě <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Prosíme Vás, abyste co nejdříve kontaktoval/a naši zákaznickou podporu na telefonním čísle <strong>255 70 70 99</strong> nebo e-mailem na <strong>info@epet.cz</strong>, kde Vám poskytneme veškeré potřebné informace k přepisu smlouvy.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přepisy"]
},
"Přepis odběrného místa – urgence bez odkazu na formulář": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás znovu upozornili na nutnost přepsání smlouvy na odběr energií na nového odběratele.</p>

<p>Původní smlouva byla uzavřena na zemřelého/zemřelou <strong>{jméno zemřelého}</strong> a je nezbytné uzavřít novou smlouvu, aby byla zajištěna kontinuální dodávka energií na odběrném místě <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Dosud jsme neobdrželi odpověď na naši předchozí výzvu. Prosíme Vás, abyste co nejdříve kontaktoval/a naši zákaznickou podporu na telefonním čísle <strong>255 70 70 99</strong> nebo e-mailem na <strong>info@epet.cz</strong>, kde Vám poskytneme veškeré potřebné informace k přepisu smlouvy.</p>

<p>Pokud nebude přepis smlouvy proveden do <strong>{DD. MM. RRRR}</strong>, budeme nuceni přistoupit k dalším krokům směřujícím k přerušení dodávky energií na uvedeném odběrném místě. Tento krok je nezbytný pro zajištění správné evidence a správy odběrného místa.</p>

<p>Děkujeme Vám za spolupráci a pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přepisy"]
},
"Přepis odběrného místa – zaslání odkazu na formulář po hovoru": {
    text: `${OSLOVENI_BLOCK}
<p>na základě naší telefonické dohody Vám zasíláme odkaz na elektronický formulář pro přepis odběrného místa.</p>

<p>Formulář můžete vyplnit a odeslat prostřednictvím následujícího odkazu: <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank" title="On-line formulář pro přepis odběrného místa" rel="noopener noreferrer">Formulář k přepisu odběrného místa</a>.</p>

<p>V případě, že si nebudete jistý/jistá, jak formulář správně vyplnit, můžete nás kontaktovat na zákaznické lince <strong>255 70 70 99</strong> nebo e-mailem na <strong>info@epet.cz</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přepisy"]
},
"Přepis odběrného místa – podklady předány ke zpracování smlouvy": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání potřebných informací.</p>

<p>Vaše podklady jsme předali kolegům ke zpracování. Na jejich základě Vám bude na e-mailovou adresu zaslán návrh smlouvy k podpisu, včetně aktuální cenové nabídky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přepisy"]
},
        /* ========================= Zranitelný zákazník ========================= */
"Zranitelný zákazník – upozornění na konec platnosti potvrzení": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás kontaktovat ohledně blížícího se konce platnosti Vašeho potvrzení o splnění podmínek pro přiznání zvláštních práv zranitelného zákazníka.</p>

<p>Po datu <strong>{DD. MM. RRRR}</strong> Vám bude status zranitelného zákazníka ukončen. Abychom Vám mohli práva zranitelného zákazníka přiznávat i po tomto termínu, prosíme Vás o doložení nového lékařského potvrzení vydaného Vaším ošetřujícím lékařem na následující období.</p>

<p>Vzor dokumentu naleznete ke stažení také na našich webových stránkách: <a href="https://www.epet.cz/zranitelny-zakaznik/" target="_blank" rel="noopener noreferrer">Zranitelný zákazník</a>.</p>

<p>Nové potvrzení nám prosím zašlete nejpozději do výše uvedeného data.</p>

<p>V případě, že nám dokument nebude doložen, přejde Vaše odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> do standardního režimu, na který se nevztahují práva spojená se statusem zranitelného zákazníka.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zranitelný zákazník"]
},
        /* ========================= Zákaznický portál ========================= */
"Zákaznický portál – registrace účtu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail.</p>

<p>Rádi bychom Vás informovali, že jsme úspěšně provedli registraci Vašeho účtu do Zákaznického portálu.</p>

<p>Registrační e-mail s přístupovými údaji a pokyny k aktivaci Vám bude doručen v samostatné zprávě. Pokud e-mail neobdržíte do několika minut, prosíme o kontrolu složky se spamem nebo hromadnou poštou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zákaznický portál"]
},
"Zákaznický portál – sloučení účtů": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme na základě Vašeho požadavku úspěšně provedli sloučení Vašich zákaznických účtů v rámci Zákaznického portálu.</p>

<p>Veškeré sloučené účty nyní naleznete v portálu pod svým jménem v pravém horním rohu. Nově budete mít možnost:</p>

<ul>
  <li>změnit výchozí účet dle Vašich preferencí,</li>
  <li>libovolně se mezi jednotlivými účty přepínat.</li>
</ul>

<p>Věříme, že Vám tato změna usnadní správu Vašich zákaznických údajů.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zákaznický portál"]
},
"Zákaznický portál – deaktivace přístupu": {
    text: `${OSLOVENI_BLOCK}
<p>na základě Vašeho požadavku jsme úspěšně deaktivovali Váš přístup do Zákaznického portálu.</p>

<p>Pokud byste si svou volbu v budoucnu rozmyslel/a a přál/a si přístup do portálu znovu aktivovat, neváhejte se na nás obrátit. Rádi Vám jej obnovíme.</p>

<p>Děkujeme, že jste využíval/a náš Zákaznický portál.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zákaznický portál"]
},
"Zákaznický portál – odpověď na obecný dotaz": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za dotaz týkající se <strong>{stručný popis požadavku}</strong>, který jste zadal/a prostřednictvím našeho Zákaznického portálu.</p>

<p>Rádi bychom Vám poskytli následující odpověď:</p>

<p>{zde uvést konkrétní odpověď na dotaz}</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zákaznický portál"]
},
"Zákaznický portál – reset zapomenutého hesla": {
    text: `${OSLOVENI_BLOCK}
<p>pokud se Vám nedaří přihlásit do Zákaznického portálu s heslem, které jste si nastavil/a, případně jste heslo zapomněl/a, je nutné provést reset hesla.</p>

<p>Reset hesla provedete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/forgotten-password" target="_blank" rel="noopener noreferrer">Reset hesla</a>.</p>

<p>Na zadanou e-mailovou adresu Vám bude doručeno nové heslo, se kterým se následně přihlásíte do portálu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zákaznický portál"]
},
       /* ========================= Přeplatky ========================= */
"Vrácená složenka – potvrzení údajů pro vyplacení přeplatku": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že se nám vrátila složenka s přeplatkem, který jsme Vám zasílali.</p>

<p>Abychom mohli přeplatek co nejdříve vyplatit, prosíme Vás o potvrzení následujících údajů:</p>

<ul>
  <li><strong>Potvrzení správnosti korespondenční adresy</strong> – prosíme o potvrzení, zda je adresa <strong>{adresa, na kterou byla složenka zaslána}</strong> stále aktuální, případně o sdělení nové korespondenční adresy.</li>
  <li><strong>Sdělení bankovního účtu</strong> – pokud si přejete přeplatek zaslat na bankovní účet, zašlete nám prosím číslo bankovního účtu.</li>
</ul>

<p>Údaje nám můžete zaslat odpovědí na tento e-mail, případně nás kontaktovat telefonicky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Vrácený přeplatek – žádost o sdělení nového bankovního účtu": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že se nám vrátil přeplatek ve výši <strong>{částka} Kč</strong>, který jsme zasílali na bankovní účet <strong>{číslo bankovního účtu}</strong>. Dle dostupné informace je uvedený bankovní účet neexistující.</p>

<p>Pro úspěšné zpracování vrácení této částky Vás tímto žádáme o sdělení nového bankovního účtu, na který můžeme přeplatek odeslat.</p>

<p>Prosíme Vás o zaslání těchto údajů co nejdříve, abychom mohli platbu bez odkladu uskutečnit.</p>

<p>Údaje nám můžete zaslat odpovědí na tento e-mail, případně nás kontaktovat telefonicky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Přeplatek – potvrzení vyplacení na bankovní účet": {
    text: `${OSLOVENI_BLOCK}
<p>dovolujeme si Vás informovat, že přeplatek ve výši <strong>{částka} Kč</strong> bude vyplacen na Váš bankovní účet <strong>{číslo bankovního účtu}</strong> v nejbližším možném termínu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Vrácená složenka – platba nad rámec platebního kalendáře": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že se nám vrátila poštovní poukázka, kterou jsme Vám zasílali z důvodu platby uhrazené nad rámec platebního kalendáře.</p>

<p>Jedná se o částku <strong>{částka vratky} Kč</strong> za období <strong>{období}</strong>.</p>

<p>Dle platebního kalendáře byla předepsaná záloha ve výši <strong>{předepsaná záloha} Kč</strong>, od Vás jsme obdrželi platbu ve výši <strong>{uhrazená částka} Kč</strong>. Rozdíl ve výši <strong>{částka vratky} Kč</strong> jsme odeslali složenkou na adresu <strong>{adresa}</strong>, zásilka se však vrátila jako nedoručená.</p>

<p>Abychom mohli vratku co nejdříve vyřídit, prosíme Vás o:</p>

<ul>
  <li>potvrzení korespondenční adresy, případně sdělení nové doručovací adresy pro opětovné zaslání složenkou, nebo</li>
  <li>informaci, zda si přejete částku poukázat na bankovní účet. V takovém případě nám prosím zašlete číslo účtu ve formátu předčíslí–číslo/kód banky.</li>
</ul>

<p><strong>Aby nedocházelo k dalším vratkám plateb, doporučujeme jednu z následujících možností:</strong></p>

<ul>
  <li>upravit trvalý příkaz na částku odpovídající aktuální výši záloh, tedy <strong>{aktuální záloha} Kč</strong>, nebo</li>
  <li>informovat nás, zda si přejete navýšit zálohy na Vámi preferovanou částku <strong>{výše trvalé platby} Kč</strong>. Na základě Vašeho potvrzení bychom následně upravili platební kalendář.</li>
</ul>

<p>Údaje nám můžete zaslat odpovědí na tento e-mail, případně nás kontaktovat telefonicky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Vrácená platba – neexistující bankovní účet, platba nad rámec PK": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že se nám vrátila platba ve výši <strong>{částka vratky} Kč</strong>, kterou jsme Vám zasílali na bankovní účet <strong>{číslo bankovního účtu}</strong> z důvodu platby uhrazené nad rámec platebního kalendáře za období <strong>{období}</strong>.</p>

<p>Dle platebního kalendáře byla předepsaná záloha ve výši <strong>{předepsaná záloha} Kč</strong>, od Vás jsme obdrželi platbu ve výši <strong>{uhrazená částka} Kč</strong>. Rozdíl ve výši <strong>{částka vratky} Kč</strong> jsme Vám zasílali zpět, platba se však vrátila z důvodu neexistujícího bankovního účtu.</p>

<p>Pro úspěšné zpracování vrácení této částky Vás prosíme o sdělení nového bankovního účtu, na který můžeme vratku odeslat.</p>

<p><strong>Aby nedocházelo k dalším vratkám plateb, doporučujeme jednu z následujících možností:</strong></p>

<ul>
  <li>upravit trvalý příkaz na částku odpovídající aktuální výši záloh, tedy <strong>{aktuální záloha} Kč</strong>, nebo</li>
  <li>informovat nás, zda si přejete navýšit zálohy na Vámi preferovanou částku <strong>{výše trvalé platby} Kč</strong>. Na základě Vašeho potvrzení bychom následně upravili platební kalendář.</li>
</ul>

<p>Údaje nám můžete zaslat odpovědí na tento e-mail, případně nás kontaktovat telefonicky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Chybně vyplacený přeplatek – žádost o vrácení": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme v rámci interní kontroly zjistili administrativní chybu při vyplacení přeplatku ve výši <strong>{částka} Kč</strong>, který Vám byl omylem připsán.</p>

<p>Tento přeplatek Vám bohužel nenáleží, a proto Vás prosíme o jeho vrácení.</p>

<p>Úhradu prosím proveďte na níže uvedený bankovní účet:</p>

<ul>
  <li><strong>Číslo účtu:</strong> {číslo účtu}</li>
  <li><strong>Variabilní symbol:</strong> {variabilní symbol}</li>
</ul>

<p>Velmi si vážíme Vaší spolupráce a omlouváme se za případné nepříjemnosti.</p>

<p>Děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Přeplatek odeslán složenkou i přes nastavený bankovní účet": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali o stavu Vašeho přeplatku. Přestože máte v našem systému nastavený bankovní účet pro vyplacení přeplatku, bohužel se tento požadavek nepodařilo zpracovat v původně plánovaném termínu.</p>

<p>Z tohoto důvodu byl přeplatek odeslán dle původního nastavení prostřednictvím poštovní poukázky.</p>

<p>V současné situaci máte dvě možnosti:</p>

<ol>
  <li><strong>Vyčkat na vrácení poukázky</strong> – pokud si složenku nevyzvednete, Česká pošta nám ji standardně vrátí zpět. Tento proces může trvat přibližně <strong>3–6 týdnů</strong>. Poté bude přeplatek vyplacen na bankovní účet, který u Vás evidujeme v systému.</li>
  <li><strong>Vyzvednout zaslanou složenku</strong> – pokud si složenku vyzvednete, obdržíte přeplatek touto cestou.</li>
</ol>

<p>Omlouváme se za vzniklé komplikace a děkujeme Vám za pochopení.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
"Přeplatek – potvrzení nastavení bankovního účtu a předání na finance": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání správného čísla bankovního účtu <strong>{číslo bankovního účtu}</strong>, které jsme zaevidovali k Vašemu zákaznickému účtu.</p>

<p>Požadavek na vyplacení přeplatku jsme předali k dalšímu zpracování. Jakmile dojde k vyplacení přeplatku, budeme Vás o této skutečnosti informovat.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Přeplatky"]
},
       /* ========================= Bezzálohový režim ========================= */
"Bezzálohový režim – žádost a podmínky": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za dosavadní spolupráci. Na základě Vašeho zájmu o přechod na <strong>bezzálohový režim</strong> Vám zasíláme podmínky, které je nutné splnit:</p>

<ul>
  <li>neevidovat žádné zálohy ani vyúčtování po splatnosti, <strong>{upozornění na částky po splatnosti}</strong></li>
  <li>mít měření typu <strong>B</strong>,</li>
  <li>uhradit kauci ve výši jedné měsíční zálohy, tedy částku <strong>{výše měsíční zálohy} Kč</strong>. Kauce musí být uhrazena nejpozději do <strong>3 dnů</strong> od doručení tohoto e-mailu,</li>
  <li>vyplnit, podepsat a zaslat zpět přiložený formulář.</li>
</ul>

<p>V příloze naleznete příslušný formulář. Prosíme Vás o jeho vyplnění, podpis a zaslání zpět na tuto e-mailovou adresu.</p>

<p>Jakmile obdržíme podepsaný dokument a ověříme splnění výše uvedených podmínek, budeme Vás informovat o dalším postupu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1EhfSImShMh7soopf2KBDLK05C3Q7_6c1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1vUBov6r4JO_0g9Mn86irAAjcVkHhZXyv/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1YsGBG28zBYV4jpnxVqfKKOv-pOHs4qE1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Ra71idB4LDOBGFBkPCqEGeEllg-xzrxE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1UVYglvcpd8IynJFot1amG9IEIs1m1Xix/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1S_b479xrvkw25Cy5tabYq_AYaX87LStE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "de" }
    ],
    tags: ["Bezzálohový režim"]
},
"Bezzálohový režim – schválení žádosti": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že na základě splnění všech podmínek Vám byl schválen <strong>bezzálohový režim</strong>.</p>

<p>To znamená, že od nynějška již není nutné hradit měsíční zálohy.</p>

<p>Namísto záloh Vám budeme vystavovat faktury odpovídající skutečné spotřebě, a to každý měsíc dle standardních fakturačních podmínek.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Bezzálohový režim"]
},
"Bezzálohový režim – zamítnutí žádosti": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za žádost o zařazení do bezzálohového režimu.</p>

<p>Po posouzení Vaší žádosti Vám bohužel musíme sdělit, že aktuálně nesplňujete podmínky pro zařazení do tohoto režimu.</p>

<p>Bezzálohový režim je v současné době umožněn pouze <strong>firemním zákazníkům</strong> s typem měření <strong>B</strong>.</p>

<p>Pokud se v budoucnu změní podmínky Vašeho odběru a budete splňovat uvedené požadavky, rádi Vaši žádost znovu posoudíme.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Bezzálohový režim"]
},
"Bezzálohový režim – vrácení kauce": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za dotaz k vrácení kauce v rámci bezzálohového režimu.</p>

<p>V případě bezzálohového režimu je kauce standardně držena jako zajištění plateb.</p>

<p>Po <strong>12 měsících řádného a včasného hrazení faktur</strong> má zákazník možnost požádat o její vrácení.</p>

<p>Vrácení kauce tedy neprobíhá automaticky – je realizováno <strong>na základě písemné žádosti zákazníka</strong>, kterou nám zašlete po uplynutí uvedené 12měsíční lhůty.</p>

<p>Jakmile Vaši žádost obdržíme a ověříme splnění podmínek řádných úhrad, zajistíme zpracování a následné vyplacení kauce na Vámi uvedený bankovní účet.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Bezzálohový režim"]
},
       /* ========================= Smluvní pokuty ========================= */
"Výpočet smluvní pokuty – orientační informace": {
    text: `${OSLOVENI_BLOCK}
<p>na základě našeho dnešního telefonického hovoru Vám níže zasíláme informaci k orientační výši smluvní pokuty vztahující se ke smlouvě na dodávku elektřiny/plynu č. <strong>{číslo smlouvy}</strong>.</p>

<p>Orientační výše smluvní pokuty činí <strong>{částka} Kč</strong> a je vypočtena na základě předpokladu, že k ukončení odběrného místa jiným dodavatelem dojde nejpozději k datu <strong>{D+10 pracovních dnů}</strong>.</p>

<p>Upozorňujeme, že pokud by k ukončení odběrného místa došlo k jinému datu, může se skutečná výše smluvní pokuty lišit.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smluvní pokuty"]
},
"Výzva k úhradě smluvní pokuty": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u Vašeho odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> došlo k porušení smluvních podmínek z důvodu <strong>{nezahájení dodávky energií / předčasného ukončení dodávky energií}</strong>.</p>

<p>Na základě této skutečnosti uplatňujeme právo na vystavení smluvní pokuty.</p>

<p>Informace o výši smluvní pokuty a způsobu její úhrady naleznete v přiložené faktuře.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smluvní pokuty"]
},
"Přezkoumání smluvní pokuty – oprávněné uplatnění": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že jsme znovu důkladně přezkoumali důvody uplatnění smluvní pokuty týkající se odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

<p>I po opětovném přezkoumání nadále trváme na oprávněnosti smluvní pokuty. Důvodem je <strong>{důvod uplatnění smluvní pokuty}</strong>.</p>

<p>Informace o výši smluvní pokuty a způsobu její úhrady naleznete v přiložené faktuře.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smluvní pokuty"]
},
"Smluvní pokuta – storno požadavku na úhradu": {
    text: `${OSLOVENI_BLOCK}
<p>přehodnotili jsme náš požadavek na úhradu smluvní pokuty pro odběrné místo <strong>EAN/EIC ${EAN_BLOCK}</strong>.</p>

<p>Na úhradě této smluvní pokuty již netrváme.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Smluvní pokuty"]
},
       /* ========================= Změna typu měření ========================= */
"Změna typu měření z B na C": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> distributor provedl změnu typu měření z <strong>B</strong> na <strong>C</strong>.</p>

<p>Od této chvíle bude odečet na Vašem měřidle prováděn standardně jednou ročně.</p>

<p>Pokud byste si přáli nadále využívat možnost měsíční fakturace, je to možné na základě pravidelného zasílání samoodečtů. Tato možnost je zpoplatněna částkou <strong>41,32 Kč / odběrné místo bez DPH</strong>.</p>

<p>Pro využití této možnosti nám prosím zasílejte stavy měřidla zaznamenané v tabulce, kterou naleznete v příloze, nejpozději dle níže uvedených termínů. Využít můžete také <a href="https://zakaznici.epet.cz/login" target="_blank" rel="noopener noreferrer">Zákaznický portál</a>.</p>

<ul>
  <li><strong>Elektřina:</strong> odečet může být nahlášen k libovolnému datu, musí být však nahlášen do <strong>20 kalendářních dnů</strong> od provedení odečtu.</li>
  <li><strong>Plyn:</strong> odečet musí být proveden k poslednímu dni v měsíci a nahlášen do <strong>5 kalendářních dnů</strong>.</li>
</ul>

<p>Dále Vás informujeme, že pokud jste doposud využívali bezzálohový režim, bude Vám tento režim automaticky zrušen. Nově bude nutné hradit zálohy dle předepsaného platebního kalendáře, který Vám v nejbližších dnech zašleme na Vaši e-mailovou nebo korespondenční adresu.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1EhfSImShMh7soopf2KBDLK05C3Q7_6c1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1vUBov6r4JO_0g9Mn86irAAjcVkHhZXyv/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1YsGBG28zBYV4jpnxVqfKKOv-pOHs4qE1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Ra71idB4LDOBGFBkPCqEGeEllg-xzrxE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1UVYglvcpd8IynJFot1amG9IEIs1m1Xix/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1S_b479xrvkw25Cy5tabYq_AYaX87LStE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "de" }
    ],
    tags: ["Změna typu měření"]
},
"Změna typu měření z C na B – domácnost": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> distributor provedl změnu typu měření z <strong>C</strong> na <strong>B</strong>.</p>

<p>Od této chvíle bude odečet na Vašem měřidle prováděn za každý kalendářní měsíc.</p>

<p>Každý měsíc Vám budeme zasílat také fakturu. Rádi bychom Vás zároveň upozornili, že fakturace jednou ročně již není možná.</p>

<p>Platební kalendář a úhrada záloh zůstávají beze změny.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změna typu měření"]
},
"Změna typu měření z C na B – firma, nabídka bezzálohového režimu": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> distributor provedl změnu typu měření z <strong>C</strong> na <strong>B</strong>.</p>

<p>Od této chvíle bude odečet na Vašem měřidle prováděn za každý kalendářní měsíc.</p>

<p>Každý měsíc Vám budeme zasílat také fakturu. Rádi bychom Vás zároveň upozornili, že fakturace jednou ročně již není možná.</p>

<p>V návaznosti na tuto změnu Vám zasíláme také podmínky pro případný přechod na bezzálohový režim:</p>

<ul>
  <li>neevidovat žádné zálohy ani vyúčtování po splatnosti, <strong>{případné upozornění na částky po splatnosti}</strong></li>
  <li>mít měření typu <strong>B</strong>, což nyní splňujete,</li>
  <li>uhradit kauci ve výši jedné měsíční zálohy, tedy částku <strong>{aktuální výše zálohy} Kč</strong>,</li>
  <li>vyplnit, podepsat a zaslat zpět přiložený formulář.</li>
</ul>

<p>V příloze naleznete příslušný formulář. Prosíme Vás o jeho vyplnění, podpis a zaslání zpět na tuto e-mailovou adresu.</p>

<p>Jakmile obdržíme podepsaný dokument a ověříme splnění uvedených podmínek, budeme Vás informovat o dalším postupu.</p>

<p>Děkujeme Vám za spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [
        { url: "https://drive.google.com/file/d/1EhfSImShMh7soopf2KBDLK05C3Q7_6c1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1vUBov6r4JO_0g9Mn86irAAjcVkHhZXyv/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1YsGBG28zBYV4jpnxVqfKKOv-pOHs4qE1/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "epet" },
        { url: "https://drive.google.com/file/d/1Ra71idB4LDOBGFBkPCqEGeEllg-xzrxE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1UVYglvcpd8IynJFot1amG9IEIs1m1Xix/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf", brand: "de" },
        { url: "https://drive.google.com/file/d/1S_b479xrvkw25Cy5tabYq_AYaX87LStE/view?usp=drive_link", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2025", type: "pdf", brand: "de" }
    ],
    tags: ["Změna typu měření"]
},
"Změna typu měření z C na B – firma bez nabídky bezzálohového režimu": {
    text: `${OSLOVENI_BLOCK}
<p>informujeme Vás, že u odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong> distributor provedl změnu typu měření z <strong>C</strong> na <strong>B</strong>.</p>

<p>Od této chvíle bude odečet na Vašem měřidle prováděn za každý kalendářní měsíc.</p>

<p>Každý měsíc Vám budeme zasílat také fakturu. Rádi bychom Vás zároveň upozornili, že fakturace jednou ročně již není možná.</p>

<p>Platební kalendář a úhrada záloh zůstávají beze změny.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Změna typu měření"]
},
        /* ========================= Odstávka ========================= */
"Plánovaná odstávka dodávek energií": {
    text: `${OSLOVENI_BLOCK}
<p>kontaktoval nás Váš distributor s informací týkající se plánovaného přerušení dodávky energií do odběrného místa <strong>EAN/EIC ${EAN_BLOCK}</strong> na adrese <strong>${ADRESA_BLOCK}</strong>.</p>

<p>Dodávka bude přerušena v rozmezí <strong>{DD. MM. RRRR – DD. MM. RRRR}</strong> z důvodu plánované stavební úpravy.</p>

<p>Distributor předpokládá, že dodávka nebude přerušena po celou uvedenou dobu, ale pouze na dobu nezbytně nutnou. O přesném termínu Vás bude distributor informovat prostřednictvím informační vývěsky.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Odstávka"]
},
         /* ========================= Sdílená elektřina ========================= */
"Sdílená elektřina – kde najít množství nasdílené energie": {
    text: `${OSLOVENI_BLOCK}
<p>množství energie, které jste fyzicky sdílel/a, si můžete orientačně vypočítat následovně:</p>

<ol>
  <li><strong>Zjistěte svou celkovou spotřebu</strong> – ve vyúčtování se podívejte na počáteční a konečný stav elektroměru. Rozdíl mezi těmito hodnotami představuje Vaši skutečnou fyzickou spotřebu za dané období.</li>

  <li><strong>Podívejte se na hodnoty ve vyúčtování</strong> – v kolonkách <strong>Distribuováno</strong> a <strong>Dodáno</strong> najdete množství energie, které Vám bylo skutečně účtováno. Tyto hodnoty nezahrnují energii, kterou jste sdílel/a.</li>

  <li><strong>Výpočet sdílené energie</strong> – sdílené množství zjistíte takto: <strong>Sdílená energie (kWh) = fyzicky spotřebovaná energie − účtovaná spotřeba</strong>.</li>
</ol>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Sdílená elektřina"]
},
"Sdílená elektřina – obecné informace pro zákazníka": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za dotaz ke sdílené elektřině.</p>

<p>Sdílení elektřiny není nabízeno jako samostatný produkt dodavatele. Jedná se o proces, který je plně v rukou zákazníka. My jako dodavatel do nastavení sdílení elektřiny nezasahujeme.</p>

<p>Pro registraci a správu sdílení prosím využijte oficiální portál <a href="https://www.edc-cr.cz/" target="_blank" rel="noopener noreferrer">EDC-ČR</a>, kde si založíte účet a nastavíte potřebné údaje. Jakmile EDC-ČR zveřejní a potvrdí Vaše alokace, promítneme sdílené množství do Vašeho vyúčtování.</p>

<p><strong>Důležité informace:</strong></p>

<ul>
  <li><strong>Změna dodavatele není nutná.</strong> Sdílení zohledníme v rámci Vaší stávající smlouvy.</li>
  <li>Započtení sdílené energie vychází z údajů EDC-ČR. Regulované složky, například distribuce, daně a stálé platby, se účtují dle platné regulace.</li>
  <li>Pro zapojená odběrná místa je obvykle vyžadováno průběhové, tedy dálkově odečítané měření.</li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Sdílená elektřina"]
},
         /* ========================= FVE - MIKROZDROJE ========================= */
"Převzetí odchylky – zamítnutý výrobní EAN - (Šablona č.1)": {
    text: `${OSLOVENI_BLOCK}
<p>rádi bychom Vás informovali, že jsme se za Vás pokusili převzít odpovědnost za odchylku u Operátora trhu. Přihlášení však bylo zamítnuto z důvodu, že nemáte aktivovaný druhý EAN, který Vám přidělil distributor.</p>

<p>Prosíme Vás proto o co nejrychlejší aktivaci tohoto EAN, nejpozději do <strong>3 pracovních dnů</strong>. Po provedení registrace Vám distributor zašle potvrzovací e-mail, ve kterém uvede, že byl EAN aktivován a od jakého data.</p>

<p>Jakmile tento e-mail obdržíte, přepošlete nám jej prosím jako potvrzení.</p>

<p>Vzhledem k vysokému zájmu o převzetí odchylek v tomto období a nutnosti zajištění technických kroků předem nemůžeme v případě neposkytnutí součinnosti zaručit včasné převzetí odchylky.</p>

<p>Tato situace může vést k neoprávněnému odběru, za který nese odpovědnost zákazník.</p>

<p>Děkujeme Vám za pochopení a spolupráci.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Převzetí odchylky"]
},
"Převzetí odchylky / výkup FVE – žádost o doplnění údajů - (Šablona č.2)": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zájem o připojení Vaší výrobny elektřiny z fotovoltaické elektrárny (FVE).</p>

<p>Abychom mohli zahájit proces připojení, prosíme Vás o zaslání následujících údajů:</p>

<p><strong>Povinné údaje:</strong></p>
<ul>
  <li><strong>Jméno a příjmení / název společnosti:</strong> {jméno a příjmení / název společnosti}</li>
  <li><strong>Datum narození / IČ:</strong> {datum narození / IČ}</li>
  <li><strong>EAN kód výrobny:</strong> {EAN výrobny}</li>
  <li><strong>Adresa výrobny:</strong> {adresa výrobny}</li>
  <li><strong>Datum připojení výrobny do distribuční sítě:</strong> {DD. MM. RRRR}</li>
  <li><strong>Je výrobní EAN nový?</strong> {ano/ne}. Pokud ne, prosíme o doložení akceptace ukončení smlouvy od původního dodavatele.</li>
  <li><strong>Sdílíte v tuto chvíli energii?</strong> {ano/ne}. Pokud ano, prosíme o uvedení procentuálního podílu sdílení.</li>
  <li><strong>Smlouva o připojení / Protokol o připojení k distribuční síti:</strong> prosíme o doložení jednoho z těchto dokumentů.</li>
</ul>

<p><strong>Nepovinný údaj, doporučujeme doplnit:</strong></p>
<ul>
  <li><strong>EAN kód odběrného, tedy spotřebního místa:</strong> {EAN spotřebního místa}</li>
</ul>

<p>Aktuálně Vám můžeme nabídnout dvě varianty:</p>
<ul>
  <li><strong>převzetí odpovědnosti za odchylku</strong> s nulovou výkupní cenou, bez dalších poplatků,</li>
  <li><strong>uzavření smlouvy na výkup za spotovou výkupní cenu</strong>, která se odvíjí od cen na burze a je snížena o poplatek <strong>350 Kč/MWh bez DPH</strong>.</li>
</ul>

<p>Prosíme Vás o sdělení, o kterou z uvedených variant máte zájem.</p>

<p>Díky změně legislativy začne od <strong>1. 7. 2025</strong> příslušný distributor ukládat pokuty výrobnám, které nemají sjednaného obchodníka. Společnost epet za Vás může převzít odpovědnost za odchylku, aby k těmto pokutám nedocházelo.</p>

<hr>

<p><strong>Souhlas zákazníka:</strong></p>
<p>Vyjadřuji tímto souhlas a projevuji vůli, aby se společnost epet stala obchodníkem pro mé výrobní místo a provedla jeho registraci u Operátora trhu s elektřinou (OTE).</p>

<p>Vyplněné údaje nám prosím zašlete zpět na e-mailovou adresu <strong>info@epet.cz</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Převzetí odchylky"]
},
"Zajištění odchylky – předáno k dalšímu zpracování": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za zaslání požadovaných podkladů a informací k zajištění odchylky.</p>

<p>Váš požadavek jsme zaevidovali a v tuto chvíli jej předáváme k dalšímu zpracování kolegům z oddělení nabídek.</p>

<p>Jakmile budou připraveny potřebné podklady nebo smlouva, zašleme Vám je na Váš e-mail k podpisu.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Převzetí odchylky"]
},
 /* ========================= Jednotková cena  ========================= */
"Jednotková cena ELE – odkaz na výpočet a vysvětlení": {
    text: `${OSLOVENI_BLOCK}
<p>pro výpočet jednotkové ceny a vysvětlení zákazníkovi, jak jsme k částkám v rámci vyúčtování dospěli, je nově potřeba využít následující nástroj:</p>

<p><a href="https://sites.google.com/view/znalostka/%C5%A1ablony/v%C3%BDpo%C4%8Det-jednotkov%C3%A9-ceny-ele-nem%C4%9Bn%C3%AD-se-cen%C3%ADk" target="_blank" rel="noopener noreferrer">Výpočet jednotkové ceny Elektřiny</a></p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Jednotková cena"],
    category: "Jednotková cena"
},
"Jednotková cena PLYN – odkaz na výpočet a vysvětlení": {
    text: `${OSLOVENI_BLOCK}
<p>pro výpočet jednotkové ceny a vysvětlení zákazníkovi, jak jsme k částkám v rámci vyúčtování dospěli, je nově potřeba využít následující nástroj:</p>

<p><a href="https://sites.google.com/view/znalostka/%C5%A1ablony/v%C3%BDpo%C4%8Det-jednotkov%C3%A9-ceny-ele-nem%C4%9Bn%C3%AD-se-cen%C3%ADk" target="_blank" rel="noopener noreferrer">Výpočet jednotkové ceny Plynu</a></p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Jednotková cena"],
    category: "Jednotková cena"
},
 /* ========================= Spínání NT a VT ========================= */
"Dotaz na časy spínání NT/VT (HDO)": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za dotaz týkající se časů spínání vysokého tarifu (VT) a nízkého tarifu (NT).</p>

<p>Časy spínání nízkého tarifu naleznete na internetových stránkách příslušného provozovatele distribuční soustavy, případně také na jeho telefonické informační lince nebo v zákaznickém centru společnosti ČEZ Distribuce, EG.D nebo PREdistribuce.</p>

<p>Dovolujeme si zároveň upozornit, že distributoři mohou časy spínání měnit. Případnou změnu jsou povinni zveřejnit minimálně s týdenním předstihem.</p>

<p><strong>Pro rychlé ověření můžete využít oficiální stránky Vašeho distributora:</strong></p>

<ul>
  <li>ČEZ Distribuce – <a href="https://www.cezdistribuce.cz/pro-zakazniky/potrebuji-vyresit/stavajici-pripojeni/casy-spinani-nizkeho-tarifu" target="_blank" rel="noopener noreferrer">zde</a></li>
  <li>PREdistribuce – <a href="https://www.predistribuce.cz/cs/potrebuji-zaridit/zakaznici/stav-hdo/" target="_blank" rel="noopener noreferrer">zde</a></li>
  <li>EG.D (E.ON) – <a href="https://www.eon.cz/domacnosti/zakaznicka-pece/technicke-dotazy/casy-nizkeho-tarifu-hdo/" target="_blank" rel="noopener noreferrer">zde</a></li>
</ul>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Spínání NT a VT"],
    category: "Spínání NT a VT"
},
 /* ========================= Zastavení odpojení - Dluhy ========================= */
"Odpojení – dotaz na znovupřipojovací poplatek a zastavení procesu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail.</p>

<p>Bohužel musíme uvést, že požadavek na odpojení je plně v kompetenci <strong>distributora</strong>, který provádí technické úkony na odběrném místě. Jako dodavatel nemáme možnost proces odpojení posunout, oddálit ani jinak ovlivnit.</p>

<p>Stejně tak případné <strong>poplatky za znovupřipojení</strong> stanovuje a účtuje přímo distributor dle svých platných ceníků a pravidel.</p>

<p>Aby k odpojení nedošlo, je nutné, aby byly všechny částky po splatnosti <strong>připsány v našem systému</strong> ještě před provedením technického zásahu. Doporučujeme proto úhradu provést co nejdříve, ideálně okamžitou platbou.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zastavení odpojení - Dluhy"],
    category: "Zastavení odpojení - Dluhy"
},
"Odpojení – výzva k okamžité úhradě pro zastavení procesu": {
    text: `${OSLOVENI_BLOCK}
<p>děkujeme Vám za Váš e-mail.</p>

<p>Abychom mohli zabránit pokračování procesu odpojení elektřiny, je nezbytné <strong>obratem uhradit všechny částky po splatnosti</strong>.</p>

<p>Teprve po <strong>připsání plateb v našem systému</strong> bude možné zastavit další kroky týkající se odpojení.</p>

<p>Doporučujeme provést úhradu co nejdříve, ideálně okamžitou platbou. Po provedení úhrady nám můžete zaslat potvrzení o platbě, které může ověření urychlit. Rozhodující je však skutečné připsání platby v našem systému.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Zastavení odpojení - Dluhy"],
    category: "Zastavení odpojení - Dluhy"
},
/* ========================= Daňové doklady ========================= */
"Daňový doklad k přijaté platbě – vystavení DDPP": {
    date: "2026-02-06",
    text: `${OSLOVENI_BLOCK}
<p>na základě Vámi uhrazené platby ve výši <strong>{částka} Kč</strong> dne <strong>{datum platby}</strong> byl vystaven <strong>daňový doklad k přijaté platbě (DDPP)</strong>.</p>

<p>Důvodem je skutečnost, že platba byla <strong>{důvod vystavení DDPP}</strong>, například uhrazena v jiném měsíci, než je splatnost zálohy, použita na jiné období nebo nebyla přiřazena k platebnímu kalendáři.</p>

<p>V takovém případě nelze jako daňový doklad použít platební kalendář a je nutné vystavit samostatný DDPP.</p>

<p>Daňový doklad Vám byl zaslán <strong>{způsob zaslání}</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Daňové doklady"]
},
"Daňový doklad k platbě – platební kalendář jako daňový doklad": {
    date: "2026-02-06",
    text: `${OSLOVENI_BLOCK}
<p>k Vámi uhrazené platbě ve výši <strong>{částka} Kč</strong> nebude vystaven samostatný <strong>daňový doklad k přijaté platbě (DDPP)</strong>.</p>

<p>Platba byla uhrazena ve stejném měsíci, ve kterém byla záloha splatná, tedy <strong>{měsíc splatnosti}</strong>, a byla správně přiřazena k platebnímu kalendáři.</p>

<p>V tomto případě slouží <strong>platební kalendář jako daňový doklad</strong> a další daňový doklad se již nevystavuje.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Daňové doklady"]
},
"Platba nad rámec zálohy – daňový doklad": {
    date: "2026-02-06",
    text: `${OSLOVENI_BLOCK}
<p>k části platby, která <strong>přesahuje předepsanou výši zálohy</strong>, se <strong>nevystavuje daňový doklad k přijaté platbě (DDPP)</strong>.</p>

<ul>
  <li><strong>Předepsaná záloha:</strong> {výše zálohy} Kč</li>
  <li><strong>Uhrazená částka:</strong> {uhrazená částka} Kč</li>
</ul>

<p>Platební kalendář slouží jako daňový doklad pouze do výše předepsané zálohy. Částka <strong>{částka navíc} Kč</strong> je evidována jako platba navíc a bude <strong>{způsob naložení s platbou navíc}</strong>.</p>

<p>K této části platby se daňový doklad nevystavuje, protože se nejedná o zdanitelné plnění.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Daňové doklady"]
},
"Daňový doklad k platbě – zákazník není plátcem DPH": {
    date: "2026-02-06",
    text: `${OSLOVENI_BLOCK}
<p>na základě kontroly Vašich údajů Vás informujeme, že <strong>nelze vystavit daňový doklad k přijaté platbě (DDPP)</strong>, jelikož <strong>nejste veden/a jako plátce DPH</strong>.</p>

<p>DDPP je možné vystavit pouze zákazníkům, kteří jsou plátci DPH a mají tuto skutečnost řádně evidovanou v systému, včetně DIČ.</p>

<p>V ostatních případech slouží jako doklad k úhradám <strong>platební kalendář nebo faktura</strong>.</p>

${PORTAL_BLOCK}`,
    files: [],
    tags: ["Daňové doklady"]
},
};
window.SABLONY = Object.assign(window.SABLONY || {}, data);
