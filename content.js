/* Alle lesinhoud en vragen staan hier. Pas dit bestand aan voor eigen toetsstof.
   Kaarten, telegrammen en de poster zijn door ons gemaakt oefenmateriaal.
   Geen van de teksten is een letterlijk historisch citaat. */
(function () {
  const mc = (id,topic,prompt,choices,correct,feedback,hint) => ({id,type:'mc',topic,prompt,choices,correct,feedback,hint});
  const open = (id,topic,prompt,points,model,hint) => ({id,type:'open',topic,prompt,points,model,hint});
  const match = (id,topic,prompt,pairs,explanation,hint) => ({id,type:'match',topic,prompt,pairs:pairs.map(([left,right])=>({left,right})),explanation,hint});
  const order = (id,topic,prompt,items,explanation,hint) => ({id,type:'order',topic,prompt,items:items.map(([id,label])=>({id,label})),explanation,hint});
  window.DOSSIER_CONTENT = {
    version:'1',
    assumption:'Algemene voorbereiding voor 2 havo. Er zijn nog geen schoolhoofdstukken of leerdoelen aangeleverd; volledige dekking van jouw toets is daarom niet vastgesteld.',
    sources:[
      {id:'iwm-outbreak',title:'Imperial War Museums — The outbreak of the First World War',url:'https://www.iwm.org.uk/history/first-world-war/outbreak'},
      {id:'iwm-alliances',title:'Imperial War Museums — Pre-First World War Alliances',url:'https://www.iwm.org.uk/history/first-world-war/outbreak/alliances'},
      {id:'wwi-road',title:'National WWI Museum and Memorial — Road to War',url:'https://www.theworldwar.org/exhibitions/road-war'},
      {id:'wwi-trenches',title:'National WWI Museum and Memorial — Trench Warfare',url:'https://www.theworldwar.org/learn/about-wwi/trench-warfare'},
      {id:'nam-overview',title:'National Army Museum — First World War',url:'https://www.nam.ac.uk/explore/first-world-war'},
      {id:'iwm-home',title:'Imperial War Museums — The Home Front',url:'https://www.iwm.org.uk/history/first-world-war/home-front'},
      {id:'iwm-food',title:'Imperial War Museums — Rationing and Food Shortages',url:'https://www.iwm.org.uk/history/first-world-war/home-front/rationing-and-food-shortages'},
      {id:'archives-women',title:'The National Archives — Women and the First World War',url:'https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/early-20th-century/women-first-world-war/'},
      {id:'nimh-neutral',title:'Nederlands Instituut voor Militaire Historie — 1914–1940: Nederland neutraal',url:'https://www.nimh.nl/militaire-geschiedenis-van-nederland/historische-overzichten/tijdlijn/1914-1940-nederland-neutraal'},
      {id:'online-propaganda',title:'1914–1918 Online — Propaganda at Home (Germany), Vanessa Ther',url:'https://encyclopedia.1914-1918-online.net/article/propaganda-at-home-germany/'},
      {id:'online-brest',title:'1914–1918 Online — Brest-Litovsk, Treaty of, Susanne Schattenberg',url:'https://encyclopedia.1914-1918-online.net/pdf/1914-1918-Online-brest-litovsk_treaty_of-2014-11-30.pdf'},
      {id:'habsburg-italy',title:'Schloss Schönbrunn / Die Welt der Habsburger — Italy enters the war',url:'https://ww1.habsburger.net/en/chapters/italy-enters-war'},
      {id:'iwm-armistice',title:'Imperial War Museums — The Armistice',url:'https://www.iwm.org.uk/history/first-world-war/armistice'},
      {id:'nam-victory',title:'National Army Museum — 1918: Year of victory',url:'https://www.nam.ac.uk/explore/1918-victory'},
      {id:'awm-versailles',title:'Australian War Memorial — Treaty of Versailles',url:'https://www.awm.gov.au/commemoration/Treaty-of-Versailles100'}
    ],
    glossary:[
      {term:'Nationalisme',definition:'Een sterk gevoel bij een volk of land te horen. Dat kan leiden tot trots, rivaliteit of de wens om een eigen staat te hebben.'},
      {term:'Imperialisme',definition:'Een staat wil zijn macht uitbreiden over andere gebieden, bijvoorbeeld door koloniën te veroveren.'},
      {term:'Militarisme',definition:'Grote waarde hechten aan het leger en aan militaire oplossingen. Een wapenwedloop is de wedstrijd om steeds sterker bewapend te zijn.'},
      {term:'Bondgenootschap',definition:'Een afspraak tussen landen om elkaar te steunen. De precieze verplichtingen verschillen; leiders blijven besluiten nemen.'},
      {term:'Mobilisatie',definition:'Het leger klaarmaken voor mogelijke oorlog: reservisten oproepen, soldaten verzamelen en voorraden verplaatsen.'},
      {term:'Ultimatum',definition:'Een laatste eis met een termijn, waarbij de afzender dreigt met gevolgen als de ander niet instemt.'},
      {term:'Geallieerden',definition:'De oorlogspartij van onder andere Frankrijk, Rusland en het Britse Rijk. Italië sloot in 1915 aan, de Verenigde Staten in 1917; Rusland stapte uit de oorlog.'},
      {term:'Centralen',definition:'De oorlogspartij van Duitsland en Oostenrijk-Hongarije, later aangevuld met het Ottomaanse Rijk (1914) en Bulgarije (1915).'},
      {term:'Loopgraaf',definition:'Een uitgegraven verdedigingsstelling waarin soldaten beschutting zochten. Loopgraven waren verbonden met verbindingsloopgraven.'},
      {term:'Niemandsland',definition:'Het gevaarlijke gebied tussen de voorste loopgraven van de tegenstanders.'},
      {term:'Uitputtingsoorlog',definition:'Een oorlog waarin partijen proberen de soldaten, voorraden en het uithoudingsvermogen van de ander op te maken.'},
      {term:'Totale oorlog',definition:'Een oorlog waarvoor een land ook economie en burgers op grote schaal inzet. De gevolgen blijven niet beperkt tot het front.'},
      {term:'Propaganda',definition:'Informatie die bedoeld is om meningen en gedrag in een gewenste richting te sturen. Daarbij kan een maker selecteren, overdrijven of gevoelens aanspreken.'},
      {term:'Censuur',definition:'Een overheid of leger controleert en beperkt wat gepubliceerd of verstuurd mag worden.'},
      {term:'Rantsoenering',definition:'Schaarse producten verdelen met vaste hoeveelheden per persoon, bijvoorbeeld via voedselbonnen.'},
      {term:'Wapenstilstand',definition:'Een afspraak om te stoppen met vechten. Dat is nog geen vredesverdrag met alle afspraken over de vrede.'},
      {term:'Herstelbetalingen',definition:'Geld of goederen die een verslagen land moet betalen voor oorlogsschade.'},
      {term:'Volkenbond',definition:'Internationale organisatie die na de oorlog werd opgericht om samenwerking te bevorderen en nieuwe oorlogen te voorkomen.'}
    ],
    dossiers:[
      {
        id:'spanning',number:1,title:'Europa onder spanning',subtitle:'Waarom was de vrede zo kwetsbaar?',minutes:5,visual:'alliances',
        objective:'Je kunt nationalisme, imperialisme, militarisme en bondgenootschappen uitleggen en herkennen.',
        opening:'Europa, begin 1914. Landen handelen met elkaar, maar wantrouwen elkaar ook. Welke spanningen zie jij onder de oppervlakte?',
        sections:[
          {title:'Vier spanningen',text:'Nationalisme maakte mensen trots op hun land; sommige volken wilden een eigen staat. Imperialisme zorgde voor rivaliteit over koloniën en wereldmacht. Bij militarisme kreeg het leger veel aanzien. Landen bouwden grotere legers en vloten: een wapenwedloop. Deze spanningen bestonden al vóór de aanslag in Sarajevo.'},
          {title:'Steun én wantrouwen',text:'Duitsland en Oostenrijk-Hongarije werkten samen. Frankrijk en Rusland waren bondgenoten; het Verenigd Koninkrijk maakte afspraken met beide landen. Samen heette dit de Triple Entente. Die Britse afspraken waren geen automatische verplichting om mee te vechten. Leiders wogen veiligheid, macht en risico’s af.'},
          {title:'Een landenoverzicht is een momentopname',text:'Italië had vóór 1914 een bondgenootschap met Duitsland en Oostenrijk-Hongarije, maar bleef in 1914 neutraal. In mei 1915 koos het de geallieerde kant. Het Ottomaanse Rijk ging eind 1914 aan de kant van de Centralen vechten; Bulgarije volgde in 1915. Een bondgenootschapskaart is dus niet voor elk oorlogsjaar hetzelfde.'}
        ],
        takeaways:['Achterliggende oorzaken bestaan vaak al langer; ze verhogen spanning.','Een bondgenootschap beïnvloedt keuzes, maar maakt oorlog niet onvermijdelijk.','Let op het jaar: Italië was in 1914 neutraal en vocht vanaf 1915 bij de geallieerden.'],
        sourceIds:['iwm-outbreak','iwm-alliances','wwi-road','habsburg-italy','nam-overview'],
        exercises:[
          match('d1-match','spanning','Koppel elk begrip aan het passende voorbeeld.',[
            ['Nationalisme','Een volk in een veelvolkerenrijk wil een eigen staat.'],
            ['Imperialisme','Landen wedijveren om gebieden en grondstoffen overzee.'],
            ['Militarisme','Leiders vertrouwen sterk op het leger en bouwen meer wapens.'],
            ['Bondgenootschap','Landen spreken af elkaar in bepaalde situaties te steunen.']
          ],'Nationalisme gaat over volk en land, imperialisme over machtsuitbreiding, militarisme over de rol van het leger. Bondgenootschappen zijn afspraken tussen landen. Eén situatie kan meerdere oorzaken tegelijk laten zien.','Zoek het kernwoord: volk, overzee, leger of steun.'),
          mc('d1-mc','spanning','Welke uitspraak over Italië klopt?',[
            'Italië vocht vanaf augustus 1914 aan Duitse kant.','Italië bleef in 1914 neutraal en sloot zich in 1915 bij de geallieerden aan.','Italië vocht de hele oorlog aan geen enkele kant.'
          ],1,[
            'Het vooroorlogse bondgenootschap bepaalde de keuze niet automatisch. Italië bleef in 1914 neutraal.','Juist. De keuze van Italië laat zien dat afspraken en deelname aan een oorlog niet hetzelfde zijn.','Italië bleef eerst neutraal, maar verklaarde Oostenrijk-Hongarije in mei 1915 de oorlog.'
          ],'Vergelijk het bondgenootschap vóór de oorlog met de daadwerkelijke oorlogsdeelname.'),
          open('d1-open','spanning','Leg in twee zinnen uit hoe een wapenwedloop het wantrouwen kon vergroten.',[
            'Een land breidt zijn leger of vloot uit.','Andere landen voelen zich bedreigd en bewapenen zich ook.','Zo groeit de spanning; oorlog blijft een politieke keuze.'
          ],'Als een land meer oorlogsschepen bouwt, kunnen andere landen dat als een bedreiging zien. Zij bouwen dan ook meer wapens, waardoor het wantrouwen verder groeit; leiders kunnen nog steeds voor overleg kiezen.','Beschrijf eerst een actie van land A, dan de reactie van land B.')
        ]
      },
      {
        id:'escalatie',number:2,title:'Van aanslag tot oorlog',subtitle:'Hoe werd een crisis een wereldoorlog?',minutes:6,visual:'timeline',
        objective:'Je onderscheidt oorzaken, aanleiding en politieke besluiten die de oorlog uitbreidden.',
        opening:'Op 28 juni 1914 worden Franz Ferdinand en zijn vrouw Sophie gedood in Sarajevo. Het volgende besluit ligt nog niet vast. Reconstrueer wat leiders daarna deden.',
        sections:[
          {title:'De aanleiding',text:'Gavrilo Princip, een Bosnisch-Servische nationalist, vermoordde de troonopvolger van Oostenrijk-Hongarije en zijn vrouw. Sarajevo lag toen in Oostenrijk-Hongarije. De aanslag was de aanleiding: de gebeurtenis die de crisis op gang bracht. Het nationalisme en de rivaliteit tussen staten waren achterliggende oorzaken.'},
          {title:'Besluiten in de Julicrisis',text:'Met Duitse steun stelde Oostenrijk-Hongarije harde eisen aan Servië. Het vond de Servische reactie onvoldoende en verklaarde op 28 juli de oorlog. Rusland besloot zijn leger te mobiliseren ter ondersteuning van Servië en zijn eigen positie. Duitsland zag die mobilisatie als bedreiging en verklaarde Rusland op 1 augustus de oorlog; op 3 augustus volgde Frankrijk.'},
          {title:'België en de Britse keuze',text:'Duitsland wilde Frankrijk snel verslaan en viel op 4 augustus het neutrale België binnen. Het Verenigd Koninkrijk verklaarde diezelfde dag Duitsland de oorlog, onder meer vanwege de schending van de Belgische neutraliteit en zorgen over de machtsbalans. Diplomatieke keuzes, militaire plannen en wantrouwen maakten de oorlog groter. Bondgenootschappen alleen verklaren dat niet.'}
        ],
        takeaways:['Oorzaken: langdurige spanningen. Aanleiding: de aanslag. Escalatie: de opeenvolgende besluiten daarna.','Mobilisatie is het leger voorbereiden; het is niet hetzelfde als een oorlogsverklaring.','Leiders namen besluiten: de oorlog was geen automatische rij vallende dominostenen.'],
        sourceIds:['iwm-outbreak','iwm-alliances'],
        exercises:[
          order('d2-order','escalatie','Zet deze gebeurtenissen in de juiste volgorde.',[
            ['aanslag','28 juni: aanslag in Sarajevo'],['servie','28 juli: Oostenrijk-Hongarije verklaart Servië de oorlog'],['rusland','1 augustus: Duitsland verklaart Rusland de oorlog'],['belgie','4 augustus: Duitse inval in België; Britse oorlogsverklaring']
          ],'Tussen de aanslag en de oorlog zat een maand van eisen, overleg en besluiten. De uitbreiding begin augustus volgde op politieke keuzes en militaire voorbereidingen.','Begin met de aanleiding. Kijk daarna naar wie als eerste aan wie de oorlog verklaarde.'),
          mc('d2-mc','escalatie','Wat is het beste voorbeeld van een besluit dat de crisis uitbreidde?',[
            'Het nationalisme dat al tientallen jaren groeide.','Het bestaan van koloniën vóór 1914.','De Duitse keuze om het neutrale België binnen te vallen.'
          ],2,[
            'Nationalisme is een achterliggende oorzaak. De vraag zoekt een concrete keuze tijdens de crisis.','Koloniale rivaliteit is een langdurige spanning. De inval in België is een direct besluit in augustus 1914.','Juist. Door de inval schond Duitsland de Belgische neutraliteit; dat speelde een belangrijke rol in de Britse oorlogsverklaring.'
          ],'Zoek een concrete handeling in de zomer van 1914, geen ontwikkeling van jaren.'),
          open('d2-open','escalatie','Waarom is “de aanslag veroorzaakte vanzelf een wereldoorlog” te eenvoudig? Noem twee redenen.',[
            'Er waren al spanningen, zoals nationalisme, bewapening en rivaliteit.','Leiders namen na de aanslag afzonderlijke besluiten over eisen, mobilisatie en oorlog.','Bondgenootschappen beïnvloedden keuzes, maar maakten oorlog niet automatisch.'
          ],'De aanslag was de aanleiding, terwijl al langer spanningen bestonden. Pas door besluiten zoals het ultimatum, oorlogsverklaringen en de inval in België werd het conflict groter; een wereldoorlog was niet automatisch het gevolg van de aanslag.','Gebruik de woorden achterliggende oorzaak, aanleiding en besluit.')
        ]
      },
      {
        id:'front',number:3,title:'Aan het front',subtitle:'Waarom liep de aanval zo vaak vast?',minutes:5,visual:'trench',
        objective:'Je verklaart de loopgravenoorlog en de gevolgen voor soldaten.',
        opening:'Twee legers liggen tegenover elkaar. Daartussen: prikkeldraad, kraters en vijandelijk vuur. Waarom is een paar honderd meter terrein zo moeilijk te veroveren?',
        sections:[
          {title:'Van beweging naar stellingen',text:'Duitsland versloeg Frankrijk in 1914 niet snel. Aan het westfront, vooral in België en Noord-Frankrijk, groeven legers zich in. Machinegeweren, artillerie en prikkeldraad maakten verdedigen sterk en aanvallen gevaarlijk. Een aanval kon veel slachtoffers kosten en weinig terreinwinst opleveren: een uitputtingsoorlog.'},
          {title:'Onderzoek de loopgraaf',text:'De voorste loopgraaf gaf beschutting, maar geen volledige veiligheid. Verbindingsloopgraven dienden om mensen en voorraden te verplaatsen. Niemandsland lag tussen de vijandelijke stellingen. In de loopgraven hadden soldaten last van modder, kou, luizen, ratten en voortdurende angst. Ze wisselden frontdienst af met taken en rust achter het front.'},
          {title:'Meer dan één front',text:'De oorlog werd ook in Oost-Europa, Afrika, het Midden-Oosten, op zee en in de lucht uitgevochten. Niet elk front was zo vastgelopen als het westfront. Nieuwe wapens, zoals gifgas en tanks, veranderden de strijd, maar brachten niet meteen de beslissing. Soldaten en arbeiders uit koloniën maakten dit ook een wereldoorlog.'}
        ],
        takeaways:['Sterke verdediging en gevaarlijk niemandsland maakten aanvallen moeilijk.','Een loopgraaf bood bescherming, maar soldaten bleven kwetsbaar voor beschietingen en ziekte.','Het westfront is belangrijk, maar vertelt niet het hele verhaal van de wereldoorlog.'],
        sourceIds:['wwi-trenches','nam-overview'],
        exercises:[
          match('d3-match','front','Koppel elk onderdeel van het front aan de functie of het gevolg.',[
            ['Voorste loopgraaf','Verdedigingsstelling met enige beschutting.'],['Verbindingsloopgraaf','Route om soldaten en voorraden te verplaatsen.'],['Niemandsland','Gevaarlijke strook tussen de vijandelijke stellingen.'],['Prikkeldraad','Vertraagt aanvallers, waardoor ze langer blootstaan aan vuur.']
          ],'Het stelsel hielp verdedigers zich te beschermen en te bevoorraden. Aanvallers moesten juist over de onbeschutte strook met obstakels heen.','Denk steeds: beschermt dit, vervoert dit of houdt dit de vijand tegen?'),
          mc('d3-mc','front','Waarom kostten aanvallen aan het westfront vaak zoveel slachtoffers?',[
            'Aanvallers moesten door open terrein en prikkeldraad onder machinegeweer- en artillerievuur.','Loopgraven waren vooral bedoeld om de vijand sneller te laten aanvallen.','Beide partijen gebruikten alleen dezelfde wapens als in de middeleeuwen.'
          ],0,[
            'Juist. De combinatie van obstakels en sterke vuurkracht gaf verdedigers een groot voordeel.','Loopgraven beschermden verdedigers. Daardoor werd aanvallen juist moeilijker.','Moderne massaproductie leverde veel machinegeweren en granaten. Juist die vuurkracht maakte de strijd zo dodelijk.'
          ],'Kijk naar het verschil tussen de beschutte verdediger en de aanvaller in niemandsland.'),
          open('d3-open','front','Leg uit waarom een loopgraaf tegelijk bescherming en gevaar betekende.',[
            'De uitgegraven stelling gaf beschutting tegen vijandelijk vuur.','Artillerie kon ook loopgraven treffen.','Modder, kou, ongedierte en ziekte maakten het leven gevaarlijk en zwaar.'
          ],'In een loopgraaf zat een soldaat minder zichtbaar en dus beter beschermd dan op open terrein. Toch konden granaten de stelling raken en zorgden de slechte omstandigheden voor ziekte, uitputting en angst.','Noem één voordeel van onder de grond zitten en één gevaar dat daardoor niet verdween.')
        ]
      },
      {
        id:'thuis',number:4,title:'De oorlog thuis',subtitle:'Hoe werd de hele samenleving betrokken?',minutes:5,visual:'poster',
        objective:'Je legt totale oorlog uit en analyseert een bron met maker, boodschap, doelgroep en bedoeling.',
        opening:'Een poster roept burgers op om munitie te maken. Wie wil dat jij iets doet, en waarom? Onderzoek de boodschap voordat je haar overneemt.',
        sections:[
          {title:'Ook burgers werden ingezet',text:'Een totale oorlog gebruikt de economie en de bevolking op grote schaal. Fabrieken maakten wapens en munitie. In verschillende landen namen vrouwen werk over van mannen aan het front, ook in industrie en vervoer. Veel vrouwen werkten al vóór 1914; de oorlog veranderde vooral de soorten werk en aantallen. Na de oorlog bleven niet alle veranderingen bestaan.'},
          {title:'Schaarste en controle',text:'Legers vroegen veel voedsel en grondstoffen. Minder landarbeiders, verstoord vervoer, blokkades en aanvallen op schepen konden tekorten veroorzaken. Met rantsoenering verdeelden overheden producten. Censuur beperkte informatie. Nederland bleef neutraal, maar merkte de oorlog door mobilisatie, vluchtelingen en schaarste. Neutraal betekende dus niet ongeraakt.'},
          {title:'Lees een boodschap kritisch',text:'Propaganda probeerde steun voor de oorlog te vergroten, bijvoorbeeld voor dienstneming, productie of geldinzameling. Vraag: wie is de maker, wat is de boodschap, voor wie is zij bedoeld en welk gedrag wil de maker bereiken? De poster in dit dossier is zelfgemaakt oefenmateriaal. Hij laat zien hoe een oproep kan werken; het is geen echte poster uit 1914–1918.'}
        ],
        takeaways:['Bij totale oorlog zijn front, productie en dagelijks leven met elkaar verbonden.','Propaganda wil beïnvloeden; censuur beperkt wat naar buiten mag.','Een bron kan iets vertellen over wat de maker wilde bereiken, zonder te bewijzen dat iedereen het ermee eens was.'],
        sourceIds:['iwm-home','iwm-food','archives-women','online-propaganda','nimh-neutral'],
        exercises:[
          match('d4-match','thuis','Analyseer de oefenposter “WERK MEE — MAAK MUNITIE — Het front rekent op jou”.',[
            ['Maker','Een fictieve overheidsdienst in een oorlogvoerend land.'],['Boodschap','Munitie maken is helpen aan het front.'],['Doelgroep','Burgers die in de oorlogsindustrie kunnen werken.'],['Bedoeling','Meer mensen laten werken in de munitieproductie.']
          ],'De poster koppelt werk aan plichtsgevoel. Dat is beïnvloeding. Je kunt er niet uit afleiden hoeveel mensen de oproep volgden of hoe zij zich werkelijk voelden. Deze poster is oefenmateriaal, geen historische bron.','Boodschap = wat wordt gezegd; bedoeling = wat wil de maker dat mensen doen?'),
          mc('d4-mc','thuis','Een regering laat slechte berichten over het front niet in de krant verschijnen. Welk begrip past het best?',[
            'Mobilisatie.','Censuur.','Wapenstilstand.'
          ],1,[
            'Mobilisatie maakt een leger klaar voor oorlog. Het beperken van publicatie is censuur.','Juist. Censuur beperkt welke informatie mensen kunnen lezen. Dat kan een gunstig beeld van de oorlog in stand houden.','Een wapenstilstand is een afspraak om het vechten te stoppen; het gaat hier om informatiecontrole.'
          ],'Welk begrip gaat over het controleren en tegenhouden van informatie?'),
          open('d4-open','thuis','Leg met twee voorbeelden uit waarom de Eerste Wereldoorlog ook burgers raakte.',[
            'Burgers werkten voor de oorlog, bijvoorbeeld in munitiefabrieken of op het land.','Schaarste en rantsoenering veranderden het dagelijks leven.','Propaganda, censuur, vluchtelingen of aanvallen hadden invloed op de samenleving.'
          ],'Burgers maakten bijvoorbeeld munitie die soldaten nodig hadden. Door tekorten en rantsoenering konden gezinnen bovendien niet meer vrij kopen wat zij wilden; de oorlog beïnvloedde dus ook werk en eten.','Kies een voorbeeld over werk en een voorbeeld over het dagelijks leven.')
        ]
      },
      {
        id:'gevolgen',number:5,title:'Het einde en de gevolgen',subtitle:'Stilte aan het front, vrede op papier?',minutes:6,visual:'ending',
        objective:'Je verklaart belangrijke keerpunten en onderscheidt wapenstilstand, vrede en gevolgen.',
        opening:'11 november 1918, 11 uur: het vechten aan het westfront stopt. Waarom moet er daarna nog onderhandeld worden?',
        sections:[
          {title:'De krachtsverhouding verandert',text:'In 1917 traden de Verenigde Staten toe tot de oorlog, onder meer na de hervatte onbeperkte Duitse duikbotenoorlog. Hun troepen en voorraden versterkten de geallieerden, vooral in 1918. Na revoluties in Rusland sloten de bolsjewieken op 3 maart 1918 de Vrede van Brest-Litovsk met de Centralen. Zo verdween Rusland als tegenstander, maar Duitsland won de oorlog daarmee niet.'},
          {title:'Uitputting en nederlaag',text:'Duitse aanvallen in het voorjaar van 1918 brachten terreinwinst, maar geen beslissende overwinning. Daarna drongen geallieerde legers de Duitsers terug. Duitsland en zijn bondgenoten kampten met militaire nederlagen, uitputting, voedseltekorten en onrust. De Duitse wapenstilstand ging op 11 november 1918 om 11 uur in. Elders bleef geweld bestaan; niet overal was meteen vrede.'},
          {title:'De gevolgen na 1918',text:'Op 28 juni 1919 ondertekenden Duitsland en de geallieerde mogendheden het Verdrag van Versailles. Duitsland verloor gebied en koloniën, moest zijn leger beperken en herstelbetalingen doen. Er kwamen ook andere vredesverdragen. De Duitse, Oostenrijks-Hongaarse, Russische en Ottomaanse rijken vielen uiteen of veranderden ingrijpend. Nieuwe staten ontstonden, miljoenen mensen waren gestorven of gewond. De Volkenbond moest toekomstige oorlog helpen voorkomen. Versailles droeg bij aan latere spanningen, maar maakte de Tweede Wereldoorlog niet onvermijdelijk: latere crises en keuzes speelden ook een rol.'}
        ],
        takeaways:['1917: de VS doen mee. Rusland trekt zich terug; de vrede van Brest-Litovsk volgt in maart 1918.','11 november 1918: wapenstilstand met Duitsland. 28 juni 1919: ondertekening van Versailles.','Oorlog en vrede veranderden grenzen en samenlevingen. Latere oorlogen waren geen automatisch gevolg.'],
        sourceIds:['nam-overview','online-brest','nam-victory','iwm-armistice','awm-versailles'],
        exercises:[
          order('d5-order','gevolgen','Zet de keerpunten en de vredesafspraken op volgorde.',[
            ['vs','April 1917: de Verenigde Staten treden toe'],['brest','Maart 1918: Rusland sluit vrede met de Centralen'],['stil','November 1918: wapenstilstand met Duitsland'],['vrede','Juni 1919: ondertekening Verdrag van Versailles']
          ],'De Verenigde Staten en Rusland veranderden de krachtsverhouding. De wapenstilstand kwam vóór de ondertekening van het vredesverdrag met Duitsland.','De gevechten stopten vóór alle afspraken over de vrede waren uitgewerkt.'),
          mc('d5-mc','gevolgen','Wat veranderde op 11 november 1918 aan het westfront?',[
            'Duitsland tekende het Verdrag van Versailles.','De Tweede Wereldoorlog begon.','De wapenstilstand ging in: het vechten stopte.'
          ],2,[
            'Versailles werd op 28 juni 1919 ondertekend. In november 1918 ging de wapenstilstand in.','De Tweede Wereldoorlog begon in Europa in 1939, ruim twintig jaar later.','Juist. Het stoppen van het vechten is iets anders dan het ondertekenen van een vredesverdrag met voorwaarden.'
          ],'Denk aan het verschil tussen stoppen met vechten en afspraken over de vrede.'),
          open('d5-open','gevolgen','Noem twee voorwaarden van Versailles en leg uit waarom je daaruit niet kunt concluderen dat een nieuwe wereldoorlog vaststond.',[
            'Noem twee: gebiedsverlies, verlies van koloniën, legerbeperking of herstelbetalingen.','Die voorwaarden konden onvrede en spanningen vergroten.','Latere politieke keuzes en crises waren ook nodig om de Tweede Wereldoorlog te verklaren.'
          ],'Duitsland verloor bijvoorbeeld gebied en moest herstelbetalingen doen. Dat veroorzaakte onvrede, maar een nieuwe wereldoorlog stond niet vast: ook latere economische crises en politieke besluiten speelden een rol.','Noem eerst twee concrete voorwaarden. Maak daarna onderscheid tussen invloed en onvermijdelijkheid.')
        ]
      }
    ],
    quiz:[
      mc('q1','spanning','Een regering wil meer koloniën om haar wereldmacht te vergroten. Welk begrip herken je?', ['Rantsoenering','Imperialisme','Wapenstilstand'],1,[ 'Rantsoenering verdeelt schaarse goederen. Koloniale machtsuitbreiding heet imperialisme.','Juist. Imperialisme gaat over uitbreiding van macht over andere gebieden, bijvoorbeeld koloniën.','Een wapenstilstand stopt gevechten; het veroveren van koloniën is machtsuitbreiding.' ],'Welk begrip gaat over macht buiten de eigen grenzen?'),
      mc('q2','spanning','Wat laat de keuze van Italië in 1914 het duidelijkst zien?', ['Een vooroorlogs bondgenootschap betekende niet automatisch oorlogsdeelname.','Dezelfde landen vochten elk oorlogsjaar aan dezelfde kant.','Alle Europese landen waren verplicht Duitsland te steunen.'],0,[ 'Juist. Italië bleef in 1914 neutraal en koos in 1915 de geallieerde kant.','De deelname veranderde: Italië en de VS kwamen later erbij, Rusland trok zich terug.','Er bestond geen dergelijke algemene verplichting. Landen namen afzonderlijke besluiten.' ],'Italië bleef in 1914 neutraal ondanks zijn eerdere afspraken.'),
      open('q3','escalatie','Een klasgenoot zegt: “De aanslag en de oorzaken van de oorlog zijn hetzelfde.” Verbeter die uitspraak in twee zinnen.',[ 'De aanslag was de aanleiding in juni 1914.','Achterliggende oorzaken bestonden langer, zoals nationalisme, bewapening en rivaliteit.','De crisis groeide door besluiten over eisen, mobilisatie en oorlog.' ],'De aanslag in Sarajevo was de aanleiding. Achterliggende oorzaken, zoals nationalisme en de wapenwedloop, bestonden al langer; besluiten van leiders maakten de crisis daarna groter.','Leg het verschil uit tussen een langdurige ontwikkeling en een directe gebeurtenis.'),
      order('q4','escalatie','Reconstrueer de zomer van 1914.',[ ['s','Aanslag in Sarajevo'],['o','Oostenrijk-Hongarije verklaart Servië de oorlog'],['r','Duitsland verklaart Rusland de oorlog'],['b','Duitse inval in België en Britse oorlogsverklaring'] ],'De aanslag kwam op 28 juni; de oorlogsverklaring aan Servië op 28 juli. Op 1 augustus verklaarde Duitsland Rusland de oorlog; op 4 augustus viel het België binnen en volgde de Britse oorlogsverklaring.','Begin niet met een bondgenootschap, maar met de eerste gebeurtenis in de crisis.'),
      mc('q5','front','Een leger verovert na weken vechten heel weinig terrein en verliest veel soldaten en voorraden. Welke uitleg past?', ['Een wapenstilstand maakt aanvallen gemakkelijker.','Bij een uitputtingsoorlog worden manschappen en middelen opgebruikt tegenover een sterke verdediging.','Loopgraven bestaan alleen aan het oostfront.'],1,[ 'Tijdens een wapenstilstand horen gevechten juist te stoppen.','Juist. De verdediging kon aanvallen tegenhouden terwijl beide partijen enorme verliezen leden.','Vooral het westfront stond bekend om zijn langdurige loopgravenoorlog; niet ieder front verliep hetzelfde.' ],'Verbind terreinwinst met de kosten in mensen en middelen.'),
      open('q6','front','Waarom was niemandsland oversteken zo gevaarlijk? Noem twee factoren en verbind ze met elkaar.',[ 'Aanvallers kwamen buiten hun beschutte loopgraaf.','Prikkeldraad en kapot terrein vertraagden hen.','Daardoor stonden zij langer bloot aan machinegeweer- en artillerievuur.' ],'Prikkeldraad en kraters vertraagden soldaten in het open niemandsland. Daardoor konden verdedigers hen langer beschieten met machinegeweren en artillerie.','Denk aan een obstakel én het vuur van de verdediger.'),
      mc('q7','thuis','Oefenbron: een zelfgemaakte poster van een fictieve overheidsdienst zegt “WERK MEE — MAAK MUNITIE — Het front rekent op jou”. Wat is het belangrijkste doel?', ['Betrouwbaar tellen hoeveel munitie er al is.','Bewijzen dat alle burgers graag in fabrieken werken.','Burgers overhalen om in de munitieproductie te werken.'],2,[ 'De poster geeft geen telling. Hij probeert gedrag te beïnvloeden.','Een oproep bewijst niet wat alle burgers vinden of doen.','Juist. De maker wil met een beroep op plichtsgevoel extra werknemers bereiken. Dit is oefenmateriaal, geen echte historische bron.' ],'Vraag welk gedrag de maker bij de lezer wil bereiken.'),
      mc('q8','thuis','Welke combinatie is het beste voorbeeld van totale oorlog?', ['Soldaten vechten, terwijl fabrieken en burgers voor de oorlog worden ingezet.','Alleen beroepssoldaten merken iets van de strijd.','Een oorlog waarin elke staat ter wereld meevecht.'],0,[ 'Juist. Totale oorlog beschrijft de inzet en invloed in de hele samenleving; niet dat letterlijk iedereen meevecht.','Bij totale oorlog raken ook economie en dagelijks leven bij de strijd betrokken.','Niet elk land hoeft mee te doen. Het begrip gaat over de brede inzet van een samenleving.' ],'Denk aan de verbinding tussen front en thuisfront.'),
      mc('q9','gevolgen','Welke verandering versterkte de geallieerden op langere termijn?', ['De Russische vrede met de Centralen in 1918.','De Amerikaanse deelname vanaf 1917 met steeds meer troepen en middelen.','Het einde van alle gevechten in 1914.'],1,[ 'De Russische terugtrekking nam juist een tegenstander van Duitsland weg.','Juist. De Amerikaanse bijdrage groeide, vooral in 1918. Ze was een belangrijke factor naast andere geallieerde inspanningen.','De strijd duurde door tot 1918; aan sommige conflicten kwam zelfs toen nog geen einde.' ],'Zoek een land dat aan de geallieerde kant kwam meedoen.'),
      mc('q10','gevolgen','Welke combinatie van datum en gebeurtenis klopt?', ['11 november 1918: ondertekening van Versailles.','28 juni 1914: de Duitse wapenstilstand.','28 juni 1919: ondertekening van het Verdrag van Versailles.'],2,[ 'Op 11 november 1918 ging de wapenstilstand met Duitsland in.','Op 28 juni 1914 vond de aanslag in Sarajevo plaats.','Juist. De ondertekening van Versailles volgde ruim een half jaar na de wapenstilstand.' ],'Versailles is een vredesverdrag uit het jaar na de wapenstilstand.'),
      mc('q11','thuis','Nederland bleef neutraal. Welke conclusie past daarbij?', ['Nederland vocht niet officieel mee, maar ondervond wel mobilisatie, vluchtelingen en schaarste.','Nederland werd niet door de oorlog beïnvloed.','Nederland werd automatisch lid van de Centralen.'],0,[ 'Juist. Neutraliteit betekent niet deelnemen als oorlogspartij, maar sluit grote gevolgen niet uit.','Handel, voedselvoorziening, vluchtelingen en de gemobiliseerde krijgsmacht beïnvloedden Nederland wel.','Nederland bleef neutraal en werd geen lid van een oorlogspartij.' ],'Maak onderscheid tussen niet meevechten en niets merken.'),
      open('q12','gevolgen','Leg het verschil uit tussen de wapenstilstand van 1918 en Versailles in 1919. Noem ook één concrete vredesvoorwaarde.',[ 'De wapenstilstand stopte het vechten met Duitsland aan het westfront.','Versailles legde later vredesvoorwaarden met Duitsland vast.','Een juiste voorwaarde: herstelbetalingen, legerbeperking, gebiedsverlies of koloniënverlies.' ],'De wapenstilstand liet het vechten aan het westfront stoppen op 11 november 1918. Het Verdrag van Versailles werd op 28 juni 1919 ondertekend en legde voorwaarden voor Duitsland vast, zoals herstelbetalingen.','Beantwoord drie delen: wat stopte, wat werd afgesproken, en een voorbeeld.')
    ],
    review:[
      mc('r1','spanning','Een volk in een veelvolkerenrijk wil een eigen staat. Welk begrip past?', ['Nationalisme','Censuur','Mobilisatie'],0,[ 'Juist. Nationalisme kan de wens naar een eigen staat versterken.','Censuur gaat over het beperken van informatie.','Mobilisatie is het voorbereiden van een leger.' ],'Het gaat hier om de band met een volk.'),
      mc('r2','spanning','Twee landen bouwen steeds meer oorlogsschepen omdat ze elkaar wantrouwen. Wat herken je?', ['Een vredesverdrag','Een wapenwedloop','Rantsoenering'],1,[ 'Een vredesverdrag legt vredesafspraken vast; de landen bewapenen zich hier juist steeds sterker.','Juist. Het ene land reageert op de bewapening van het andere; dat kan angst versterken.','Rantsoenering verdeelt schaarse producten, geen bewapening.' ],'Ze proberen elkaar in bewapening bij te houden.'),
      mc('r3','escalatie','Wat was de directe aanleiding van de crisis in de zomer van 1914?', ['Het Verdrag van Versailles','De Amerikaanse deelname','De aanslag in Sarajevo'],2,[ 'Versailles volgde in 1919, na de oorlog.','De Verenigde Staten traden in 1917 toe; dat was later.','Juist. De aanslag was de aanleiding; langdurige spanningen en latere besluiten verklaren de uitbreiding.' ],'Zoek de gebeurtenis van 28 juni 1914.'),
      mc('r4','escalatie','Waarom kon de crisis nog verschillende kanten op na de aanslag?', ['Leiders moesten nog kiezen over eisen, overleg, mobilisatie en oorlog.','Er bestonden geen spanningen tussen landen.','Een bondgenootschap verbiedt ieder overleg.'],0,[ 'Juist. De spanningen waren groot, maar afzonderlijke keuzes maakten de oorlog groter.','Er bestonden wel spanningen, bijvoorbeeld door rivaliteit en bewapening.','Afspraken kunnen druk geven, maar sluiten overleg en politieke keuzes niet uit.' ],'Denk aan wat regeringen nog moesten besluiten.'),
      mc('r5','front','Wat was het belangrijkste verschil tussen de loopgraaf en niemandsland?', ['Niemandsland bood de beste beschutting.','De loopgraaf bood enige beschutting; niemandsland was de gevaarlijke open strook tussen stellingen.','In de loopgraaf bestond geen enkel gevaar.'],1,[ 'Niemandsland was juist gevaarlijk door obstakels en vijandelijk vuur.','Juist. Beschutting hielp, maar beschermde niet tegen alle beschietingen of slechte omstandigheden.','Granaten, kou, modder en ziekte bleven gevaren.' ],'Vergelijk beschut zitten met open terrein oversteken.'),
      mc('r6','front','Welke uitspraak over de oorlogvoering is het zorgvuldigst?', ['Overal ter wereld lag het front vier jaar volledig stil.','Het westfront was het enige strijdtoneel.','Het westfront kende langdurige loopgravenstrijd; andere fronten konden beweeglijker zijn.'],2,[ 'Niet alle fronten verliepen hetzelfde en ook het westfront kende beweging, vooral in 1914 en 1918.','Er werd ook gevochten in Oost-Europa, Afrika, het Midden-Oosten, op zee en in de lucht.','Juist. De bekende loopgraven vormen maar een deel van de wereldoorlog.' ],'Eén beeld van het westfront geldt niet automatisch voor de hele oorlog.'),
      mc('r7','thuis','Wat kun je uit een oproep om oorlogsgeld te geven het veiligst afleiden?', ['De maker wilde mensen aansporen geld te geven.','Iedereen gaf inderdaad geld.','De oorlog was al gewonnen.'],0,[ 'Juist. De bedoeling van een bron is niet hetzelfde als het werkelijke effect.','Een oproep bewijst niet dat iedereen meedeed.','Een oproep om geld zegt op zichzelf niets over wie won.' ],'Maak onderscheid tussen wat de maker wilde en wat mensen deden.'),
      mc('r8','thuis','Welk begrip past bij voedselbonnen die schaarse producten verdelen?', ['Nationalisme','Rantsoenering','Imperialisme'],1,[ 'Nationalisme gaat over de verbondenheid met volk of land.','Juist. Rantsoenering bepaalt hoeveel iemand van een schaars product mag krijgen.','Imperialisme gaat over machtsuitbreiding over andere gebieden.' ],'Denk aan vaste hoeveelheden per persoon.'),
      mc('r9','gevolgen','Welke volgorde klopt?', ['Versailles → Amerikaanse deelname → wapenstilstand','Wapenstilstand → aanslag → Versailles','Amerikaanse deelname → wapenstilstand → Versailles'],2,[ 'Amerikaanse deelname begon in 1917, Versailles kwam in 1919.','De aanslag in Sarajevo kwam in 1914, vóór de wapenstilstand.','Juist: 1917, november 1918, juni 1919.' ],'De vrede werd pas na het stoppen van de gevechten uitgewerkt.'),
      mc('r10','gevolgen','Welke uitleg van de relatie tussen Versailles en latere oorlog is het best?', ['Versailles vergrootte onvrede, maar latere crises en politieke keuzes waren ook van belang.','Versailles maakte de Tweede Wereldoorlog vanzelf onvermijdelijk.','Versailles was een verdrag uit de Tweede Wereldoorlog.'],0,[ 'Juist. Een gevolg kan latere spanningen beïnvloeden zonder de toekomst vast te leggen.','Dat is te eenvoudig: economische crises en keuzes van leiders en samenlevingen speelden ook mee.','Versailles werd in 1919 ondertekend, na de Eerste Wereldoorlog.' ],'Een invloed op de toekomst is niet hetzelfde als een vaststaande toekomst.')
    ],
    summary:{
      terms:[
        {term:'Nationalisme',meaning:'Sterke verbondenheid met volk of land; soms streven naar een eigen staat.'},
        {term:'Imperialisme',meaning:'Macht uitbreiden, bijvoorbeeld door koloniën.'},
        {term:'Militarisme',meaning:'Veel vertrouwen in leger en militaire oplossingen; wapenwedloop = steeds sterker bewapenen.'},
        {term:'Bondgenootschap',meaning:'Afspraak tot steun; deelname aan oorlog blijft een besluit.'},
        {term:'Mobilisatie',meaning:'Het leger klaarmaken voor mogelijke oorlog.'},
        {term:'Totale oorlog',meaning:'Ook economie en burgers worden op grote schaal ingezet.'},
        {term:'Propaganda / censuur',meaning:'Meningen sturen / informatie controleren en beperken.'},
        {term:'Wapenstilstand',meaning:'Stoppen met vechten; nog geen vredesverdrag.'},
        {term:'Loopgraaf',meaning:'Uitgegraven verdedigingsstelling die soldaten beschutting bood.'},
        {term:'Niemandsland',meaning:'Gevaarlijk gebied tussen de voorste vijandelijke loopgraven.'},
        {term:'Uitputtingsoorlog',meaning:'De ander verzwakken door soldaten, voorraden en uithoudingsvermogen op te maken.'},
        {term:'Rantsoenering',meaning:'Schaarse producten verdelen in vaste hoeveelheden per persoon.'}
      ],
      timeline:[
        {date:'28 juni 1914',event:'Aanslag op Franz Ferdinand en Sophie in Sarajevo: aanleiding.'},
        {date:'28 juli 1914',event:'Oostenrijk-Hongarije verklaart Servië de oorlog.'},
        {date:'1–4 aug. 1914',event:'Duitse oorlog met Rusland en Frankrijk; inval in België; Britse oorlogsverklaring.'},
        {date:'1915',event:'Italië sluit aan bij de geallieerden, na neutraliteit in 1914.'},
        {date:'1917',event:'VS nemen deel; revoluties in Rusland.'},
        {date:'3 maart 1918',event:'Rusland sluit vrede met de Centralen: Brest-Litovsk.'},
        {date:'11 nov. 1918',event:'Wapenstilstand met Duitsland; gevechten westfront stoppen om 11 uur.'},
        {date:'28 juni 1919',event:'Verdrag van Versailles ondertekend: vredesvoorwaarden voor Duitsland.'}
      ],
      causes:['Langdurig: nationalisme, imperialistische rivaliteit, militarisme en wantrouwen tussen machtsblokken.','Aanleiding: aanslag in Sarajevo. Escalatie: eisen, mobilisaties, oorlogsverklaringen en de Duitse inval in België.'],
      consequences:['Miljoenen doden en gewonden; ingrijpende gevolgen voor burgers en economie.','Rijken vallen uiteen of veranderen; nieuwe staten en grenzen. De Volkenbond moet vrede helpen bewaren.','Versailles: Duits gebieds- en koloniënverlies, legerbeperking en herstelbetalingen. Latere oorlog was niet onvermijdelijk.'],
      connections:['Sterke verdediging + prikkeldraad + vuur → gevaarlijke aanvallen, weinig terreinwinst en uitputting.','Front heeft mensen, voedsel en munitie nodig → productie, propaganda en schaarste op het thuisfront.','Aanslag ≠ alle oorzaken. Bondgenootschappen ≠ automatische oorlog. Wapenstilstand 1918 ≠ Versailles 1919.']
    }
  };
})();
