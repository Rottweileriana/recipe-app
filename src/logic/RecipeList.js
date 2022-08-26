const recipeList = [
    {
        "name": "",
        "portions": "",
        "duration": "",
        "ingredients": [    "",
                            ""],
        "directions": [     "",
                            "°C"],
        "id": "0",
        "image": "",
        "author": "",
        "from": "",
        "published": "",
        "stars": "",
        "notes": "",
        "taggs": [""]
    
    
    },
    {
        "name": "Apelsinmarmelad",
        "portions": "4",
        "duration": "1560",
        "ingredients": [ "1 kg apelsin",
                         "1 l vatten", 
                         "2 l socker", 
                         "2 tsk citronsyra"],
        "directions": [ "Borsta apelsinerna noga med varmt vatten", 
                        "Skär apelsinerna i fyra klyftor och skiva sedan varje klyfta så tunt som möjligt. Ta vara på kärnorna och knyt ihop dem i en bit gasbinda.", 
                        "Lägg frukt och kärnknyte i en gryta och häll på vattnet. Låt stå ett dygn så får marmeladen mer smak.",
                        "Koka sedan upp frukt och vatten, och koka under lock på svag värme ca 45 min. Rör ner sockret och koka marmeladen utan lock ytterligare ca 45 min.",
                        "Gör marmeladprovet. Häll upp lite marmelad på ett fat. Dra en sked igenom. Om marmeladen inte rinner ihop igen är den färdig. Koka annars en stund till.",
                        "Ta sedan bort kärnknytet, rörut citronsyran i lite vatten och tillsätt den.",
                        "Häll upp marmeladen i rena, varma burkar och låt svalna."],
        "id": "1",
        "image": "https://images.unsplash.com/photo-1612547854156-3aae03949fed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "En eller två appelsiner kan bytas ut mon citron eller grapefrukt om man vill ha annan smak på marmeladen. OBS! Koka aldrig dubbel sats, då finns det risk att den inte stelnar.",
        "taggs": ["apelsin","vegetariskt"] 
    },
    {
        "name": "Apelsinsoppa",
        "portions": "4",
        "duration": "10",
        "ingredients": [    "6 dl vatten",
                            "1,5 msk potatismjöl",
                            "4 dl pressad apelsin el. apelsinjuce",
                            "socker"],
        "directions": [     "Rör ut potatismjölet i lite vatten. Koka upp resten och tillsätt redningen under omrörning.",
                            "Låt vattnet bara koka upp och sedan svalna.",
                            "Blanda ner de pressada apelsinensaften eller juicen och smaksätt eventuellt soppan med socker."],
        "id": "2",
        "image": "https://cdn.mytaste.org/i?u=group1%2FM00%2F01%2FAD%2FCgAIC1IUIdmANyFEAADsSwZ1jio240.jpg&w=860&h=380&c=1&q=70",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "Genom att man inte kokar appelsinsaften bevaras C-vitaminerna bättre.",
        "taggs": ["apelsin","vegetariskt"] 
    
    
    },
    {
        "name": "Soligaste soppan",
        "portions": "4",
        "duration": "50",
        "ingredients": [    "800 g pumpa, t ex butternut el. hokkaidopumpa",
                            "1 mjölig potatis",
                            "1 gul lök",
                            "1 vitlökslkyfta",
                            "  olja till stekning",
                            "1 msk riven färsk ingefära",
                            "1 l kyckling- el. grönsaksbuljong",
                            "1 dl crème fraiche",
                            "1 msk limesaft",
                            "  salt",
                            " ",
                            "Svamp- och bacontopping:",
                            "150 g bacon",
                            "250 g trattkantareller el. skogschapinjoner",
                            "1 rå majskolv",
                            "  chiliflakes",
                            "  strimlad bladpersilja till servering"
                        ],
        "directions": [     "Skär skalet av pumpan, ta bort kärnorna skär köttet i bitar. Skala och skär potatisen i bitar. Finhacka löken.",
                            "Fräs löken mjuk i olja i en kastrull i ca 5 min. Tillsätt ingefäran och fräs i ytligare 30 sek. Tillsätt pumpan, potatisen, och buljongen. Koka upp och koka i ca 25 min till grönsakerna är mjuka.",
                            "Mixa soppan slät. Tillsätt crème fraiche och limesaft. Smaka av med salt.",
                            "Strimla baconet och stek det knaprigt i lite olja. Ta upp och låt rinna av på hushållspapper. Skär eventuellt svampen i bitar. Stek på hög värme i lite olja tills vätskan försvinner. Skär kornen av majskolven och blanda med svampen. Tillsätt baconet och låt allt bli varmt. Smaka av med chiliflakes.",
                            "Toppa soppan med svamp-blandningen. Garnera med bladpersilja."],
        "id": "3",
        "image": "https://images.unsplash.com/photo-1608930532174-18ff53f01438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
        "author": "Ylva Bergqvist",
        "from": "52 soppor",
        "published": "Bonnier Fakta 2017",
        "stars": "",
        "notes": "TIPS: Ersätt Bacon med salta bbq-mandlar om du vill ha en helt vegetarisk soppa",
        "taggs": ["pumpa","bacon","soppa", "svamp"] 
    },
    {
        "name": "Potatismos",
        "portions": "4",
        "duration": "20",
        "ingredients": [    "ca 12-14 medelstora potatisar",
                            "vatten",
                            "ca 2 tsk/liter vatten salt",
                            "2,5-3 dl mjölk",
                            "0,5-1 tsk salt",
                            "vitpeppar",
                            "smör el. margarin"],
        "directions": [     "Skala potatisarna och skär i bitar. Koka upp i saltat vatten och koka i ca 10 min, tills potatisen är mjuk.",
                            "Slå bort kokvattnet och mosa potatisen i kastrullen med elvisp. Späd med mjölken, kall eller varm, lite i sänder.",
                            "Rör moset luftigt med elvispen.",
                            "Rör eventuellt ner en klick smör eller margarin och smaksätt med salt och vitpeppar."],
        "id": "4",
        "image": "https://cdn.pixabay.com/photo/2014/09/09/11/16/mashed-potatoes-439976_960_720.jpg",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "Grönt mos: blanda ner hackad förvälld spenat. Krydda ev. med lite muskot. Knaprigt mos: Blanda ner lite rårivna morötter. Överblivet mos kan blandas med ägg och ev lite mjöl och använs till potatisbullar eller gratäng.",
        "taggs": ["potatis","vegetariskt"] 
    },
    {
        "name": "Potatisbullar",
        "portions": "4",
        "duration": "15",
        "ingredients": [    "5-6 dl potatismos",
                            "2 ägg",
                            "2-3 msk vetemjöl",
                            "smör el. margarin",
                            "salt"],
        "directions": [     "Vispa upp äggen och blanda i det kalla potatismoset. Blanda eventuellt också i lite vetemjöl. Smaksätt med salt om det behövs.",
                            "Bryn smör eller margarin i en stekpanna. Klicka ner smeten, platt till och tek potatisbullarna på båda sidor."],
        "id": "5",
        "image": "https://images.unsplash.com/photo-1563012678-bdfec255931b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGF0b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "",
        "taggs": ["potatis","ägg","vegetariskt"] 
    
    
    },
    {
        "name": "Specialmos till gratäng",
        "portions": "-",
        "duration": "60",
        "ingredients": [    "ca 6 medelstora potatisar",
                            "vatten",
                            "salt ca 2 tsk/liter",
                            "1 ägg",
                            "1 tsk salt",
                            "1 msk smör el. margarin"],
        "directions": [     "Skala potatisarna och skär i bitar. Koka upp i saltat vaten och koka under lock tills potatisen är mjuk, ca 10 min.",
                            "Häll av kokvattnet och mosa potatisen med puréspress eller elvisp.",
                            "Vispa upp ägget och blanda ner i moset.",
                            "Tillsätt salt och smör eller margarin.",
                            "Moset ka klickas eller spritsas på t ex fiskgratäng och gratineras i ugn, 250°C, ca 15 min."],
        "id": "6",
        "image": "https://images.unsplash.com/photo-1563012678-bdfec255931b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGF0b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "Genom att utesluta mjölken får man ett fastare potatismos som passar särskilt bra att gratinera.",
        "taggs": ["potatis"]
    
    
    },
    {
        "name": "Bakad potatis",
        "portions": "4",
        "duration": "",
        "ingredients": [    "8-12 potatisar"    ],
        "directions": [     "Sätt på ugnen på 225°C.",
                            "Välj ut jämnstora potatisar, så att de blir färdiga på samma gång (men bakpotatisar måste inte vara jättestora).",
                            "Gör ren potatisarna noga och torka dem med hushllspapper.", 
                            "Stick i potatisarna på några ställen med en provnål eller gaffl så att de inte exploderar i ugnen. Lägg potatisarna direkt på gallret i ugnen, i en långpanna, eller i en eldfast form och sätt in de som de är.",
                            "Baka tills potatisen är mjuk, ca 45 min.",
                            "Servera potatisen direkt. Krama ev potatisarna lätt i en handduk, så att inkråmet mosas, skär ett kryss i skalet och tryck till så att potatisen öppnas innan de sätts fram på bordet.",
                            ],
        "id": "7",
        "image": "https://images.unsplash.com/photo-1563012678-bdfec255931b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGF0b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "author": "Maud Lindblå",
        "from": "Sparas kokbok",
        "published": "Tidens förlag 1983",
        "stars": "",
        "notes": "Ungsbakad potatis är en delikat rätt, som väl duger att bjuda på till fest med ett eller flera tillbehör. En smörklick och några korn salt kan vara alldeles tillräckligt som tillbehör till bakad potatis. Men man kan variera smaksättningen på många sätt. Här är några förslag: Gräddfil blandad med kaviar ur tub, Gräddfil med hackad lök eller gräslök, Keso utrörd med lite vanlig fil och smaksatt med salt, peppar, och persilja, Finhackad matjhessill (rest) med dill och gräddfil, Hackat hårdkokt ägg, Hackad rökt skinka (rest), Aromsmör.",
        "taggs": ["potatis"]
    
    
    },
    {
        "name": "Linsbiffar",
        "portions": "4",
        "duration": "40",
        "ingredients": [    "250 g penne pasta",
                            "200 g röda linser",
                            "1 burk krossade tomater",
                            "1 tärning görnsaksbuljong",
                            "1 stor gul lök",
                            "2 morötter",
                            "2 msk basilika",
                            "1 msk timjan",
                            "1 tsk svartpeppar",
                            "3 tsk salt",
                            "1 dl vetemjöl",
                            "0,5 dl ströbröd",
                            "3 msk rapsolja",
                            "2 klyftor vitlök",
                            "2,5 l vatten"],
        "directions": [     "Skjöl av och koka linserna i 4 dl vatten med 1 tsk salt under lock i 10 minuter. Följ ej instruktionerna på paketet. Låt sedan svalna utan lock.",
                            "Koka pastan med 2 tsk salt och 2 liter vatten i 11 minuter. När pastan är klar, häll av vattnet, blanda med 1 msk rapsolja. Ställ kastrullen åt sidan med lock på.",
                            "Blanmda ihop i en bunke: vetemjäl, ströbröd, 1 msk basilika, och svartpeppar.",
                            "Skala och siv/hacka morötter, lök, och vitlök. Blanda ned i bunken.",
                            "Häll ner linserna i bunken och rör ihop allt till en smet.",
                            "I en kastrull häll i: krossade tomater, 1 dl vatten, buljong, timjan och 1 msk basilika. Låt putra utan lock på låg temperatur medan du gör klart linsbiffarna.",
                            "Forma smaten till biffar (8 st) och stek fyra linsbiffar åt gången i ca 1-2 mks rapsolja. Ca 2-3 min per sida på hög värme.",
                            "Servera linsbiffar med pasta och tomatsås."],
        "id": "8",
        "image": "https://images.unsplash.com/photo-1552585960-0e1069ce7405?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "author": "Johannes & Patrik",
        "from": "Enkla Kassen",
        "published": "Enkla Kasse v. 25, 2021",
        "stars": "",
        "notes": "Det går också bra att göra insbollar istället för binsbiffar. Gör dem då ganska små då det brukar göra dem lite enklare att steka.",
        "taggs": ["linser", "pasta", "middag", "lunch"]
    
    
    },
    {
        "name": "Indisk dal",
        "portions": "4",
        "duration": "35",
        "ingredients": [    "3 dl ris",
                            "200g röda linser",
                            "1 burk kokosmjölk",
                            "1 burk krossade tomater",
                            "1 tärning grönsaksbuljong",
                            "1 gul lök",
                            "2 morötter",
                            "3 tsk mald ingefära",
                            "1 tsk kanel",
                            "1 tsk koriander",
                            "0,5 tsk kardemumma",
                            "1 tsk salt",
                            "1 msk rapsolja",
                            "2 klyftor vitlök",
                            "2 dl vatten"],
        "directions": [     "Skala och hacka/riv löken och finhacka/pressa vitlöken. Lägg i gryta/krastull.",
                            "Skala och hacka/riv morötterna. Lägg i grytan.",
                            "Fräs morötterna och löken i 1 msk rapsolja i några minuter.",
                            "Rör ner alla kryddor: ingefära, kanel, koriander, kardemumma, och salt. Rör om och gå vidare till nästa steg så inget bränner fast.",
                            "Tillsätt vattnet, krossadetomater, kokosmjölk, och görnsaksbuljong. Rör om.",
                            "Skölj av och häll i linserna och rör om ordentligt. Låt koka på låg värme i ca 20 minuter. OBS, rör om då och då så inget bränner fats i botten.",
                            "Tillaga riset enligt förpackningen.",
                            "Servera dal tillsammans med ris."],
        "id": "9",
        "image": "https://images.unsplash.com/photo-1517244906-fa053b624b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZGFobHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "author": "Johannes & Patrik",
        "from": "Enkla Kassen",
        "published": "Enkla Kasse v. 25, 2021",
        "stars": "",
        "notes": "För mer smak kan löken stekas lite längre med kryddorna om man har lite extra til och kan hålla ett öga på att inget bränns. Denna rätt är ofta ännu godare som matlåda eller om den fått stå på eftervärme ett tag.",
        "taggs": ["linser", "gryta", "middag", "lunch"]
    
    
    },
    {
        "name": "Pestopasta med bönröra",
        "portions": "4",
        "duration": "25",
        "ingredients": [    "250 g penne pasta",
                            "2 l vatten",
                            "2 pkt svarta bönor",
                            "1 burk pesto",
                            "1 burk krossade tomarer",
                            "1 tärning grönsaksbuljong",
                            "1 gul lök",
                            "1 rödbeta",
                            "2 tsk salt",
                            "1 msk olivolja"],
        "directions": [     "Koka passta med saltet och vattnet i 11 minuter.",
                            "Skala och hacka löken och lägg i en stor gryta.",
                            "Skala och hacka södbetan i små tärningar (max 1 cm) och läg i grytan.",
                            "Stek löken och rödbetan i 1 msk olivolja i 2-3 minuter.",
                            "Häll i krossade tomater och smula ner buljongen i grytan. Låt puttrra i 2-3 minuter.",
                            "När pastan kokat klart, häll av vattnet i ett durkslag och häll sedan tillbaka den i kastrullen.",
                            "Blanda pasta med pesto i kastrullen. Ställ kastrullen åtsidan med lock på.",
                            "Häll bönorna i ett durkslag. Skölj under rinnande vatten. Blanda bönorna i grytan och låt dem värmas i 2-3 minuter.",
                            "Servera pestopasta med bönröra."],
        "id": "10",
        "image": "https://images.unsplash.com/photo-1532939624-3af1308db9a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGElMjB3aXRoJTIwcGVzdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "author": "Johannes & Patrik",
        "from": "Enkla Kassen",
        "published": "Enkla Kasse v. 25, 2021",
        "stars": "",
        "notes": "Om du har extra tid kan du mosa bönorna med en skvätt vatten och forma dem till enkla bönplättar som steks separat. Kan då vara gott att blanda i lite av löken och salta bönplättarna. Rödbetan kan också rivas och ätas rå som en liten rödbetssallad. För mildare rödbetssallad kan du blanda den med rivet äpple.",
        "taggs": ["bönor", "middag", "lunch"]
    
    
    },
]
    
 
 
export default recipeList;
 
