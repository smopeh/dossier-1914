/* Originele diagrammen en illustraties voor Dossier 1914. Geen historische afbeeldingen. */
(() => {
  const P = '#ede5d4', G = '#25493f', I = '#20342e', B = '#d8b879', R = '#b45d43';
  const frame = (label, inner, box = '0 0 780 410') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" role="img" aria-label="${label}" style="display:block;width:100%;height:auto;font-family:Arial,sans-serif"><title>${label}</title>${inner}</svg>`;
  const paper = `<rect width="780" height="410" rx="12" fill="${P}"/><path d="M0 34H780M0 378H780" stroke="${B}" stroke-opacity=".4"/><path d="M35 0V410M745 0V410" stroke="${B}" stroke-opacity=".2"/>`;
  const t = (x,y,s,size=18,color=I,weight='400',extra='') => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" ${extra}>${s}</text>`;
  const box = (x,y,w,h,color,content) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${color}"/>${content}</g>`;
  const chip = (x,y,n) => `<circle cx="${x}" cy="${y}" r="15" fill="${G}" stroke="${P}" stroke-width="2"/>${t(x,y+5,n,14,P,'700','text-anchor="middle"')}`;
  window.DOSSIER_VISUALS = {
    hero: frame('Originele illustratie van een onderzoeksbureau met dossiers, een schematische kaart, een telegram en een kompas.', `
      <defs><pattern id="desk-grid" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0V38" fill="none" stroke="#93a28d" stroke-opacity=".09"/></pattern><filter id="desk-shadow"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-opacity=".3"/></filter></defs>
      <rect width="780" height="530" rx="18" fill="${G}"/><rect width="780" height="530" fill="url(#desk-grid)"/>
      <g opacity=".13" stroke="${P}" fill="none"><circle cx="620" cy="120" r="160"/><circle cx="620" cy="120" r="110"/><path d="M460 120H780M620 0V280"/></g>
      <g transform="translate(65 66) rotate(-8 240 170)" filter="url(#desk-shadow)"><path d="M0 24Q0 12 12 12H38V0H164L181 24H482Q494 24 494 36V345Q494 357 482 357H12Q0 357 0 345Z" fill="#b79d69"/><rect x="15" y="42" width="464" height="300" rx="3" fill="${P}"/>
      <path d="M31 58H462V326H31Z" fill="#d9dcc6"/><g fill="none" stroke="#a7b39a" stroke-width="1"><path d="M31 109H462M31 160H462M31 211H462M31 262H462M99 58V326M166 58V326M233 58V326M300 58V326M367 58V326M434 58V326"/></g>
      <g fill="#b8c2a5" stroke="#82967c" stroke-width="1.3"><path d="M64 99L95 85 122 103 154 92 166 125 145 153 155 175 139 191 143 222 115 239 100 210 82 197 87 163 62 140Z"/><path d="M174 90L203 68 235 78 255 107 288 111 301 144 331 157 325 189 295 199 287 230 261 243 237 224 209 230 193 211 166 193 177 160 161 139Z"/><path d="M329 60L369 72 396 59 441 82 450 117 420 148 433 181 402 207 366 190 345 159 313 142 301 108Z"/><path d="M225 245L248 259 260 282 288 293 279 307 257 293 237 278 218 271Z"/></g>
      <g stroke="${R}" stroke-width="2.5" fill="none" stroke-dasharray="6 5"><path d="M129 160Q219 93 262 163T384 124M262 163Q315 206 286 239"/></g>
      <g fill="${R}"><circle cx="129" cy="160" r="6"/><circle cx="262" cy="163" r="6"/><circle cx="384" cy="124" r="6"/><circle cx="286" cy="239" r="6"/></g>
      ${t(49,84,'EUROPA / ONDERZOEKSKAART',10,G,'700','letter-spacing="2"')}${t(48,315,'Schematische illustratie · geen historische kaart',10,G)}
      </g>
      <g transform="translate(448 250) rotate(7 133 97)" filter="url(#desk-shadow)"><rect x="0" y="0" width="260" height="210" fill="#f4ecd9"/><path d="M16 17H244V193H16Z" stroke="#c4ae80" fill="none"/>${t(30,48,'TELEGRAM',22,I,'700','letter-spacing="4"')}<path d="M30 64H227" stroke="${R}" stroke-width="2"/>${t(30,94,'SARAJEVO',13,I,'700','letter-spacing="2"')}${t(30,120,'28 JUNI 1914',13,I)}<path d="M30 140H215M30 153H224M30 166H180" stroke="#b5ac98" stroke-width="2"/>${t(30,187,'RECONSTRUCTIE',8,R,'700','letter-spacing="2"')}</g>
      <g transform="translate(654 111)"><circle r="61" fill="#102b24" opacity=".2"/><circle r="54" fill="#d2b573"/><circle r="45" fill="#f0e7ce" stroke="#907d50" stroke-width="2"/><circle r="36" fill="none" stroke="#b5a477" stroke-dasharray="1 6"/><path d="M0-34L10 11 0 4-10 11Z" fill="${R}"/><path d="M0 34L10-11 0-4-10-11Z" fill="${G}"/><circle r="4" fill="#d2b573"/>${t(0,-38,'N',9,G,'700','text-anchor="middle"')}</g>
      <g transform="translate(93 425) rotate(-13)"><rect width="290" height="52" rx="4" fill="#142e27"/><rect x="12" y="12" width="250" height="28" fill="none" stroke="${B}" stroke-opacity=".6"/>${t(22,31,'VERTROUWELIJK · LEERDOSSIER',11,B,'700','letter-spacing="1.2"')}</g>
      <path d="M733 271L751 274 706 490 695 501 691 486Z" fill="#c6aa68"/><path d="M695 501L698 484 706 490Z" fill="#e9d9b2"/><path d="M695 501L698 494 701 497Z" fill="#192f28"/>
      `, '0 0 780 530'),
    alliances: {
      title: 'Wie stond naast wie?',
      caption: 'Schematisch landenoverzicht, geen kaart. De groepen veranderden tijdens de oorlog. Een bondgenootschap maakte een oorlogsbesluit niet automatisch.',
      svg: frame('Schematisch landenoverzicht 1914: Frankrijk, Rusland en Groot-Brittannië tegenover Duitsland en Oostenrijk-Hongarije. Italië is in 1914 neutraal; het Ottomaanse Rijk sluit later in 1914 aan bij de Centralen.', `${paper}
        ${t(45,27,'SCHEMATISCH LANDENOVERZICHT · 1914',12,G,'700','letter-spacing="1.6"')}
        ${box(48,55,325,190,G,`${t(69,86,'ENTENTE / GEALLIEERDEN',15,P,'700','letter-spacing="1"')}<path d="M69 100H351" stroke="${B}" stroke-opacity=".5"/>${t(69,132,'Frankrijk',22,P)}${t(69,173,'Rusland',22,P)}${t(69,214,'Groot-Brittannië',22,P)}`)}
        ${box(407,55,325,190,R,`${t(428,86,'CENTRALE MOGENDHEDEN',15,P,'700','letter-spacing="1"')}<path d="M428 100H710" stroke="${P}" stroke-opacity=".5"/>${t(428,143,'Duitsland',22,P)}${t(428,190,'Oostenrijk-Hongarije',22,P)}`)}
        ${box(48,266,325,92,'#d7d7bd',`${t(69,296,'ITALIË',15,I,'700','letter-spacing="1"')}${t(69,322,'1914: neutraal',18,I)}${t(69,345,'Vanaf 1915 bij de geallieerden',13,I)}`)}
        ${box(407,266,325,92,'#ddc1a3',`${t(428,296,'OTTOMAANSE RIJK',15,I,'700','letter-spacing="1"')}${t(428,322,'Later in 1914 in oorlog',18,I)}${t(428,345,'Aan de kant van de Centralen',13,I)}`)}
        ${t(390,395,'Regeringen kozen zelf voor mobilisatie, steun of oorlog.',13,G,'400','text-anchor="middle"')}`),
      items: [
        {label:'Entente',detail:'Frankrijk, Rusland en Groot-Brittannië werkten samen. Groot-Brittannië besloot op 4 augustus 1914 tot oorlog na de Duitse inval in het neutrale België. Samenwerking betekende niet dat elk oorlogsbesluit automatisch vaststond.'},
        {label:'Centralen',detail:'Duitsland en Oostenrijk-Hongarije vormden de kern van de Centrale mogendheden. Het Ottomaanse Rijk kwam later in 1914 aan hun kant in de oorlog; Bulgarije volgde in 1915.'},
        {label:'Italië kiest',detail:'Italië had vóór de oorlog een bondgenootschap met Duitsland en Oostenrijk-Hongarije, maar bleef in 1914 neutraal. In mei 1915 koos het de kant van de geallieerden.'},
        {label:'Nederland',detail:'Nederland bleef tijdens de Eerste Wereldoorlog neutraal. Toch kreeg het te maken met mobilisatie, schaarste, vluchtelingen en gevolgen van de handelsoorlog.'}
      ]
    },
    timeline: {
      title: 'Een crisis met beslismomenten',
      caption: 'De aanslag was de aanleiding. Daarna maakten regeringen keuzes die de crisis vergrootten. De oorlog was geen automatische kettingreactie.',
      svg: frame('Tijdlijn van de Julicrisis: 28 juni aanslag in Sarajevo, 23 juli ultimatum, 28 juli oorlogsverklaring aan Servië en 1 tot 4 augustus uitbreiding van de oorlog.', `${paper}
        ${t(45,27,'VAN AANSLAG TOT OORLOG',12,G,'700','letter-spacing="1.6"')}
        <path d="M95 202H685" stroke="${B}" stroke-width="5"/>
        <g fill="${G}" stroke="${P}" stroke-width="4"><circle cx="95" cy="202" r="13"/><circle cx="290" cy="202" r="13"/><circle cx="485" cy="202" r="13"/><circle cx="685" cy="202" r="13"/></g>
        ${t(95,104,'28 JUNI',18,G,'700','text-anchor="middle"')}${t(95,134,'Aanslag',17,I,'400','text-anchor="middle"')}${t(95,158,'in Sarajevo',17,I,'400','text-anchor="middle"')}<path d="M95 169V187" stroke="${G}"/>
        ${t(290,256,'23 JULI',18,G,'700','text-anchor="middle"')}${t(290,286,'Ultimatum',17,I,'400','text-anchor="middle"')}${t(290,310,'aan Servië',17,I,'400','text-anchor="middle"')}<path d="M290 217V231" stroke="${G}"/>
        ${t(485,104,'28 JULI',18,G,'700','text-anchor="middle"')}${t(485,134,'Oorlog tegen',17,I,'400','text-anchor="middle"')}${t(485,158,'Servië',17,I,'400','text-anchor="middle"')}<path d="M485 169V187" stroke="${G}"/>
        ${t(685,256,'1–4 AUG.',18,G,'700','text-anchor="middle"')}${t(685,286,'De oorlog',17,I,'400','text-anchor="middle"')}${t(685,310,'breidt zich uit',17,I,'400','text-anchor="middle"')}<path d="M685 217V231" stroke="${G}"/>
        ${t(390,371,'Steun geven · eisen stellen · mobiliseren · oorlog verklaren',15,R,'700','text-anchor="middle"')}`),
      items: [
        {label:'28 juni · aanleiding',detail:'Gavrilo Princip vermoordde de Oostenrijks-Hongaarse troonopvolger Franz Ferdinand en zijn vrouw Sophie in Sarajevo. Deze aanslag was de directe aanleiding voor de crisis, maar verklaart op zichzelf de grote oorlog niet.'},
        {label:'23 juli · eisen',detail:'Oostenrijk-Hongarije stelde Servië harde eisen in een ultimatum. Duitsland had Oostenrijk-Hongarije steun toegezegd. De Servische reactie leidde niet tot een compromis.'},
        {label:'28 juli · oorlogsbesluit',detail:'Oostenrijk-Hongarije verklaarde Servië de oorlog. Rusland steunde Servië en mobiliseerde. Mobiliseren is het gereedmaken van het leger; dat vergrootte de druk en de angst bij andere regeringen.'},
        {label:'1–4 augustus · uitbreiding',detail:'Duitsland verklaarde op 1 augustus Rusland en op 3 augustus Frankrijk de oorlog. Duitse troepen vielen op 4 augustus België binnen. Groot-Brittannië verklaarde die dag Duitsland de oorlog.'}
      ]
    },
    trench: {
      title: 'Waarom kwam het front vast te liggen?',
      caption: 'Doorsnede van één loopgraaf aan het westfront. Vereenvoudigd schema; afstanden en verhoudingen zijn niet op schaal.',
      svg: frame('Schematische doorsnede van een loopgraaf: soldaten schuilen onder het maaiveld. Boven hen liggen zandzakken; verderop liggen prikkeldraad en niemandsland. Achter de loopgraaf staat artillerie.', `${paper}
        ${t(45,27,'HET WESTFRONT · LOOPGRAAF IN DOORSNEDE',12,G,'700','letter-spacing="1.3"')}
        <rect x="35" y="70" width="710" height="130" fill="#d7ddd0"/><path d="M35 200H282V325H392V200H745V370H35Z" fill="#aa9672"/><path d="M35 200H282V325H392V200H745" fill="none" stroke="#5c6250" stroke-width="5"/>
        <g stroke="#6a5b43" stroke-width="4"><path d="M289 220V319M309 220V319M329 220V319M349 220V319M369 220V319M287 240H385M287 270H385M287 300H385"/></g>
        <g fill="#c8b48b" stroke="#8b805e"><rect x="253" y="182" width="50" height="17" rx="8"/><rect x="277" y="165" width="50" height="17" rx="8"/><rect x="302" y="182" width="50" height="17" rx="8"/><rect x="372" y="182" width="50" height="17" rx="8"/></g>
        <g stroke="#59634e" fill="none" stroke-width="2"><path d="M476 198V163M532 198V163M588 198V163M644 198V163M476 174L644 190M476 190L644 174M486 170l9 13m-1-13-9 13M549 174l9 13m-1-13-9 13M610 176l9 13m-1-13-9 13"/></g>
        <g fill="${G}"><circle cx="114" cy="184" r="13"/><circle cx="150" cy="184" r="13"/><path d="M105 173L150 173 160 163 106 155 102 164Z"/><path d="M131 154L169 134 175 145 140 165Z"/><rect x="329" y="255" width="31" height="59" rx="10"/><circle cx="344" cy="242" r="14"/></g>
        <path d="M342 215V193H370L380 199H414" fill="none" stroke="${G}" stroke-width="7"/>
        ${chip(160,119,'1')}${chip(344,287,'2')}${chip(418,168,'3')}${chip(566,150,'4')}
        ${t(76,103,'Artillerie',17,I,'700')}${t(269,356,'Loopgraaf',18,I,'700')}${t(477,103,'Niemandsland',18,I,'700')}${t(516,126,'Prikkeldraad',14,I)}
        ${t(390,397,'Sterke verdediging maakte aanvallen bijzonder moeilijk.',14,G,'400','text-anchor="middle"')}`),
      items: [
        {label:'1 · Artillerie',detail:'Zware kanonnen beschoten vijandelijke stellingen van grote afstand. Ze veroorzaakten veel slachtoffers en vernielden het landschap. Een beschieting garandeerde niet dat de verdediging was uitgeschakeld.'},
        {label:'2 · Loopgraaf',detail:'Een loopgraaf bood bescherming tegen beschietingen en geweervuur. Soldaten leefden er vaak met modder, kou, ratten, weinig slaap en voortdurende angst. Loopgraven bestonden uit hele stelsels van gangen en schuilplaatsen.'},
        {label:'3 · Mitrailleur',detail:'Een mitrailleur kon snel veel kogels afvuren. Samen met artillerie en prikkeldraad gaf dit verdedigers een groot voordeel. Een aanval over open terrein werd daardoor erg gevaarlijk.'},
        {label:'4 · Niemandsland',detail:'Niemandsland was de strook tussen vijandelijke loopgraven. Prikkeldraad vertraagde aanvallers. Het westfront bleef vaak vrijwel op dezelfde plaats, maar op andere fronten verliep de oorlog anders.'}
      ]
    },
    poster: {
      title: 'Onderzoek de boodschap',
      caption: 'Zelfgemaakt oefenmateriaal, geen echte historische bron. De fictieve poster helpt je oefenen met maker, doelgroep, boodschap en bedoeling.',
      svg: frame('Zelfgemaakte oefenposter met de tekst Werk mee, maak munitie, het front rekent op jou. Een fictieve overheid probeert burgers tot meer oorlogsproductie aan te zetten.', `${paper}
        <rect x="180" y="16" width="420" height="378" fill="#e5cc96" stroke="${G}" stroke-width="8"/><rect x="194" y="30" width="392" height="350" fill="none" stroke="${G}" stroke-width="1.5"/>
        ${t(390,65,'OEFENPOSTER · RECONSTRUCTIE',11,G,'700','text-anchor="middle" letter-spacing="1.7"')}
        ${t(390,113,'WERK MEE',37,G,'700','text-anchor="middle" letter-spacing="3"')}${t(390,151,'MAAK MUNITIE',29,R,'700','text-anchor="middle" letter-spacing="1.7"')}
        <g fill="${G}"><path d="M230 278V229L269 205V229L309 205V229L349 205V278Z"/><rect x="241" y="181" width="13" height="52"/><rect x="277" y="170" width="14" height="52"/><rect x="316" y="188" width="13" height="39"/><path d="M428 203L446 178 464 203V272H428Z"/><path d="M470 203L488 178 506 203V272H470Z"/><path d="M512 203L530 178 548 203V272H512Z"/></g>
        <g fill="#e5cc96"><rect x="247" y="248" width="12" height="15"/><rect x="273" y="248" width="12" height="15"/><rect x="299" y="248" width="12" height="15"/><rect x="325" y="248" width="12" height="15"/></g>
        <path d="M221 290H560" stroke="${G}" stroke-width="2"/>${t(390,321,'HET FRONT REKENT OP JOU',18,G,'700','text-anchor="middle" letter-spacing="1"')}${t(390,350,'Fictieve overheidsoproep aan burgers',12,G,'400','text-anchor="middle"')}${t(390,373,'Geen historisch citaat of origineel document',10,G,'400','text-anchor="middle"')}`),
      items: [
        {label:'Maker',detail:'Voor deze oefening is een overheid de fictieve afzender. Vraag bij een echte bron wie de maker is en vanuit welk belang die spreekt. De maker kan bewust bepaalde informatie benadrukken of weglaten.'},
        {label:'Doelgroep',detail:'De poster richt zich op burgers die in de oorlogsindustrie kunnen werken. De eenvoudige oproep en de herkenbare fabriek moeten veel mensen snel bereiken.'},
        {label:'Boodschap en bedoeling',detail:'De boodschap is: produceer munitie, want de soldaten rekenen op je. De bedoeling is burgers te overtuigen harder of meer voor de oorlog te werken. De poster gebruikt plichtsgevoel om hun gedrag te beïnvloeden.'},
        {label:'Wat weet je nog niet?',detail:'Uit alleen een poster kun je niet afleiden hoeveel burgers de boodschap geloofden of hoeveel munitie er echt werd gemaakt. Daarvoor heb je andere bronnen nodig.'}
      ]
    },
    ending: {
      title: 'Van keerpunten naar vrede',
      caption: 'Het beëindigen van gevechten en het sluiten van vrede waren verschillende stappen. Versailles was één van meerdere vredesverdragen.',
      svg: frame('Schema met vier opeenvolgende stappen: 1917 Amerikaanse deelname en Russische revoluties, maart 1918 Rusland sluit vrede, 11 november 1918 wapenstilstand aan het westfront en 28 juni 1919 Verdrag van Versailles met Duitsland.', `${paper}
        ${t(45,27,'HET EINDE WAS MEER DAN ÉÉN DATUM',12,G,'700','letter-spacing="1.3"')}
        <path d="M78 88V330" stroke="${B}" stroke-width="4"/>
        ${box(111,53,620,68,G,`${t(133,82,'1917',22,P,'700')}${t(345,82,'VS gaan deelnemen',19,P)}${t(345,106,'Revoluties in Rusland',15,P)}`)}
        ${box(111,136,620,68,'#d7d7bd',`${t(133,165,'MAART 1918',19,I,'700')}${t(345,165,'Rusland sluit vrede',19,I)}${t(345,189,'Vrede van Brest-Litovsk',15,I)}`)}
        ${box(111,219,620,68,R,`${t(133,248,'11 NOV. 1918',19,P,'700')}${t(345,248,'Wapenstilstand',20,P,'700')}${t(345,272,'Gevechten aan westfront stoppen',15,P)}`)}
        ${box(111,302,620,68,G,`${t(133,331,'28 JUNI 1919',19,P,'700')}${t(345,331,'Verdrag van Versailles',20,P,'700')}${t(345,355,'Vredesverdrag met Duitsland',15,P)}`)}
        ${chip(78,88,'1')}${chip(78,171,'2')}${chip(78,254,'3')}${chip(78,337,'4')}
        ${t(390,398,'Wapenstilstand ≠ vredesverdrag',16,G,'700','text-anchor="middle"')}`),
      items: [
        {label:'1917 · verandering',detail:'De Verenigde Staten verklaarden Duitsland in april 1917 de oorlog. Amerikaanse manschappen en middelen hielpen de geallieerden later aan overwicht. De Russische revoluties brachten een nieuwe regering aan de macht die uit de oorlog wilde stappen.'},
        {label:'1918 · uitputting',detail:'Rusland sloot in maart 1918 de Vrede van Brest-Litovsk met de Centralen. Aan het westfront volgden Duitse offensieven en daarna geallieerde tegenaanvallen. Verliezen, schaarste, uitputting en onrust verzwakten Duitsland en zijn bondgenoten.'},
        {label:'11 november · wapenstilstand',detail:'Op 11 november 1918 stopten de gevechten tussen Duitsland en de geallieerden aan het westfront. Een wapenstilstand is een afspraak om het vechten te staken. De vredesvoorwaarden moesten nog worden vastgesteld.'},
        {label:'1919 · vrede en spanningen',detail:'Het Verdrag van Versailles werd op 28 juni 1919 met Duitsland getekend. Duitsland verloor gebied, moest zijn leger beperken en kreeg herstelbetalingen opgelegd. Er ontstonden nieuwe spanningen, maar de Tweede Wereldoorlog was geen onvermijdelijk gevolg van alleen dit verdrag.'}
      ]
    }
  };
})();
