//gallery & fullscreen script
function showGallery(category) {
    const backbtn = document.getElementById('back-compagnies');
    const gallery = document.getElementById('gallery');
    const photoGrid = document.getElementById('photo-grid');
    const url = window.location.href;

    if (url == "https://alphazuluspotting.pages.dev/") {
        const footer = document.getElementById('footer')
        const hero = document.getElementById('hero');
        const categories = document.getElementById('categories');
        hero.style.display = 'none';
        footer.style.display = 'none';
        categories.style.display = 'none';
    }

    if (url.includes('military.html')) {
        const sub = document.getElementById('subsquares');
        sub.style.display = 'none';
    }

    photoGrid.innerHTML = '';
    backbtn.style.display = 'block';

    const photos = {
        'civil-commercial-airalgerie': [
            {src: './photos/air_algerie/air_algerie (1).JPG', desc: 'Air Algérie Boeing 737'},
            {src: './photos/air_algerie/air_algerie (2).JPG', desc: 'Air Algérie Boeing 737'},
            {src: './photos/air_algerie/air_algerie (3).JPG', desc: 'Air Algérie Airbus A330'},
            {src: './photos/air_algerie/air_algerie (4).JPG', desc: 'Air Algérie Airbus A330'},
            {src: './photos/air_algerie/air_algerie (5).JPG', desc: 'Air Algérie Airbus A330'},
            {src: './photos/air_algerie/air_algerie (6).JPG', desc: 'Air Algérie Airbus A330'},
            {src: './photos/air_algerie/air_algerie (7).JPG', desc: 'Air Algérie Airbus A330'}
        ],
        'civil-commercial-aircaraibes': [
            {src: './photos/air_caraibes/air_caraibes (1).JPG', desc: 'Air Caraïbes Airbus A350'},
            {src: './photos/air_caraibes/air_caraibes (2).JPG', desc: 'Air Caraïbes Airbus A350'},
            {src: './photos/air_caraibes/air_caraibes (3).JPG', desc: 'Air Caraïbes Airbus A350'},
            {src: './photos/air_caraibes/air_caraibes (4).JPG', desc: 'Air Caraïbes Airbus A350'},
            {src: './photos/air_caraibes/air_caraibes (5).JPG', desc: 'Air Caraïbes Airbus A350'},
            {src: './photos/air_caraibes/air_caraibes (6).JPG', desc: 'Air Caraïbes Airbus A350 '}
        ],
        'civil-commercial-aircorsica': [
            {src: './photos/air_corsica/air_corsica (1).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (2).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (3).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (4).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (5).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (6).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (7).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (8).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (9).JPG', desc: 'Air Corsica Airbus A320 Neo'},
            {src: './photos/air_corsica/air_corsica (10).JPG', desc: 'Air Corsica Airbus A320 Neo'}
        ],
        'civil-commercial-aireuropa': [
            {src: './photos/air_europa/air_europa (1).JPG', desc: 'Air Europa Boeing 737'},
            {src: './photos/air_europa/air_europa (2).JPG', desc: 'Air Europa Boeing 737'},
            {src: './photos/air_europa/air_europa (3).JPG', desc: 'Air Europa Boeing 737'}
        ],
        'civil-commercial-airfrance': [
            {src: './photos/air_france/air_france (1).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (2).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (3).JPG', desc: 'Air France Boeing 777'},
            {src: './photos/air_france/air_france (4).JPG', desc: 'Air France Airbus A350'},
            {src: './photos/air_france/air_france (5).JPG', desc: 'Air France Boeing 777'},
            {src: './photos/air_france/air_france (6).JPG', desc: 'Air France Airbus A319'},
            {src: './photos/air_france/air_france (7).JPG', desc: 'Air France Airbus A319'},
            {src: './photos/air_france/air_france (8).JPG', desc: 'Air France Airbus A319'},
            {src: './photos/air_france/air_france (9).JPG', desc: 'Air France Airbus A319'},
            {src: './photos/air_france/air_france (10).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (11).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (12).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (13).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (14).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (15).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (16).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (17).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (18).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (19).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (20).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (21).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (22).JPG', desc: 'Air France Airbus A320'},
            {src: './photos/air_france/air_france (23).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (24).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (25).JPG', desc: 'Air France Airbus A318'},
            {src: './photos/air_france/air_france (26).JPG', desc: 'Air France Airbus A318'}
        ],
        'civil-commercial-amelia': [
            {src: './photos/amelia/amelia (1).JPG', desc: 'Amelia Airbus A319'},
            {src: './photos/amelia/amelia (2).JPG', desc: 'Amelia Airbus A319'},
            {src: './photos/amelia/amelia (3).JPG', desc: 'Amelia Airbus A319'},
            {src: './photos/amelia/amelia (4).JPG', desc: 'Amelia Airbus A319'}
        ],
        'civil-commercial-corsair': [
            {src: './photos/corsair/corsair (1).JPG', desc: 'Corsair Airbus A330'},
            {src: './photos/corsair/corsair (2).JPG', desc: 'Corsair Airbus A330'},
            {src: './photos/corsair/corsair (3).JPG', desc: 'Corsair Airbus A330'},
            {src: './photos/corsair/corsair (4).JPG', desc: 'Corsair Airbus A330'},
            {src: './photos/corsair/corsair (5).JPG', desc: 'Corsair Airbus A330'},
            {src: './photos/corsair/corsair (6).JPG', desc: 'Corsair Airbus A330'}
        ],
        'civil-commercial-easyjet': [
            {src: './photos/easy_jet/easy_jet (1).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (2).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (3).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (4).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (5).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (6).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (7).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (8).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (9).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (10).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (11).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (12).JPG', desc: 'EasyJet Airbus A319'},
            {src: './photos/easy_jet/easy_jet (13).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (14).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (15).JPG', desc: 'EasyJet Airbus A320 Neo'},
            {src: './photos/easy_jet/easy_jet (16).JPG', desc: 'EasyJet Airbus A320'}
        ],
        'civil-commercial-emirates': [
            {src: './photos/emirates/emirates (1).JPG', desc: 'Emirates Airbus A380'},
            {src: './photos/emirates/emirates (2).JPG', desc: 'Emirates Airbus A380'},
            {src: './photos/emirates/emirates (3).JPG', desc: 'Emirates Airbus A380'},
            {src: './photos/emirates/emirates.JPG', desc: 'Emirates Boeing 777'}
        ],
        'civil-commercial-frenchbee': [
            {src: './photos/french_bee/french_bee (1).JPG', desc: 'French Bee Airbus A350'},
            {src: './photos/french_bee/french_bee (2).JPG', desc: 'French Bee Airbus A350'},
            {src: './photos/french_bee/french_bee (3).JPG', desc: 'French Bee Airbus A350'},
            {src: './photos/french_bee/french_bee (4).JPG', desc: 'French Bee Airbus A350'},
            {src: './photos/french_bee/french_bee (5).JPG', desc: 'French Bee Airbus A350'}
        ],
        'civil-commercial-iberia': [
            {src: './photos/iberia/iberia (1).JPG', desc: 'Iberia Airbus A320'},
            {src: './photos/iberia/iberia (2).JPG', desc: 'Iberia Airbus A320'},
            {src: './photos/iberia/iberia (3).JPG', desc: 'Iberia Airbus A320'}
        ],
        'civil-commercial-ita': [
            {src: './photos/ita/ita (1).JPG', desc: 'ITA Airbus A220'},
            {src: './photos/ita/ita (2).JPG', desc: 'ITA Airbus A220'},
            {src: './photos/ita/ita (3).JPG', desc: 'ITA Airbus A220'}
        ],
        'civil-commercial-luxair': [
            {src: './photos/luxair/luxair (1).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (2).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (3).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (4).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (5).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (6).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (7).JPG', desc: 'Luxair ATR 72'},
            {src: './photos/luxair/luxair (8).JPG', desc: 'Luxair ATR 72'}
        ],
        'civil-commercial-pegasus': [
            {src: './photos/pegasus/pegasus (1).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (2).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (3).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (4).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (5).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (6).JPG', desc: 'Pegasus Airbus A320 Neo'},
            {src: './photos/pegasus/pegasus (7).JPG', desc: 'Pegasus Airbus A320 Neo'}
        ],
        'civil-commercial-royalairmaroc': [
            {src: './photos/royal_air_maroc/royal_air_maroc (1).JPG', desc: 'Royal Air Maroc Boeing 787'},
            {src: './photos/royal_air_maroc/royal_air_maroc (2).JPG', desc: 'Royal Air Maroc Boeing 787'},
            {src: './photos/royal_air_maroc/royal_air_maroc (3).JPG', desc: 'Royal Air Maroc Boeing 787'},
            {src: './photos/royal_air_maroc/royal_air_maroc (4).JPG', desc: 'Royal Air Maroc Boeing 787'},
            {src: './photos/royal_air_maroc/royal_air_maroc (5).JPG', desc: 'Royal Air Maroc Boeing 737'},
            {src: './photos/royal_air_maroc/royal_air_maroc (6).JPG', desc: 'Royal Air Maroc Boeing 737'},
            {src: './photos/royal_air_maroc/royal_air_maroc (7).JPG', desc: 'Royal Air Maroc Boeing 737'}
        ],
        'civil-commercial-tap': [
            {src: './photos/tap/tap (1).JPG', desc: 'TAP Airbus A320'},
            {src: './photos/tap/tap (2).JPG', desc: 'TAP Airbus A320'},
            {src: './photos/tap/tap (3).JPG', desc: 'TAP Airbus A320'}
        ],
        'civil-commercial-transavia': [
            {src: './photos/transavia/transavia (1).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (2).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (3).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (4).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (5).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (6).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (7).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (8).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (9).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (10).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (11).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (12).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (13).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (14).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (15).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (16).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (17).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (18).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (19).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (20).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (21).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (22).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (23).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (24).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (25).JPG', desc: 'Transavia Boeing 737'},
            {src: './photos/transavia/transavia (26).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (27).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (28).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (29).JPG', desc: 'Transavia Airbus A320 Neo'},
            {src: './photos/transavia/transavia (30).JPG', desc: 'Transavia Airbus A320 Neo'},
        ],
        'civil-commercial-tui': [
            {src: './photos/tui/tui (1).JPG', desc: 'TUI Boeing 737'},
            {src: './photos/tui/tui (2).JPG', desc: 'TUI Boeing 737'},
            {src: './photos/tui/tui (3).JPG', desc: 'TUI Boeing 737'},
            {src: './photos/tui/tui (4).JPG', desc: 'TUI Boeing 737'}
        ],
        'civil-commercial-vueling': [
            {src: './photos/vueling/vueling (1).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (2).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (3).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (4).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (5).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (6).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (7).JPG', desc: 'Vueling Airbus A320'},
            {src: './photos/vueling/vueling (8).JPG', desc: 'Vueling Airbus A320'}
        ],
        'civil-commercial-wizz': [
            {src: './photos/wizz/wizz (1).JPG', desc: 'Wizz Airbus A321'},
            {src: './photos/wizz/wizz (2).JPG', desc: 'Wizz Airbus A321'},
            {src: './photos/wizz/wizz (3).JPG', desc: 'Wizz Airbus A321'}
        ],
        'general-planes': [
            {src: './photos/general/general-p (1).JPG', desc: 'Cessna C172 Skyhawk'},
            {src: './photos/general/general-p (2).JPG', desc: 'Beechcraft BE20'},
            {src: './photos/general/general-p (3).JPG', desc: 'Beechcraft BE20'},
            {src: './photos/general/general-p (4).JPG', desc: 'Beechcraft BE20'},
            {src: './photos/general/general-p (5).JPG', desc: 'Beechcraft BE20'},
            {src: './photos/general/general-p (6).JPG', desc: 'Cessna C172 Skyhawk'},
            {src: './photos/general/general-p (7).JPG', desc: 'Aquila AT01'},
            {src: './photos/general/general-p (8).JPG', desc: 'Cessna C172 Skyhawk'},
            {src: './photos/general/general-p (9).JPG', desc: 'Cessna C172 Skyhawk'},
            {src: './photos/general/general-p (10).JPG', desc: 'Diamond DA42 Twin Star'},
            {src: './photos/general/general-p (11).JPG', desc: 'Cessna C172 Skyhawk'},
            {src: './photos/general/general-p (12).JPG', desc: 'Pilatus PC-12 NG'},
            {src: './photos/general/general-section.JPG', desc: 'Cessna C206 Stationair'},
        ],
        'general-helico': [
            {src: './photos/general/general-h.JPG', desc: 'Robinson R44 Raven II'},
            {src: './photos/general/general-h (1).JPG', desc: 'Robinson R22 Beta II'},
            {src: './photos/general/general-h (2).JPG', desc: 'Robinson R22 Beta II'}
        ],
        'private-planes': [
            {src: './photos/prive/prive-p (1).JPG', desc: 'Dassault Falcon 7X'},
            {src: './photos/prive/prive-p (2).JPG', desc: 'Gulfstream G650'},
            {src: './photos/prive/prive-p (3).JPG', desc: 'Dasault Falcon 900'},
            {src: './photos/prive/prive-p (4).JPG', desc: 'Embraer Legacy 650'},
            {src: './photos/prive/prive-p (5).JPG', desc: 'Cessna 525B Citation CJ3+'},
            {src: './photos/prive/prive-p (6).JPG', desc: 'Cessna 560XL Citation XLS'},
            {src: './photos/prive/prive-p (7).JPG', desc: 'Cessna 510 Citation Mustang'},
            {src: './photos/prive/prive-p (8).JPG', desc: 'Dasault Falcon 7X'},
            {src: './photos/prive/prive-p (9).JPG', desc: 'Dasault Falcon 7X'},
            {src: './photos/prive/prive-p (10).JPG', desc: 'Cessna Citation Latitude 680A'},
            {src: './photos/prive/prive-p (11).JPG', desc: 'Bombardier Global 6000'},
            {src: './photos/prive/prive-p (12).JPG', desc: 'Embraer Legacy 650'},
            {src: './photos/prive/prive-p (13).JPG', desc: 'Gulfstream G650'},
            {src: './photos/prive/prive-p (14).JPG', desc: 'Pilatus PC-24 Super Versatile Jet'},
            {src: './photos/prive/prive-p (15).JPG', desc: 'Cessna 510 Citation Mustang'},
            {src: './photos/prive/prive-p (16).JPG', desc: 'Cessna 525A Citation CJ2+'},
            {src: './photos/prive/prive-p (17).JPG', desc: 'Cessna 525A Citation CJ2+'},
            {src: './photos/prive/prive-p (18).JPG', desc: 'Cessna 680A Citation Latitude'},
            {src: './photos/prive/prive-p (19).JPG', desc: 'Bombardier Global 7500'},
            {src: './photos/prive/prive-p (21).JPG', desc: 'Dasault Falcon 2000LX'},
            {src: './photos/prive/prive-p (22).JPG', desc: 'Dasault Falcon 2000EX'},
            {src: './photos/prive/prive-p (23).JPG', desc: 'Dassault Falcon 2000EX'},
            {src: './photos/prive/prive-p (24).JPG', desc: 'Dassault Falcon 2000EX'},
            {src: './photos/prive/prive-p (25).JPG', desc: 'Bombardier Global 5000'},
            {src: './photos/prive/prive-p (26).JPG', desc: 'Dassault Falcon 7X'},
            {src: './photos/prive/prive-p (27).JPG', desc: 'Dasault Falcon 7X'}
        ],
        'private-helico': [
            {src: './photos/prive/prive-h.JPG', desc: 'Bell 206B'}
        ],
        'marine-planes': [
            {src: './photos/marine/marine-p.JPG', desc: 'Embraer EMB-121 Xingu'},
            {src: './photos/marine/marine-p (1).JPG', desc: 'Dassault Falcon 10'},
            {src: './photos/marine/marine-p (2).JPG', desc: 'Dasault Falcon 10'},
            {src: './photos/marine/marine-p (3).JPG', desc: 'Dasault Falcon 10'},
            {src: './photos/marine/marine-p (4).JPG', desc: 'Breguet Atlantique II'},
        ],
        'marine-helico': [
            {src: './photos/marine/marine-h (1).JPG', desc: 'Sud Aviation SA365 Dauphin'},
            {src: './photos/marine/marine-h (2).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (3).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (4).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (5).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (6).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (7).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (8).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (9).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (10).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (11).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (12).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (13).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (14).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (15).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (16).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (17).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (18).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (19).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (20).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (21).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (22).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (23).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (24).JPG', desc: 'Sud Aviation SA365 Dauphin'},
            {src: './photos/marine/marine-h (25).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (27).JPG', desc: 'Aérospatiale AS565 Panther'},
            {src: './photos/marine/marine-h (28).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (29).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (30).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (31).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (32).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (33).JPG', desc: 'NHIndustries NH90 Caiman Marine'},
            {src: './photos/marine/marine-h (34).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (35).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (36).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (37).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (38).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (39).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (40).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (41).JPG', desc: 'Airbus Helicopters H160 Guépard'},
            {src: './photos/marine/marine-h (42).JPG', desc: 'Airbus Helicopters H160 Guépard'},        
        ],
        'gd': [
            {src: './photos/gd/gd (1).JPG', desc: 'Airbus Helicopters H135'},
            {src: './photos/gd/gd (2).JPG', desc: 'Airbus Helicopters H145'},
            {src: './photos/gd/gd (3).JPG', desc: 'Airbus Helicopters H145'}
        ],
        'terre': [
            {src: './photos/ATerre/ATerre (1).JPG', desc: 'Sud Aviation SA330 Puma'},
            {src: './photos/ATerre/ATerre (2).JPG', desc: 'Sud Aviation SA330 Puma'},
            {src: './photos/ATerre/ATerre (3).JPG', desc: 'Sud Aviation SA330 Puma'},
            {src: './photos/ATerre/ATerre (4).JPG', desc: 'Sud Aviation SA330 Puma'},
            {src: './photos/ATerre/ATerre (5).JPG', desc: 'Sud Aviation SA330 Puma'},
            {src: './photos/ATerre/terre-section.JPG', desc: 'NHIndustries NH90 Caiman'},
            {src: './photos/ATerre/ATerre (6).JPG', desc: 'Sud Aviation SA330 Puma'}

        ],
        'aae-helico': [
            { src: "./photos/AAE/aae-h.JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (1).JPG", desc: 'Aérospatiale AS550 Fennec' },
            { src: "./photos/AAE/aae-h (2).JPG", desc: 'Aérospatiale AS550 Fennec' },
            { src: "./photos/AAE/aae-h (3).JPG", desc: 'Aérospatiale AS550 Fennec' },
            { src: "./photos/AAE/aae-h (4).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (5).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (6).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (7).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (8).JPG", desc: 'Aérospatiale AS550 Fennec' },
            { src: "./photos/AAE/aae-h (9).JPG", desc: 'Aérospatiale AS550 Fennec' },
            { src: "./photos/AAE/aae-h (10).JPG", desc: 'Aérospatiale AS550 Fennec (Special Livery)' },
            { src: "./photos/AAE/aae-h (11).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (12).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (13).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (14).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (15).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (16).JPG", desc: 'Aérospatiale AS332 Super Puma' },
            { src: "./photos/AAE/aae-h (17).JPG", desc: 'Aérospatiale AS332 Super Puma' }
        ],
        'aae-planes': [
            { src: "./photos/AAE/aae-p (1).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (2).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (3).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (4).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (5).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (6).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (7).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (8).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (9).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (10).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (11).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (12).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (13).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (14).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (15).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (16).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (17).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (18).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (19).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (20).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (21).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (22).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (23).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (24).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (25).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (26).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (27).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (28).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (29).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (30).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (31).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (32).JPG", desc: 'Beechcraft Super King Air 350' },
            { src: "./photos/AAE/aae-p (33).JPG", desc: 'Beechcraft Super King Air 350' },
            { src: "./photos/AAE/aae-p (34).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (35).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (36).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (37).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (38).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (39).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (40).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (41).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (42).JPG", desc: 'Dassault Falcon 900 (French presidential jet)' },
            { src: "./photos/AAE/aae-p (43).JPG", desc: 'Dassault Falcon 900 (French presidential jet)' },
            { src: "./photos/AAE/aae-p (44).JPG", desc: 'Pilatus PC-21' },
            { src: "./photos/AAE/aae-p (45).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (46).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (47).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (48).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (49).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (50).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (51).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (52).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (53).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (54).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (55).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (56).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (57).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (58).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (59).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (60).JPG", desc: 'A Suppr ?' },
            { src: "./photos/AAE/aae-p (61).JPG", desc: 'A Suppr ?' },
            { src: "./photos/AAE/aae-p (62).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (63).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (64).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (65).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (66).JPG", desc: 'Smiley drawn by Extra 330' },
            { src: "./photos/AAE/aae-p (67).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (68).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (69).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (70).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (71).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (72).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (73).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (74).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (75).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (76).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (77).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (78).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (79).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (80).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (81).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (82).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (83).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (84).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (85).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (86).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (87).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (88).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (89).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (90).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (91).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (92).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (93).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (94).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (95).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (96).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (97).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (98).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (99).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (100).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (101).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (102).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (103).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (104).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (105).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (106).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (107).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (108).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (109).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (110).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (111).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (112).JPG", desc: 'Heart drawn by Extra 330' },
            { src: "./photos/AAE/aae-p (113).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (114).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (115).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (116).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (117).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (118).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (119).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (120).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (121).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (122).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (123).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (124).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (125).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (126).JPG", desc: 'Extra Flugzeugbau Extra 330' },
            { src: "./photos/AAE/aae-p (127).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (128).JPG", desc: 'Embraer EMB-121 Xingu' },
            { src: "./photos/AAE/aae-p (129).JPG", desc: 'Beechcraft King Air 200' },
            { src: "./photos/AAE/aae-p (130).JPG", desc: 'Dassault Rafale' },
            { src: "./photos/AAE/aae-p (131).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (132).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (133).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (134).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (135).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (136).JPG", desc: 'CASA CN-235' },
            { src: "./photos/AAE/aae-p (137).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (138).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (139).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (140).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (141).JPG", desc: 'Airbus 400M Atlas' },
            { src: "./photos/AAE/aae-p (142).JPG", desc: 'Embraer EMB-121 Xingu' },
            { src: "./photos/AAE/aae-p (143).JPG", desc: 'Socata TBM-700' },
            { src: "./photos/AAE/aae-p (144).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (145).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (146).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (147).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (148).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (149).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (150).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (151).JPG", desc: 'Dasault Falcon 7X' },
            { src: "./photos/AAE/aae-p (152).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (153).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (154).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (155).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (156).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (157).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (158).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (159).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (160).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (161).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' },
            { src: "./photos/AAE/aae-p (162).JPG", desc: 'Dassault Breguet / Dornier Alpha Jet (Patrouille de France)' }
    ],

        'other': [
    {src: './photos/others/others (1).JPG', desc: 'Gendarmerie Maritime Boat'},
    {src: './photos/others/others (2).JPG', desc: 'Gendarmerie Maritime Boat'},
    {src: './photos/others/others (3).JPG', desc: 'Gendarmerie Martime Boat'},
    {src: './photos/others/others (4).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (5).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (6).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (7).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (8).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (9).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (10).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (11).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (12).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (13).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (14).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (15).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (16).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (17).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (18).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (19).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (20).JPG', desc: 'WW2 Plane'},
    {src: './photos/others/others (21).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (22).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (24).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (25).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (26).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (27).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (28).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (29).JPG', desc: 'WW2 Soldiers'},
    {src: './photos/others/others (30).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (31).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (32).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (33).JPG', desc: 'WW2 Vehicle'},
    {src: './photos/others/others (34).JPG', desc: 'Eagle Statue'},
    {src: './photos/others/others (35).JPG', desc: 'WW2 Vehicle'}
],
    };

    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

    const selectedPhotos = photos[category] || [];
    selectedPhotos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'photo-item';
        div.style.backgroundImage = `url('${photo.src}')`;
        div.onclick = () => showFullscreen(photo.src, photo.desc);
        photoGrid.appendChild(div);
    });

    gallery.style.display = 'block';

    if (url != "https://alphazuluspotting.pages.dev/") {
        document.querySelector('.subcategories').style.display = 'none';
    }
    
}

function showFullscreen(src, desc) {
    const fullscreen = document.getElementById('fullscreen');
    document.getElementById('fullscreen-img').src = src;
    document.getElementById('fullscreen-desc').textContent = desc;
    fullscreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
    document.body.style.overflow = 'auto';
}