/* TARIFOMAT | Funkční logika, zachovaná matice dokumentů ze zdroje */
'use strict';
(function () {
  const $=id=>document.getElementById(id);
  const byRegion={CEZ:'ČEZ Distribuce', EGD:'EG.D / PRE'};
  const homeRates=['D01d','D02d','D25d','D26d','D27d','D57d','D61d'];
  const businessRates=['C01d','C02d','C03d','C25d','C26d','C27d','C46d','C56d'];
  const characteristics={
    domacnost:{'D01d':'Jednotarifní','D02d':'Jednotarifní','D25d':'Akumulace','D26d':'Akumulace','D45d':'Přímotop','D55d':'Přímotop','D56d':'Přímotop','D35d':'Hybridní','D57d':'Tepelné čerpadlo'},
    podnikatel:{'C01d':'Jednotarifní','C02d':'Jednotarifní','C03d':'Jednotarifní','C25d':'Akumulační','C26d':'Akumulační','C35d':'Hybridní','C62d':'Veřejné osvětlení','C45d':'Přímotop','C55d':'Přímotop','C56d':'Tepelné čerpadlo'}
  };
  const charRates={domacnost:['D01d','D02d','D25d','D26d','D45d','D55d','D56d','D35d','D57d'],podnikatel:['C01d','C02d','C03d','C25d','C26d','C35d','C62d','C45d','C55d','C56d']};
  const explain={Jednotarifní:'Základní jednotarifní charakter odběru – rozlišení dle distribuční sazby.',Akumulace:'Sazba spojená s akumulačním využitím elektrické energie.',Akumulační:'Sazba spojená s akumulačním využitím elektrické energie.',Přímotop:'Charakter sazby pro elektrické vytápění.',Hybridní:'Hybridní charakter sazby podle původního číselníku.', 'Tepelné čerpadlo':'Charakter sazby používané pro odběry spojené s tepelným čerpadlem.', 'Veřejné osvětlení':'Charakter sazby určený pro veřejné osvětlení.'};
  const breakerValues=['1x6','1x10','1x16','1x20','1x25','3x10','3x16','3x20','3x25','3x32','3x40','3x50','3x63','3x80','3x100','3x125','3x160','3x200','3x250'];
  
const documentLogic = {
        "CEZ": {
            "home": {
                "D01d": {
                    "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "D25d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                    "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
                },
                "D02d": {
                    "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "D25d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                    "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                    "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
                },
 		 "D25d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
            },
           	 "D26d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
            },
            "D27d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
            },
            "D57d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
            },
            "D61d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP"]
            }
              
            },
            "business": {
                "C01d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C02d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                   "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C03d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C25d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C26d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C27d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C46d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C56d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"]
                }
}
        },
        "EGD": {
            "home": {
                "D01d": {
                    "D01d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D02d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D25d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D26d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D27d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D57d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                    "D61d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"]
                },
                "D02d": {
                    "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "D02d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D25d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D26d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D27d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"],
                    "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                    "D61d": ["🧾Epet žádost";"🧾DE žádost","🧾RZ"]
                },
 		 "D25d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"]
            },
           	 "D26d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"]
            },
            "D27d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"]
            },
            "D57d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ", "🧾SOP", "🧾Protokol tepelného čerpadla", "🧾Výpočet tepelných ztrát"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"]
            },
            "D61d": {
                "D01d": ["🧾Epet žádost";"🧾DE žádost"],
                "D02d": ["🧾Epet žádost";"🧾DE žádost"],
                "D25d": ["🧾Epet žádost";"🧾DE žádost"],
                "D26d": ["🧾Epet žádost";"🧾DE žádost"],
                "D27d": ["🧾Epet žádost";"🧾DE žádost"],
                "D57d": ["🧾Epet žádost";"🧾DE žádost"],
                "D61d": ["🧾Epet žádost";"🧾DE žádost", "🧾RZ"]
            }
              
            },
            "business": {
                "C01d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C02d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C03d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C25d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C26d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C27d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C46d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾2X SOP(PRO STÁVAJÍCÍ OM + NOVÉ OM)","🧾RZ"]
                },
                "C56d": {
                    "C01d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C02d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C03d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C25d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C26d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C27d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C46d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"],
                    "C56d": ["🧾Epet žádost";"🧾DE žádost", "🧾SOP","🧾RZ"]
                }
}}
    
      // (Pozn.: Váš původní rozsáhlý objekt lze sem znovu vložit; zkráceno kvůli přehlednosti ukázky.)
    };

  function option(select,value){const opt=new Option(value,value);select.add(opt)}
  function setChoices(id,options,desired){const sel=$(id);sel.replaceChildren();options.forEach(x=>option(sel,x));sel.value=options.includes(desired)?desired:options[0]}
  function renderDocs(id,items,emptyMessage){const ul=$(id);ul.replaceChildren();if(!items.length){const li=document.createElement('li');li.className='empty';li.innerHTML='<span class="doc-icon">!</span>';const t=document.createElement('span');t.textContent=emptyMessage;li.appendChild(t);ul.appendChild(li);return;}items.forEach((item,i)=>{const li=document.createElement('li'),badge=document.createElement('span'),t=document.createElement('span');badge.className='doc-icon';badge.textContent=String(i+1).padStart(2,'0');t.textContent=item.replace(/^[📜🧾]\s*/u,'');li.append(badge,t);ul.appendChild(li)})}
  function renderCharacter(){const seg=$('segmentZIS').value,rate=$('sazbaZIS').value;const value=(characteristics[seg]||{})[rate]||'Neuvedeno';$('charTitle').textContent=value;$('charText').textContent=explain[value]||'Pro zvolenou sazbu není v dodaném číselníku popsán charakter odběru.';$('charTag').textContent='Sazba '+rate;$('charSegment').textContent=seg==='domacnost'?'Domácnost':'Podnikatel / firma'}
  function updateCharRates(){let seg=$('segmentZIS').value;setChoices('sazbaZIS',charRates[seg]);renderCharacter()}
  function updateRateChoices(keep){let list=$('segment').value==='home'?homeRates:businessRates;let prevOld=keep?$('oldRate').value:null,prevNew=keep?$('newRate').value:null;setChoices('oldRate',list,prevOld);setChoices('newRate',list,prevNew);renderRate()}
  function getRateDocs(){let r=$('region').value,seg=$('segment').value,from=$('oldRate').value,to=$('newRate').value;let data=(((documentLogic||{})[r]||{})[seg]||{});return (data[from]||{})[to]||[]}
  function renderRate(){const from=$('oldRate').value,to=$('newRate').value,region=$('region').value,segment=$('segment').value;const docs=getRateDocs();$('rateFrom').textContent=from;$('rateTo').textContent=to;$('rateRegion').textContent=byRegion[region];$('rateSegment').textContent=segment==='home'?'Domácnost':'Podnikatel / firma';$('rateDocsCount').textContent=docs.length;renderDocs('documentsList',docs,'Pro tuto kombinaci není v přiložené tabulce definován seznam dokumentů. Ověř interní metodiku nebo PDS.');$('copyRate').disabled=!docs.length;$('rateCopyStatus').textContent='';$('rateNote').textContent=from===to?'Vybraná původní i požadovaná sazba jsou shodné. U změny vyber dvě různé sazby; uvedené dokumenty pocházejí z původního číselníku.':docs.length?'Uvedený seznam je převzat z původní tabulky Tarifomatu. Před požadavkem na zákazníka ověř aktuální pravidla distributora.':'Kombinace není v podkladech popsána. Neodvozuj z toho, že dokumenty nejsou potřeba.';}
  function parseBreaker(v){const [ph,amps]=v.split('x').map(Number);return {ph,amps}}
  function formatBreaker(v){return v.replace('x','×')+' A'}
  function breakerDocs(){const old=$('oldSwitch').value,newVal=$('newSwitch').value,a=parseBreaker(old),b=parseBreaker(newVal);if(old===newVal)return {type:'Beze změny',docs:[''Epet žádost o změnu smlouvy','DE žádost o změnu smlouvy (beze změny jističe)'],note:'Hodnoty jsou shodné; zkontroluj, zda je změna skutečně požadována.',kind:'gray'};
    if(a.ph!==b.ph)return {type:'Změna počtu fází',docs:[],note:'Přechod mezi jednofázovým a třífázovým jističem není v původní logice podrobně řešen. Ověř typ požadavku, technické podmínky a dokumenty u PDS.',kind:'amber'};
    if(b.amps>a.amps){const docs=[''Epet žádost o změnu smlouvy','DE žádost o změnu smlouvy','SOP (Smlouva o připojení)','RZ (revizní zpráva)'];if(b.amps>99)docs.push('MTP protokoly');return {type:'Navýšení jističe',docs,note:b.amps>99?'Podle původní metodiky se při navýšení nad 99 A požadují i MTP protokoly. Ověř jejich aktuální náležitosti.':'Navýšení: podle původních podkladů žádost, SOP a revizní zpráva.',kind:'blue'}};
    return {type:'Snížení jističe',docs:['Epet žádost o změnu smlouvy','DE žádost o změnu smlouvy','RZ (revizní zpráva elektroměrového rozváděče)'],note:'Snížení: podle původních podkladů žádost a revizní zpráva. Ověř požadavky příslušného PDS.',kind:'blue'};
  }
  function renderBreaker(){let from=$('oldSwitch').value,to=$('newSwitch').value,data=breakerDocs();$('breakerFrom').textContent=formatBreaker(from);$('breakerTo').textContent=formatBreaker(to);$('breakerTerritory').textContent=$('territory').value==='cez'?'ČEZ Distribuce':'EG.D / PRE';$('breakerChange').textContent=data.type;$('breakerChange').className='softpill '+(data.kind==='amber'?'amber':data.kind==='gray'?'gray':'blue');$('breakerDocsCount').textContent=data.docs.length;renderDocs('breakerList',data.docs,'Vyžaduje individuální prověření dokumentů při změně počtu fází.');$('breakerNote').textContent=data.note;$('breakerNote').className='summary '+(data.kind==='amber'?'amber-note':'blue-note');$('copyBreaker').disabled=!data.docs.length;$('breakerCopyStatus').textContent='';}
  async function copyText(text){try{await navigator.clipboard.writeText(text);return true;}catch(e){}const input=document.createElement('textarea');input.value=text;input.style.cssText='position:fixed;top:0;left:0;opacity:0;';document.body.append(input);input.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}input.remove();return ok;}
  async function copyDocs(kind){const docs=kind==='rate'?getRateDocs():breakerDocs().docs;const status=$(kind==='rate'?'rateCopyStatus':'breakerCopyStatus');if(!docs.length)return;const heading=kind==='rate'?`ZMĚNA DISTRIBUČNÍ SAZBY – ${$('oldRate').value} → ${$('newRate').value} | ${byRegion[$('region').value]}`:`ZMĚNA HLAVNÍHO JISTIČE – ${formatBreaker($('oldSwitch').value)} → ${formatBreaker($('newSwitch').value)}`;const txt=[heading,'Podklady dle původní interní metodiky:',...docs.map((d,i)=>(i+1)+'. '+d.replace(/^[📜🧾]\s*/u,'')),'Poznámka: Ověřit aktuální pravidla PDS.'].join('\n');status.textContent=(await copyText(txt))?'Seznam zkopírován.':'Označení textu nebylo možné zkopírovat.';}
  function reset(){ $('segmentZIS').value='domacnost';updateCharRates();$('region').value='CEZ';$('segment').value='home';updateRateChoices(false);$('territory').value='cez';$('oldSwitch').value='3x25';$('newSwitch').value='3x32';renderBreaker();}
  function init(){setChoices('oldSwitch',breakerValues,'3x25');setChoices('newSwitch',breakerValues,'3x32');$('segmentZIS').addEventListener('change',updateCharRates);$('sazbaZIS').addEventListener('change',renderCharacter);['region','oldRate','newRate'].forEach(id=>$(id).addEventListener('change',renderRate));$('segment').addEventListener('change',()=>updateRateChoices(false));['territory','oldSwitch','newSwitch'].forEach(id=>$(id).addEventListener('change',renderBreaker));$('copyRate').addEventListener('click',()=>copyDocs('rate'));$('copyBreaker').addEventListener('click',()=>copyDocs('breaker'));$('resetAll').addEventListener('click',reset);$('printPage').addEventListener('click',()=>window.print());reset();$('oldRate').value='D02d';$('newRate').value='D57d';renderRate()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
