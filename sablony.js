const data = {
        "DATOVÁ SCHRÁNKA": {
                text: "Tiket přijde od kolegyň z recepce EPET. Obsahuje dokument, který aby šel otevřít, přejmenujte a dejte příponu pdf. Tiket uložte a vytvořte KO, kde popište co třeba, hlavně poznačte č. datovky a č. tiketu. Až bude třeba odpovědět: dokumenty, které budete chtít datovkou poslat musí být v PDF!. Pokud bude příloha z jiného odd. je třeba ji zaslat s průvodním dopisem, který vytvoříte v šabloně EPET. Až bude připraveno, najdete podle Úkolu - případně došlé pošty, ID datové schránky, kam chcete dopis zaslat. Posíláte ho na recepce@epet.cz a že prosíte o odeslání dokumentů datovkou a její číslo ID.",
                files: [],
                tags: ["Dopisy", "Recepce", "Datová zpráva"]
        },
        /* Nedoručenky */
        "NEDORUČENKA - PK": {
                text: ` <p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu Vám zasíláme platební kalendář k dodávce elektřiny/plynu pro následující období.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Nedoručenky"]
        },
        "NEDORUČENKA - ÚVODNÍ DOPIS": {
                text: ` <p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám, že jste si za dodavatele energií vybral právě společnost epet. Věříme, že s našimi službami budete spokojeni.V příloze tohoto e-mailu Vám zasíláme <strong>Uvítací dopis</strong>, <strong>Rekapitulaci smlouvy</strong> a případně i rozpis zálohových plateb pro následující období dodávky, tedy <strong>Platební kalendář</strong>, který je v souladu s Vaší smlouvou.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Nedoručenky"]
        },
        "NEDORUČENKA - NEDORUČENKA - UPOMÍNKA": {
                text: ` <p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dovolujeme si Vás upozornit, že u Vaší smlouvy evidujeme neuhrazenou platbu/y. V příloze tohoto e-mailu naleznete detailní informace. Prosíme Vás o kontrolu plateb a v případě prodlení žádáme o urychlené zaplacení neuhrazené částky.</p>
<p>Nedojde-li k uhrazení pohledávky do 5 pracovních dnů od data odeslání této upomínky, budeme nuceni vystavit penalizační fakturu a účtovat Vám úroky z prodlení a smluvní pokutu dle <em>Všeobecných obchodních podmínek.</em></p>
<p>Jedná-li se o neuhrazenou zálohu, vězte, že přijaté platby jsou použity na úhradu nejstarších neuhrazených předpisů záloh. Dodržováním předpisu záloh předejdete nesprávnému přiřazování plateb.</p>
V případě nejasností nás kontaktujte na zákaznické lince nebo e-mailem uvedeným na dokladu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Nedoručenky"]
        },
        /* Fakturace */
        "OPRAVNÁ DATA": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p> 
rádi bychom Vás informovali, že jsme obdrželi opravná data pro fakturaci ze strany distributora za období <strong>XXXXXX - XXXXXXXXX.</strong></p>
<p>Na základě této skutečnosti Vám byla vystavena opravná faktura, která Vám dorazí v samostatném e-mailu nebo poštou. </p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál.Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Fakturace"]
        },
        "Zpětná fakturace (backbilling)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>tato záležitost souvisí fakturou vystavenou <strong>DD.MM.RRRR</strong>, kterou jsme Vám zaslali na základě Vámi hlášeného samoodečtu. Následně Vám byla zaslána i standardní periodická faktura vystavená na základě odečtů od distributora. Ta má číslo <strong>Číslo tiskového dokladu</strong>. V této faktuře je zaznamenáno i období, které bylo zahrnuto v předchozí faktuře vystavené právě na základě zaslaného samoodečtu. Tuto fakturu jsme na základě požadavků distributora povinni každoročně vystavit.</p>
<p>V detailním rozpisu periodické faktury od distributora si však můžete všimnout, že položky, které byl zahrnuty do faktury vystavené na základě samoodečtu, jsou v něm odečteny (<em>a uvedeny tedy se znaménkem minus</em>).</p>
<p>Nemusíte se tedy obávat, jelikož vyúčtována je pouze skutečná spotřeba, která doposud fakturována nebyla.</p>  
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Fakturace"]
        },
        "Kopie faktury": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vám zasíláme kopii faktury za dodávky energií.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Fakturace"]
        },
        "Výpočet SPOT cen": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete výpočetní tabulku a návod, jak si můžete odkontrolovat cenu SPOT. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { name: "NÁVOD NA VÝPOČET SPOT", url: "https://drive.google.com/file/d/1Mf1XabKRmCZM2kqQNztQvnMKsuip-_Tq/view?usp=drive_link", type: "pdf" },
                        { name: "SPOT VYPOČTOVÁ TABULKA", url: "https://docs.google.com/spreadsheets/d/1zmjmJaIwwL7bH5X9yyuL_2qP9G4UKhoo6dGtyKXyBaY/edit?usp=drive_link", type: "xls" }
                ],
                tags: ["Fakturace"]
        },
        "Vystavení FA za krátký úsek - (zpravidla z důvodu zahájení dodávek k termínům odečtů": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Faktura byla vystavena na základě zahájení vaší smlouvy, která začala platit dne <b>DD.MM.RRRR </b> Váš distributor má však pro odběrné místo nastaven odečtový měsíc <b>Název měsíce </b>. Z tohoto důvodu byla první faktura vystavena za období od <b>DD. MM. RRRR do DD. MM. RRRR </b>, aby byl zajištěn soulad s pravidelnými odečty a zúčtovacím obdobím stanoveným distributorem.</p>
<p>Další faktury budou již standardně vystavovány na základě dohodnutého cyklu. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Fakturace"]
        },

        "Vysvětlení zúčtování záloh na vyúčtovací faktuře - Odečet záloh na vyúčtovací faktuře": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vám poskytli stručné vysvětlení, jak dochází k započítávání zaplacených záloh ve Vašich vyúčtovacích fakturách, aby bylo vše co nejjasnější:</p>
<p><li><b>Zálohy jsou zúčtovány pouze tehdy, pokud byly uhrazeny</b> na náš účet <b> nejpozději k datu vystavení (DUZP) </b>vyúčtovací faktury.</p></li>
<p><li>Rozhodujícím faktorem pro zúčtování zálohy je zúčtovací období, nikoliv datum vystavení faktury.</p></li>
<p><li>Pokud faktura pokrývá více než polovinu daného zúčtovacího období (např. období končí <b>po 15. dni v měsíci), záloha za daný měsíc se zúčtuje v plné výši.</b></p></li>
<p><li>Pokud období končí <b>do 15. dne v měsíci,</b>záloha za daný měsíc <b>se přesune do následující vyúčtovací faktury.</b></p></li><br>
<p><b>Shrnutí:</b></p>
<p><li>Záloha se započítá pouze tehdy, když byla uhrazena do data vystavení faktury.</li></p>
<p><li>Klíčové je zúčtovací období – nikoliv datum vystavení faktury.</li></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Fakturace"]
        },
        /* Smlouvy */
        "ZMĚNA - ADRESA KORESPONDEČNÍ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vás informujeme, že pro odběrné místo <b>EAN/EIC XXXX</b> jsme upravili doručovací adresu na <b>XXXX.</b></p>
<p>Děkujeme Vám za aktualizaci kontaktních údajů.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA - ADRESA ODBĚRNÉHO MÍSTA - DOLOŽENÍ DOKUMENTŮ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>abychom mohli adresu odběrného místa u Vašeho zákaznického účtu změnit, budeme potřebovat doložit výpis z katastru nemovitostí, popřípadě doklad o změně adresy, který Vám vydá obecní nebo městský úřad.</p>
<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>
<p>Děkujeme Vám za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA - ADRESA ODBĚRNÉHO MÍSTA - POTVRZENÍ ZMĚNY": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili adresu odběrného místa na <strong>XXXX.</strong></p>
<p>Děkujeme Vám za sdělení informace.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA ADRESA TRVALÉHO BYDLIŠTĚ - DOLOŽENÍ DOKUMENTŮ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>abychom mohli adresu trvalého bydliště u Vašeho zákaznického účtu změnit, budeme potřebovat doložit čestné prohlášení, jehož vzor zasíláme v příloze. Podepsaný sken tohoto prohlášení nám prosím zašlete na e-mail info@epet.cz.</p>
<p>Pokud byste změnu adresu raději doložili prostřednictvím kopie občanského průkazu, je na této kopii z důvodu ochrany osobních údajů nutno vymazat všechny <strong>osobní údaje</strong> kromě <em>jména a příjmení</em>, <em>data narození</em> a <em>adresy</em>.</p>
<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>
<p>Děkujeme Vám za spolupráci. </p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
  { url: "https://drive.google.com/file/d/10vEwfyGojwqZ81yvP6xSLI-krF7sD0c0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOM", type: "pdf" },
  { url: "https://drive.google.com/file/d/1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf" },
  { url: "https://drive.google.com/file/d/1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf" },
  { url: "https://drive.google.com/file/d/1t-FFOcEzZWbmqzf-EL40m1hJ78dimmJE/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf" },
  { url: "https://drive.google.com/file/d/1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN.", type: "pdf" },
  { url: "https://drive.google.com/file/d/1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf" },
  { url: "https://drive.google.com/file/d/1tUTwgDiU9L4dTsoa_DfHvDrIJi4IDTuQ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - z C na D", type: "pdf" },
  { url: "https://drive.google.com/file/d/1HKsGDY14VD8bREp744I2ze7EXC29j7J6/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf" },
  { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ z PO – změna sazby Firma → Dom", type: "pdf" },
  { url: "https://drive.google.com/file/d/1Xra9Xs7KsPb-Tua_2V_8NE1F1__uCoo2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1BjeKuD2NOpyYjJCMO2TnU2tTrST3musN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/18CENh1sJWOtFSE7yiU8yNE1MopDxRhbi/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1RSfEY2py1TVAD-PNSK6F0IaWZtH_msub/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf" }
],
                tags: ["Smlouvy"]
        },
        "ZMĚNA ADRESA TRVALÉHO BYDLIŠTĚ - Potvrzení změny adresy": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili Vaši trvalou adresu na <strong>XXXX</strong>.</p>
<p>Děkujeme Vám za sdělení informace.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA NOVÉ SÍDLO FIRMY - DOLOŽENÍ DOKUMENTŮ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>abychom mohli adresu sídla společnosti u Vašeho zákaznického účtu změnit, budeme potřebovat doložit výpis z obchodního rejstříku. Pokud v něm provedená změna ještě není zapsána, můžete změnu doložit i zasláním notářského zápisu.</p>
<p>Jakmile potřebný dokument obdržíme, změnu adresy Vám potvrdíme.</p>
<p>Děkujeme Vám za spolupráci. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA NOVÉ SÍDLO FIRMY - POTVRZENÍ ZMĚNY": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vás informujeme, že jsme v našem systému upravili adresu sídla společnosti na <strong>XXXX</strong>.</p>
<p>Děkujeme Vám za sdělení informace.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "Zrušení zasílání SMS": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku potvrzujeme, že jsme zrušili zasílání informativních SMS zpráv o přijaté platbě na telefonní číslo <strong>XXX.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "KOPIE SMLOUVY": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vám zasíláme kopii Smlouvy o sdružených službách dodávky elektřiny/plynu č. <strong>XXXXXXXXX</strong>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA ZPŮSOBU ZASÍLÁNÍ DOKUMENTŮ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku potvrzujeme, že jsme pro smluvní účet s číslem <strong>XXXX</strong> nastavili zasílání korespondence prostřednictvím České pošty na příslušnou doručovací adresu / e-mailu / e-mailu i České pošty s příslušnou doručovací adresou.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "VYSVĚTLENÍ PŘETRŽKY": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že o odběrné místo <strong>EAN xxx</strong> s adresou <strong>yyy</strong> bylo z naší strany požádáno k nejbližšímu legislativně možnému termínu, tedy k datu <strong>xx.yy.2023</strong></p>
<p>Aktuálně registrace odběrného místa k naší společnosti probíhá v pořádku.</p>
<p>Odběrné místo se od <strong>DD.MM.RRRR</strong> nachází v ochranné lhůtě 10 pracovních dní, kdy zákazníkovi neoprávněný odběr nehrozí.
Jakmile bude odběrné místo u naší společnosti aktivní, na pokyn distributora dojde k posunu data přihlášení zpět do minulosti tak, aby navazovalo na termín ukončení smlouvy u původního dodavatele.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "ZMĚNA PŘÍJEMNÍ - ZASLÁNÍ ČP": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>pro změnu příjmení budeme potřebovat Vaši součinnost. Prosíme o doložení kopie občanského průkazu, kde na průkazu bude začerněna Vaše fotografie, číslo občanského průkazu, rodné číslo a Váš podpis. Bez začerněných údajů nemůžeme doklad přijmout.
Občanský průkaz můžete nahradit čestným prohlášením, které Vám zasíláme v příloze tohoto e-mailu.</p>
<p>Čestné prohlášení prosím vyplňte, podepište a naskenované zašlete zpět na náš e-mail.</p>
<p>Děkujeme za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
  { url: "https://drive.google.com/file/d/10vEwfyGojwqZ81yvP6xSLI-krF7sD0c0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ČEZ - DOM", type: "pdf" },
  { url: "https://drive.google.com/file/d/1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf" },
  { url: "https://drive.google.com/file/d/1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf" },
  { url: "https://drive.google.com/file/d/1t-FFOcEzZWbmqzf-EL40m1hJ78dimmJE/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - původní zákazník neznámý", type: "pdf" },
  { url: "https://drive.google.com/file/d/1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN.", type: "pdf" },
  { url: "https://drive.google.com/file/d/1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf" },
  { url: "https://drive.google.com/file/d/1tUTwgDiU9L4dTsoa_DfHvDrIJi4IDTuQ/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - z C na D", type: "pdf" },
  { url: "https://drive.google.com/file/d/1HKsGDY14VD8bREp744I2ze7EXC29j7J6/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf" },
  { url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ z PO – změna sazby Firma → Dom", type: "pdf" },
  { url: "https://drive.google.com/file/d/1Xra9Xs7KsPb-Tua_2V_8NE1F1__uCoo2/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRAŽ-PLYN - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1BjeKuD2NOpyYjJCMO2TnU2tTrST3musN/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - EGD - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/18CENh1sJWOtFSE7yiU8yNE1MopDxRhbi/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - PRE - FIRMA", type: "pdf" },
  { url: "https://drive.google.com/file/d/1RSfEY2py1TVAD-PNSK6F0IaWZtH_msub/view?usp=drive_link", name: "ČESTNÉ PROHLÁŠENÍ - ZMD - FIRMA", type: "pdf" }
],
                tags: ["Smlouvy"]
        },
        "ZMĚNA PŘÍJEMNÍ - POTVRZENÍ ZMĚNY": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>děkujeme Vám za doložení podkladu pro změnu.Potvrzujeme Vám změnu příjmení.</p>
<p>Děkujeme za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        "Změna kontaktních údajů - Potvrzení (při změně @, telefonu)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za zaslání aktuálních kontaktních údajů a potvrzujeme Vám jejich zaevidování k zákaznickému účtu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Smlouvy"]
        },
        /* Distribuční změny */
        "ZMĚNA REZERVOVANÉHO PŘÍKONU": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>kontaktujeme Vás na základě informace od distributora, že u Vašeho odběrného místa <strong>EAN XXXXXXX</strong> došlo ke snížení/navýšení rezervovaného příkonu.</p> 
<p>Abychom mohli tuto změnu zpracovat i v našem systému, prosíme Vás o doložení následujících dokumentů:</p>
       <ul>1) Kopie smlouvy o připojení,</B> kterou Vám distributor vystavil.</ul>
       <ul>2) Revizní zpráva.</ul>
       <ul>3) Vyplněný formulář "Žádost o změnu smlouvy - Domácnost/Firma", který naleznete v příloze tohoto e-mailu.</ul>
<p> Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na tomto portálu můžete najít své faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/10n9Q9gq-XKLzw_c6YF8ovBdmNW-iXExL/view", name: " ŽÁDOST O ZMĚNU SMLOUVY - DOMÁCNOST", type: "pdf" },
                        { url: "https://drive.google.com/file/d/10l9Dju24uPl1k2uf4JQrKRT8BfUhJmMD/view", name: "ŽÁDOST O ZMĚNU SMLOUVY - FIRMA", type: "pdf" }],
                tags: ["Distribuční změny"]
        },
        "PŘIPOJENÍ MIKROZDROJE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dovolujeme si Vás informovat, že distributor nás aktuálně informoval o plánované montáži nového 4Q elektroměru u odběrného místa <strong>EAN XXXXXXX</strong> na adrese <strong>XXXXXXXXX</strong>.</p>
<p>Montáž Vašeho měřidla provede distributor <strong>DD.MM.RRRR</strong>.</p>
<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude montáž měřidla probíhat. Také si připravte prosím svou <strong>revizní zprávu</strong>.</p>
<p>Rádi bychom Vás informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu:<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Změna výše hodnoty jističe / Změna distribuční sazby PRO: ČEZ A EGD - TEPELNÉ ČERPADLO": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>
<p>Jedná se o:</p>
<ul> <strong>1) Žádost o změnu smlouvy</strong></ul>
<ul> <strong>2) Žádost o připojení</strong> – dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</ul>
<p>Doručit nám je můžete prostřednictvím e-mailu nebo poštou. Žádáme vás o jeho kompletní vyplnění ve spolupráci s revizním technikem, jedině tak bude distributorem přijat. Na vyřízení požadavku má distributor 30 kalendářních dní.</p>
<p>Po uplynutí této lhůty Vám distributor zašle Smlouvu o připojení. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či datum, kdy byl podíl uhrazen.</p>
<p>Podepsaný originál <b>Smlouvy o připojení</b> a <b>revizní zprávu</b>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím oscanujte a pošlete na e-mail info@epet.cz nebo okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Dále nám prosím zašlete <b>protokol o instalaci tepelného čerpadla</b> a <b>výpočet tepelných ztrát</b>. Dokumenty předáme distributorovi, který jej vyžaduje pro změnu sazby.</p>
<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/17g2ZuWmzZlnlWW_-6I-eZ224ct_DClco/view?usp=drive_link", name: "EPET_ZADOST_ZMENA_SMLOUVY_Domácnost", type: "pdf" },
                        { url: "https://www.epet.cz/data/folders/epet-zadost-zmena-smlouvy-profit-f2696.pdf", name: "EPET_ZADOST_ZMENA_SMLOUVY_Firma", type: "pdf" },
                        { url: "https://drive.google.com/file/d/11lbuZv6IW4UO4Jmejzy__ZxKf9v1Ispz/view?usp=drive_link", name: "ZMĚNA SAZBY A JISTIČE - EGD - DOM+PODN", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1jEHuxEKF7kiW2dCL2ejMCV-hd6NrOJeh", name: "ŽÁDOST O PŘIPOJENÍ ČEZ", type: "pdf" }
                ],
                tags: ["Distribuční změny"]
        },
        "Změna výše hodnoty jističe / Změna distribuční sazby PRO: ČEZ A EGD": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe / distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>
<p>Jedná se o:</p>
<ul><strong>1) Žádost o změnu smlouvy</strong></ul>
<ul><strong>2) Žádost o připojení </strong>– dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</ul>
<p>Doručit nám je můžete prostřednictvím e-mailu nebo poštou. Žádáme vás o jeho kompletní vyplnění ve spolupráci s revizním technikem, jedině tak bude distributorem přijat. Na vyřízení požadavku má distributor 30 kalendářních dní.</p>
<p>Po uplynutí této lhůty Vám distributor zašle Smlouvu o připojení. V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či datum, kdy byl podíl uhrazen.</p>
<p>Podepsaný originál <b>Smlouvy o připojení</b> a <b>revizní zprávu</b>, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím oscanujte a pošlete na e-mail info@epet.cz nebo okopírujte a zašlete poštou na adresu EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</p>
<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/17g2ZuWmzZlnlWW_-6I-eZ224ct_DClco/view?usp=drive_link", name: "EPET_ZADOST_ZMENA_SMLOUVY_Domácnost", type: "pdf" },
                        { url: "https://www.epet.cz/data/folders/epet-zadost-zmena-smlouvy-profit-f2696.pdf", name: "EPET_ZADOST_ZMENA_SMLOUVY_Firma", type: "pdf" },
                        { url: "https://drive.google.com/file/d/11lbuZv6IW4UO4Jmejzy__ZxKf9v1Ispz/view?usp=drive_link", name: "ZMĚNA SAZBY A JISTIČE - EGD - DOM+PODN", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1jEHuxEKF7kiW2dCL2ejMCV-hd6NrOJeh", name: "ŽÁDOST O PŘIPOJENÍ ČEZ", type: "pdf" }
                ],
                tags: ["Distribuční změny"]
        },
        "Změna výše hodnoty jističe / Změna distribuční sazby PRO: PRE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe/distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>
<p>Jedná se o:</p>
<ul><strong>1) Žádost o změnu smlouvy:</strong> Tento dokument zašlete prostřednictvím e-mailu info@epet.cz nebo na adresu naší společnosti.</ul>
<ul><strong>2) Žádost o připojení:</strong> Jedná se o dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</ul>
<p>Originál žádosti zašlete na adresu <strong>PREdistribuce, a.s., Svornosti 3199/19 a, 150 00 Praha 5.</strong></p>
<p>Na vyřízení požadavku má distributor 30 kalendářních dní. Po uplynutí této lhůty Vám distributor zašle <b> Smlouvu o připojení.</b> V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či datum, kdy byl podíl uhrazen.</p>
<p>Podepsaný originál Smlouvy o připojení a revizní zprávu, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím oscanujte a pošlete na e-mail info@epet.cz nebo okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1</strong>.</p>
<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/17g2ZuWmzZlnlWW_-6I-eZ224ct_DClco/view?usp=drive_link", name: "EPET_ZADOST_ZMENA_SMLOUVY_Domácnost", type: "pdf" },
                        { url: "https://www.epet.cz/data/folders/epet-zadost-zmena-smlouvy-profit-f2696.pdf", name: "EPET_ZADOST_ZMENA_SMLOUVY_Firma", type: "pdf" },
                        { url: "https://drive.google.com/open?id=11unN2RyEHVpvPrIy57bLQVpsy0OldIbw", name: "Žádost o smlouvu o připojení PRE.pdf", type: "pdf" }
                ],
                tags: ["Distribuční změny"]
        },
        "Změna výše hodnoty jističe / Změna distribuční sazby PRO: PRE – TEPELNÉ ČERPADLO": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>přijali jsme Váš požadavek na změnu výše hodnoty jističe/distribuční sazby. Abychom mohli tento požadavek vyřídit u distributora, je nutné, abyste nám zaslali vyplněné a podepsané dokumenty, které naleznete v příloze tohoto e-mailu.</p>
<p>Jedná se o:</p>
<ul><strong>1) Žádost o změnu smlouvy:</strong> Tento dokument zašlete prostřednictvím e-mailu info@epet.cz nebo na adresu naší společnosti.</ul>
<ul><strong>2) Žádost o připojení:</strong> Jedná se o dokument provozovatele distribuční soustavy, ve kterém je nutné vyplnit všechny využívané spotřebiče a jejich příkon v kW.</ul>
<p>Originál žádosti zašlete na adresu <strong>PREdistribuce, a.s., Svornosti 3199/19 a, 150 00 Praha 5.</strong></p>
<p>Na vyřízení požadavku má distributor 30 kalendářních dní. Po uplynutí této lhůty Vám distributor zašle <b> Smlouvu o připojení.</b> V ní bude uvedeno, jaké změny je nutné realizovat na odběrném místě. Pokud ve Smlouvě o připojení naleznete, že je třeba hradit podíl, prosíme o doložení potvrzení o platbě či datum, kdy byl podíl uhrazen.</p>
<p>Podepsaný originál Smlouvy o připojení a revizní zprávu, kterou Vám vystaví po úpravách na odběrném místě revizní technik, zašlete zpět distributorovi. Před odesláním dokumenty prosím oscanujte a pošlete na e-mail info@epet.cz nebo okopírujte a zašlete poštou na adresu <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1</strong>.</p>
<p>Dále nám prosím zašlete <b>protokol o instalaci tepelného čerpadla</b> a <b>výpočet tepelných ztrát</b>. Dokumenty předáme distributorovi, který jej vyžaduje pro změnu sazby.</p>
<p>Následně změnu zaevidujeme na Vašem zákaznickém účtu. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/17g2ZuWmzZlnlWW_-6I-eZ224ct_DClco/view?usp=drive_link", name: "EPET_ZADOST_ZMENA_SMLOUVY_Domácnost", type: "pdf" },
                        { url: "https://www.epet.cz/data/folders/epet-zadost-zmena-smlouvy-profit-f2696.pdf", name: "EPET_ZADOST_ZMENA_SMLOUVY_Firma", type: "pdf" },
                        { url: "https://drive.google.com/open?id=11unN2RyEHVpvPrIy57bLQVpsy0OldIbw", name: "Žádost o smlouvu o připojení PRE.pdf", type: "pdf" }
                ],
                tags: ["Distribuční změny"]
        },
        "Ověření výše hodnoty jističe - nesoulad s DI": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Váš distributor nás upozornil, že hodnota jističe, kterou eviduje, se liší od hodnoty, kterou máme uvedenou na Vašem zákaznickém účtu. Rádi bychom Vás proto požádali o sdělení informace o skutečné hodnotě jističe.</p>
<p>Jedná se o odběrné místo <strong>EAN XXXXXXXX</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Doložení dokladu – změna hodnoty hlavního jističe - ČEZ A EG.D": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Váš distributor nám sdělil informaci, že u odběrného místa <strong>EAN XXXXXXXXXX</strong> byla sjednána nová hodnota jističe, která je <strong>XXX A.</strong></p>
<p>Rádi bychom Vás požádali o potvrzení této informace, doložení <b>Smlouvy o připojení</b> a <b>revizní zprávy</b> od elektrikáře. Tyto dokumenty můžete zaslat oscanované na e-mail info@epet.cz nebo poštou na adresu EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</p>
<p>Následně potřebné informace zaevidujeme na Vašem zákaznickém účtu. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Změna jističe / Sazby – informovat zk o termínu provedení změny": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme vyřízení Vašeho požadavku na změnu distribuční sazby na XXXX / změnu jističe na XXXX A u odběrného místa <strong>EAN XXXXXXXX.</strong></p>
<p>Distributor tuto změnu provede k DD. MM. RRRR. Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude servisní zakázka  probíhat. Připravte si také svoji revizní zprávu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Změna jističe / Sazby – potvrzení provedené změny": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme vyřízení Vašeho požadavku na změnu distribuční sazby na XXXX / změnu jističe na XXXX A u odběrného místa <strong>EAN XXXXXXXX</strong>.</p>
<p>Distributor tuto změnu provedl k DD. MM. RRRR. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Změna jističe / Sazby – Info ZK o změně termínu provedení změny z důvodu závad na OM": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>potvrzujeme vyřízení Vašeho požadavku na změnu jističe / sazby na hodnotu XXXX u odběrného místa <strong>EAN XXXXXX.</strong></p>
<p>Distributor nás však informoval, že z důvodu závady na odběrném místě nebylo možné plánovanou změnu uskutečnit v původním termínu. Byl stanoven nový termín pro realizaci změny, a to v rozmezí <strong>DD.MM.RRRR - DD.MM.RRRR  </strong>.</p>
<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude servisní zásah probíhat, a o přípravu Vaší aktuální revizní zprávy.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Prosba o doplnění údajů - chybějící na ŽOP": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>při kontrole pokladů pro XXX jsme zjistili, že na žádosti chybějí následující údaje: XXX.</p>
<p>Prosíme Vás tedy o jejich doplnění/podpis. Opravené podklady následně prosím zašlete zpět na náš e-mail info@epet.cz.</p>
<p>Děkujeme Vám za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Prosba o doložení předávacího protokolu": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>kontaktoval nás Váš distributor ohledně nenavazujících stavů na Vašem měřidle. Pro opravu stavů distributor vyžaduje předávací protokol k datu fyzického přepisu smlouvy. Pokud je Váš předávací protokol podepsán k jinému datu než k <strong>DD.MM.RRRR</strong>, prosíme Vás o opravu tohoto protokolu.</p>
<p>Fyzický přepis smlouvy proběhl <strong>DD.MM.RRRR</strong>, a tak Vás prosíme o doplnění právě tohoto data.</p>
<p>Následně opravený protokol předáme distributorovi, který stavy měřidla upraví.</p>
<p>Děkujeme Vám za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/open?id=1RRcnxT7Qik3mExjXMhERqRSNCKbHIWGn", name: "PŘEDÁVACÍ PROTOKOL", type: "pdf" }
                ],
                tags: ["Distribuční změny", "Reklamace", "Fakturace"]
        },
        "ZMĚNA DISTRIBUČNÍ SAZBY Z C NA D U SVJ - ZASLÁNÍ PODKLADŮ": {
                text: `<p>DDobrý den, pane XXX, / paní XXX,,</p>
<p>abychom mohli zažádat o změnu typu sazby u distributora, prosíme o vyplnění a zaslání potřebných dokumentů:</p>
<ul><strong>1) Čestné prohlášení</strong></ul>
<p>Rádi bychom Vás upozornili, že v důsledku změny distribuční sazby dojde ke změně ceny za regulované a neregulované položky související s provedenou změnou.</p>
<p>Zároveň bychom Vás chtěli informovat, že technik distributora si na místě ověří, že se skutečně jedná o společné prostory domu. V opačném případě nebude změna provedena.</p>
<p>Všechny potřebné dokumenty k vyplnění zasíláme v příloze tohoto e-mailu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [{ url: "https://drive.google.com/file/d/14JwJ2-7d3FtTbm8Q6xGzQ0PU4yu39-et/view?usp=drive_link", name: "ČP z PO - Pro změnu sazby z Firmy na DOM", type: "pdf" }],
                tags: ["Distribuční změny"]
        },
        "Potvrzení o provedené změně distribuční sazby z C na D u SVJ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že na základě Vaší žádosti došlo dne …… ke změně typu sazby z C..d na  D…d u odběrného místa EAN: …., na adrese ….</p>
<p>V příloze tohoto e-mailu Vám zasíláme nový Ceník, který obsahuje ceny pro sazby v kategorii D. (větu použijeme jen pokud již nebyl Ceník zaslán s dodatkem ze strany BO)</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        "Potvrzení zk, že na základě dokumentů (ŽOP) došlo k podání žádosti o SOP na distribuci": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za zaslání vyplněných dokumentů.</p>
<p>Potvrzujeme, že jsme na základě těchto podkladů podali žádost u příslušného distributora o vystavení nové Smlouvy o připojení. Distributor má na vyřízení požadavku lhůtu 30 kalendářních dní. Po jejím uplynutí Vám zašle Smlouvu o připojení.</p>
<p>Ve smlouvě bude uvedeno, jaké změny je třeba realizovat na odběrném místě. Pokud v ní naleznete informaci o nutnosti úhrady podílu, prosíme o doložení potvrzení o platbě či uvedení data, kdy byl podíl uhrazen.</p>
<p>Po podpisu smlouvy prosíme o její zaslání:</p>
<ul>
  <li><b>originálu podepsané Smlouvy o připojení zpět distributorovi,</b></li>
  <li><b>kopie podepsané smlouvy také na naši adresu – ideálně elektronicky na e-mail</b> <a href="mailto:info@epet.cz">info@epet.cz</a>, případně poštou na <b>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1</b>.</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Distribuční změny"]
        },
        /* Demontáže */
        "Ukončení smlouvy s demontáží elektroměru – sezónní odběr FIRMA – ČEZ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma a Žádost o demontáž měřícího zařízení.</p>
<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k Žádosti doložit plnou moc, opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>
<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf" },
                        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: " ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Ukončení smlouvy s demontáží elektroměru DOMÁCNOST - ČEZ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Domácnost a Žádost o ukončení smlouvy. </p>
<p>Prosíme o jejich vyplnění a zaslání zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong> </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/10OtoVJApxNBiA_L8C0G2qjxaK22VNczx/view?usp=drive_web", name: "Žádost o ukončení_DOM", type: "pdf" },
                        { url: "https://drive.google.com/file/d/17jVzJYN7fq_zsdPM3SSoU4upzVz8AK3p/view?usp=drive_web", name: "ČEZ žádost o ukončení - Trvalá demontáž", type: "pdf" },
                        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: "ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Ukončení smlouvy s demontáží Elektroměru – DOMÁCNOST - EGD/PRE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Domácnost.</p>
<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokument můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/10OtoVJApxNBiA_L8C0G2qjxaK22VNczx/view?usp=drive_web", name: "Žádost o ukončení", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Demontáž elektroměru FIRMA - ČEZ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklady k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma a Žádost o ukončení smlouvy.</p>
<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k Žádosti doložit plnou moc, opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>
<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1</strong>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf" },
                        { url: "https://drive.google.com/file/d/17jVzJYN7fq_zsdPM3SSoU4upzVz8AK3p/view?usp=drive_web", name: "ČEZ žádost o ukončení - Trvalá demontáž", type: "pdf" },
                        { url: "https://drive.google.com/file/d/1coOnCqNHkVovGnPAdDy1HrhN4ZpKxFW0/view?usp=drive_web", name: "ČEZ žádost o ukončení - Dočasná demontáž", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Demontáž elektroměru FIRMA - EG.D_PRE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky elektřiny do odběrného místa – Firma</p>
<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k Žádosti doložit plnou moc, opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>
<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokumenty můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1U-3hFZF25hXpdj9-8XrYpbI6w_rQH5S7", name: "Žádost o ukončení", type: "pdf" },
                        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Ukončení smlouvy s demontáží plynoměru DOMÁCNOST - EG.D_PPD_GASNET_RWE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky plynu do odběrného místa – Domácnost.</p>
<p>Prosíme o jeho vyplnění a zaslání zpět na naši e-mailovou adresu. Dokument můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/10DdFgk1KL9NBIYUv3tpcMvVjEFurYSJV/view?usp=drive_web", name: "Žádost o ukončení", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Ukončení smlouvy s demontáží plynoměru FIRMA - EG.D_PPD_GASNET_RWE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>v příloze tohoto e-mailu naleznete podklad k ukončení smlouvy s demontáží měřidla. Jedná se o Žádost o ukončení smlouvy / dodávky plynu do odběrného místa – Maloodběratel.</p>
<p>Podklady musí podepsat osoba, která je oprávněna jednat za společnost. Případně lze k Žádosti doložit plnou moc, opravňující k podpisu žádosti, kterou Vám zasíláme v příloze.</p>
<p>Prosíme o jejich vyplnění a zaslání zpět na naši e-mailovou adresu. Dokument můžete také zaslat na adresu naší společnosti: <strong>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1.</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/1IxIb56DEjGqZal6L73uQtnGlgVFg2eDQ/view?usp=drive_link", name: "PLNÁ MOC", type: "pdf" },
                        { url: "https://drive.google.com/file/d/107d2e5AsO-8YueDmW5V4ia1tNLKF8V9k/view?usp=drive_web", name: " Žádost o ukončení", type: "pdf" }
                ],
                tags: ["Demontáže"]
        },
        "Přijetí žádosti k demontáži měřidla": {
                text: `<p>Dobrý den, pane XXX / paní XXX, </p>
<p>potvrzujeme přijetí Vaší žádosti k demontáži měřidla na odběrném místě <strong>EAN XXX / EIC XXX</strong> s adresou <strong>XXX</strong>.</p>
<p>Podklady jsme předali na distribuci a jakmile nám žádost potvrdí, sdělíme Vám termín návštěvy technika.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Demontáže"]
        },
        "Termín demontáže měřidla": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>informujeme Vás, že nás nyní kontaktoval distributor s termínem demontáže měřidla pro odběrné místo <strong>EAN/EIC XXX</strong> na adrese <strong>XXX</strong>.</p>
<p>Demontáž proběhne <strong>DD.MM.RRRR</strong>.</p>
<p>Přesný čas demontáže nám distributor nesdělil. V případě potřeby Vás však bude s předstihem informovat.</p>
<p>Pokud odběrné místo není přístupné, prosíme Vás o umožnění přístupu k měřidlu, aby demontáž mohla bez problému proběhnout.</p>
<p>Konečné vyúčtování Vám bude zasláno přibližně do 14 dnů od data demontáže.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Demontáže"]
        },
        "Neprovedená demontáž": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>informujeme Vás, že demontáž měřidla na odběrném místě pro <strong>EAN/EIC XXX</strong> na adrese <strong>XXX</strong> naplánovaná na den <strong>DD.MM.RRRR</strong> nebyla provedena, jelikož odběrné místo nebylo zpřístupněno.</p>
<p>S novým termínem demontáže měřidla Vás bude kontaktovat přímo distributor.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Demontáže"]
        },
        /* Ostatní */
        "Potvrzení přijetí požadavku": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslání Vašeho požadavku. Rádi bychom Vás informovali, že jsme jej zaevidovali a v tuto chvíli je v řešení. Budeme Vás informovat nejpozději do <b>xx.xx.XXXX</b> o dalším postupu nebo vyřešení požadavku.
V případě jakýchkoliv dotazů se na nás neváhejte obrátit.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Ostatní"]
        },
        "Žádost o přiřazení zk. pod konkrétního OZ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Žádost o přiřazení si zašlete na email <b>poptavky@epet.cz</b></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Ostatní"]
        },
        "Žádost o doložení podkladů pro vyřízení požadavku": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>aby bylo možné vyřídit Váš požadavek, potřebujeme Vaši součinnost.</p>
<p>Konkrétně prosíme o doložení XXXXX, a to z důvodu XXXXX.</p>
<p>Vše potřebné nám prosím zašlete do data XX.XX.XXXX.</p>
<p>V případě, že uvedenou dokumentaci neobdržíme do výše uvedeného termínu, nebude možné Váš požadavek vyřídit a situace bude z naší strany považována za uzavřenou.</p>
<p>Děkujeme za pochopení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Ostatní"]
        },
                "Zpětná Vazba - zaslání hodnotícího formuláře zákazníkovi": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě tel. hovoru Vám zasíláme odkaz pro zanechání své pozitivní zpětné vazby, na které nám velmi záleží.</p>
<p>Dotazník můžete vyplnit pod tímto <a href="https://g.page/r/CXbczwzq5JZ8EB0/review" target="_blank">odkazem</a>.</p>
<p>Děkujeme za Váš čas.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Ostatní"]
        },
        /* Samoodečty */
        "Prosba o doložení protokolu o výměně měřidla": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>je nám líto, ale Váš požadavek na vystavení faktury na základě doručených podkladů se nám nepodařilo vyřešit. Odečtové hodnoty měřidla na sebe nenavazují. Důvodem bude zřejmě výměna měřidla, která proběhla na odběrném místě.</p> 
<p>V případě, že opravdu došlo k výměně měřidla, Vás prosíme o urychlené dodání protokolu o výměně. Ten naleznete přiložený přímo u měřidla. Pokud protokol nenaleznete, kontaktujte prosím svého distributora, který Vám vystaví jeho opis.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Zamítnutí konečného samoodečtu": {
                text: `<p>Dobrý den, pane/ paní XXXX,</p>
<p>je nám líto, ale Vámi zaslané odečtové hodnoty měřidla jsme již nebyli schopni zpracovat, jelikož nám byly doručeny po termínu. Fakturu Vám vystavíme na základě odečtových hodnot dle odhadu, který nám zašle distributor.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Kontrola stavů měřidla": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že odečty, které jste nám nahlásili, byly distributorem zamítnuty. Důvodem zamítnutí je, že stavy nenavazují na poslední hlášený odečet</p>
<p>Prosíme o ověření a poslání správného stavu, popřípadě o zaslání fotografie přístroje s aktuálním stavem.</p>
<p>Děkujeme Vám za spolupráci.</p>
 <p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Zamítnutí odečtů": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že odečty, které jste nám nahlásili, byly distributorem zamítnuty. Důvodem zamítnutí je, že stavy nenavazují na poslední hlášený odečet.</p>
<p>Prosíme o ověření a poslání správného stavu, popřípadě o zaslání fotografie přístroje s datumovkou tedy viditelné datum zobrazené přímo na fotografii, které ukazuje, kdy byla fotografie pořízena. Případně na lístečku přiloženém k měřidlu a aktuálním stavem.</p>
<p>Děkujeme Vám za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Nezpracovaný odečet - omluva ZK": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>omlouváme se, ale Váš požadavek na vystavení faktury na základě nahlášených odečtových hodnot Vašeho měřidla se nám nepodařilo zpracovat v termínu. Faktura Vám bude vystavena na základě dat, která nám doručí distributor.</p>
<p>Velice se za tuto skutečnost omlouváme a děkujeme za pochopení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít své faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Počáteční stav elektroměru": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>je nám líto, ale Váš požadavek na evidenci počátečního odečtového stavu Vašeho měřidla není možné zpracovat.</p>
<p>Tento údaj je třeba sdělit Vašemu původnímu dodavateli, který na základě těchto hodnot vystaví konečnou fakturu. Při nejbližší fakturaci na tento stav měřidla navážeme.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        "Prosba o zaslání fotografie měřidla": {
                text: `<p>Dobrý den, pane XXX, / paní XX,</p>
<p>informujeme Vás, že odečty, které jste nám nahlásili, byly distributorem zamítnuty. Proto Vás prosíme o zaslání fotografie s aktuálním stavem měřidla.</p>
<p>Děkujeme Vám za spolupráci.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty"]
        },
        /* Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné */
        "Přijetí samoodečtu - Mimořádná faktura": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali. Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu.</p>
<p>Tento schvalovací proces může trvat <strong>2-3 týdny</strong>. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>
<p>Abychom Vám do budoucna mohli vyúčtování připravit ještě rychleji, přikládáme evidenční tabulku, do které je možné hodnoty zapsat a zaslat nám ji zpět e-mailem. Je to pouze doporučený nástroj, který celý proces usnadní a zrychlí. Alternativně můžete své odečty jednoduše nahlásit i prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p>  
<p><u>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</u></p>
<ul>
<li><strong>Elektřina:</strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><strong>Plyn:</strong> Odečet musí být nahlášen k poslednímu dni v měsíci, musí být však nahlášen do 5 kalendářních dní. </li>
</ul>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
<ul>
<p><strong>při mimořádném vyúčtování elektřiny:</strong></p>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování <br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování</li><br>
</ul>
<ul>
<strong>při mimořádném vyúčtování plynu</strong><br>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování<br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování s DUF</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - kontrolní": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako kontrolní odečet, bez vystavení mimořádné faktury. 
Odečet bude zohledněn při příští periodické fakturaci.</p>
<p>Abychom příště mohli Váš požadavek zpracovat ještě rychleji, přikládáme evidenční tabulku, do které je možné hodnoty zapsat a zaslat nám ji zpět e-mailem. Je to pouze doporučený nástroj, který celý proces usnadní a zrychlí. Alternativně můžete své odečty jednoduše nahlásit i prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p>
<p><u>Termíny pro nahlášení kontrolních odečtů:</u></p>
<ul>
<li><strong>Elektřina:</strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><strong>Plyn:</strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 14 kalendářních dní. </li>
</ul>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
<ul>
<p><strong>při hlášení kontrolního odečtu jak pro elektřinu i plyn:</strong></p>

<li><i>Typ odečtu:</i> Samoodečet<br>
<li><i>Důvod odečtu:</i> Kontrolní</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - kontrolní - bez poslání tabulek pro samoodečty": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako kontrolní odečet, bez vystavení mimořádné faktury. 
Odečet bude zohledněn při příští periodické fakturaci, případně Vás žádáme, abyste si odečty měřidel nově hlásili prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p>
<p><u>Termíny pro nahlášení kontrolních odečtů:</u><p>
<ul>
<li><strong>Elektřina:</strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><strong>Plyn: </strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 14 kalendářních dní. </li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Mimořádná faktura - bez poslání tabulek pro samoodečty": {
                text: `<p>Dobrý den,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali. Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu.</p>
<p>Tento schvalovací proces může trvat 2-3 týdny. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury, případně Vás žádáme, abyste si odečty měřidel nově hlásili prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p>  
<p><u>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</u></p>
<ul>
<li><strong>Elektřina:</strong> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><strong>Plyn:</strong> Odečet musí být nahlášen k poslednímu dni v měsíci, musí být však nahlášen do 5 kalendářních dní. </li> 
</ul><br>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Mimořádná faktura - k 31.12 (ale posílá dříve)": {
                text: `<p>Dobrý den, paní YYYY/ Pane XXXXX, </p>
<p>děkujeme za Váš e-mail, co se týče Vašeho dotazu ohledně mimořádného vyúčtování k 31.12.20XX, nabízíme dvě možnosti:</p>
<ol> 
<li><b>Vyplnění evidenční tabulky</b>, kterou naleznete v příloze tohoto e-mailu. Po vyplnění nám ji prosím zašlete zpět e-mailem. A to nejpozději do termínů uvedených níže.</li>
<li><b>Zadáním odečtů</b> prostřednictvím našeho Zákaznického portálu.</li>
</ol>
<p>Níže uvádíme termíny pro nahlášení odečtů pro mimořádné vyúčtování:</p>
<ul>
<b><li>Elektřina:</b> Odečet může být proveden k jakémukoliv datu, je však nutné jej nahlásit do 20 kalendářních dnů od provedení odečtu tedy do <b>20.1.2025.</b> (pokud bude odečet proveden k 31.12.20XX) </li>
<b><li>Plyn:</b> Odečet je třeba provést k poslednímu dni v měsíci a nahlásit jej nejpozději do 5 kalendářních dnů -  tedy do <b>05.01.20XX.</b></li>
</ul>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
<ul>
<p><strong>při mimořádném vyúčtování elektřiny:</strong></p>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování <br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování s DUF </li><br>
</ul>
<ul>
<strong>při mimořádném vyúčtování plynu</strong><br>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování<br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování s DUF</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Mimořádná faktura - Zákazník zadal již do portálu (duplicitní odečet)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali. Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu.</p>
<p>Tento schvalovací proces může trvat 2-3 týdny. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury.</p>
<p>Abychom příště mohli Váš požadavek zpracovat ještě dříve, zasíláme Vám v příloze evidenční tabulku, do které můžete tyto hodnoty vepsat, a následně nám ji zaslat e-mailem případně Vás žádáme, abyste si odečty měřidel nově hlásili prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a>. 
<p>Pokud odečty zadáte přímo prostřednictvím tohoto portálu a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>
<p><u>Termíny pro nahlášení odečtů pro mimořádné vyúčtování:</u></p>
<ul>
<li><b>Elektřina:</b><br> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li>Plyn:</b><br> Odečet musí být nahlášen k poslednímu dni v měsíci, musí být však nahlášen do 5 kalendářních dní. </li>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
<ul>
<p><strong>při mimořádném vyúčtování elektřiny:</strong></p>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování <br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování</li><br>
</ul>
<ul>
<strong>při mimořádném vyúčtování plynu</strong><br>
<li><i>Typ odečtu:</i> Mimořádné vyúčtování<br>
<li><i>Důvod odečtu:</i> Mimořádné vyúčtování s DUF</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]

        },
        "Přijetí samoodečtu - kontrolní - Zákazník zadal již do portálu (duplicitní odečet)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali jako kontrolní odečet, bez vystavení mimořádné faktury. 
Odečet bude zohledněn při příští periodické fakturaci.</p> 
<p>Abychom příště mohli Váš požadavek zpracovat ještě dříve, zasíláme Vám v příloze evidenční tabulku, do které můžete tyto hodnoty vepsat, a následně nám ji zaslat e-mailem případně Vás žádáme, abyste si odečty měřidel nově hlásili prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p>
<p>Pokud odečty zadáte přímo prostřednictvím tohoto portálu a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>
<p><u>Termíny pro nahlášení kontrolních odečtů:</u></p>
<ul>
<li><b>Elektřina:</b> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><b>Plyn:</b> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 14 kalendářních dní. </li>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
</ul>
<p><u>Pro správné zpracování odečtů v tabulce doporučujeme vyplnit tyto údaje:</u></p>
<ul>
<p><strong>při hlášení kontrolního odečtu jak pro elektřinu i plyn:</strong></p>

<li><i>Typ odečtu:</i> Samoodečet<br>
<li><i>Důvod odečtu:</i> Kontrolní</li>
</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Konečné vyúčtování (po ukončení smlouvy)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za zaslání konečného samoodečtu. Tímto potvrzujeme jeho přijetí a nyní čekáme na schválení dat ze strany distributora.</p>
<p>Tento schvalovací proces může trvat 2-3 týdny. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: []
                ,
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Konečné vyúčtování (zákazník stavy hlásí ještě před termínem ukončení smlouvy)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za nahlášení samoodečtu ke konečné faktuře.</p>
<p>Dovolujeme si Vás informovat, že Vaše smlouva bude ukončena k <b> termín ukončení </b>. Z tohoto důvodu je možné zadat stav samoodečtu až po tomto datu, a to nejpozději do <b> uvedeme termín do kdy stav může nahlásit (5 dní od ukončení smlouvy) </b> </p>
<p>Prosíme Vás tedy o nahlášení samoodečtu v uvedeném termínu, aby mohla být konečná faktura vystavena s odpovídající spotřebou. Případně Vás žádáme, abyste si odečty měřidel nově hlásili prostřednictvím <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznického portálu</a></p> </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: []
                ,
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - Konečné - Zákazník zadal již do portálu (duplicitní odečet)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet jsme zpracovali. Nyní čekáme na schválení dat, abychom mohli následně vystavit fakturu.</p>
<p>Tento schvalovací proces může trvat 2-3 týdny. Z tohoto důvodu Vás prosíme o trpělivost s vystavením faktury. 
<p>Pokud odečty zadáte přímo prostřednictvím tohoto portálu a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - k aktivaci smlouvy": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet k aktivaci smlouvy jsme zpracovali.Tímto potvrzujeme jeho přijetí a zaevidování jako počáteční stav. Upozorňujeme, že na základě tohoto samoodečtu nedochází  k vystavení faktury. Tento stav však bude zohledněn při řádné periodické fakturaci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        "Přijetí samoodečtu - k aktivaci smlouvy - Zákazník zadal již do portálu (duplicitní odečet)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme Vám za sdělení odečtových hodnot Vašeho měřidla. Váš požadavek na samoodečet k aktivaci smlouvy jsme zpracovali.Tímto potvrzujeme jeho přijetí a zaevidování jako počáteční stav. Upozorňujeme, že na základě tohoto samoodečtu nedochází  k vystavení faktury. Tento stav však bude zohledněn při řádné periodické fakturaci.</p>
<p>Pokud odečty zadáte přímo prostřednictvím zákaznického portálu a zobrazí se zelená zpráva o úspěšném přijetí, není nutné nás dále informovat ani zasílat údaje e-mailem. Tento stav můžete považovat za potvrzení, že samoodečet byl úspěšně zpracován.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
 "Zamítnutí samoodečtů - Z důvodu překročení limitu 10 samoodečtů v rámci roku": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Váš požadavek na zadání samoodečtu.</p>
<p>U daného odběrného místa již v tomto kalendářním roce nelze přijmout další běžný samoodečet, protože byl vyčerpán roční limit <b>10 samoodečtů.</b></p>
<p>Současně připomínáme, že v rámci roku lze zadat ještě jeden mimořádný samoodečet k <b>31. 12. – tedy k 31. 12. 20XX.</b>. Ten můžete zadat standardním způsobem (stejným kanálem, jako obvykle), a bude použit pro uzavření roku.</p>
<b>Praktické doporučení</b>
<p>Aby nedocházelo k duplicitám a zbytečnému „vyčerpání“ limitu, <b>nedoporučujeme hlásit samoodečet v měsíci, kdy má distributor plánovaný řádný odečet</b>.</p>
<ul>
<li><b>Proč:</b> Řádný odečet distributora je pro vyúčtování nadřazený a nahradí samoodečet; nahlášení stavu ve stejném měsíci Vám tak nepřinese výhodu a může být zamítnuto jako duplicitní. A tím dojde k vyčerpání jeho limitu.</li><br>
<li><b>Příklad:</b> Pokud víte, že distributor provádí řádný odečet v <i>dubnu</i>, samoodečet v dubnu neposílejte. Stav případně nahlaste v <i>březnu</i> nebo <i>květnu</i>.</li><br></ul>
<p>Tento princip platí jak u elektřiny, tak u plynu.</p>
<p>Děkujeme za pochopení a spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Samoodečty - Kontrolní + Mimořádné vyúčtování + Konečné"]
        },
        /* Reklamace */
        "Přijetí reklamace  – není potřeba od ZK nic doložit": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme Vám přijetí reklamace, jejíž obsah je blíže specifikován níže v popisu reklamace. U této reklamace evidujeme následující údaje:</p>
<p>Datum přijetí/uplatnění reklamace: <strong>DD. MM. RRRR</strong> </p>
<p>Důvod reklamace:</p>
<p>Reklamaci předáme kompetentnímu oddělení. Jakmile budeme mít vyjádření, budeme Vás informovat o výsledku. <p>
<strong><p>Dále bychom Vás rádi upozornili, že reklamace nemá odkladný účinek na splatnost vyúčtovaných plateb nebo záloh dle smlouvy. Stávající vyúčtování je tedy třeba i přesto uhradit.<p></strong>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        "Přijetí reklamace s požadavkem o doložení chybějících podkladů": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme Vám přijetí reklamace, jejíž obsah je blíže specifikován níže v popisu reklamace. U této reklamace evidujeme následující údaje: </p> 
<p>Datum přijetí/uplatnění reklamace: <strong>DD. MM. RRRR</strong></p>
<p>Důvod reklamace:</p>
<p>Abychom se mohli reklamací zabývat, potřebujeme z Vaší strany doložit následující podklady:</p>
<p>UVEDEME, CO POTŘEBUJEME OD ZÁKAZNÍKA DOLOŽIT PRO KOMPLETNÍ REKLAMACI. </p>
<p>V této souvislosti bychom Vás rádi upozornili, že dokud neobdržíme chybějící podklady pro kompletní reklamaci, nebude z naší strany řešena a zároveň neběží lhůta pro vyřízení reklamace. Ta začne běžet až po doložení výše požadovaných dokumentů či informací.</p>
<strong><p>Dále bychom Vás rádi upozornili, že reklamace nemá odkladný účinek na splatnost vyúčtovaných plateb nebo záloh dle smlouvy. Stávající vyúčtování je tedy třeba i přesto uhradit.</p></strong>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb.Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        "Vyřízení reklamace - oprávněná": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>reagujeme na Vaši reklamaci podanou dne DD. MM. RRRR, která se týká UVÉST DŮVOD.</p>
<p>Vámi podaná reklamace byla z naší strany důkladně posouzena a následně vyhodnocena jako <strong>oprávněná.</p></strong>
<p>UVEDEME, JAK BUDE REKLAMACE VYŘEŠENA - NAPŘ. VYSTAVENÍ OPRAVNÉ FAKTURY APOD. – uvedeno v ÚKOLU</p>
<p>Dále bychom Vás rádi informovali, že opravná faktura bude vystavena a zaslána v nejbližších dnech a to na Váš email / na Vaši doručovací adresu. </p>
<p>Zákazníci, kteří jsou spotřebiteli ve smyslu § 419 zákona č. 89/2012 Sb., občanský zákoník, se můžou v souladu s § 17 odst. 7 písm. e) zákona č. 458/2000 Sb., energetický zákon, ve znění pozdějších předpisů, v případě vzniklého sporu obracet na Energetický regulační úřad (www.eru.cz), jakožto orgán mimosoudního řešení sporů v oblasti energetiky. Energetický regulační úřad může rozhodnout spor mezi zákazníkem a společností EP ENERGY TRADING, a.s., o splnění povinností z uzavřené smlouvy, jejíž předmětem je dodávka nebo distribuce elektřiny nebo plynu a spor o určení, zda taková smlouva vznikla, trvá, nebo zanikla, a kdy se tak stalo.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        "Vyřízení reklamace - neoprávněná": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>reagujeme na Vaši reklamaci podanou dne <strong>DD. MM. RRRR</strong>, která se týká <strong>UVÉST DŮVOD</strong>.</p>
<p>Vámi podaná reklamace byla důkladně posouzena a následně vyhodnocena jako <strong>neoprávněná.</strong></p>
<p>Důvodem zamítnutí reklamace je:</p>
<p>UVEDEME DŮVOD ZAMÍTNUTÍ</p>
<p>Zákazníci, kteří jsou spotřebiteli ve smyslu § 419 zákona č. 89/2012 Sb., občanský zákoník, se můžou v souladu s § 17 odst. 7 písm. e) zákona č. 458/2000 Sb., energetický zákon, ve znění pozdějších předpisů, v případě vzniklého sporu obracet na Energetický regulační úřad (www.eru.cz), jakožto orgán mimosoudního řešení sporů v oblasti energetiky. Energetický regulační úřad může rozhodnout spor mezi zákazníkem a společností EP ENERGY TRADING, a.s., o splnění povinností z uzavřené smlouvy, jejíž předmětem je dodávka nebo distribuce elektřiny nebo plynu a spor o určení, zda taková smlouva vznikla, trvá, nebo zanikla, a kdy se tak stalo.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        "Zamítnutí požadavku na uplatnění náhrady - Elektřina": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>reagujeme na Vaši žádost týkající se uplatnění náhrady škody za nedodržení standardu kvality dodávek/distribuce elektřiny dle vyhlášky č. 540/2005 Sb., o kvalitě dodávek elektřiny a souvisejících služeb v elektroenergetice.</p>
<p>Je nám líto, ale Vaši žádost jsme nuceni zamítnout. Důvodem našeho zamítavého stanoviska je marné uplynutí lhůty pro uplatnění náhrady škody v souladu s § 4 odst. 4 písm. a) uvedené vyhlášky, tj. 60 kalendářních dnů ode dne následujícího po dni, ve kterém uplynula lhůta podle standardů.</p>
<p>Zákazníci, kteří jsou spotřebiteli ve smyslu § 419 zákona č. 89/2012 Sb., občanský zákoník, se můžou v souladu s § 17 odst. 7 písm. e) zákona č. 458/2000 Sb., energetický zákon, ve znění pozdějších předpisů, v případě vzniklého sporu obracet na Energetický regulační úřad (www.eru.cz), jakožto orgán mimosoudního řešení sporů v oblasti energetiky. Energetický regulační úřad může rozhodnout spor mezi zákazníkem a společností EP ENERGY TRADING, a.s., o splnění povinností z uzavřené smlouvy, jejíž předmětem je dodávka nebo distribuce elektřiny nebo plynu a spor o určení, zda taková smlouva vznikla, trvá, nebo zanikla, a kdy se tak stalo. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        "Zamítnutí požadavku na uplatnění náhrady - Plyn": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>reagujeme na Vaši žádost týkající se uplatnění náhrady za nedodržení standardu kvality dodávek/distribuce plynu dle vyhlášky č. 545/2006 Sb., o kvalitě dodávek plynu a souvisejících služeb v plynárenství.</p>
<p>Je nám líto, ale Vaši žádost jsme nuceni zamítnout. Důvodem našeho zamítavého stanoviska je marné uplynutí lhůty pro uplatnění náhrady v souladu s § 3 odst. 1 písm. b) uvedené vyhlášky, tj. 60 kalendářních dnů ode dne následujícího po dni, ve kterém uplynula lhůta podle standardů.
</p>
<p>Zákazníci, kteří jsou spotřebiteli ve smyslu § 419 zákona č. 89/2012 Sb., občanský zákoník, se můžou v souladu s § 17 odst. 7 písm. e) zákona č. 458/2000 Sb., energetický zákon, ve znění pozdějších předpisů, v případě vzniklého sporu obracet na Energetický regulační úřad (www.eru.cz), jakožto orgán mimosoudního řešení sporů v oblasti energetiky. Energetický regulační úřad může rozhodnout spor mezi zákazníkem a společností EP ENERGY TRADING, a.s., o splnění povinností z uzavřené smlouvy, jejíž předmětem je dodávka nebo distribuce elektřiny nebo plynu a spor o určení, zda taková smlouva vznikla, trvá nebo zanikla, a kdy se tak stalo.<p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Reklamace"]
        },
        /* Dědické řízení */
        "Informace k doložení dokladů po úmrtí odběratele": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>je nám líto, že řešíte tuto smutnou událost. Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat jistou součinnost.</p>
<p>Zejména je důležité nám doručit <strong>kopii úmrtního listu</strong> a <strong>usnesení z dědického řízení.</strong></p>
<p>Je také potřebné, abyste nám sdělili, na koho bude odběrné místo přepsáno, nebo zda budete odběrné místo ukončovat s demontáží měřidla.</p>
<p>V případě <em>přepisu odběrného místa</em> můžete využít tento  <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank">odkaz</a></p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Dědické řízení - urgence (pro doložení usnesení)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,XX,</p>
<p>je nám líto, že jste musel/a řešit tuto smutnou událost. Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat Vaši součinnost.</p>
<p>Zejména je důležité, abyste nám doručil/a kopii <strong>úmrtního listu</strong> a <strong>usnesení z dědického řízení</strong>.</p>
<p>Do doložení usnesení bude případný přeplatek nebo nedoplatek blokován proti upomínání a vyplacení až do sdělení výsledku dědického řízení.</p>
<p>Dále prosíme, abyste nám sdělil/a, na koho bude odběrné místo přepsáno, nebo zda plánujete odběrné místo ukončit s demontáží měřidla.</p>
<p>V případě <em>přepisu odběrného místa</em> můžete využít tento  <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank">odkaz</a></p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Potvrzení přijetí dokumentů": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování. Po ukončení smlouvy a dodávek do odběrného místa Vám bude vystavena konečná faktura. Přeplatky nebo nedoplatky budou řešeny s osobou oprávněnou dle rozhodnutí o dědickém řízení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení", "Přepisy"]
        },
        "Zákazník doložil veškeré dokumenty k vyplacení přeplatku - úkol předán na finance": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslání požadovaných dokumentů. Vaše podklady jsme předali příslušnému oddělení k dalšímu zpracování.</p>
<p>Jakmile dojde k vyplacení přeplatku, budeme Vás o této skutečnosti bezodkladně informovat.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Zákazník doložil usnesení, ale je v něm uvedeno více dědiců a zk. si přeje vyplatit přeplatek na jednotnÝ BÚ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslání usnesení o dědictví. Vážíme si Vaší spolupráce.</p>
<p>V e-mailu uvádíte, že si přejete přeplatek vyplatit na konkrétní bankovní účet. Abychom mohli tento krok uskutečnit, je nutné vyplnit a podepsat čestné prohlášení, které přikládáme v příloze tohoto e-mailu.</p>
<li>Toto prohlášení musí podepsat všichni dědicové uvedení v usnesení.</li>
<li>Jelikož jsou  v usnesení [<b>uvést počet dědiců </b>] dědiců/dědicové, je nutné zaslat toto čestné prohlášení ve [<b> počet kopii čp</b>] vyhotoveních – každé podepsané příslušnou osobou. U všech podpisů je nutné úřední ověření – lze provést na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice.</li>
<li>Vyplněné a podepsané dokumenty nám, prosím, zašlete zpět v odpovědi na tento e-mail.</li><br>
<p>Jakmile obdržíme všechny potřebné dokumenty, přeplatek bude vyplacen na uvedený účet v souladu s platnými právními předpisy.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
                tags: ["Dědické řízení"]
        },
        "Zákazník doložil usnesení, ale je v něm uvedeno více dědiců - bez toho aniž by uvedl, že si ho přeje vyplatit na jednotný BÚ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslání usnesení o dědictví. Vážíme si Vaší spolupráce.</p>
<p>Po prozkoumání přiloženého usnesení jsme zjistili, že je v něm uvedeno více dědiců. Abychom mohli pokračovat ve vyplacení přeplatku na bankovní účet, je nutné, aby všichni dědicové podepsali čestné prohlášení, které přikládáme v příloze tohoto e-mailu.</p>
<li>Toto prohlášení musí podepsat všichni dědicové uvedení v usnesení.</li>
<li>Jelikož jsou  v usnesení [<b>uvést počet dědiců </b>] dědiců/dědicové, je nutné zaslat toto čestné prohlášení ve [<b> počet kopii čp</b>] vyhotoveních – každé podepsané příslušnou osobou. U všech podpisů je nutné úřední ověření – lze provést na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice.</li>
<li>Vyplněné a podepsané dokumenty nám, prosím, zašlete zpět v odpovědi na tento e-mail.</li><br>
<p>Jakmile obdržíme všechny potřebné dokumenty, přeplatek bude vyplacen na uvedený účet v souladu s platnými právními předpisy.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
                tags: ["Dědické řízení"]
        },
        "Zákazník se rozčiluje, že nevidí důvod proč zasílat ČP NA ZÁKLADĚ ČEHO TO PO NĚM CHCEME - KDYŽ CHCE VYPLATIT PŘEPLATEK NA JEDNOTNÉ BÚ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Váš dotaz ohledně požadavku na vyplnění čestného prohlášení pro vyplacení přeplatku po úmrtí zákazníka.</p>
<p>Tento krok vychází z legislativních požadavků na správné vypořádání finančních závazků v rámci dědického řízení. Přestože bylo vydáno usnesení o dědictví, je nutné doložit, že se dědicové shodli na způsobu vyplacení přeplatku, zejména pokud se má celá částka poukázat na konkrétní bankovní účet jednoho z dědiců.</p>
<p><b>Požadavek na čestné prohlášení vychází z následujících principů:</b></p>
<li><b>Ochrana oprávněných osob</b> – Čestné prohlášení slouží jako potvrzení, že všichni uvedení dědicové souhlasí s vyplacením částky na konkrétní účet.</li>
<li><b>Právní jistota</b> – Tímto dokumentem se předchází případným sporům mezi dědici o rozdělení přeplatku.</li>
<li><b>Soulad s interními postupy a právními předpisy</b> – Tento postup zajišťuje, že platba bude provedena v souladu s rozhodnutím o dědictví a v rámci našich povinností jako poskytovatele služby.</li><br>
<p>Z tohoto důvodu je nutné, aby čestné prohlášení podepsali všichni dědicové uvedení v usnesení o dědictví. Pokud je dědiců více, je třeba doložit příslušný počet vyhotovení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
                tags: ["Dědické řízení"]
        },
        "Žádost o doložení BÚ pro vyplacení přeplatku na základě dědického řízení(žádost o doložení ČP)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě doručeného usnesení o dědickém řízení nám byl notářem sdělen Váš status jednoho z dědiců po zemřelém/zemřelé zákaznici/zákazníkovi <b>XXXXXXX</b>. V souvislosti s touto skutečností bychom Vás rádi informovali, že na zákaznickém účtu zesnulého evidujeme přeplatek, který je možné vyplatit.</p>
<p>Abychom mohli přistoupit k jeho výplatě, je třeba z Vaší strany doložit:</p>
<li><b>Čestné prohlášení o souhlasu s vyplacením přeplatku</b> – slouží jako potvrzení, že souhlasíte s vyplacením příslušné částky na základě dědictví. U všech podpisů je nutné úřední ověření – lze provést na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice.</li>
<li>Číslo bankovního účtu, na který si přejete přeplatek poukázat.</li>
<p>Oba výše uvedené údaje jsou nezbytné k provedení platby.Formulář čestného prohlášení Vám zasíláme v příloze tohoto e-mailu. </p>
<p>Prosíme o jeho vyplnění, vlastnoruční podepsání a zaslání zpět – poštou na adresu <b>EP ENERGY TRADING, a.s., Klimentská 46, 110 02 Praha 1</b> nebo e-mailem na <b>info@epet.cz.</b> </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
                tags: ["Dědické řízení"]
        },
        "Žádost o doložení dodatku k usnesení převážně z důvodu zastaveného dědického řízení z důvodu majetku nepatrné hodnoty v němž není uvedeno kdo je dědicem, jen vystavitel pohřbu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za doložené usnesení o pozůstalosti po panu/paní <strong> XXXXXX.</strong> Dovolujeme si Vás informovat, že z předloženého usnesení vyplývá, že dědické řízení bylo soudem zastaveno z důvodu majetku nepatrné hodnoty, a že nebyl určen žádný dědic.</p>
<p>Vzhledem k tomu, že nedošlo k právnímu přechodu majetku (včetně případného přeplatku) na žádnou osobu, nemůžeme Vám bez dalšího právního podkladu (např. dodatečné dohody dědiců nebo nového rozhodnutí soudu) případný přeplatek vyplatit.</p>
<p><strong>Jak můžete dále postupovat:</strong><br>
Doporučujeme obrátit se na příslušný soud (nebo notáře, který věc projednával) a požádat o:</p>
<ul>
  <li>doplnění usnesení o určení dědice přeplatku, nebo</li>
  <li>uzavření dodatečné dohody mezi případnými dědici, která bude schválena soudem.</li>
</ul>
<p>Jakmile obdržíme doplňující právní dokument, budeme schopni vyplacení přeplatku posoudit a případně provést.</p>
<p>Děkujeme za pochopení. V případě jakýchkoli dotazů jsme Vám rádi k dispozici.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Žádost o doložení usnesení + informaci, že pokud v usnesení je více dědiců, aby poslali i ČP": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p><p>je nám líto, že jste musel/a řešit tuto smutnou událost.Abychom mohli provést potřebné změny na zákaznickém účtu, budeme potřebovat Vaši součinnost. Zejména je důležité, abyste nám doručil/a: 
<ul>
  <li>kopii úmrtního listu</li>
  <li>kopii usnesení z dědického řízení</li>
</ul>
</p>
<p>Do doby doložení usnesení bude případný přeplatek nebo nedoplatek blokován proti upomínání a vyplacení. Vyplacení bude možné až po sdělení výsledku dědického řízení.</p>
<p>V případě, že v doloženém usnesení bude uvedeno více dědiců a budete chtít přeplatek vyplatit na jednotný bankovní účet, bude nutné doložit také čestné prohlášení, které musí být vyplněno a podepsáno všemi dědici. U všech podpisů je nutné úřední ověření – lze provést na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice. Kopii daného čestného prohlášení přikládáme do přílohy tohoto e-mailu.</p>
<p>Děkujeme za pochopení. V případě jakýchkoli dotazů jsme Vám rádi k dispozici.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href='https://zakaznici.epet.cz/login' target='_blank'>Zákaznický portál</a></p>`,
                files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
                tags: ["Dědické řízení"]
        },
        "Přepis (šablona číslo 1)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>stále evidujeme nevyřešený požadavek týkající se přepisu smlouvy na odběr energií po zemřelém <b>xxxxxx</b>. Rádi bychom Vás informovali o nutnosti provést tento přepis na nového odběratele. Tento krok je nezbytný pro zajištění kontinuity dodávky energií na odběrném místě <b>[Adresa odběrného místa]</B>.</p>
<p>Prosíme Vás, abyste co nejdříve kontaktovali naši zákaznickou podporu na telefonním čísle <b>255 70 70 99 </b> nebo e-mailem na <b>info@epet.cz </b>, kde Vám poskytneme veškeré potřebné formuláře a informace k přepisu smlouvy. Přepis je možné také dořešit pomocí online formuláře na tomto  <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank"> Odkazu</a></p>
<p>Děkujeme za Vaši spolupráci a jsme Vám k dispozici pro jakékoliv dotazy či další informace.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Urgence přepisu (šablona číslo 2)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p><strong>Dobrý den, pane XXX, / paní XXX,,</strong></p>
<p>rádi bychom Vás znovu upozornili na nutnost přepsání smlouvy na odběr energií na nového odběratele. Původní smlouva č. byla uzavřena na zemřelého <b>xxxxx</b>, a je nezbytné uzavřít novou smlouvu, aby byla zajištěna kontinuální dodávka energií na odběrném místě <b>[Adresa odběrného místa]</b>.</p>
<p>Dosud jsme neobdrželi žádnou odpověď na naši předchozí výzvu. Prosíme Vás, abyste co nejdříve kontaktovali naši zákaznickou podporu na telefonním čísle <b>255 70 70 99 </b> nebo e-mailem na <b>info@epet.cz </b>, kde Vám poskytneme veškeré potřebné formuláře a informace k přepisu smlouvy. Přepis je možné také dořešit pomocí online formuláře na tomto <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank"> Odkazu</a></p>

<p>Pokud nebude přepis smlouvy proveden do <b>[Datum – D+30 dní]</b>, budeme nuceni přistoupit k přerušení dodávky energií na uvedeném odběrném místě. Tento krok je nezbytný pro zajištění správné evidence a správy odběrného místa.</p>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Výzva k úhradě dlužných plateb, zákaznické číslo: xxxx (šablona číslo 3)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>

<p>dovolujeme si Vás informovat, že naše společnost <strong>EP ENERGY TRADING, a.s.</strong>, IČO <strong>27386643</strong>, se sídlem Klimentská 46, Praha 1, 110 02 obdržela od Obvodního soudu pro Prahu 6 informaci o skončení řízení o pozůstalosti (resp. dědického řízení), kterou bylo naší společnosti sděleno, že právním nástupcem zákazníka [jméno, příjmení, datum narození, trvalý pobyt] (dále jen <b>„Zůstavitel“</b>) se na základě pravomocného rozhodnutí o dědictví (kterým dědické řízení skončilo) uvedeným soudem v oblasti dodávky energií v odběrném místě EAN/EIC _____ na adrese [ulice, PSČ, město] (dále jen <b>„Odběrné místo“</b>) zajišťované naší společností na základě Smlouvy o sdružených službách dodávky elektřiny/plynu a uzavřené mezi naší společností a Zůstavitelem (dále jako <b>„Smlouva“</b>) stala tato osoba:</p>

<ul>
  <li>[jméno, příjmení, datum narození, trvalý pobyt]</li>
  <li>[jméno, příjmení, datum narození, trvalý pobyt]</li>
</ul>

<p>V tomto ohledu je třeba zdůraznit, že dnem, kdy rozhodnutí o dědictví nabylo právní moci, přechází práva a povinnosti vyplývající ze Smlouvy na Vás, jakožto právního nástupce Zůstavitele. To znamená, že od tohoto okamžiku je právní nástupce Zůstavitele zákazníkem naší společnosti a je povinen plnit mimo jiné též ve Smlouvě sjednané platební povinnosti, spojené zejména s úhradou zálohových plateb a ročního vyúčtování.</p>

<p>Ke dni úmrtí naše společnost u <b>odběrného místa</b> eviduje následující pohledávku (dále jako <b>„Pohledávka“</b>):
</p>
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
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;">Platby po splatnosti celkem</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tfoot>
</table>
<br>
<p>Na základě výše uvedeného Vás vyzýváme k úhradě Pohledávky na účet č. xxxxxxxxxx/xxxx s variabilním symbolem ______, a to do 10 dnů od data doručení této upomínky.</p>

<p>Upozorňujeme Vás, že dodávky energií do Odběrného místa ze strany naší společnosti na základě Smlouvy v současné době nadále probíhají a nebude-li Pohledávka uhrazena, budeme nuceni přistoupit k procesu přerušení dodávky energií do Odběrného místa. Zároveň přistoupíme k vymáhání Pohledávky všemi dostupnými právními prostředky, např. soudní cestou, v rámci které může dojít k navýšení dlužné částky zejména o náklady soudního řízení.</p></strong>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Oslovení notáře (šablona číslo 4)": {
                text: `<p>Vážený/Vážená pane/paní magistře/magistro/doktore/doktorko,</p>

<p>tímto Vás zdvořile žádáme o sdělení informací týkajících se probíhajícího dědického řízení u zákazníka (zůstavitele) naší společnosti:</p>

<p><b>JMÉNO/PŘÍJMENÍ, DATUM NAROZENÍ, ADRESA ZÁKAZNÍKA</b></p>

<p>Na výše uvedeného zůstavitele evidujeme následující Smlouvu o sdružených službách dodávky <b>elektřiny /plynu (dále jako “Smlouva”)</b>, ze které vyplývají, resp. vyplynou nároky naší společnosti ve smyslu úhrady zálohových plateb sjednaných v této Smlouvě a úhrady přeplatku/nedoplatku plynoucího z vystavení konečné faktury:</p>

<ul style="list-style-type: none; padding-left: 0;">
  <li>– Číslo Smlouvy:   XXXXXXX</li>
  <li>– Datum podpisu Smlouvy: XX. YY. MMDD</li>
  <li>– Datum zahájení dodávek: XX. YY. MMDD</li>
  <li>– Doba trvání Smlouvy: XX měsíců</li>
</ul>

<p>V souvislosti s výše uvedenými nároky naší společnosti a v rámci prevence před vznikem či zvýšením pohledávek naší společnosti vyplývajících ze Smlouvy, Vás dále žádáme o sdělení těchto informací:</p>

<ul>
  <li>– Kdo je správcem pozůstalosti</li>
  <li>– Jména a kontaktní údaje potenciálních dědiců</li>
  <li>– Zda bylo dědické řízení uzavřeno a jaký je jeho výsledek</li>
</ul>

<p><b>Prosíme o zaslání informací do datové schránky <b>E5KGTT5</b> na e-mail <b>info@epet.cz</b></b></p>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },



        "Výzva k úhradě dluhu – potencionální dědic – aktivní odběr (šablona číslo 5)": {
                text: `
<p>Dobrý den, pane XXX, / paní XXX,</p>

<p>obracíme se na Vás jakožto na potenciálního dědice pana/paní [jméno, příjmení, datum narození, trvalý pobyt] (dále jako „Zůstavitel“) s informací, že naše společnost <b>EP ENERGY TRADING, a.s.</b>, <b>IČO 27386643</b>, se sídlem Klimentská 46, Praha 1, 110 02 na základě Smlouvy o sdružených službách dodávky elektřiny/plynu č. ______ uzavřené mezi naší společností a Zůstavitelem (dále jen <b>„Smlouva“</b>) je dodavatelem elektřiny/plynu do odběrného místa EAN/EIC _____ na adrese [ulice, PSČ, město] (dále jen <b>„Odběrné místo“</b>).</p>

<p>Ke dni úmrtí naše společnost u <b>odběrného místa</b> eviduje následující pohledávku (dále jako <b>„Pohledávka“</b>):
</p>
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
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;">Platby po splatnosti celkem</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tfoot>
</table>
<br>

<p>V této souvislosti Vás žádáme o sdělení identifikačních a kontaktních údajů v rozsahu jméno, příjmení, adresy trvalého pobytu, telefonního čísla a e-mailu osoby, která spravuje pozůstalost. Pozůstalost může ve smyslu § 1877 zákona č. 89/2012 Sb., občanský zákoník, spravovat vykonavatel závěti, nebo pověřený či příslušným soudem jmenovaný správce pozůstalosti. Poté co dědické řízení ve smyslu § 1703 občanského zákoníku bude rozhodnuto pravomocně, pohledávky naší společnosti bude zajišťovat ten z dědiců nebo zmíněných osob.</p>

<p>Nežli správa pozůstalosti přejde na dědice, je nutné naléhavě vyřešit úhradu evidovaných pohledávek. Pohledávku může být úspěšně uhrazena i z majetku náležejícího do pozůstalosti. Není-li správa pozůstalosti ještě určena, lze pohledávku uhradit zůstavitelem sepsanou závětí, pakliže správce pozůstalosti ještě nebyl přidělen, je zde ideálně osoba nejblíže dědického řízení. Každý případ se posléze řeší samostatně s oddělením Pohledávek společnosti a nevrací se.</p>

<p><strong>Upozorňujeme Vás, že dodávky energií od Odběrného místa ze strany naší společnosti na základě Smlouvy v současné době nadále probíhají. Abychom z důvodu neuhrazené Pohledávky nemuseli přistoupit k přerušení dodávky energií do Odběrného místa, žádáme o její úhradu, a to včetně dalších případných nákladů, které by mohly být účtovány v rámci řízení o vymáhání dlužných částek (např. soudních nákladů, právního zastoupení a podobně).</strong></p>

<p>Vyzýváme Vás tímto:</p>
<ul>
  <li>o sdělení identifikačních a kontaktních údajů osoby spravující pozůstalost (viz výše)</li>
  <li>k úhradě výše uvedené Pohledávky na účet č. xxxxxxxxxx/xxxx s variabilním symbolem ______</li>
</ul>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
        "Výzva k úhradě dluhu – potencionální dědic – neaktivní odběr (šablona číslo 6)": {
                text: `
<p>Dobrý den, pane XXX, / paní XXX,</p>

<p>obracíme se na Vás jakožto na potenciálního dědice pana/paní [jméno, příjmení, datum narození, trvalý pobyt] (dále jako <b>„Zůstavitel“</b>) s informací, že naše společnost <b>EP ENERGY TRADING, a.s.</b>, <b>IČO 27386643</b>, se sídlem Klimentská 46, Praha 1, 110 02 na základě Smlouvy o sdružených službách dodávky elektřiny/plynu č. ______ uzavřené mezi naší společností a Zůstavitelem (dále jen <b>„Smlouva“</b>) je dodavatelem této energie do odběrného místa EAN/EIC _____ na adrese [ulice, PSČ, město] (dále jen <b>„Odběrné místo“</b>).</p>

<p>Ke dni úmrtí naše společnost u <b>odběrného místa</b> eviduje následující pohledávku (dále jako <b>„Pohledávka“</b>):
</p>
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
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
    <tr>
      <td>Záloha</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:right;">Platby po splatnosti celkem</td>
      <td>XXXXX,00</td>
      <td>Kč</td>
    </tr>
  </tfoot>
</table>
<br>

<p>V této souvislosti Vás žádáme o sdělení identifikačních a kontaktních údajů v rozsahu jméno, příjmení, adresy trvalého pobytu, telefonního čísla a e-mailu osoby, která spravuje pozůstalost. Pozůstalost může ve smyslu § 1877 zákona č. 89/2012 Sb., občanský zákoník, spravovat vykonavatel závěti, nebo pověřený či příslušným soudem jmenovaný správce pozůstalosti. Poté co dědické řízení ve smyslu § 1703 občanského zákoníku bude rozhodnuto pravomocně, Pohledávka může být uspokojena jen z majetku náležejícího do pozůstalosti. Není-li správa pozůstalosti vykonávána správcem pozůstalosti nebo ustanovením závěti, pakliže správu pozůstalosti dědici přejímají, je ze dědiců více a neujednají-li si jinak, spraví pozůstalost většinou dědiců v odpovídající výši k uspokojení Pohledávky společnosti. V takovém případě naše společnost zasílá obdobný dopis též těmto dalším dědicům.</p>

<p><strong>Upozorňujeme Vás, že z důvodu neuhrazené Pohledávky nemusíme přistoupit k vymáhání její úhrady dostupnými právními prostředky (např. soudní cestou, v rámci které může dojít k navýšení částky zejména o náklady soudního řízení), žádáme Vás tedy:</p></strong>

<ul>
  <li>o sdělení identifikačních a kontaktních údajů osoby spravující pozůstalost (viz výše), a to do 10 dnů od doručení této upomínky, nebo</li>
  <li>o úhradu Pohledávky na účet č. xxxxxxxxxx/xxxx s variabilním symbolem ______ a to do 10 dnů od doručení této upomínky.</li>
</ul>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: 
<a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Dědické řízení"]
        },
"Přijetí Usnesení ještě před ukončením smlouvy, přejí si vyplatit na BÚ v usnesení uveden jeden dědic (neznáme tedy zda FA bude přeplatek/nedoplatek)": {
  text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování. Po ukončení smlouvy a dodávky do odběrného místa vystavíme konečnou fakturu. Případný přeplatek či nedoplatek bude vypořádán s osobou oprávněnou dle usnesení o dědictví.</p>
<p>V usnesení je jako dědic/dědička uveden/a <b>XXXXXX</b>. Pro vyplacení případného přeplatku na bankovní účet přikládáme k vyplnění čestné prohlášení (v příloze). Prosíme o dodržení těchto náležitostí:</p>
<li>Prohlášení musí podepsat dědic uvedený v usnesení.</li>
<li>Podpis musí být úředně ověřen – ověření je možné na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice.</li>
<li>Vyplněný a podepsaný dokument nám, prosím, zašlete zpět v odpovědi na tento e-mail.</li>
<p>Jakmile obdržíme všechny potřebné dokumenty a dojde k ukončení smlouvy, bude případný přeplatek vyplacen na uvedený účet bez zbytečného odkladu v souladu s platnými právními předpisy.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
  tags: ["Dědické řízení"]
},
"Přijetí Usnesení ještě před ukončením smlouvy, přejí si vyplatit na BÚ v usnesení uvedeno  více dědiců (neznáme tedy zda FA bude přeplatek/nedoplatek)": {
    text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme přijetí Vašich podkladů, které jsme předali ke zpracování. Po ukončení smlouvy a dodávky do odběrného místa vystavíme konečnou fakturu. Případný přeplatek či nedoplatek bude vypořádán s osobou oprávněnou dle usnesení o dědictví.</p>
<p>V usnesení je uvedeno více dědiců (<b>XXXXXX</b>). Pro vyplacení případného přeplatku na bankovní účet přikládáme k vyplnění čestné prohlášení (v příloze). Prosíme o dodržení těchto náležitostí:</p>
<li>Čestné prohlášení musí doložit <b>všichni</b> dědicové uvedení v usnesení. Každý dědic vyplní a podepíše <b>vlastní</b> formulář (počet prohlášení = počet dědiců).</li>
<li>U <b>všech podpisů</b> je nutné úřední ověření – ověření je možné na Czech POINTu (pošta/obecní úřad), u notáře nebo na matrice.</li>
<li>Vyplněná a podepsaná prohlášení <b>od všech dědiců</b> nám, prosím, zašlete zpět v odpovědi na tento e-mail.</li>
<p>Jakmile obdržíme všechny potřebné dokumenty a dojde k ukončení smlouvy, bude případný přeplatek vyplacen na uvedený účet bez zbytečného odkladu v souladu s platnými právními předpisy.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [{ url: 'https://drive.google.com/file/d/1kafS3H-mr8pQvmb5F5w6Ze4UUiKNRFbB/view?usp=drive_link', name: "SOUHLAS PRO VYPLACENÍ PŘEPLATKU", type: "pdf" }],
  tags: ["Dědické řízení"]
},
        /* Platby */
        "Ukončené odběrné místo - Platby": {
                text: `<p>Dobrý den, pane XXX / paní XXX,,</p>
<p>rádi bychom Vás informovali, že jsme obdrželi platbu ve výši <strong>XXXX Kč</strong> pro <strong>zákaznický účet XXXX</strong>, pod <strong>variabilním symbolem XXXXXX.</strong></p> 
<p>Nicméně se jedná o odběrné místo, které bylo u naší společnosti již ukončeno. Z tohoto důvodu vracíme platbu zpět na bankovní účet <strong>pod variabilním symbolem XXXXX.</strong></p>
<p>Žádáme Vás, abyste tuto platbu již na tento smluvní účet <strong>nezasílali</strong> a <strong>zrušili</strong> si trvalý příkaz.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Upomínka - před předáním na Agenturu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dnes jsme se Vás pokusili telefonicky kontaktovat, ale nebyli jsme úspěšní, proto volíme tuto formu kontaktu.</p>
<p>I přes opakované výzvy evidujeme ke dni <strong>xxxxx</strong> pohledávky v celkové výši <strong>xxxx,-Kč</strong>, tato částka zahrnuje:</p>
<li>Zálohové platby za měsíce: <strong>xxxx</strong>,<strong>xxxx</strong>,<strong>xxxxx</strong> </li>
<li>Nedoplatek z faktury vystavené dne xxxxxx splatné ke dni <strong>xxxxx</strong>. </li>
<p>Kopii této faktury Vám zasíláme v příloze.</p>
<p>Vyzýváme Vás k úhradě obratem. Platbu v CZK měně proveďte na <li>bankovní účet číslo <strong>9960227/0100</strong></li> <li>pod variabilním symbolem <strong>xxxxxxxx</strong>,</li><li> a to nejpozději do <strong>xxxxxxxx.</strong> </p></li>
<p>V případě úhrady v EUR proveďte platbu na bankovní účet číslo:
<li><strong>2108721845/2700</strong></li> pod <strong>stejným variabilním symbolem</strong>.</li></p> 
<p>Pokud jste platbu již uskutečnili, žádáme Vás o zaslání dokladu o úhradě na e-mail <em>info@epet.cz</em>,abychom ji mohli ve spolupráci s naším finančním oddělením dohledat.<p> 
<p>Nedojde-li však k úhradě ve výše uvedené lhůtě, přistoupíme k procesu přerušení dodávky energií do Vašich odběrných míst, ke kterým se neuhrazené platby vztahují.</p>
<p>Platby po splatnosti budeme řešit soudní cestou. V tomto případě může dojít k navýšení dlužné částky i o náklady soudního řízení.</p>
<p>V případě, že ve výše uvedené lhůtě neobdržíme na e-mail <em>info@epet.cz</em> doklad o provedení platby, distributor <strong>negarantuje zastavení</strong> procesu přerušení dodávky energií.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Prosba o doložení platby": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Vámi uvedenou platbu ve výši XXX Kč v systému neevidujeme.</p>
<p>Prosíme Vás tedy o zaslání potvrzení provedení platby na e-mail info@epet.cz. Následně potvrzení předáme na naše finanční oddělení k dohledání.</p>
<p>Děkujeme Vám za spolupráci. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Potvrzení zk - že na základě potvrení o platbě je na jeho ZÚ vše v pořádku uhrazeno": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslané potvrzení o platbě. Rádi bychom Vás informovali, že se nám na základě tohoto potvrzení podařilo platbu dohledat. Na Vašem zákaznickém účtu nyní evidujeme vše v pořádku uhrazeno.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Hrazení plateb pod špatným variabilním symbolem": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že nám pravidelné zálohové platby hradíte pod špatným variabilním symbolem. Při následujících platbách uvádějte prosím tento symbol: XXXXXX.</p>
<p>Pro jistotu Vám v příloze zasíláme i aktuální rozpis záloh, kde tento variabilní symbol máte také uvedený.</p>
<p>Vaši platbu tak budeme moct rychleji identifikovat a poté správně zaevidovat na Váš zákaznický účet.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Hrazení plateb bez variabilního symbolu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že nám pravidelné zálohové platby hradíte bez variabilního symbolu. Při následujících platbách uvádějte prosím tento symbol: XXXXXX.</p>
<p>Pro jistotu Vám v příloze zasíláme i aktuální rozpis záloh, kde tento variabilní symbol máte také uvedený.</p>
<p>Vaši platbu tak budeme moct rychleji identifikovat a poté správně zaevidovat na Váš zákaznický účet.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Zpětné hrazení plateb": {
                text: `<p>Dobrý den, pane/paní XXX,</p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že v měsíci MM.RRRR neevidujeme z Vaší strany platbu. Z tohoto důvodu jsou Vaše současné platby přiřazeny k měsícům, ve kterých úhrada nebyla provedena.</p>
<p>Pokud jste chybějící platbu již uhradil/a, prosíme Vás o zaslání potvrzení o provedení této platby.</p>
<p>Pokud k úhradě skutečně nedošlo, zašlete prosím platbu ve výši <strong>XXX Kč</strong> na účet <strong>9960227/0100</strong> pod variabilním symbolem <strong>XXX</strong>.</p>
<p>Děkujeme Vám za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Ověření nastavení způsobu úhrady záloh přes INKASO": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že se nám nedaří provádět inkasování plateb z bankovního účtu, který byl uveden. Rádi bychom Vás požádali o kontrolu správnosti čísla účtu anebo nastavení podmínek inkasování u Vaší banky.</p>
<p>V současnosti u Vás evidujeme toto číslo účtu: <strong>XXXXXXXXXXX</strong>.</p>
<p>Jelikož se nám nepodařilo inkasovat aktuálně splatnou zálohovou platbu, učiňte tak jednorázově převodem na číslo účtu <strong>9960227/0100</strong> pod variabilním symbolem <strong>XXXXXX</strong>. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "SIPO – ověření spojovacího čísla": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že se nám nedaří provádět inkasování plateb prostřednictvím SIPO. Rádi bychom Vás požádali o kontrolu spojovacího čísla, které naleznete na SIPO složence v pravém horním rohu, na druhém řádku.</p>
<p>V současnosti u Vás evidujeme toto spojovací číslo: <strong>XXXXXXXXXXX</strong>.</p>
<p>Jelikož se nám nepodařilo inkasovat aktuálně splatnou zálohovou platbu, učiňte tak jednorázově převodem na <strong>číslo účtu 9960227/0100</strong> pod variabilním symbolem <strong>XXXXXX</strong>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Nesrovnalosti ve způsobu úhrady zálohových plateb": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>při kontrole Vašeho zákaznického účtu jsme zjistili, že využíváte jiný způsob hrazení zálohových plateb, než byl sjednán ve smlouvě nebo dohodnutý v minulosti.</p>
<p>Rádi bychom Vás požádali o potvrzení, jakým způsobem máme tedy trvale nastavit způsob plateb na Vašem zákaznickém účtu. Vaše platby tak budeme moci přehledně a rychle evidovat.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Potvrzení závazků - KONFIRMACE (Vzájemné započtení pohledávek)": {
                text: `<p>Dobrý den,pane XXX, / paní XXX, </p>
<p>je nám líto, ale naše společnost konfirmace nepotvrzuje.</p>
<p>Děkujeme za pochopení. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Žádost o doložení čísla bankovního účtu": {
                text: `<p>Dobrý den,pane XXX, / paní XXX, </p>
<p>v rámci kontroly doložené smlouvy jsme zjistili, že byla označena možnost vyplácení přeplatků na bankovní účet. Nicméně ve smlouvě není uvedeno číslo účtu, na který by měly být případné přeplatky zasílány.</p>
<p>Dovolujeme si Vás proto požádat o jeho doplnění. Číslo účtu můžete zaslat odpovědí na tento e-mail nebo prostřednictvím telefonického hovoru na naší zákaznickou linku. </p>
<p>Děkujeme za spolupráci a v případě dotazů jsme Vám k dispozici. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Potvrzení o zápočtu! Předmět e-mailu: Potvrzení dohody o zápočtu faktur č. XXXX a č. XXXX": {
                text: `<p>Dobrý den,pane XXXX, Dobrý den, paní YYYYY,  </p>
<p>v návaznosti na náš telefonický hovor si Vám dovolujeme potvrdit, že jsme se dohodli na provedení zápočtu vzájemných pohledávek, a to konkrétně faktur č. XXXX a č. XXXX. (vypsat všechny čísla FA které se dají započíst)</p>
<p>Příslušný zápočet Vám bude zaslán k potvrzení v průběhu několika následujících pracovních dnů. </p>
<p>Děkujeme za součinnost a v případě jakýchkoliv dotazů se na nás neváhejte obrátit. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Otevřené platby - Zákazníkovi vracíme platbu, kterou uhradil pod chybným VS": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>dovolujeme si Vás informovat, že částka ve výši <strong> XXXX Kč</strong>, kterou jste uhradil(a) pod chybným variabilním symbolem, Vám bude vrácena na bankovní účet číslo <strong> XXXXX </strong></p>
<p>Upozorňujeme, že platby je nutné hradit výhradně pod správným variabilním symbolem uvedeným v <strong>platebním kalendáři</strong>, který naleznete v příloze tohoto e-mailu.</p>
<p>Zároveň Vám v příloze zasíláme <strong>daňový doklad</strong> k vrácené platbě.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        "Otevřené platby - Zákazníkovi vracíme platbu, kterou uhradil mimo PK (nadrámec)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>dovolujeme si Vás informovat, že částka ve výši <strong>XXXX Kč</strong>, kterou jste uhradil(a) nad rámec předepsaných záloh, Vám bude vrácena na bankovní účet číslo <strong>XXXXX</strong>.</p>
<p>Zároveň si Vás dovolujeme upozornit, že platby byly hrazeny ve vyšší výši, než stanovuje aktuální rozpis záloh. Doporučujeme proto upravit trvalý příkaz dle <strong>platného platebního kalendáře</strong>, který Vám zasíláme v příloze tohoto e-mailu.</p>
<p>Zároveň Vám v příloze zasíláme <strong>daňový doklad</strong> k vrácené platbě.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Platby"]
        },
        /* Zálohy */
        "Úprava výše záloh - Navýšení s informací dle § 11 odst. 6": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p><p>potvrzujeme Vám změnu zálohových plateb na částku <strong>XXXXX Kč</strong>. Tato změna bude provedena od <strong>MM.RRRR.</strong></p>
<p>Nový platební kalendář Vám bude zaslán v samostatném e-mailu. / poštou.</p>
<p><i>Informujeme Vás, že v důsledku navýšení záloh může při vyúčtování vzniknout vyšší přeplatek. Vzhledem k této úpravě již rozpis záloh neodpovídá postupu dle § 11 odst. 6 energetického zákona.</i></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },

        "Prosba o zaslání fotografie měřidla - stávající zákazník": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>pro změnu zálohy na Vámi požadovanou výši Vás prosíme o zaslání aktuální fotografie měřidla.</p>
<p>Na základě fotografie bude Váš požadavek předán na příslušné oddělení k posouzení. O výsledku budete následně co nejdříve informováni.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Prosba o zaslání fotografie měřidla - Nový zákazník": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>pro změnu zálohy na Vámi požadovanou výši Vás prosíme o zaslání aktuální fotografie měřidla, včetně konečného vyúčtování od původního dodavatele</p>
<p>Na základě těchto dokumentů bude Váš požadavek předán na příslušné oddělení k posouzení. O výsledku budete následně co nejdříve informováni.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Snížení zálohových plateb - zamítnutí": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>je nám líto, ale Vašemu požadavku nemůžeme v tuto chvíli vyhovět.</p>
<p>Výše záloh, kterou jsme Vám stanovili v platebním kalendáři, se odvíjí od smluvní ceny a očekávaného množství dodané energie.</p>
<p>V případě, že disponujete informacemi, které prokazují důvodné snížení plateb na daném odběrném místě - instalace fotovoltaické elektrárny, přechod na jiný způsob vytápění (instalace plynového kotle, instalace tepelného čerpadla), případně konečné vyúčtování od původního dodavatele, rádi bychom Vás požádali o jejich doložení <b>(protokol o instalaci, konečné vyúčtování + aktuální foto měřidla s datumovkou)</b>. Následně posoudíme požadavek na výši zálohy.</p>
<p>Rádi našim zákazníkům vyhovíme, ale musíme si být jisti, že je snížení opodstatněné, aby pak zákazníka nečekal vysoký nedoplatek v ročním zúčtování. Je to ochrana obou stran.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Kopie rozpisu záloh": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vám zasíláme kopii platebního kalendáře k dodávkám energií.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Platební kalendář – daňový doklad": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že platební kalendář, který jsme Vám zaslali, splňuje všechny zákonné náležitosti a slouží jako daňový doklad.</p>
<p>Daňový doklad navíc Vám vystavíme pouze na přijaté platby, které nám zašlete nad rámec částek stanovených platebním kalendářem.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Potvrzení změny záloh": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>potvrzujeme Vám změnu zálohových plateb na částku <strong>XXXXX Kč</strong>. Tato změna bude provedena od <strong>MM.RRRR.</strong></p>
<p>Nový platební kalendář Vám bude zaslán v samostatném e-mailu. / poštou.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        "Snížení zálohových plateb - zamítnutí na minumum": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,<p>
<p>je nám líto, ale měsíční zálohy nelze snížit na Vámi požadovanou částku.</p>
<p>Součástí plateb za dodávku energií jsou i položky, které je nutné hradit (např. distribuční poplatky). Pokud by tedy byly zálohy sníženy na Vámi požadovanou částku, nedocházelo by k pokrytí těchto poplatků.</p>
<p>Děkujeme Vám za pochopení.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zálohy"]
        },
        /* SPK */
        "Žádost o vystavení SPK": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>děkujeme za Vaši žádost o vystavení splátkového kalendáře (SPK). Rádi bychom Vás informovali o podmínkách, které je nutné splnit, aby mohla být Vaše žádost posouzena a schválena:</p>
<ul>
<li><b>Stav záloh:</b></li> Je nezbytné, aby byly uhrazeny všechny zálohy po splatnosti. Pokud máte aktuálně neuhrazené zálohy, prosíme o jejich doplacení před podáním žádosti o SPK. [<strong>případně zákazníkovi vypíšeme zda u něj evidujeme zálohy po splatnosti)</strong>]
<li><b>Úhrada části dluhu:</b></li> Podle našich podmínek je nutné uhradit alespoň 1/3 celkového dluhu Ve Vašem případě se jedná o částku: <strong>XXXXXXXX</strong>. Toto opatření slouží k prokázání zájmu o řádné vyřízení dluhu. Po provedení této platby je třeba zaslat potvrzení o úhrazení.
<li><b>Podmínky splátkového kalendáře:</b></li> Splátkový kalendář je možné rozložit maximálně do 3 splátek.
<li><b>Další kroky:</li> </b>Jakmile bude potvrzení o úhrazení 1/3 dluhu odesláno, prosíme, abyste kontaktoval/a naši zákaznickou linku (nejlépe telefonicky). Potvrzení bude předáno našemu finančnímu oddělení, které zajistí další zpracování žádosti a vystavení splátkového kalendáře.</ul>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["SPK"]
        },
        "SPLÁTKOVÝ KALENDÁŘ - Vystavení": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,X, </p>
<p>chtěli bychom Vás informovat, že jsme schválili Vaši žádost o poskytnutí splátkového kalendáře. Splátkový kalendář se vztahuje k faktuře s variabilním symbolem <b>XXXXXXXX</b>, která byla vystavena na dodávku elektřiny/plynu.</p>
<p>Jednotlivé splátky dlužné částky za dodávky elektřiny/plynu plaťte dle níže uvedeného rozpisu a platebních údajů:</p>
<li><b>VS:</b> XXXXXXXX</li>
<li><b>Částka:</b> XXXXX Kč</li>
<li><b>Bankovní spojení:</b> 9960227/0100</li>
<li>První splátka je splatná ke dni: <b>XX.XX.XXXX</b></li> <br>
<p>Detailní rozpis splátek najdete v dokumentu přiloženém v příloze tohoto e-mailu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://docs.google.com/document/d/13fDHRHzFAzN79kNSr-ECLBv4lUedUvLNxvxAJ7KeIO4/edit?usp=drive_link", name: " Splátkový kalendář - rozpis splátek", type: "doc" },
                ],
                tags: ["SPK"]
        },
        "Výzva k úhradě SPK - Zákazník SPK nehradí ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>rádi bychom Vás informovali, že k datu <strong>XXXXXXXX</strong> Vám byl schválen splátkový kalendář na nedoplatkovou fakturu ve výši <strong>XXXXXX Kč</strong>. O této skutečnosti jsme Vás informovali e-mailem/telefonicky dne <strong>XXXXXXX</strong>,ve kterém byl uveden rozpis jednotlivých měsíčních splátek.</p>
<p>Do dnešního dne však evidujeme, že splátky nebyly uhrazeny. Žádáme Vás proto o nápravu této situace. V opačném případě dojde ke zrušení splátkového kalendáře a bude nutné celý dluh ve výši <strong>XXXXXXX Kč</strong> uhradit neprodleně v plné výši.</p> 
<p>Pokud platba nebude provedena, může být pohledávka předána k inkasnímu vymáhání.</p>
<p>Děkujeme za pochopení a věříme v rychlé vyřešení této záležitosti.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["SPK"]
        },
        /* Změny platebního způsobu */
        "ZMĚNA ÚČTU PRO ZASÍLÁNÍ PŘEPLATKŮ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku potvrzujeme, že jsme změnili číslo bankovního účtu pro zasílání přeplatků za odběr energií. Nové číslo bankovního účtu je <strong>XXXX</strong>.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Změny platebního způsobu"]
        },
        "ZMĚNA HRAZENÍ ZÁLOH PŘES INKASO": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku potvrzujeme nastavení nového čísla bankovního účtu pro hrazení plateb přes inkaso.</p>
<p>Nové číslo bankovního účtu je <strong>XXXX</strong>. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Změny platebního způsobu"]
        },
        "ZMĚNA HRAZENÍ ZÁLOH PŘES SIPO - PŘED 24. DNEM MĚSÍCE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku jsme upravili způsob hrazení záloh. Nyní jsou Vaše platby tedy hrazeny prostřednictvím SIPO a Vaše spojovací číslo je <strong>XXXX</strong>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Změny platebního způsobu"]
        },
        "ZMĚNA HRAZENÍ ZÁLOH PŘES SIPO - PO 24. DNI MĚSÍCE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku jsme upravili způsob hrazení záloh. Nyní jsou Vaše platby tedy hrazeny prostřednictvím SIPO a Vaše spojovací číslo je <strong>XXXX</strong>.</p>
<p>Jelikož však Česká pošta již v tomto měsíci nepřijímá požadavky na zálohy, je nutné, abyste v následujícím měsíci uhradili zálohu ještě stávajícím způsobem. Další měsíce budou již hrazeny dle nově nastaveného SIPO.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Změny platebního způsobu"]
        },
        "ZMĚNA ZASÍLÁNÍ PŘEPLATKU ZE SLOŽENKY NA BANKOVNÍ ÚČET": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku Vám potvrzujeme, že jsme nastavili změnu zasílání případných přeplatků za odběr energií na bankovní účet s číslem <strong>XXXX</strong>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Změny platebního způsobu"]
        },
        /* Kontaktní osoby */
        "JAK PŘIDAT KONTAKTNÍ OSOBU": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>je nám líto, ale bohužel Vás neevidujeme jako kontaktní osobu pro vyřizování požadavků a sdělování informací. Proto bychom Vás rádi požádali o doložení plné moci nebo zaslání žádosti o přidání Vašeho kontaktu, a to od kontaktní osoby využívající e-mailovou adresu, kterou v našem systému evidujeme.</p>
<p>V plné moci či zaslaném požadavku kontaktní osoby prosím vždy uveďte celé jméno, e-mailovou adresu a telefonní číslo.</p>
<p>Poté bude možné Vám sdělovat podrobnější informace týkající se odběru energií.</p>
<p>Děkujeme Vám za pochopení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Kontaktní osoby"]
        },
        "NENÍ KONTAKTNÍ E-MAIL": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>je nám líto, ale Váš požadavek nemůžeme zpracovat, jelikož Váš e-mail, ze kterého nám píšete neevidujeme jako kontaktní.</p>
<p>Prosíme Vás o zaslání požadavku z e-mailu, který jste uvedli do smlouvy jako kontaktní, případně nás <b>telefonicky</b> kontaktujte.</p>
<p>Na základě tel. hovoru provedeme Vaši identifikaci a aktualizujeme kontaktní údaje.</p>
<p>Děkujeme za pochopení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Kontaktní osoby"]
        },
        "NENÍ KONTAKTNÍ E-MAIL - OZ PÍŠE POŽADAVEK, ALE NEMÁME DOLOŽENOU PM PRO ZASTUPOVÁNÍ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX, </p>
<p>děkujeme za Váš e-mail. </p><br>
<p>Bohužel neevidujeme podepsanou plnou moc opravňující k zastupování zákazníka, a z tohoto důvodu nemůžeme Váš požadavek v tuto chvíli zpracovat. </p>
<p>Prosíme Vás proto o doložení platné plné mocí. Po jejím obdržení se Vaším požadavkem budeme ihned dále zabývat.</p>
<p>Děkujeme za pochopení a spolupráci. </p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Kontaktní osoby"]
        },

        /* Výkup */
        "FVE - Dle nové legislativy - Nepoužíváme od 10.04.2025": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>děkujeme za Vaši zprávu. Vámi uvedený výrobní EAN jsme zaevidovali a počítáme také s převzetím
odpovědnosti za odchylku.</p>
<p><i> Rádi bychom Vás požádali o doplnění následujících informací:</i></p>
<li>Plánujete vyrobenou elektřinu spotřebovávat v místě odběru, sdílet ji, nebo prodávat?</li>
<li>Máte u svého provozovatele distribuční soustavy schválené přetoky do sítě?</li>
<p>Dále Vás chceme informovat, že máte čas nový EAN zaevidovat u dodavatele do 1. července 2025. Do této
doby bude vše vyřešeno k Vaší plné spokojenosti.</p>
<p>Děkujeme za Vaši spolupráci a trpělivost. O dalším postupu Vás budeme informovat s dostatečným předstihem.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>
<p>--------------------------------------------------------------------------------------------------------------------</p>
<p><b>
- NA E-MAIL, KDE NÁS ZÁKAZNÍK INFORMUJE, ŽE MU PŘIŠEL DOPIS OD PDS O VZNIKU MIKROZDROJE - NEODPOVÍDÁME! Měníme garanta na <b>NABÍDKY</B> + ZAKLÁDÁME ÚKOL VE STAVU <B>NOVÝ </B> A <B>ŘEŠITELEM</B> Nabídky (propojíme e-mail s úkolem)</p>`,
                files: [],
                tags: ["Výkup"]
        },
        "FVE - Dle nové legislativy - Odpověď zákazníkovi po doložení informací, které jsme po něm chtěli - Nepoužíváme od 10.04.2025": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>děkujeme za zaslání požadovaných informací. Vaše údaje jsme zaevidovali a zahrneme je do dalšího postupu.</p>
<p>Jak jsme již avizovali, o dalším průběhu Vás budeme informovat.</p>
<p>Děkujeme za spolupráci, trpělivost a přejeme hezký den.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>
<p>--------------------------------------------------------------------------------------------------------------------</p>
<p><b>
- NA E-MAIL, KDE NÁS ZÁKAZNÍK INFORMUJE, ŽE MU PŘIŠEL DOPIS OD PDS O VZNIKU MIKROZDROJE - NEODPOVÍDÁME! Měníme garanta na <b>NABÍDKY</B> + ZAKLÁDÁME ÚKOL VE STAVU <B>NOVÝ </B> A <B>ŘEŠITELEM</B> Nabídky (propojíme e-mail s úkolem)</p>`,
                files: [],
                tags: ["Výkup"]
        },
        /* Dopisy */
        "DOPIS - Jak zasílat": {
                text: `<p>na základě potřeby zaslat zákazníkovi dopis prostřednictvím ZIS Vám zasíláme postup, který je nutné dodržet:</p>
  <ul>
    <li><strong>E-mail je třeba zaslat na adresu:</strong><br>
      📧 <strong>tisk@epet.cz</strong>
    </li>
    <li><strong>Předmět e-mailu musí být přesně uveden jako:</strong><br>
      <code>korespondence určená k tisku</code><br>
      ❗ <em>Jiný předmět není možné uvést – systém jej nezpracuje!</em>
    </li>
    <li><strong>Do přílohy přiložte dokument určený k odeslání zákazníkovi:</strong><br>
      ✅ <strong>formát PDF</strong><br>
      ❌ <em>jiný formát není přípustný!</em><br>
      📝 <strong>Název souboru:</strong> <code>příjmení zákazníka_dopis</code>
    </li>
    <li><strong>Pokud přikládáte dokument typu PK (platební kalendář), FA (faktura) nebo kopii smlouvy,</strong><br>
      ➕ <em>vždy musí být přiložen také dopis!</em><br>
      ❌ <em>Nelze odeslat samotný dokument bez doprovodného dopisu.</em>
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
    <li>Pro ruční úpravu dopisu si můžete stáhnout šablonu ze znalostní báze:<br>
      🔗 <a href="https://sites.google.com/view/znalostn-bze/%C5%A1ablony/%C5%A1ablona-e-mail-korespondence-ur%C4%8Den%C3%A1-k-tisku?authuser=0" target="_blank">
      Znalostní báze – Šablona e-mail: korespondence určená k tisku</a><br>
      ➡️ sekce <strong>Šablony ke stažení</strong>
    </li>
    <li><strong>Doporučujeme využít také automatické generátory dopisů</strong>, které naleznete níže – zajistí správné vyplnění a profesionální výstup.</li>
    <li>V rámci výše uvedené <a href="https://sites.google.com/view/znalostn-bze/%C5%A1ablony/%C5%A1ablona-e-mail-korespondence-ur%C4%8Den%C3%A1-k-tisku?authuser=0" target="_blank">
      znalostní báze</a> je také dostupná <strong>možnost automatického vygenerování e-mailu</strong> pro zaslání na zodpovědnou osobu – tedy na <strong>martin.blazek@epet.cz</strong>.</li>
  </ul>`,
                files: [
                        { url: "https://drive.google.com/file/d/1DKM958grbFkRFuy4MrqYtXJjd4ZK0Uun/view?usp=drive_web", name: "ČESTNÉ PROHLÁŠENÍ ČEZ", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1g_qi7NC8ncY2YW10r0aPD2JYIvCPXMyG", name: "ČESTNÉ PROHLÁŠENÍ - PRE", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1Zz5Gx_UHY3hgHAAOl66xqs0hzI5p-o25", name: "ČESTNÉ PROHLÁŠENÍ - EGD", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1HKsGDY14VD8bREp744I2ze7EXC29j7J6", name: "ČESTNÉ PROHLÁŠENÍ - ZMD", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1UhAkyEzAaPizqFZrPhB9BbNiRCB8YnUW", name: "ČESTNÉ PROHLÁŠENÍ - PPL", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1XAoZ_xy-4IOmwAHATnHSjbi9j7yw0Sd0", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - DOM", type: "pdf" },
                        { url: "https://drive.google.com/open?id=1n7kXH_5h0Utb8yZDkr2V-HK9rPysV-BN", name: "ČESTNÉ PROHLÁŠENÍ - GASNET - FIRMA", type: "pdf" },],
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
                        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-příjemní-zaslání-čp", name: "Změna příjemní – zaslání čp – generátor" },
                        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-rezervovaného-příkonu", name: "Změna rezervovaného příkonu – generátor" },
                        { url: "https://sites.google.com/view/znalostn-bze/šablony/šablona-e-mail-korespondence-určená-k-tisku/generátor-dopisu-změna-trvalé-adresy", name: "Změna trvalé adresy – generátor" }
                ],
                tags: ["Dopisy"]
        },
        /* Montáže */
        "Montáž měřidla - potvrzení termínu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,,</p>
<p>děkujeme Vám za Váš zájem o odběr energií od společnosti epet.</p>
<p>Rádi bychom Vás informovali, že jsme zpracovali Váš požadavek na montáž u odběrného místa <strong>EIC/EAN XXXX</strong> na adrese <strong>Ulice č.p./č.o., XXX XX Město.</strong></p>
<p>Montáž Vašeho měřidla provede distributor dne <strong>DD.MM.RRRR v HH</strong>.</p>
<p>Prosíme Vás o zajištění přístupu technikovi do prostor, kde bude montáž měřidla probíhat, a také si připravte svou revizní zprávu.</p>
<p>Rádi bychom Vás rovněž informovali, že jsme spustili nový zákaznický portál, kde můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Montáže"]
        },
        /* Přepisy */
        "Přepis odběrného místa - Zaslání Odkazu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,,</p>
<p>na základě naší telefonické dohody Vám zasíláme odkaz na elektronický formulář pro přepis odběrného místa. Tento formulář můžete vyplnit a odeslat prostřednictvím následujícího odkazu: <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank"> Formulář k přepisu odběrného místa.</a></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přepisy"]
        },
        "Přepis odběrného místa - Bez zaslání odkazů (V rámci DINHE NAPŘÍKLAD)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,,</p>

<p>stále evidujeme nevyřešený požadavek týkající se přepisu smlouvy na odběr energií po zemřelém <b>XXXXXX</b>. Rádi bychom Vás informovali o nutnosti provést tento přepis na nového odběratele. Tento krok je nezbytný pro zajištění kontinuity dodávky energií na odběrném místě <b>[Adresa odběrného místa]</b>.</p>

<p>Prosíme Vás, abyste co nejdříve kontaktovali naši zákaznickou podporu na telefonním čísle <b>255 70 70 99</b> nebo e-mailem na <b>info@epet.cz</b>, kde Vám poskytneme veškeré potřebné formuláře a informace k přepisu smlouvy.</p>

<p>Děkujeme za Vaši spolupráci a jsme Vám k dispozici pro jakékoliv dotazy či další informace.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přepisy"]
        },
        "Přepis urgence  - Bez zaslání odkazů (V rámci DINHE NAPŘÍKLAD)": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,,</p>

<p>rádi bychom Vás znovu upozornili na nutnost přepsání smlouvy na odběr energií na nového odběratele. Původní smlouva č. byla uzavřena na zemřelého <b>XXXXX</b> a je nezbytné uzavřít novou smlouvu, aby byla zajištěna kontinuální dodávka energií na odběrném místě <b>[Adresa odběrného místa]</b>.</p>

<p>Dosud jsme neobdrželi žádnou odpověď na naši předchozí výzvu. Prosíme Vás, abyste co nejdříve kontaktovali naši zákaznickou podporu na telefonním čísle <b>255 70 70 99</b> nebo e-mailem na <b>info@epet.cz</b>, kde Vám poskytneme veškeré potřebné formuláře a informace k přepisu smlouvy.</p>

<p>Pokud nebude přepis smlouvy proveden do <b>[Datum – D+30 dní]</b>, budeme nuceni přistoupit k přerušení dodávky energií na uvedeném odběrném místě. Tento krok je nezbytný pro zajištění správné evidence a správy odběrného místa.</p>

<p>Děkujeme za Vaši spolupráci a pochopení. Jsme Vám k dispozici pro jakékoliv dotazy či další informace.</p>

<p>Děkujeme za Vaši spolupráci a jsme Vám k dispozici pro jakékoliv dotazy či další informace.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přepisy"]
        },
        "Přepis odběrného místa - Zaslání Odkazu (kdy např. zákazník reaguje v hovoru, že tedy zkusí formulář, nebo že neví jak ho vyplnit)": {
  text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě naší telefonické dohody Vám zasíláme odkaz na elektronický formulář pro přepis odběrného místa. Tento formulář můžete vyplnit a odeslat prostřednictvím následujícího odkazu: <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank">Formulář k přepisu odběrného místa</a>.</p>
<p><b>Máte potíže s online formulářem?</b> V tom případě nám můžete potřebné údaje zaslat přímo v odpovědi na tento e-mail. Uveďte prosím následující doplňující údaje k novému odběrateli:</p>
<ul>
  <li><b>Jméno a příjmení / Název společnosti</b></li>
  <li><b>Datum narození</b></li>
  <li><b>Adresa trvalého bydliště / Sídlo firmy</b></li>
  <li><b>E-mail</b></li>
  <li><b>Telefonní číslo</b></li>
  <li><b>Počáteční výše a četnost záloh</b></li>
  <li><b>Platnost smlouvy</b>: 12 / 24 / 36 měsíců</li>
  <li><b>Způsob úhrady záloh</b> (SIPO – uveďte spojovací číslo / převodní či inkasní příkaz – uveďte číslo bankovního účtu)</li>
  <li><b>Způsob vrácení přeplatků</b> (složenka / převodní příkaz)</li>
</ul>
<p>Na základě obdržených údajů pro Vás připravíme a zašleme návrh smlouvy k odsouhlasení.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [],
  tags: ["Přepisy"]
},
"Přepis odběrného místa - Reakce na potíže s online formulářem": {
  text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Váš e-mail a omlouváme se za komplikace s online formulářem. Rozumíme, že ne každému tento způsob vyhovuje. Přepis odběrného místa můžeme vyřídit i <b>bez vyplnění formuláře</b> – stačí, když nám v odpovědi na tento e-mail zašlete následující údaje k novému odběrateli:</p>
<ul>
  <li><b>Jméno a příjmení / Název společnosti</b></li>
  <li><b>Datum narození</b></li>
  <li><b>Adresa trvalého bydliště / Sídlo firmy</b></li>
  <li><b>E-mail</b></li>
  <li><b>Telefonní číslo</b></li>
  <li><b>Počáteční výše a četnost záloh</b></li>
  <li><b>Platnost smlouvy</b>: 12 / 24 / 36 měsíců</li>
  <li><b>Způsob úhrady záloh</b> (SIPO – uveďte spojovací číslo / převodní či inkasní příkaz – uveďte číslo bankovního účtu)</li>
  <li><b>Způsob vrácení přeplatků</b> (složenka / převodní příkaz)</li>
</ul>
<p>Na základě obdržených údajů pro Vás připravíme a zašleme <b>návrh smlouvy</b> k odsouhlasení a podpisu.</p>
<p>Pokud byste přesto chtěli formulář vyplnit, můžete jej otevřít zde: <a href="https://epet.cz/chci-prepsat-smlouvu-na-jinou-osobu-38" target="_blank">Formulář k přepisu odběrného místa</a>.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [],
  tags: ["Přepisy"]
},

        /* Zranitelný zákazník */
        "Upozornění na blížící se konec platnosti potvrzení pro přiznání práv zranitelného zákazníka": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dovolujeme si Vás kontaktovat ohledně blížícího se konce platnosti Vašeho potvrzení o splnění podmínek pro přiznání zvláštních práv zranitelného zákazníka.</p>
<p>Po datu <strong>XX.XX.XXXX</strong> Vám bude status zranitelného zákazníka ukončen. Abychom Vám mohli práva zranitelného zákazníka přiznávat i po tomto termínu, prosíme Vás o doložení nového lékařského potvrzení vydaného Vaším ošetřujícím lékařem na následující období. Vzor dokumentu naleznete ke stažení také na našich webových stránkách na adrese <a href="https://www.epet.cz/zranitelny-zakaznik/" target="_blank">Zranitelný zákazník</a>.</p>
<p>Nové potvrzení pošlete prosím nejpozději do výše uvedeného data. V případě, že nám nebude dokument doložen, přejde Vaše odběrné místo <strong>EAN XXXXXXXXXX</strong>, na adrese <strong>XXXXXXXXXXXXXXXXX</strong> do standardního režimu, na který se nevztahují práva spojená se statusem zranitelného zákazníka.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zranitelný zákazník"]
        },
        /* Zákaznický portál */
        "Zákaznický portál - Registrace": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Váš e-mail a rádi bychom Vás informovali, že jsme úspěšně provedli registraci Vašeho účtu.
Registrační e-mail s přístupovými údaji a pokyny k aktivaci Vám bude doručen v samostatné zprávě. Pokud byste e-mail neobdržel(a) do několika minut, prosíme o kontrolu složky se spamem nebo hromadnou poštou.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zákaznický portál"]
        },
        "Zákaznický portál - Sloučení účtů": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že jsme na základě Vašeho požadavku úspěšně provedli sloučení Vašich zákaznických účtů v rámci "Zákaznického portálu".
Veškeré sloučené účty nyní naleznete v portálu pod svým jménem, umístěné vpravo nahoře. Nově budete mít možnost:
<li>změnit výchozí účet dle Vašich preferencí,</li>
<li>libovolně se mezi jednotlivými účty přepínat.</li>
<p>Věříme, že Vám tato změna usnadní správu Vašich zákaznických údajů.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zákaznický portál"]
        },
        "Zákaznický portál - Deaktivace": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>na základě Vašeho požadavku jsme úspěšně deaktivovali Váš přístup do Zákaznického portálu.
Pokud byste si svou volbu v budoucnu rozmyslel(a) a přál(a) si přístup do portálu znovu aktivovat, neváhejte se na nás obrátit. Rádi Vám jej kdykoliv obnovíme.
Děkujeme, že jste využíval(a) náš Zákaznický portál.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zákaznický portál"]
        },
        "Zákaznický portál - Odpověď na úkol - Všebecné dotazy z webu ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za váš dotaz, týkající se <strong> stručný popis požadavku</strong>, který jste zadal/a prostřednictvím našeho zákaznického portálu.Rádi bychom vám poskytli odpověď:</p>
<p>Sem uveďte konkrétní odpověď na dotaz</p>`,
                files: [],
                tags: ["Zákaznický portál"]
        },
        "Zákaznický portál - Odpověď na zapomenuté heslo ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>pokud se Vám nedaří přihlásit do zákaznického portálu s heslem, které jste si nastavil/a, případně jste zapomněl/a heslo z automaticky vygenerovaného e-mailu, je nutné provést <b>reset hesla.</b></p>
<p>Prosíme, klikněte na následující odkaz: <a href="https://zakaznici.epet.cz/forgotten-password" target="_blank">Reset hesla</a></p>
<p>Na zadanou e-mailovou adresu Vám bude doručeno nové heslo, se kterým se přihlásíte do portálu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Zákaznický portál"]
        },
        /* Přeplatky */
        "Žádost o potvrzení údajů pro vrácení přeplatku - Vrácená složenka": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že se nám vrátila složenka s přeplatkem, který jsme Vám zasílali. Abychom mohli přeplatek co nejdříve vyřídit, prosíme Vás o následující:</p>
<ul>
<li><strong>Potvrzení správnosti Vaší korespondenční adresy</strong> – zda je stále aktuální adresa: <strong> uvést aktuální kam přeplatek odcházel </strong> správná, případně o sdělení nové adresy.</li>
<li><strong>Sdělte nám, zda si přejete přeplatek zaslat na bankovní účet</strong> – v tomto případě nám, prosím, zašlete číslo Vašeho bankovního účtu.</li>
</ul>
<p>Vaše údaje můžete zaslat odpovědí na tento e-mail nebo nás kontaktovat na níže uvedeném telefonním čísle</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        "Žádost o sdělení nového bankovního účtu - Vrácená platba z důvodu neexistujícího bankovního účtu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dovolujeme si Vás informovat, že se nám vrátil přeplatek ve výši <strong> částka Kč</strong>, který jsme zasílali na bankovní účet<strong> číslo účtu kam platba odcházela</strong>, jenž je bohužel neexistující.</p>
<p>Pro úspěšné zpracování vrácení této částky Vás tímto zdvořile žádáme o sdělení nového bankovního účtu, na který můžeme přeplatek odeslat. Prosíme o zaslání těchto údajů co nejdříve, abychom mohli platbu bez odkladu uskutečnit.</p>
<p>Vaše údaje můžete zaslat odpovědí na tento e-mail nebo nás kontaktovat na níže uvedeném telefonním čísle</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        "Informace pro ZK - přeplatek bude vyplacen na BÚ k nejbližšímu termínu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>dovolujeme si Vás informovat, že přeplatek ve výši <strong> částka Kč</strong>, bude vyplacen na Váš bankovní účet:<strong> číslo účtu kam přeplatek bude odcházet</strong> v nejbližším možném termínu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        "Vrácená složenka – potvrzení adresy / převod na účet  (nejedená se o přeplatky, ale o platby nad rámec PK)": {
  text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že se nám vrátila poštovní poukázka (složenka) na částku <strong>XXX Kč</strong>, kterou jsme Vám zasílali z důvodu platby nad rámec platebního kalendáře za <strong>XXXXX</strong>.</p>
<p>Podle předpisu byla záloha <strong>XXX Kč</strong>, od Vás jsme obdrželi <strong>XXX Kč</strong> – rozdíl <strong>XXX Kč</strong> jsme odeslali složenkou na adresu <strong>XXX</strong>, složenka se však vrátila jako nedoručená.</p>
<p>Abychom mohli přeplatek vyřídit co nejdříve, prosíme o:</p>
<ul>
  <li><strong>Potvrzení korespondenční adresy</strong> (případně sdělte <strong>novou doručovací adresu</strong> pro opětovné zaslání složenkou), nebo</li>
  <li>informaci, zda si přejete přeplatek <strong>poukázat na bankovní účet</strong> – v tom případě nám, prosím, zašlete <strong>číslo účtu</strong> (formát: předčíslí–číslo/kód banky).</li>
</ul>
<p>Údaje nám můžete zaslat odpovědí na tento e-mail, případně nás kontaktovat na níže uvedeném telefonním čísle.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [],
  tags: ["Přeplatky"]
},


"Vrácená platba – z důvodu neexistujícího bankovního účtu (nejedená se o přeplatky, ale o platby nad rámec PK)": {
  text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že se nám vrátila platba na částku <strong>XXX Kč</strong>, kterou jsme Vám zasílali na bankovní účet <b>číslo účtu kam platba odcházela </b>, z důvodu platby nad rámec platebního kalendáře za <strong>XXXXX</strong>.</p>
<p>Podle předpisu byla záloha <strong>XXX Kč</strong>, od Vás jsme obdrželi <strong>XXX Kč</strong> – rozdíl <strong>XXX Kč</strong>. Platba se bohužel vrátila z důvodu, že výše uvedený bankovní účet je bohužel neexistující.</p> <br>
<p>Pro úspěšné zpracování vrácení této částky Vás tímto zdvořile žádáme o sdělení nového bankovního účtu, na který můžeme přeplatek odeslat. Prosíme o zaslání těchto údajů co nejdříve, abychom mohli platbu bez odkladu uskutečnit.</p>
Vaše údaje můžete zaslat odpovědí na tento e-mail nebo nás kontaktovat na níže uvedeném telefonním čísle.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
  files: [],
  tags: ["Přeplatky"]
},
        "Informace pro ZK - nutné vrátit přeplatek, který mu byl chybně vyplacen": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že v rámci naší interní kontroly jsme zjistili administrativní chybu ve vystavení přeplatku ve výši  <strong> částka Kč</strong>,který Vám byl omylem připsán. Tento přeplatek Vám bohužel nenáleží, a proto bychom Vás chtěli požádat o jeho vrácení.</p>
<p>Prosíme Vás o provedení úhrady na níže uvedený bankovní účet:</p>
<li><strong>Číslo účtu:</strong> [bankovní údaje]</li>
<li><strong>Variabilní symbol:</strong> [VS nebo jiná identifikace]</li>
<p>Velmi si vážíme Vaší spolupráce a omlouváme se za případné nepříjemnosti. </p>
<p>Děkujeme za pochopení a věříme, že celou záležitost vyřešíme k oboustranné spokojenosti.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        "Informace pro ZK - přeplatek odešel složenkou i přes nastavené BÚ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali o stavu Vašeho přeplatku. Přestože jste v našem systému nastavili bankovní účet pro vyplacení přeplatku, bohužel se tento požadavek nepodařilo zpracovat v původně plánovaném termínu. Z tohoto důvodu byl přeplatek odeslán dle původního nastavení prostřednictvím poštovní poukázky.</p>
<p>V současné situaci máte dvě možnosti:</p>
<ol>
<li><strong> Vyčkat na vrácení poukázky</strong> – Pokud nevyzvednete složenku, Česká pošta nám ji standardně vrátí zpět. Tento proces může trvat přibližně <em>3–6 týdnů</em>, poté bude přeplatek vyplacen na bankovní účet, který máme evidován v systému.</li>
<li><strong> Vyzvednout zaslanou složenku</strong> – Pokud si složenku vyzvednete, obdržíte přeplatek touto cestou.</li></ol>
<p>Omlouváme se za vzniklé komplikace a děkujeme za pochopení.</p>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        "Potvrzení zk. že nové BÚ bylo nastaveno a požadavek na vyplacení předán na finance": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za zaslání správného čísla bankovního účtu <strong>nové BÚ</strong>, které jsme zaevidovali k Vašemu zákaznickému účtu.</p>
<p>Informace jsme předali k dalšímu zpracování. Jakmile dojde k vyplacení přeplatku, budeme Vás o této skutečnosti neprodleně informovat</p>

<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Přeplatky"]
        },
        /* Bezzálohový režim */
        "Žádost o Bezzálohový režim": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p> 
<p>děkujeme za Vaši dosavadní spolupráci. Na základě Vašeho zájmu o přechod na <strong> bezzálohový režim </strong> Vám tímto zasíláme podmínky, které je nutné splnit:</p>
<li>Nemít po splatnosti žádné zálohy ani vyúčtování. (V případě, že u zákazníka evidujeme částky po splatnosti musíme upozornit na jejich úhradu)</li>
<li>Mít měření typu B.</li>
<li>Uhradit kauci ve výši jedné měsíční zálohy - tedy částku <strong> vypsat akt. výši zálohy </strong> – kauce musí být uhrazena nejpozději <b>do 3 dnů </b>od doručení tohoto e-mailu.</li>
<li>Podepsat přiložený formulář a zaslat jej zpět.</li><br>
<p>V příloze naleznete příslušný formulář, který Vás prosíme vyplnit, podepsat a vrátit zpět na tuto e-mailovou adresu. Jakmile obdržíme podepsaný dokument a ověříme splnění výše uvedených podmínek, budeme Vás informovat o dalším postupu.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [
                        { url: "https://drive.google.com/file/d/1EhfSImShMh7soopf2KBDLK05C3Q7_6c1/view?usp=drive_link'", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf" },
                        { url: "https://drive.google.com/file/d/1vUBov6r4JO_0g9Mn86irAAjcVkHhZXyv/view?usp=drive_link'", name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf" }
                ],
                tags: ["Bezzálohový režim"]
        },
        "Žádost o Bezzálohový režim - Schváleno": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že na základě splnění všech podmínek Vám byl schválen <strong>bezzálohový režim</strong>. To znamená, že od nynějška již není nutné <strong>hradit měsíční zálohy</strong>.</p>
<p>Namísto záloh Vám budeme vystavovat faktury odpovídající skutečné spotřebě, a to každý měsíc dle standardních fakturačních podmínek.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Bezzálohový režim"]
        },
        "Žádost o Bezzálohový režim - Zamítnuno": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Vaši žádost o zařazení do bezzálohového režimu.</p>
<p>Po pečlivém posouzení Vaší žádosti Vám bohužel musíme sdělit, že aktuálně nesplňujete podmínky pro zařazení do tohoto režimu. Bezzálohový režim je v současné době umožněn pouze <strong>firemním zákazníkům</strong> s typem měření <strong>B</strong>.</p>
<p>Pokud se v budoucnu změní podmínky Vašeho odběru a budete splňovat uvedené požadavky, rádi Vaši žádost znovu posoudíme.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Bezzálohový režim"]
        },

        /* Smluvní pokuty */
        "Výpočet smluvní pokuty": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>na základě našeho dnešního telefonického hovoru Vám níže zasíláme informaci k orientační výši smluvní pokuty vztahující se ke smlouvě elektřiny/plynu č. <strong>XXXXX</strong>.</p>
<p>Částka činí <strong>XXXXX Kč</strong> a je vypočtena na základě předpokladu, že ukončení odběrného místa jiným dodavatelem proběhne nejpozději k <strong>D+10 PD</strong>.</p>
<p>Upozorňujeme, že v případě, že by k ukončení odběrného místa došlo k jinému datu, může se skutečná výše smluvní pokuty lišit.
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Smluvní pokuty"]
        },
        "Výzva k úhradě smluvní pokuty": {
                text: `<p>Dobrý den, pane XXX / paní XXX,</p>
<p>informujeme Vás, že u Vašeho odběrného místa <b>EAN/EIC XXXXXXXXX</b> došlo k porušení smluvních podmínek z důvodu <b>nezahájení dodávky energií</b> nebo <b>předčasného ukončení dodávky energií</b>.</p>
<p>Na základě toho uplatňujeme naše právo na vystavení smluvní pokuty. Informace o výši této pokuty a způsobu její úhrady naleznete v přiložené faktuře.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Smluvní pokuty"]
        },

        "Přezkoumání smluvní pokuty - je oprávněná": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že jsme znovu a důkladně prozkoumali důvody udělení smluvní pokuty týkající se odběrného místa <strong>EAN/EIC XXXXXXXXX</strong>.</p>
<p>I po opětovném přezkoumání však uplatňujeme náš nárok na vystavení smluvní pokuty. Důvodem je <strong>XXXXX</strong> (důvod vypsat z úkolu).</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Smluvní pokuty"]
        },

        "Smluvní pokutu nepožadujeme - storno": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>přehodnotili jsme náš požadavek na úhradu smluvní pokuty pro odběrné místo <strong>EAN/EIC XXXXXXXXX</strong>.</p>
<p>Na úhradě této pokuty již netrváme.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Smluvní pokuty"]
        },
        /* Změna typu měření */
        "Změna typu měření z B na C": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že u odběrného místa EAN <b>[EAN kód]</b> na adrese <b>[Adresa]</b> distributor provedl změnu typu měření z <i> B </i> na <i>C</i>. Od této chvíle tedy bude odečet na Vašem měřidle vykonáván pouze jednou ročně.</p>
<p>Pokud byste si přáli nadále využívat možnost měsíční fakturace, je to možné na základě zasílání samoodečtů. Tato možnost je zpoplatněná <i> 41,32 Kč/odběrné místo bez DPH</i>. </p>
<p>Pro využití této možnosti nám zasílejte stavy Vašeho měřidla zaznamenané v tabulce, kterou naleznete v příloze a to nejpozději dle níže uvedených termínů. Využít můžete i <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>. </p>
<li><b>Elektřina:</b> Odečet může být nahlášen k jakémukoli datu, musí být však nahlášen do 20 kalendářních dní od provedení odečtu.</li>
<li><b>Plyn:</b> Odečet musí být nahlášen k poslednímu dni v měsíci, musí být však nahlášen do 5 kalendářních dní.</li><br>
<p>Dále Vás informujeme, že pokud jste doposud využívali bezzálohový režim, tento režim Vám bude automaticky zrušen. Nově bude nutné hradit zálohy dle předepsaného platebního kalendáře, který Vám v nejbližších dnech dorazí na Vaši e-mailovou adresu. / korespondenční adresu.</p> 
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [
                        { url: 'https://docs.google.com/spreadsheets/d/13wHIPy047lL1JOVuEX1phxT_JqE22cHPscAZj9iF1cQ/edit?gid=197074618#gid=197074618', name: "ŠABLONA PRO E-MAIL", type: "xls" },
                        { url: 'https://docs.google.com/spreadsheets/d/1sIB4lRLeYM4HlgxTEkPjxNKA5B3ruKweGZDDM-MMh7s/edit?gid=1283439519#gid=1283439519', name: "ŠABLONA PRO PORTÁL", type: "xls" },
                ],
                tags: ["Změna typu měření"]
        },

        "Změna typu měření z C na B - Domácnost": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že u odběrného místa EAN <b>xxxxx </b> na adrese <b>xxxxxx</b> distributor provedl změnu typu měření z <b>C</b> na <b>B</b>. Od této chvíle se tedy bude odečet na Vašem měřidle vykonávat za každý kalendářní měsíc.</p>
<p>Každý měsíc Vám budeme zasílat i fakturu. Rádi bychom Vás také upozornili, že fakturace jednou ročně již není možná. Platební kalendář a placení záloh zůstává nezměněn.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Změna typu měření"]
        },

        "Změna typu měření z C na B - Firma -  nabídka bezzálohového režimu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že u odběrného místa EAN <b>xxxxx</b> na adrese <b>xxxxxx</b> distributor provedl změnu typu měření z <b>C</b> na <b>B</b>. Od této chvíle se tedy bude odečet na Vašem měřidle vykonávat za každý kalendářní měsíc.</p>
<p>Každý měsíc Vám budeme zasílat i fakturu. Rádi bychom Vás také upozornili, že fakturace jednou ročně již není možná.</p>
<p>V návaznosti na tuto změnu Vám rovněž zasíláme podmínky pro případný přechod na bezzálohový režim:</p>
<li>Nemít po splatnosti žádné zálohy ani vyúčtování. [V případě, že u zákazníka evidujeme částky po splatnosti musíme upozornit na jejich úhradu]</li>
<li>Mít měření typu B (což nyní splňujete).</li>
<li>Uhradit kauci ve výši jedné měsíční zálohy tedy ve výši:<b>[aktuální výše zálohy]</b></li>
<li>Podepsat přiložený formulář a zaslat jej zpět.</li><br>
<p>V příloze naleznete formulář, který Vás žádáme vyplnit, podepsat a odeslat na tuto e-mailovou adresu. Jakmile obdržíme podepsaný dokument a ověříme splnění uvedených podmínek, budeme Vás informovat o dalším postupu.</p>
<p>Děkujeme za spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [
                        { url: 'https://drive.google.com/file/d/1EhfSImShMh7soopf2KBDLK05C3Q7_6c1/view?usp=drive_link%27', name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2022", type: "pdf" },
                        { url: 'https://drive.google.com/file/d/1vUBov6r4JO_0g9Mn86irAAjcVkHhZXyv/view?usp=drive_link%27', name: "ŽÁDOST O BEZZÁLOHOVÝ REŽIM - DLE VOPD 2024", type: "pdf" },
                ],
                tags: ["Změna typu měření"]
        },
        "Změna typu měření z C na B - Firma - bez nabídky bezzálohového režimu": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>informujeme Vás, že u odběrného místa EAN <b>xxxxx </b> na adrese <b>xxxxxx</b> distributor provedl změnu typu měření z <b>C</b> na <b>B</b>. Od této chvíle se tedy bude odečet na Vašem měřidle vykonávat za každý kalendářní měsíc.</p>
<p>Každý měsíc Vám budeme zasílat i fakturu. Rádi bychom Vás také upozornili, že fakturace jednou ročně již není možná. Platební kalendář a placení záloh zůstává nezměněn.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a>.</p>`,
                files: [],
                tags: ["Změna typu měření"]
        },
        /* Odstávka */
        "Plánovaná odstávka dodávek energií": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>kontaktoval nás Váš distributor s informací týkající se přerušení dodávek do odběrného místa s <strong>EAN/EIC XXX</strong> na adrese <strong>XXX</strong>.</p>
<p>Dodávka bude přerušena v rozmezí <strong>DD.MM.RRRR – DD.MM.RRRR</strong> z důvodu plánované stavební úpravy.</p>
<p>Distributor však předpokládá, že dodávky nebudou přerušeny po celou uvedenou dobu, ale jen na dobu nezbytně nutnou. O přesném termínu Vás distributor bude informovat prostřednictvím informační vývěsky.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Odstávka"]
        },
        /* Sdílená elektřina */
        "ODPOVĚĎ ZÁKAZNÍKOVI DO MAILU, KDE NAJDE MNOŽSTVÍ NASDÍLENÉ ENERGIE:": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>množství energie, které jste fyzicky sdílel/a, si můžete vypočítat následovně:</p>
<ol>
  <li><b>Zjistěte svou celkovou spotřebu</b> – Ve svém vyúčtování se podívejte na konečný a počáteční stav
elektroměru. Rozdíl mezi těmito hodnotami představuje vaši skutečnou fyzickou spotřebu za dané období.</li>
 <li><b>Podívejte se na hodnoty ve vyúčtování</b> – V kolonkách "Distribuováno" a "Dodáno" najdete množství
energie, které vám bylo skutečně účtováno. Tyto hodnoty nezahrnují energii, kterou jste sdílel.</li>
 <li><b>Výpočet sdílené energie</b> – Sdílené množství zjistíte takto: <i>Sdílená energie (kWh) = Fyzicky spotřebovaná energie – Účtovaná spotřeba</i></li>
</ol>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Sdílená elektřina"]
        },
        "ODPOVĚĎ ZÁKAZNÍKOVI DO MAILU - INFORMACE,KE SDÍLENÍ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>děkujeme za Váš dotaz ke sdílené elektřině.</p>
<p>Sdílení elektřiny není nabízeno jako samostatný produkt dodavatele, jedná se o proces, který je plně v rukou zákazníka. My, jako dodavatel, do tohoto procesu zákazníkovi nezasahujeme.</p>
<p>Pro registraci a správu sdílení prosím využijte oficiální portál  <a href="http://edc-cr.cz/"target="_blank">EDC-ČR </a>, kde si založíte účet a nastavíte potřebné údaje. Jakmile EDC-ČR zveřejní a potvrdí Vaše alokace, promítneme sdílené množství do Vašeho vyúčtování.</p>
<p><ul><strong>Důležité stručně:</strong></p>
<li><strong>Změna dodavatele</strong> není nutná. Sdílení zohledníme v rámci Vaší stávající smlouvy.</li>
<li>Započtení sdílené energie vychází z údajů EDC-ČR; regulované složky (distribuce, daně, stálé platby) se účtují dle platné regulace.</li>
<li>Pro zapojená odběrná místa je obvykle vyžadováno průběhové (dálkově odečítané) měření.</li></ul><br>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Sdílená elektřina"]
        },
        /* FVE - MIKROZDROJE */
        "Šablona č.1 s Předmětem:Zamítnutý výrobní EAN": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>rádi bychom Vás informovali, že jsme se pokusili převzít za Vás odchylku u Operátora trhu. Bohužel nám bylo přihlášení zamítnuto z důvodu, že nemáte aktivovaný druhý EAN, který Vám přidělil distributor.</p>
    <p>Prosíme Vás proto o co nejrychlejší aktivaci tohoto EAN, nejpozději do 3 pracovních dnů. Po provedení registrace Vám distributor zašle potvrzovací e-mail, ve kterém uvede, že byl EAN aktivován a od jakého data. Jakmile tento e-mail obdržíte, přepošlete nám jej prosím jako potvrzení.</p>
    <p>Vzhledem k vysokému zájmu o převzetí odchylek v tomto období a nutnosti zajištění technických kroků předem, nemůžeme v případě Vaší nesoučinnosti zaručit včasné převzetí odchylky. To může vést k neoprávněnému odběru, za který nese odpovědnost zákazník.</p>
    <p>Děkujeme za pochopení a spolupráci.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Převzetí odchylky"]
        },
        "Šablona č.2 s Předmětem:Žádost o doplnění údajů k připojení Vaší výrobny elektřiny z FVE ": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
 <p>děkujeme Vám za zájem o připojení Vaší výrobny elektřiny z fotovoltaické elektrárny (FVE).</p>
    <p>Abychom mohli zahájit proces připojení, prosíme Vás o zaslání následujících údajů:</p>
    <p><strong>Povinné údaje:</strong><br>
    • Jméno a příjmení (nebo název společnosti):<br>
    • Datum narození (nebo IČ):<br>
    • EAN kód výrobny:<br>
    • Adresa výrobny:<br>
    • K jakému datu je/bude výrobna připojena do distribuční sítě?: <br>
    • Je výrobní EAN nový ? Pokud <b>Ne</b>: Poprosíme o doložení akceptace ukončení smlouvy od původního dodavatele.<br>
    • Sdílíte v tuto chvíli energie? Pokud ano, tak z kolika % <br>
    • Dále poprosíme o doložení <b>Smlouvy o připojení</b>, kterou Vám vystavil Váš distributor nebo je možné doložit <b>Protokol o připojení k distribuční síti</b></p>
    <p><strong>Nepovinný údaj (doporučeno):</strong><br>
    • EAN kód odběrného (spotřebního) místa:</p>
    <p>Dovolujeme si Vás také informovat, že aktuální výkupní cena elektřiny činí 0,- Kč/MWh.</p>
    <p>Díky změně legislativy začne od 1. 7. 2025 příslušný distributor ukládat pokuty výrobnám, které nemají sjednaného obchodníka.<br>
    Společnosti epet za Vás převezmou odpovědnost za odchylku, aby k těmto pokutám nedocházelo.</p>
    <hr>
    <p>Vyjadřuji tímto souhlas a projevuji vůli, aby se společnost epet stala obchodníkem pro mé výrobní místo a provedla jeho registraci u Operátora trhu s elektřinou (OTE).<br>
    <p>Vyplněné údaje prosím zašlete na e-mailovou adresu: <strong>info@epet.cz</strong></p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Převzetí odchylky"]
        },
        /* Jednotková cena */
        "Zamítnutí reklamace: Jednotková cena (Případně pokud chceme zákazníkovi vysvětlit co to jednotková cena je a jak se počítá - ELE": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Po pečlivém přezkoumání Vaší žádosti a zaslaných podkladů jsme dospěli k závěru, že průměrná jednotková cena za energie, která je uvedena ve vyúčtování, odpovídá podmínkám smlouvy a aktuálním cenám na trhu. Z tohoto důvodu nemůžeme Vaši reklamaci uznat. Pro lepší porozumění si dovolujeme uvést vysvětlení jednotkové ceny:</p>
<p>Jednotková cena za energie je stanovena jako celková částka za spotřebu energií (včetně pevných poplatků a daní) vydělená celkovým množstvím odebraných energií. Tato cena zahrnuje náklady na:</p>
<li>Ceny za dodávku</li>
<li>Distribuční poplatky.</li>
<li>Regulační poplatky a daně.</li>
<p>Váš konkrétní výpočet byl proveden v souladu s uvedenými pravidly a nebyly zjištěny žádné nesrovnalosti. Níže zasíláme výpočet jednotkové ceny a jak jsme k danému výsledku došli:<p> 
<u>Celková spotřeba odběrného místa pro <b>VT:</b> XXX KWh = XXX MWh</u>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; font-family:Arial; font-size:14px; width:100%;">
  <!-- Regulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Regulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Distribuce elektřiny, plat za distribuované množství elektřiny VT</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
  <tr>
    <td>Podpora výkupu elektřiny z POZE</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
  <tr>
    <td>Systémové služby ČEPS, a.s.</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Neregulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Neregulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Cena za dodávku VT</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Daň -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Daň:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Daň z elektřiny</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
</table>

<p>Když všechny tyto hodnoty sečteme a vydělíme celkovou spotřebou OM v KWh získáme průměrnou jednotkovou cenu za <b>VT:</b> = XXXXXx Kč.</p>
<p><u>Celková spotřeba odběrného místa pro <b>NT:</b> XXX KWh = XXXX MWh</u></p>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; font-family:Arial; font-size:14px; width:100%;">
  <!-- Regulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Regulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Distribuce elektřiny, plat za distribuované množství elektřiny NT</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
  <tr>
    <td>Podpora výkupu elektřiny z POZE</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
  <tr>
    <td>Systémové služby ČEPS, a.s.</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Neregulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Neregulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Cena za dodávku NT</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Daň -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Daň:</td>
  </tr>
  <tr style="background-color:#f94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Daň z elektřiny</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
</table>
<p>Když všechny tyto hodnoty sečteme a vydělíme celkovou spotřebou OM v KWh získáme průměrnou jednotkovou cenu za <b>NT:</b> = XXXXX Kč</p>
<p>Výpočet jednotkové ceny za období je cena za jednu jednotku spotřebované elektrické energie (obvykle vyjádřená v korunách za kilowatthodinu, Kč/kWh) v rámci určitého období (např. měsíce nebo roku). Tato cena zahrnuje několik složek, které společně tvoří výslednou částku, kterou odběratel platí za spotřebovanou elektřinu. Tato cena zahrnuje náklady na:</p>
<li>Cena za jistič</li>
<li>Cena za OTE</li>
<li>Stálý měsíční plat</li>
<p>Celkové období za které je faktura vystavena:<b> XXXXX měsíců</b></p>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; font-family:Arial; font-size:14px; width:100%;">
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Detailní struktura složení ceny Období: XXXX (Ceny bez DPH)</td>
  </tr>

  <!-- Regulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Regulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem včetně DPH</td>
  </tr>
  <tr>
    <td>Jistič</td>
    <td></td>
    <td>měsíc</td>
    <td></td>
    <td>- Kč</td>
  </tr>
  <tr>
    <td>OTE (Poplatek za nesíťovou infrastrukturu)</td>
    <td></td>
    <td>měsíc</td>
    <td></td>
    <td>- Kč</td>
  </tr>

  <!-- Neregulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Neregulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem včetně DPH</td>
  </tr>
  <tr>
    <td>Stálý měsíční plat</td>
    <td></td>
    <td>měsíc</td>
    <td></td>
    <td>- Kč</td>
  </tr>
</table>
<p>Když všechny tyto hodnoty sečteme a vydělíme počtem měsíců, za které je dané vyúčtování vystavené získáme průměrnou jednotkovou cenu za vyúčtované období. Tedy: <strong> XXXXXX Kč </strong>. Případné haléřové vyrovnání je způsobené zaokrouhlováním.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Jednotková cena"],
                category: "Jednotková cena"
        },
        "Zamítnutí reklamace: Jednotková cena (Případně pokud chceme zákazníkovi vysvětlit co to jednotková cena je a jak se počítá - PLYN": {
                text: `<p>Dobrý den, pane XXX, / paní XXX,</p>
<p>Po pečlivém přezkoumání Vaší žádosti a zaslaných podkladů jsme dospěli k závěru, že průměrná jednotková cena za energie, která je uvedena ve vyúčtování, odpovídá podmínkám smlouvy a aktuálním cenám na trhu. Z tohoto důvodu nemůžeme Vaši reklamaci uznat. Pro lepší porozumění si dovolujeme uvést vysvětlení jednotkové ceny:</p>
<p>Jednotková cena za energie je stanovena jako celková částka za spotřebu energií (včetně pevných poplatků a daní) vydělená celkovým množstvím odebraných energií. Tato cena zahrnuje náklady na:</p>
<li>Ceny za dodávku</li>
<li>Distribuční poplatky.</li>
<li>Regulační poplatky a daně.</li>
<p>Váš konkrétní výpočet byl proveden v souladu s uvedenými pravidly a nebyly zjištěny žádné nesrovnalosti. Níže zasíláme výpočet jednotkové ceny a jak jsme k danému výsledku došli: </p>
<u>Celková spotřeba odběrného místa pro <b>Plyn:</b> XXX KWh = XXX MWh</u>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; font-family:Arial; font-size:14px; width:100%;">
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Detailní struktura složení ceny Období: XXXX (Ceny bez DPH)</td>
  </tr>

  <!-- Regulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Regulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Cena za činnost zúčtování OTE</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
  <tr>
    <td>Distribuce, Pevná cena za odebraný zemní plyn</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Neregulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Neregulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Cena za dodaný plyn</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Daň -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Daň:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem bez DPH</td>
  </tr>
  <tr>
    <td>Daň z plynu</td>
    <td></td>
    <td>MWh</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
</table>
<p>Když všechny tyto hodnoty sečteme a vydělíme celkovou spotřebou OM v KWh získáme průměrnou jednotkovou cenu za <b>PLYN:</b> = XXXXXx.</p>
<p>Výpočet jednotkové ceny za období je cena za jednu jednotku spotřebované plynu (obvykle vyjádřená v korunách za kilowatthodinu, Kč/kWh) v rámci určitého období (např. měsíce nebo roku). Tato cena zahrnuje několik složek, které společně tvoří výslednou částku, kterou odběratel platí za spotřebovanou elektřinu. Tato cena zahrnuje náklady na:</p>
<li>Cena stálý plat - Distribuce</li>
<li>Cena stálý plat - Dodavatel</li>
<p>Celkové období za které je faktura vystavena:<b> XXXXX měsíců</b></p>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse; font-family:Arial; font-size:14px; width:100%;">
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Detailní struktura složení ceny Období: XXXX (Ceny bez DPH)</td>
  </tr>

  <!-- Regulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Regulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem včetně DPH</td>
  </tr>
  <tr>
    <td>Distribuce, Stálý měsíční plat za kapacitu</td>
    <td></td>
    <td>měsíc</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>

  <!-- Neregulované platby -->
  <tr style="background-color:#ffffff; font-weight:bold;">
    <td colspan="5">Neregulované platby:</td>
  </tr>
  <tr style="background-color:#94c11f; font-weight:bold;">
    <td></td>
    <td>Počet jednotek</td>
    <td>Jednotka</td>
    <td>Za jednotku bez DPH</td>
    <td>Celkem včetně DPH</td>
  </tr>
  <tr>
    <td>Stálý měsíční plat</td>
    <td></td>
    <td>měsíc</td>
    <td></td>
    <td>0,00 Kč</td>
  </tr>
</table>
<p>Když všechny tyto hodnoty sečteme a vydělíme počtem měsíců, za které je dané vyúčtování vystavené získáme průměrnou jednotkovou cenu za vyúčtované období. Tedy: <strong> XXXXXX Kč </strong>. Případné haléřové vyrovnání je způsobené zaokrouhlováním.</p>
<p>Rádi bychom Vás také informovali, že jsme spustili nový zákaznický portál. Na něm můžete najít faktury, platební kalendář, zadat samoodečet nebo upravit výši zálohových plateb. Přihlásit se do něj můžete prostřednictvím následujícího odkazu: <a href="https://zakaznici.epet.cz/login" target="_blank">Zákaznický portál</a></p>`,
                files: [],
                tags: ["Jednotková cena"],
                category: "Jednotková cena"
        },
};
window.SABLONY = data;

