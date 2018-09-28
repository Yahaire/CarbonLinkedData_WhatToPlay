import { CarbonLDP } from "carbonldp";
import { AccessPoint } from "carbonldp/AccessPoint";

// Documents to add to database
const publishers = [
    `343 Industries`,
    `Activision`,
    `Atari`,
    `Bethesda Game Studios`,
    `Bethesda Softworks`,
    `Blizzard Entertainment`,
    `Bluepoint Games`,
    `Bungie`,
    `Bungie Software`,
    `Bungie Software, Bungie`,
    `Capcom`,
    `Cat Daddy Games`,
    `CD Projekt Red Studio`,
    `Core Design Ltd.`,
    `Digital Eclipse`,
    `DMA Design`,
    `EA Black Box`,
    `EA Canada`,
    `EA DICE`,
    `EA LA`,
    `EA Sports`,
    `EA Sports, EA Vancouver`,
    `EA Tiburon`,
    `Eidos Interactive`,
    `Electronic Arts`,
    `Enix Corporation`,
    `Epic Games`,
    `Game Arts`,
    `Game Freak`,
    `Good Science Studio`,
    `HAL Labs`,
    `Harmonix Music Systems`,
    `Hasbro Interactive`,
    `High Moon Studios`,
    `Hudson`,
    `Hudson Soft`,
    `Infinity Ward`,
    `Infinity Ward, Sledgehammer Games`,
    `Insomniac Games`,
    `Intelligent Systems`,
    `KCEJ`,
    `Kojima Productions`,
    `Konami`,
    `Level 5`,
    `Lionhead Studios`,
    `Mass Media`,
    `Microsoft Game Studios`,
    `Namco`,
    `Naughty Dog`,
    `Naughty Dog, SCE/WWS`,
    `Nd Cube`,
    `Neversoft Entertainment`,
    `Neversoft Entertainment, BudCat`,
    `Next Level Games`,
    `Nintendo`,
    `Nintendo EAD Tokyo`,
    `Obsidian Entertainment`,
    `Palcom`,
    `Pipeworks Software, Inc.`,
    `Polyphony Digital`,
    `Rare Ltd.`,
    `Ready at Dawn`,
    `Reflections Interactive`,
    `Retro Studios`,
    `Retro Studios, Entertainment Analysis & Development Division`,
    `Rockstar Leeds`,
    `Rockstar North`,
    `Rockstar San Diego`,
    `Rocksteady Studios`,
    `SCE Santa Monica`,
    `SCE/WWS, Media Molecule`,
    `SCEE, Zoe Mode`,
    `Sega`,
    `Sledgehammer Games`,
    `Sony Computer Entertainment`,
    `Sony Computer Entertainment Europe`,
    `Square Enix`,
    `SquareSoft`,
    `Stormfront Studios`,
    `Taito Corporation`,
    `The Sims Studio`,
    `Traveller's Tales`,
    `Treyarch`,
    `TT Fusion`,
    `Turn 10`,
    `Ubisoft`,
    `Ubisoft Montreal`,
    `Ubisoft Paris`,
    `Ubisoft Paris, Ubisoft Montpellier`,
    `Ubisoft, Ubisoft Montreal`,
    `Valve Software`,
    `Vicarious Visions`,
    `Vivendi Games`,    
    ]
const genres = [
    'Sports',
    'Platform',
    'Racing',
    'Role-Playing',
    'Puzzle',
    'Misc',
    'Shooter',
    'Simulation',
    'Action',
    'Fighting',
    'Adventure',
    'Strategy'];
const platforms = [
    'Wii',
    'NES',
    'GB',
    'DS',
    'X360',
    'PS3',
    'PS2',
    'SNES',
    'GBA',
    'PS4',
    '3DS',
    'N64',
    'PS',
    'XB',
    'PC',
    '2600',
    'PSP',
    'XOne',
    'WiiU',
    'GC',
    'GEN',
    'DC',
    'PSV',
    'SAT',
    'SCD',
    'WS',
    'NG',
    'TG16',
    '3DO',
    'GG',
    'PCFX'];
const ratings = [
    'e',
    'e10',
    't',
    'm',
];
const games = [
    {title: `Animal Crossing: City Folk`, releaseYear: 2008, sales: 4.62, score: 74.5, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Simulation`},
    {title: `Animal Crossing: New Leaf`, releaseYear: 2012, sales: 9.16, score: 87.5, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Simulation`},
    {title: `Animal Crossing: Wild World`, releaseYear: 2005, sales: 12.13, score: 86.5, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Simulation`},
    {title: `Assassin's Creed`, releaseYear: 2007, sales: 10.36, score: 78, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Ubisoft Montreal`, genre: `Adventure`},
    {title: `Assassin's Creed II`, releaseYear: 2009, sales: 10.81, score: 88.75, platforms: [`PS3`, `X360`], rating:`M`, publisher:`Ubisoft Montreal`, genre: `Action`},
    {title: `Assassin's Creed III`, releaseYear: 2012, sales: 11.74, score: 76.25, platforms: [`PS3`, `X360`], rating:`M`, publisher:`Ubisoft`, genre: `Action`},
    {title: `Assassin's Creed: Revelations`, releaseYear: 2011, sales: 8.41, score: 76.75, platforms: [`PS3`, `X360`], rating:`M`, publisher:`Ubisoft Montreal`, genre: `Action`},
    {title: `Assassin's Creed: Unity`, releaseYear: 2014, sales: 3.96, score: 59.5, platforms: [`PS4`], rating:`M`, publisher:`Ubisoft, Ubisoft Montreal`, genre: `Action`},
    {title: `Asteroids`, releaseYear: 1980, sales: 4.31, score: 0, platforms: [`2600`], rating:`E`, publisher:`Atari`, genre: `Shooter`},
    {title: `Batman: Arkham Asylum`, releaseYear: 2009, sales: 4.23, score: 90, platforms: [`PS3`], rating:`T`, publisher:`Rocksteady Studios`, genre: `Action`},
    {title: `Batman: Arkham City`, releaseYear: 2011, sales: 10.21, score: 90.75, platforms: [`PS3`, `X360`], rating:`T`, publisher:`Rocksteady Studios`, genre: `Action`},
    {title: `Batman: Arkham Knight`, releaseYear: 2015, sales: 3.95, score: 81.5, platforms: [`PS4`], rating:`M`, publisher:`Rocksteady Studios`, genre: `Action`},
    {title: `Battlefield 1`, releaseYear: 2016, sales: 4.08, score: 86, platforms: [`PS4`], rating:`M`, publisher:`EA DICE`, genre: `Shooter`},
    {title: `Battlefield 3`, releaseYear: 2011, sales: 14.49, score: 79.5, platforms: [`X360`, `PS3`], rating:`M`, publisher:`EA DICE`, genre: `Shooter`},
    {title: `Big Brain Academy`, releaseYear: 2005, sales: 6.62, score: 74, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Misc`},
    {title: `Brain Age 2: More Training in Minutes a Day`, releaseYear: 2005, sales: 15.29, score: 74, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Puzzle`},
    {title: `Brain Age: Train Your Brain in Minutes a Day`, releaseYear: 2005, sales: 20.15, score: 78, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Misc`},
    {title: `Call of Duty 4: Modern Warfare`, releaseYear: 2007, sales: 15.99, score: 89, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Infinity Ward`, genre: `Shooter`},
    {title: `Call of Duty: Advanced Warfare`, releaseYear: 2014, sales: 12.93, score: 68.75, platforms: [`PS4`, `XOne`, `PS3`, `X360`], rating:`M`, publisher:`Sledgehammer Games`, genre: `Shooter`},
    {title: `Call of Duty: Black Ops`, releaseYear: 2010, sales: 27.24, score: 75.5, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Treyarch`, genre: `Shooter`},
    {title: `Call of Duty: Black Ops 3`, releaseYear: 2015, sales: 22.02, score: 0, platforms: [`PS4`, `XOne`], rating:`M`, publisher:`Activision`, genre: `Shooter`},
    {title: `Call of Duty: Black Ops II`, releaseYear: 2012, sales: 27.46, score: 66.75, platforms: [`PS3`, `X360`], rating:`M`, publisher:`Treyarch`, genre: `Shooter`},
    {title: `Call of Duty: Ghosts`, releaseYear: 2013, sales: 19.61, score: 49, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Infinity Ward`, genre: `Shooter`},
    {title: `Call of Duty: Infinite Warfare`, releaseYear: 2016, sales: 4.46, score: 55.5, platforms: [`PS4`], rating:`M`, publisher:`Infinity Ward`, genre: `Shooter`},
    {title: `Call of Duty: Modern Warfare 2`, releaseYear: 2009, sales: 24.07, score: 78.5, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Infinity Ward`, genre: `Shooter`},
    {title: `Call of Duty: Modern Warfare 3`, releaseYear: 2011, sales: 28.05, score: 60.5, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Infinity Ward, Sledgehammer Games`, genre: `Shooter`},
    {title: `Call of Duty: World at War`, releaseYear: 2008, sales: 12.77, score: 80.25, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Treyarch`, genre: `Shooter`},
    {title: `Carnival Games`, releaseYear: 2007, sales: 4.05, score: 58, platforms: [`Wii`], rating:`E`, publisher:`Cat Daddy Games`, genre: `Misc`},
    {title: `Cooking Mama`, releaseYear: 2006, sales: 5.63, score: 69.5, platforms: [`DS`], rating:`E`, publisher:`Taito Corporation`, genre: `Simulation`},
    {title: `Crash Bandicoot`, releaseYear: 1996, sales: 6.82, score: 0, platforms: [`PS`], rating:`E`, publisher:`Sony Computer Entertainment`, genre: `Platform`},
    {title: `Crash Bandicoot 2: Cortex Strikes Back`, releaseYear: 1997, sales: 7.58, score: 0, platforms: [`PS`], rating:`E`, publisher:`Sony Computer Entertainment`, genre: `Platform`},
    {title: `Crash Bandicoot 3: Warped`, releaseYear: 1998, sales: 7.13, score: 90, platforms: [`PS`], rating:`E`, publisher:`Naughty Dog`, genre: `Platform`},
    {title: `Crash Bandicoot: The Wrath of Cortex`, releaseYear: 2001, sales: 5.42, score: 68.5, platforms: [`PS2`], rating:`E`, publisher:`Traveller's Tales`, genre: `Platform`},
    {title: `Crash Team Racing`, releaseYear: 1999, sales: 4.79, score: 89, platforms: [`PS`], rating:`E`, publisher:`Naughty Dog`, genre: `Racing`},
    {title: `Daxter`, releaseYear: 2006, sales: 4.21, score: 86, platforms: [`PSP`], rating:`E10`, publisher:`Ready at Dawn`, genre: `Platform`},
    {title: `Destiny`, releaseYear: 2014, sales: 5.64, score: 68.5, platforms: [`PS4`], rating:`T`, publisher:`Bungie Software, Bungie`, genre: `Shooter`},
    {title: `Diablo III`, releaseYear: 2012, sales: 5.14, score: 64, platforms: [`PC`], rating:`M`, publisher:`Blizzard Entertainment`, genre: `Role-Playing`},
    {title: `Diddy Kong Racing`, releaseYear: 1997, sales: 4.88, score: 0, platforms: [`N64`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Donkey Kong 64`, releaseYear: 1999, sales: 5.27, score: 0, platforms: [`N64`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Donkey Kong Country`, releaseYear: 1994, sales: 9.3, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Donkey Kong Country 2: Diddy's Kong Quest`, releaseYear: 1995, sales: 5.15, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Donkey Kong Country Returns`, releaseYear: 2010, sales: 6.44, score: 86.5, platforms: [`Wii`], rating:`E`, publisher:`Retro Studios`, genre: `Platform`},
    {title: `Donkey Kong Land`, releaseYear: 1994, sales: 3.91, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Dr. Mario`, releaseYear: 1989, sales: 10.19, score: 0, platforms: [`GB`, `NES`], rating:`E`, publisher:`Nintendo`, genre: `Puzzle`},
    {title: `Dragon Quest IX: Sentinels of the Starry Skies`, releaseYear: 2009, sales: 5.78, score: 87.5, platforms: [`DS`], rating:`E10`, publisher:`Level 5`, genre: `Role-Playing`},
    {title: `Dragon Quest VII: Warriors of Eden`, releaseYear: 2000, sales: 4.47, score: 0, platforms: [`PS`], rating:`T`, publisher:`Enix Corporation`, genre: `Role-Playing`},
    {title: `Dragon Quest VIII: Journey of the Cursed King`, releaseYear: 2004, sales: 5.21, score: 88.5, platforms: [`PS2`], rating:`T`, publisher:`Level 5`, genre: `Role-Playing`},
    {title: `Driver`, releaseYear: 1999, sales: 6.27, score: 84, platforms: [`PS`], rating:`T`, publisher:`Reflections Interactive`, genre: `Action`},
    {title: `Driver 2`, releaseYear: 2000, sales: 4.73, score: 69.5, platforms: [`PS`], rating:`T`, publisher:`Reflections Interactive`, genre: `Action`},
    {title: `Duck Hunt`, releaseYear: 1984, sales: 28.31, score: 0, platforms: [`NES`], rating:`T`, publisher:`Nintendo`, genre: `Shooter`},
    {title: `EA Sports Active`, releaseYear: 2009, sales: 3.9, score: 84, platforms: [`Wii`], rating:`E`, publisher:`EA Canada`, genre: `Sports`},
    {title: `Excitebike`, releaseYear: 1984, sales: 4.16, score: 0, platforms: [`NES`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `EyeToy Play`, releaseYear: 2003, sales: 4.2, score: 77.5, platforms: [`PS2`], rating:`E`, publisher:`SCEE, Zoe Mode`, genre: `Misc`},
    {title: `Fable II`, releaseYear: 2008, sales: 4.27, score: 77, platforms: [`X360`], rating:`M`, publisher:`Lionhead Studios`, genre: `Role-Playing`},
    {title: `Fable III`, releaseYear: 2010, sales: 5.1, score: 72.5, platforms: [`X360`], rating:`M`, publisher:`Lionhead Studios`, genre: `Role-Playing`},
    {title: `Fallout 3`, releaseYear: 2008, sales: 8.87, score: 87, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Bethesda Game Studios`, genre: `Role-Playing`},
    {title: `Fallout 4`, releaseYear: 2015, sales: 11.38, score: 75.5, platforms: [`PS4`, `XOne`], rating:`M`, publisher:`Bethesda Game Studios`, genre: `Role-Playing`},
    {title: `Fallout: New Vegas`, releaseYear: 2010, sales: 4.05, score: 82.5, platforms: [`X360`], rating:`M`, publisher:`Obsidian Entertainment`, genre: `Role-Playing`},
    {title: `Far Cry 4`, releaseYear: 2014, sales: 4.04, score: 81, platforms: [`PS4`], rating:`M`, publisher:`Ubisoft Montreal`, genre: `Shooter`},
    {title: `FIFA 12`, releaseYear: 2011, sales: 10.83, score: 0, platforms: [`PS3`, `X360`], rating:`E`, publisher:`Electronic Arts`, genre: `Sports`},
    {title: `FIFA 14`, releaseYear: 2013, sales: 10.69, score: 63.75, platforms: [`PS3`, `X360`], rating:`E`, publisher:`EA Canada`, genre: `Sports`},
    {title: `FIFA 15`, releaseYear: 2014, sales: 10.36, score: 57.25, platforms: [`PS4`, `PS3`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `FIFA 16`, releaseYear: 2015, sales: 8.57, score: 62.5, platforms: [`PS4`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `FIFA 17`, releaseYear: 2016, sales: 7.59, score: 67.5, platforms: [`PS4`], rating:`E`, publisher:`EA Sports, EA Vancouver`, genre: `Sports`},
    {title: `FIFA Soccer 06`, releaseYear: 2005, sales: 4.21, score: 79, platforms: [`PS2`], rating:`E`, publisher:`EA Canada`, genre: `Sports`},
    {title: `FIFA Soccer 07`, releaseYear: 2006, sales: 4.11, score: 0, platforms: [`PS2`], rating:`E`, publisher:`Electronic Arts`, genre: `Sports`},
    {title: `FIFA Soccer 11`, releaseYear: 2010, sales: 5.07, score: 84.5, platforms: [`PS3`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `FIFA Soccer 13`, releaseYear: 2012, sales: 13.32, score: 76.25, platforms: [`PS3`, `X360`], rating:`E`, publisher:`Electronic Arts`, genre: `Action`},
    {title: `Final Fantasy IX`, releaseYear: 2000, sales: 5.3, score: 91.5, platforms: [`PS`], rating:`T`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Final Fantasy VII`, releaseYear: 1997, sales: 9.72, score: 92, platforms: [`PS`], rating:`T`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Final Fantasy VIII`, releaseYear: 1999, sales: 7.86, score: 88, platforms: [`PS`], rating:`T`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Final Fantasy X`, releaseYear: 2001, sales: 8.05, score: 89.5, platforms: [`PS2`], rating:`T`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Final Fantasy X-2`, releaseYear: 2003, sales: 5.29, score: 75.5, platforms: [`PS2`], rating:`T`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Final Fantasy XII`, releaseYear: 2006, sales: 5.95, score: 84, platforms: [`PS2`], rating:`T`, publisher:`Square Enix`, genre: `Role-Playing`},
    {title: `Final Fantasy XIII`, releaseYear: 2009, sales: 5.33, score: 78, platforms: [`PS3`], rating:`T`, publisher:`Square Enix`, genre: `Role-Playing`},
    {title: `Forza Motorsport 2`, releaseYear: 2007, sales: 4.05, score: 86.5, platforms: [`X360`], rating:`E`, publisher:`Turn 10`, genre: `Racing`},
    {title: `Forza Motorsport 3`, releaseYear: 2009, sales: 5.49, score: 86, platforms: [`X360`], rating:`E`, publisher:`Turn 10`, genre: `Racing`},
    {title: `Forza Motorsport 4`, releaseYear: 2011, sales: 4.57, score: 86.5, platforms: [`X360`], rating:`E`, publisher:`Turn 10`, genre: `Racing`},
    {title: `Frogger`, releaseYear: 1997, sales: 4.16, score: 0, platforms: [`PS`], rating:`E`, publisher:`Hasbro Interactive`, genre: `Action`},
    {title: `Gears of War`, releaseYear: 2006, sales: 6.09, score: 88.5, platforms: [`X360`], rating:`M`, publisher:`Epic Games`, genre: `Shooter`},
    {title: `Gears of War 2`, releaseYear: 2008, sales: 6.75, score: 85, platforms: [`X360`], rating:`M`, publisher:`Epic Games`, genre: `Shooter`},
    {title: `Gears of War 3`, releaseYear: 2011, sales: 6.21, score: 84.5, platforms: [`X360`], rating:`M`, publisher:`Epic Games`, genre: `Shooter`},
    {title: `God of War`, releaseYear: 2005, sales: 4.45, score: 91.5, platforms: [`PS2`], rating:`M`, publisher:`SCE Santa Monica`, genre: `Action`},
    {title: `God of War II`, releaseYear: 2007, sales: 4.07, score: 91, platforms: [`PS2`], rating:`M`, publisher:`SCE Santa Monica`, genre: `Action`},
    {title: `God of War III`, releaseYear: 2010, sales: 4.8, score: 89.5, platforms: [`PS3`], rating:`M`, publisher:`SCE Santa Monica`, genre: `Action`},
    {title: `GoldenEye 007`, releaseYear: 1997, sales: 8.09, score: 0, platforms: [`N64`], rating:`M`, publisher:`Nintendo`, genre: `Shooter`},
    {title: `Golf`, releaseYear: 1984, sales: 4.01, score: 0, platforms: [`NES`], rating:`E`, publisher:`Nintendo`, genre: `Sports`},
    {title: `Gran Turismo`, releaseYear: 1997, sales: 10.95, score: 91.5, platforms: [`PS`], rating:`E`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Gran Turismo 2`, releaseYear: 1999, sales: 9.49, score: 91.5, platforms: [`PS`], rating:`T`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Gran Turismo 3: A-Spec`, releaseYear: 2001, sales: 14.98, score: 89.5, platforms: [`PS2`], rating:`E`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Gran Turismo 4`, releaseYear: 2004, sales: 11.66, score: 87, platforms: [`PS2`], rating:`E`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Gran Turismo 5`, releaseYear: 2010, sales: 10.7, score: 79.5, platforms: [`PS3`], rating:`E`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Gran Turismo 5 Prologue`, releaseYear: 2007, sales: 4.19, score: 75.5, platforms: [`PS3`], rating:`E`, publisher:`Polyphony Digital`, genre: `Racing`},
    {title: `Grand Theft Auto III`, releaseYear: 2001, sales: 13.1, score: 91, platforms: [`PS2`], rating:`M`, publisher:`DMA Design`, genre: `Action`},
    {title: `Grand Theft Auto IV`, releaseYear: 2008, sales: 21.51, score: 87.5, platforms: [`X360`, `PS3`], rating:`M`, publisher:`Rockstar North`, genre: `Action`},
    {title: `Grand Theft Auto V`, releaseYear: 2013, sales: 37.31, score: 89.25, platforms: [`PS3`, `X360`, `PS4`, `XOne`], rating:`M`, publisher:`Rockstar North`, genre: `Action`},
    {title: `Grand Theft Auto: Liberty City Stories`, releaseYear: 2005, sales: 7.69, score: 82, platforms: [`PSP`], rating:`M`, publisher:`Rockstar Leeds`, genre: `Action`},
    {title: `Grand Theft Auto: San Andreas`, releaseYear: 2004, sales: 20.81, score: 92.5, platforms: [`PS2`], rating:`M`, publisher:`Rockstar North`, genre: `Action`},
    {title: `Grand Theft Auto: Vice City`, releaseYear: 2002, sales: 16.15, score: 91, platforms: [`PS2`], rating:`M`, publisher:`Rockstar North`, genre: `Action`},
    {title: `Grand Theft Auto: Vice City Stories`, releaseYear: 2006, sales: 5.03, score: 83, platforms: [`PSP`], rating:`M`, publisher:`Rockstar Leeds`, genre: `Action`},
    {title: `Guitar Hero II`, releaseYear: 2006, sales: 5.12, score: 88.5, platforms: [`PS2`], rating:`T`, publisher:`Harmonix Music Systems`, genre: `Misc`},
    {title: `Guitar Hero III: Legends of Rock`, releaseYear: 2007, sales: 9.58, score: 83.5, platforms: [`PS2`, `Wii`, `X360`], rating:`T`, publisher:`Neversoft Entertainment, BudCat`, genre: `Misc`},
    {title: `Half-Life`, releaseYear: 1997, sales: 4.12, score: 93.5, platforms: [`PC`], rating:`M`, publisher:`Valve Software`, genre: `Shooter`},
    {title: `Halo 2`, releaseYear: 2004, sales: 8.49, score: 88.5, platforms: [`XB`], rating:`M`, publisher:`Bungie Software`, genre: `Shooter`},
    {title: `Halo 3`, releaseYear: 2007, sales: 12.12, score: 86, platforms: [`X360`], rating:`M`, publisher:`Bungie Software, Bungie`, genre: `Shooter`},
    {title: `Halo 3: ODST`, releaseYear: 2009, sales: 6.34, score: 77, platforms: [`X360`], rating:`M`, publisher:`Bungie Software, Bungie`, genre: `Shooter`},
    {title: `Halo 4`, releaseYear: 2012, sales: 9.71, score: 78.5, platforms: [`X360`], rating:`M`, publisher:`343 Industries`, genre: `Shooter`},
    {title: `Halo 5: Guardians`, releaseYear: 2015, sales: 4.48, score: 74, platforms: [`XOne`], rating:`T`, publisher:`343 Industries`, genre: `Shooter`},
    {title: `Halo: Combat Evolved`, releaseYear: 2001, sales: 6.43, score: 91.5, platforms: [`XB`], rating:`M`, publisher:`Bungie Software`, genre: `Shooter`},
    {title: `Halo: Reach`, releaseYear: 2010, sales: 9.86, score: 85, platforms: [`X360`], rating:`M`, publisher:`Bungie`, genre: `Shooter`},
    {title: `Just Dance`, releaseYear: 2009, sales: 7.2, score: 64.5, platforms: [`Wii`], rating:`E10`, publisher:`Ubisoft Paris`, genre: `Misc`},
    {title: `Just Dance 2`, releaseYear: 2010, sales: 9.44, score: 73.5, platforms: [`Wii`], rating:`E10`, publisher:`Ubisoft`, genre: `Misc`},
    {title: `Just Dance 3`, releaseYear: 2011, sales: 10.12, score: 76, platforms: [`Wii`], rating:`E10`, publisher:`Ubisoft`, genre: `Misc`},
    {title: `Just Dance 4`, releaseYear: 2012, sales: 6.76, score: 73.5, platforms: [`Wii`], rating:`E10`, publisher:`Ubisoft`, genre: `Misc`},
    {title: `Kinect Adventures!`, releaseYear: 2010, sales: 21.81, score: 62, platforms: [`X360`], rating:`E`, publisher:`Good Science Studio`, genre: `Misc`},
    {title: `Kinect Sports`, releaseYear: 2010, sales: 6.19, score: 73.5, platforms: [`X360`], rating:`E10`, publisher:`Rare Ltd.`, genre: `Sports`},
    {title: `Kingdom Hearts`, releaseYear: 2002, sales: 6.4, score: 86.5, platforms: [`PS2`], rating:`E`, publisher:`SquareSoft`, genre: `Role-Playing`},
    {title: `Kingdom Hearts II`, releaseYear: 2005, sales: 4.33, score: 88.5, platforms: [`PS2`], rating:`E10`, publisher:`Square Enix`, genre: `Role-Playing`},
    {title: `Kirby's Dream Land`, releaseYear: 1992, sales: 5.13, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Left 4 Dead 2`, releaseYear: 2009, sales: 3.97, score: 87.5, platforms: [`X360`], rating:`M`, publisher:`Valve Software`, genre: `Shooter`},
    {title: `LEGO Star Wars: The Complete Saga`, releaseYear: 2007, sales: 10.4, score: 75.75, platforms: [`Wii`, `DS`], rating:`E10`, publisher:`Traveller's Tales`, genre: `Action`},
    {title: `Link's Crossbow Training`, releaseYear: 2007, sales: 4.98, score: 69.5, platforms: [`Wii`], rating:`T`, publisher:`Nintendo`, genre: `Shooter`},
    {title: `LittleBigPlanet`, releaseYear: 2008, sales: 5.82, score: 81.5, platforms: [`PS3`], rating:`E`, publisher:`SCE/WWS, Media Molecule`, genre: `Platform`},
    {title: `Luigi's Mansion: Dark Moon`, releaseYear: 2013, sales: 4.59, score: 85, platforms: [`3DS`], rating:`E`, publisher:`Next Level Games`, genre: `Action`},
    {title: `Madden NFL 06`, releaseYear: 2005, sales: 4.91, score: 84, platforms: [`PS2`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `Madden NFL 07`, releaseYear: 2006, sales: 4.49, score: 83, platforms: [`PS2`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `Madden NFL 2003`, releaseYear: 2002, sales: 4.14, score: 86, platforms: [`PS2`], rating:`E`, publisher:`EA Sports`, genre: `Sports`},
    {title: `Madden NFL 2004`, releaseYear: 2003, sales: 5.23, score: 89.5, platforms: [`PS2`], rating:`E`, publisher:`EA Tiburon`, genre: `Sports`},
    {title: `Madden NFL 2005`, releaseYear: 2004, sales: 4.53, score: 85, platforms: [`PS2`], rating:`E`, publisher:`EA Tiburon`, genre: `Sports`},
    {title: `Mario & Sonic at the Olympic Games`, releaseYear: 2007, sales: 13.08, score: 0, platforms: [`Wii`, `DS`], rating:`E`, publisher:`Sega`, genre: `Sports`},
    {title: `Mario & Sonic at the Olympic Winter Games`, releaseYear: 2009, sales: 4.53, score: 0, platforms: [`Wii`], rating:`E`, publisher:`Sega`, genre: `Sports`},
    {title: `Mario Kart 64`, releaseYear: 1996, sales: 9.87, score: 0, platforms: [`N64`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Mario Kart 7`, releaseYear: 2011, sales: 12.66, score: 83.5, platforms: [`3DS`], rating:`E`, publisher:`Retro Studios, Entertainment Analysis & Development Division`, genre: `Racing`},
    {title: `Mario Kart 8`, releaseYear: 2014, sales: 7.09, score: 89.5, platforms: [`WiiU`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Mario Kart DS`, releaseYear: 2005, sales: 23.21, score: 88.5, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Mario Kart Wii`, releaseYear: 2008, sales: 35.52, score: 82.5, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Mario Kart: Double Dash!!`, releaseYear: 2003, sales: 6.95, score: 0, platforms: [`GC`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Mario Kart: Super Circuit`, releaseYear: 2001, sales: 5.47, score: 88, platforms: [`GBA`], rating:`E`, publisher:`Intelligent Systems`, genre: `Racing`},
    {title: `Mario Party 8`, releaseYear: 2007, sales: 8.27, score: 62.5, platforms: [`Wii`], rating:`E`, publisher:`Hudson`, genre: `Misc`},
    {title: `Mario Party DS`, releaseYear: 2007, sales: 8.91, score: 75, platforms: [`DS`], rating:`E`, publisher:`Hudson Soft`, genre: `Misc`},
    {title: `Medal of Honor: Frontline`, releaseYear: 2002, sales: 6.83, score: 86.5, platforms: [`PS2`], rating:`T`, publisher:`EA LA`, genre: `Shooter`},
    {title: `Medal of Honor: Rising Sun`, releaseYear: 2003, sales: 5.13, score: 72, platforms: [`PS2`], rating:`T`, publisher:`EA LA`, genre: `Shooter`},
    {title: `Metal Gear Solid`, releaseYear: 1998, sales: 6.03, score: 94, platforms: [`PS`], rating:`M`, publisher:`KCEJ`, genre: `Action`},
    {title: `Metal Gear Solid 2: Sons of Liberty`, releaseYear: 2001, sales: 6.05, score: 91.5, platforms: [`PS2`], rating:`M`, publisher:`KCEJ`, genre: `Action`},
    {title: `Metal Gear Solid 3: Snake Eater`, releaseYear: 2004, sales: 4.23, score: 92, platforms: [`PS2`], rating:`M`, publisher:`KCEJ`, genre: `Action`},
    {title: `Metal Gear Solid 4: Guns of the Patriots`, releaseYear: 2008, sales: 5.99, score: 90.5, platforms: [`PS3`], rating:`M`, publisher:`Kojima Productions`, genre: `Action`},
    {title: `Michael Jackson: The Experience`, releaseYear: 2010, sales: 4.36, score: 69.5, platforms: [`Wii`], rating:`E10`, publisher:`Ubisoft Paris, Ubisoft Montpellier`, genre: `Misc`},
    {title: `Microsoft Flight Simulator`, releaseYear: 1996, sales: 5.12, score: 0, platforms: [`PC`], rating:`E`, publisher:`Microsoft Game Studios`, genre: `Simulation`},
    {title: `Minecraft`, releaseYear: 2013, sales: 14.44, score: 0, platforms: [`X360`, `PS3`, `PS4`], rating:`E`, publisher:`Microsoft Game Studios`, genre: `Misc`},
    {title: `Monster Hunter 4 Ultimate`, releaseYear: 2014, sales: 3.89, score: 86.5, platforms: [`3DS`], rating:`T`, publisher:`Capcom`, genre: `Role-Playing`},
    {title: `Monster Hunter Freedom 3`, releaseYear: 2010, sales: 4.87, score: 0, platforms: [`PSP`], rating:`T`, publisher:`Capcom`, genre: `Role-Playing`},
    {title: `Monster Hunter Freedom Unite`, releaseYear: 2008, sales: 5.48, score: 84, platforms: [`PSP`], rating:`T`, publisher:`Capcom`, genre: `Role-Playing`},
    {title: `Namco Museum`, releaseYear: 2001, sales: 4.24, score: 76, platforms: [`GBA`], rating:`E`, publisher:`Mass Media`, genre: `Misc`},
    {title: `Namco Museum Vol.3`, releaseYear: 1996, sales: 4.05, score: 0, platforms: [`PS`], rating:`E10`, publisher:`Sony Computer Entertainment`, genre: `Misc`},
    {title: `Namco Museum: 50th Anniversary`, releaseYear: 2005, sales: 3.98, score: 0, platforms: [`PS2`], rating:`E10`, publisher:`Digital Eclipse`, genre: `Misc`},
    {title: `Need for Speed Underground`, releaseYear: 2003, sales: 7.2, score: 85.5, platforms: [`PS2`], rating:`E`, publisher:`EA Black Box`, genre: `Racing`},
    {title: `Need for Speed Underground 2`, releaseYear: 2004, sales: 6.9, score: 84, platforms: [`PS2`], rating:`E`, publisher:`EA Canada`, genre: `Racing`},
    {title: `Need for Speed: Most Wanted`, releaseYear: 2005, sales: 4.37, score: 86.5, platforms: [`PS2`], rating:`T`, publisher:`EA Canada`, genre: `Racing`},
    {title: `New Super Mario Bros.`, releaseYear: 2006, sales: 29.8, score: 87, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `New Super Mario Bros. 2`, releaseYear: 2012, sales: 9.9, score: 75, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `New Super Mario Bros. U`, releaseYear: 2012, sales: 5.22, score: 82.5, platforms: [`WiiU`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `New Super Mario Bros. Wii`, releaseYear: 2009, sales: 28.32, score: 85.5, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Nintendo Land`, releaseYear: 2012, sales: 4.42, score: 78, platforms: [`WiiU`], rating:`E10`, publisher:`Nintendo`, genre: `Misc`},
    {title: `Nintendogs`, releaseYear: 2005, sales: 24.67, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Simulation`},
    {title: `Pac-Man`, releaseYear: 1982, sales: 7.81, score: 0, platforms: [`2600`], rating:`E`, publisher:`Atari`, genre: `Puzzle`},
    {title: `Pitfall!`, releaseYear: 1981, sales: 4.5, score: 0, platforms: [`2600`], rating:`E`, publisher:`Activision`, genre: `Platform`},
    {title: `Pokemon Crystal Version`, releaseYear: 2000, sales: 6.39, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Emerald Version`, releaseYear: 2004, sales: 6.41, score: 83, platforms: [`GBA`], rating:`E`, publisher:`Game Freak`, genre: `Role-Playing`},
    {title: `Pokemon Platinum Version`, releaseYear: 2008, sales: 7.72, score: 84, platforms: [`DS`], rating:`E`, publisher:`Game Freak`, genre: `Role-Playing`},
    {title: `Pokemon Yellow: Special Pikachu Edition`, releaseYear: 1998, sales: 14.64, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Black 2/Pokemon White 2`, releaseYear: 2012, sales: 8.07, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Black/Pokemon White`, releaseYear: 2010, sales: 15.14, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Diamond/Pokemon Pearl`, releaseYear: 2006, sales: 18.25, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon FireRed/Pokemon LeafGreen`, releaseYear: 2004, sales: 10.49, score: 0, platforms: [`GBA`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Gold/Pokemon Silver`, releaseYear: 1999, sales: 23.1, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon HeartGold/Pokemon SoulSilver`, releaseYear: 2009, sales: 11.77, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Action`},
    {title: `Pokemon Mystery Dungeon: Explorers of Time/Explorers of Darkness`, releaseYear: 2007, sales: 4.93, score: 0, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Omega Ruby/Pokemon Alpha Sapphire`, releaseYear: 2014, sales: 11.68, score: 0, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Pinball`, releaseYear: 1999, sales: 5.31, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Misc`},
    {title: `Pokemon Red/Pokemon Blue`, releaseYear: 1996, sales: 31.37, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Ruby/Pokemon Sapphire`, releaseYear: 2002, sales: 15.85, score: 0, platforms: [`GBA`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon Stadium`, releaseYear: 1999, sales: 5.45, score: 0, platforms: [`N64`], rating:`E`, publisher:`Nintendo`, genre: `Strategy`},
    {title: `Pokemon Sun/Moon`, releaseYear: 2016, sales: 7.14, score: 0, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Pokemon X/Pokemon Y`, releaseYear: 2013, sales: 14.6, score: 0, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Role-Playing`},
    {title: `Professor Layton and the Curious Village`, releaseYear: 2007, sales: 5.19, score: 85.5, platforms: [`DS`], rating:`E`, publisher:`Level 5`, genre: `Puzzle`},
    {title: `Professor Layton and the Diabolical Box`, releaseYear: 2007, sales: 3.94, score: 86, platforms: [`DS`], rating:`E10`, publisher:`Level 5`, genre: `Puzzle`},
    {title: `Red Dead Redemption`, releaseYear: 2010, sales: 12.81, score: 92, platforms: [`PS3`, `X360`], rating:`M`, publisher:`Rockstar San Diego`, genre: `Action`},
    {title: `Resident Evil`, releaseYear: 1996, sales: 5.05, score: 90.5, platforms: [`PS`], rating:`M`, publisher:`Capcom`, genre: `Action`},
    {title: `Resident Evil 2`, releaseYear: 1998, sales: 5.82, score: 90.5, platforms: [`PS`], rating:`M`, publisher:`Capcom`, genre: `Action`},
    {title: `Resident Evil 5`, releaseYear: 2009, sales: 5.09, score: 79.5, platforms: [`PS3`], rating:`M`, publisher:`Capcom`, genre: `Action`},
    {title: `Resistance: Fall of Man`, releaseYear: 2006, sales: 4.34, score: 83.5, platforms: [`PS3`], rating:`M`, publisher:`Insomniac Games`, genre: `Shooter`},
    {title: `Sonic the Hedgehog`, releaseYear: 1991, sales: 4.34, score: 0, platforms: [`GEN`], rating:`E`, publisher:`Sega`, genre: `Platform`},
    {title: `Sonic the Hedgehog 2`, releaseYear: 1992, sales: 6.03, score: 0, platforms: [`GEN`], rating:`E`, publisher:`Sega`, genre: `Platform`},
    {title: `Spider-Man: The Movie`, releaseYear: 2002, sales: 4.48, score: 77.5, platforms: [`PS2`], rating:`E`, publisher:`Treyarch`, genre: `Action`},
    {title: `Splatoon`, releaseYear: 2015, sales: 4.43, score: 83, platforms: [`WiiU`], rating:`E10`, publisher:`Nintendo`, genre: `Shooter`},
    {title: `Spyro the Dragon`, releaseYear: 1998, sales: 5, score: 0, platforms: [`PS`], rating:`E10`, publisher:`Sony Computer Entertainment`, genre: `Platform`},
    {title: `Star Fox 64`, releaseYear: 1997, sales: 4.03, score: 0, platforms: [`N64`], rating:`E10`, publisher:`Nintendo`, genre: `Shooter`},
    {title: `Star Wars Battlefront (2015)`, releaseYear: 2015, sales: 7.98, score: 0, platforms: [`PS4`], rating:`M`, publisher:`Electronic Arts`, genre: `Shooter`},
    {title: `StarCraft II: Wings of Liberty`, releaseYear: 2010, sales: 4.84, score: 87.5, platforms: [`PC`], rating:`T`, publisher:`Blizzard Entertainment`, genre: `Strategy`},
    {title: `Street Fighter II Turbo`, releaseYear: 1992, sales: 4.1, score: 0, platforms: [`SNES`], rating:`T`, publisher:`Capcom`, genre: `Fighting`},
    {title: `Street Fighter II: The World Warrior`, releaseYear: 1992, sales: 6.3, score: 0, platforms: [`SNES`], rating:`T`, publisher:`Capcom`, genre: `Fighting`},
    {title: `Street Fighter IV`, releaseYear: 2009, sales: 4.16, score: 83.5, platforms: [`PS3`], rating:`T`, publisher:`Capcom`, genre: `Fighting`},
    {title: `Super Mario 3D Land`, releaseYear: 2011, sales: 10.81, score: 87, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario 3D World`, releaseYear: 2013, sales: 4.32, score: 91.5, platforms: [`WiiU`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario 64`, releaseYear: 1996, sales: 22.19, score: 0, platforms: [`N64`, `DS`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Advance`, releaseYear: 2001, sales: 5.49, score: 81, platforms: [`GBA`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario All-Stars`, releaseYear: 1993, sales: 10.55, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Bros.`, releaseYear: 1985, sales: 45.31, score: 0, platforms: [`NES`, `GB`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Bros. 2`, releaseYear: 1988, sales: 7.46, score: 0, platforms: [`NES`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Bros. 3`, releaseYear: 1988, sales: 22.48, score: 0, platforms: [`NES`, `GBA`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Galaxy`, releaseYear: 2007, sales: 11.35, score: 93, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Galaxy 2`, releaseYear: 2010, sales: 7.51, score: 94, platforms: [`Wii`], rating:`E`, publisher:`Nintendo EAD Tokyo`, genre: `Platform`},
    {title: `Super Mario Kart`, releaseYear: 1992, sales: 8.76, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Racing`},
    {title: `Super Mario Land`, releaseYear: 1989, sales: 18.14, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Land 2: 6 Golden Coins`, releaseYear: 1992, sales: 11.18, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Adventure`},
    {title: `Super Mario Land 3: Wario Land`, releaseYear: 1994, sales: 5.19, score: 0, platforms: [`GB`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario Sunshine`, releaseYear: 2002, sales: 6.31, score: 89, platforms: [`GC`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario World`, releaseYear: 1990, sales: 26.07, score: 0, platforms: [`SNES`, `GBA`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Mario World 2: Yoshi's Island`, releaseYear: 1995, sales: 4.12, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Platform`},
    {title: `Super Smash Bros.`, releaseYear: 1999, sales: 5.55, score: 0, platforms: [`N64`], rating:`T`, publisher:`Nintendo`, genre: `Fighting`},
    {title: `Super Smash Bros. Brawl`, releaseYear: 2008, sales: 12.84, score: 91, platforms: [`Wii`], rating:`T`, publisher:`Game Arts`, genre: `Fighting`},
    {title: `Super Smash Bros. for Wii U and 3DS`, releaseYear: 2014, sales: 12.42, score: 0, platforms: [`3DS`, `WiiU`], rating:`T`, publisher:`Nintendo`, genre: `Fighting`},
    {title: `Super Smash Bros. Melee`, releaseYear: 2001, sales: 7.07, score: 91.5, platforms: [`GC`], rating:`T`, publisher:`HAL Labs`, genre: `Fighting`},
    {title: `Teenage Mutant Ninja Turtles`, releaseYear: 1989, sales: 4.17, score: 0, platforms: [`NES`], rating:`T`, publisher:`Palcom`, genre: `Action`},
    {title: `Tekken 2`, releaseYear: 1996, sales: 5.74, score: 89, platforms: [`PS`], rating:`T`, publisher:`Namco`, genre: `Fighting`},
    {title: `Tekken 3`, releaseYear: 1998, sales: 7.16, score: 93.5, platforms: [`PS`], rating:`T`, publisher:`Namco`, genre: `Fighting`},
    {title: `Tekken Tag Tournament`, releaseYear: 2000, sales: 4.05, score: 85, platforms: [`PS2`], rating:`T`, publisher:`Namco`, genre: `Fighting`},
    {title: `Tetris`, releaseYear: 1989, sales: 35.84, score: 0, platforms: [`GB`, `NES`], rating:`E`, publisher:`Nintendo`, genre: `Puzzle`},
    {title: `The Elder Scrolls IV: Oblivion`, releaseYear: 2006, sales: 4.38, score: 90.5, platforms: [`X360`], rating:`M`, publisher:`Bethesda Softworks`, genre: `Role-Playing`},
    {title: `The Elder Scrolls V: Skyrim`, releaseYear: 2011, sales: 15.2, score: 84, platforms: [`X360`, `PS3`, `PC`], rating:`M`, publisher:`Bethesda Game Studios`, genre: `Role-Playing`},
    {title: `The Last of Us`, releaseYear: 2013, sales: 10.58, score: 46.5, platforms: [`PS3`, `PS4`], rating:`M`, publisher:`Naughty Dog`, genre: `Action`},
    {title: `The Legend of Zelda`, releaseYear: 1986, sales: 6.51, score: 0, platforms: [`NES`], rating:`E`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: A Link to the Past`, releaseYear: 1991, sales: 4.61, score: 0, platforms: [`SNES`], rating:`E`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: Ocarina of Time`, releaseYear: 1998, sales: 11.93, score: 0, platforms: [`N64`, `3DS`], rating:`T`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: Phantom Hourglass`, releaseYear: 2007, sales: 5.08, score: 85, platforms: [`DS`], rating:`E`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: Skyward Sword`, releaseYear: 2011, sales: 3.95, score: 86.5, platforms: [`Wii`], rating:`E10`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: The Wind Waker`, releaseYear: 2002, sales: 4.6, score: 92.5, platforms: [`GC`], rating:`E`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Legend of Zelda: Twilight Princess`, releaseYear: 2006, sales: 7.15, score: 92.5, platforms: [`Wii`], rating:`T`, publisher:`Nintendo`, genre: `Action`},
    {title: `The Lord of the Rings: The Two Towers`, releaseYear: 2002, sales: 4.67, score: 82, platforms: [`PS2`], rating:`T`, publisher:`Stormfront Studios`, genre: `Action`},
    {title: `The Simpsons: Hit & Run`, releaseYear: 2003, sales: 4.7, score: 0, platforms: [`PS2`], rating:`T`, publisher:`Vivendi Games`, genre: `Racing`},
    {title: `The Sims 3`, releaseYear: 2009, sales: 8.01, score: 81, platforms: [`PC`], rating:`T`, publisher:`The Sims Studio`, genre: `Simulation`},
    {title: `The Witcher 3: Wild Hunt`, releaseYear: 2015, sales: 3.97, score: 92, platforms: [`PS4`], rating:`M`, publisher:`CD Projekt Red Studio`, genre: `Role-Playing`},
    {title: `Tomb Raider`, releaseYear: 1996, sales: 4.63, score: 88.5, platforms: [`PS`], rating:`T`, publisher:`Core Design Ltd.`, genre: `Action`},
    {title: `Tomb Raider II`, releaseYear: 1997, sales: 5.24, score: 42.5, platforms: [`PS`], rating:`T`, publisher:`Core Design Ltd.`, genre: `Action`},
    {title: `Tomodachi Life`, releaseYear: 2013, sales: 5.23, score: 0, platforms: [`3DS`], rating:`E`, publisher:`Nintendo`, genre: `Simulation`},
    {title: `Tony Hawk's Pro Skater`, releaseYear: 1999, sales: 5.02, score: 92, platforms: [`PS`], rating:`T`, publisher:`Neversoft Entertainment`, genre: `Sports`},
    {title: `Tony Hawk's Pro Skater 2`, releaseYear: 2000, sales: 4.68, score: 87.5, platforms: [`PS`], rating:`T`, publisher:`Neversoft Entertainment`, genre: `Sports`},
    {title: `Tony Hawk's Pro Skater 3`, releaseYear: 2001, sales: 4.41, score: 86, platforms: [`PS2`], rating:`T`, publisher:`Neversoft Entertainment`, genre: `Sports`},
    {title: `Tony Hawk's Underground`, releaseYear: 2003, sales: 3.9, score: 88.5, platforms: [`PS2`], rating:`T`, publisher:`Neversoft Entertainment`, genre: `Sports`},
    {title: `Uncharted 2: Among Thieves`, releaseYear: 2009, sales: 6.66, score: 92, platforms: [`PS3`], rating:`T`, publisher:`Naughty Dog`, genre: `Action`},
    {title: `Uncharted 3: Drake's Deception`, releaseYear: 2011, sales: 6.74, score: 87.5, platforms: [`PS3`], rating:`T`, publisher:`Naughty Dog`, genre: `Action`},
    {title: `Uncharted 4: A Thief's End`, releaseYear: 2016, sales: 5.38, score: 86, platforms: [`PS4`], rating:`T`, publisher:`Naughty Dog`, genre: `Shooter`},
    {title: `Uncharted: Drake's Fortune`, releaseYear: 2007, sales: 4.92, score: 84.5, platforms: [`PS3`], rating:`T`, publisher:`Naughty Dog, SCE/WWS`, genre: `Action`},
    {title: `Uncharted: The Nathan Drake Collection`, releaseYear: 2015, sales: 4.62, score: 83.5, platforms: [`PS4`], rating:`T`, publisher:`Bluepoint Games`, genre: `Action`},
    {title: `Warcraft II: Tides of Darkness`, releaseYear: 1995, sales: 4.21, score: 0, platforms: [`PC`], rating:`M`, publisher:`Activision`, genre: `Strategy`},
    {title: `Warzone 2100`, releaseYear: 1999, sales: 5.01, score: 0, platforms: [`PS`], rating:`M`, publisher:`Eidos Interactive`, genre: `Strategy`},
    {title: `Watch Dogs`, releaseYear: 2014, sales: 4.05, score: 71.5, platforms: [`PS4`], rating:`M`, publisher:`Ubisoft Montreal`, genre: `Action`},
    {title: `Wii Fit`, releaseYear: 2007, sales: 22.7, score: 78.5, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Sports`},
    {title: `Wii Fit Plus`, releaseYear: 2009, sales: 21.79, score: 77, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Sports`},
    {title: `Wii Party`, releaseYear: 2010, sales: 8.38, score: 71, platforms: [`Wii`], rating:`E`, publisher:`Nd Cube`, genre: `Misc`},
    {title: `Wii Play`, releaseYear: 2006, sales: 28.92, score: 62, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Misc`},
    {title: `Wii Sports`, releaseYear: 2006, sales: 82.53, score: 78, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Sports`},
    {title: `Wii Sports Resort`, releaseYear: 2009, sales: 32.77, score: 80, platforms: [`Wii`], rating:`E`, publisher:`Nintendo`, genre: `Sports`},
    {title: `Winning Eleven: Pro Evolution Soccer 2007`, releaseYear: 2006, sales: 4.39, score: 87.5, platforms: [`PS2`], rating:`E`, publisher:`Konami`, genre: `Sports`},
    {title: `World of Warcraft`, releaseYear: 2004, sales: 6.29, score: 83, platforms: [`PC`], rating:`T`, publisher:`Blizzard Entertainment`, genre: `Role-Playing`},
    {title: `World of Warcraft: The Burning Crusade`, releaseYear: 2007, sales: 4.09, score: 85, platforms: [`PC`], rating:`T`, publisher:`Blizzard Entertainment`, genre: `Role-Playing`},
    {title: `World Soccer Winning Eleven 9`, releaseYear: 2005, sales: 4.06, score: 82, platforms: [`PS2`], rating:`E`, publisher:`Konami`, genre: `Sports`},
    {title: `Zelda II: The Adventure of Link`, releaseYear: 1987, sales: 4.38, score: 0, platforms: [`NES`], rating:`E10`, publisher:`Nintendo`, genre: `Adventure`},
    {title: `Zumba Fitness`, releaseYear: 2010, sales: 6.71, score: 0, platforms: [`Wii`], rating:`E`, publisher:`Pipeworks Software, Inc.`, genre: `Sports`},    
];

let carbonldp = connectToDatabase("https://db.itesm-01.carbonldp.com/");

/**
 * Connects to the given database and returns the connection to be used.
 * @param {string} dbUrl of the Database to which to connect to
 */
function connectToDatabase(dbUrl) {
    console.log("Connecting to database...");
    try {
        const carbonldp = new CarbonLDP(dbUrl);
        console.log("Connection successful! Carbon version: "+ carbonldp.version); 
        return carbonldp;
    }
    catch(err) {
        console.error("Could not connect to the database:");
        console.error(err);
        return;
    }
}


/**
 * Inserts all the given publishers to the database
 * @param {string[]} publishers to insert to the database (each element should be the name of the publisher)
 */
async function insertPublishers(publishers) {
    console.log("insertando publishers");
    for (const publisher of publishers) {
        await carbonldp.documents
            .$create(
                'publishers/', 
                {
                    types: ["Publisher"],
                    publisherName: publisher
                }, 
                publisher
        );
    }
    console.log("Los publishers han sido insertados!");
}

/**
 * Inserts all the given genres to the database
 * @param {string[]} genres to insert to the database (each element should be the name of the genre)
 */
async function insertGenres(genres) {
    console.log("insertando genres");
    for (const genre of genres) {
        await carbonldp.documents
            .$create(
                'genres/', 
                {
                    types: ["Genre"],
                    genreName: genre
                }, 
                genre
        );
    }
    console.log("Los genres han sido insertados!");
}

/**
 * Inserts all the given platforms to the database
 * @param {string[]} platforms to insert to the database (each element should be the name of the platform)
 */
async function insertPlatforms(platforms) {
    console.log("insertando platforms");
    for (const platform of platforms) {
        await carbonldp.documents
            .$create(
                'platforms/', 
                {
                    types: ["Platform"],
                    platformName: platform
                }, 
                platform
        );
    }
    console.log("Los platforms han sido insertados!");
}

/**
 * Inserts all the given ratings to the database
 * @param {string[]} ratings to insert to the database (each element should be the name of the platform)
 */
async function insertRatings(ratings) {
    console.log("insertando ratings");
    for (const rating of ratings) {
        try {
            await carbonldp.documents
                .$create(
                    'ratings/', 
                    {
                        types: ["Rating"],
                        ratingName: rating
                    }, 
                    rating
            );
        }
        catch (err) {
            console.error("not inserted");
        }
    }
    console.log("Los ratings han sido insertados!");
}

/**
 * 
 * @param {game[]} games to insert to the database. The format is described below
 * {
 *  title: string,          // Title of the game
 *  releaseYear: number,    // Year when the game was released
 *  sales: number,          // Sales in millions that the game got
 *  score: number,          // Average score the game received
 *  platforms: string[],    // Array of platform names where the game was release (Will be used as reference to join games with platforms)
 *  rating: string,         // Name of the rating the game received (Will be used as reference to join games with ragings)
 *  publisher: string,      // Developer / Publisher who is the author of the game (Will be used as reference to join games with ratings)
 *  genre: string           // Main genre of the game (Will be used as reference to join games with genres)
 * }
 */
async function insertGames(games) {
    console.log("insertando games");

    for (const game of games) {
        // Add games
        let newGame;
        try {
            newGame = await carbonldp.documents
                .$create(
                    'games/', 
                    {
                        types: ["Game"],
                        title: game.title,
                        releaseYear: game.releaseYear,
                        sales: game.sales,
                        score: game.score,
                    },
                    game.title
            );
        }
        catch (err) {
            console.error("Problem inserting...");
            console.error(game);
            console.error(err);
        }

        // platforms
        try {
            await carbonldp.documents.$create(
                newGame.$id,
                AccessPoint.create({
                    types: [],
                    hasMemberRelation: "platforms",
                    isMemberOfRelation: "games"
                }),
                "platforms/"
            );

            let uriArr = [];
            if (game.platforms && game.platforms.length > 0) {
                for (const platform of game.platforms) {
                    let formattedPlatform = formatForUrl(platform);
                    formattedPlatform = formattedPlatform.replace(/[ &+'!,]+/gi, '-');
                    uriArr.push("https://db.itesm-01.carbonldp.com/platforms/" + formattedPlatform + "/");
                }
                await newGame.$addMembers("platforms/", uriArr);
            }
        }
        catch (err) {
            console.error(`Problem inserting platform access point for ${game.title}...`);
            console.error(err);
        }

        let uri;

        // publishers
        try {
            if (game.publisher) {
                await carbonldp.documents.$create(
                    newGame.$id,
                    AccessPoint.create({
                        types: [],
                        hasMemberRelation: "publishers",
                        isMemberOfRelation: "games"
                    }),
                    "publishers/"
                );
    
                let formattedPublisher = formatForUrl(game.publisher);
                formattedPublisher = formattedPublisher.replace(/[ &+'!?,\/.]+/gi, '-');
                uri = "https://db.itesm-01.carbonldp.com/publishers/" + formattedPublisher + "/";
                await newGame.$addMembers("publishers/", [uri]);
            }
        }
        catch (err) {
            console.error(`Problem inserting publisher access point for ${game.title}...`);
            console.error(err);
        }
            
        // genres
        try {
            if (game.genre) {
                await carbonldp.documents.$create(
                    newGame.$id,
                    AccessPoint.create({
                        types: [],
                        hasMemberRelation: "genres",
                        isMemberOfRelation: "games"
                    }),
                    "genres/"
                );

                let formattedGenre = formatForUrl(game.genre);
                uri = "https://db.itesm-01.carbonldp.com/genres/" + formattedGenre + "/";
                await newGame.$addMembers("genres/", [uri]);
            }
        }
        catch (err) {
            console.error(`Problem inserting genre access point for ${game.title}...`);
            console.error(err);
        }
            
        // ratings
        try {
            if (game.rating) {
                await carbonldp.documents.$create(
                    newGame.$id,
                    AccessPoint.create({
                        types: [],
                        hasMemberRelation: "ratings",
                        isMemberOfRelation: "games"
                    }),
                    "ratings/"
                );

                let formattedRating = formatForUrl(game.rating);
                uri = "https://db.itesm-01.carbonldp.com/ratings/" + formattedRating + "/";
                await newGame.$addMembers("ratings/", [uri]);
            }
        }
        catch (err) {
            console.error(`Problem inserting rating access point for ${game.title}...`);
            console.error(err);
        }

        console.log(`Finished uploading ${game.title}.`);
    }

    console.log("Games insertados!");
}

/**
 * Normalizes a string so it can be used within an url.
 * @param {string} inputString to normalize for use within url's
 */
function formatForUrl(inputString) {
    let formattedString = inputString.toLowerCase();
    formattedString = formattedString.replace(/[&'!?,.]+/gi, '');
    formattedString = formattedString.replace(/[ +\/]+/gi, '-');
    if (formattedString.substring(formattedString.length-1) == "+") {
        formattedString = formattedString.substring(0, formattedString.length-1);
    }

    return formattedString;
}

/**
 * Uploads everything to the db.
 * If an entry is already up in the database, it is skipped.
 */
async function insertAll() {
    await insertPublishers(publishers);
    await insertGenres(genres);
    await insertPlatforms(platforms);
    await insertRatings(ratings);
    await insertGames(games);
}

/**
 * Inserts the default publishers
 */
function insertDefaultPublishers() {
    return insertPublishers(publishers);
}
/**
 * Inserts the default genres
 */
function insertDefaultGenres() {
    return insertGenres(genres);
}
/**
 * Inserts the default platforms
 */
function insertDefaultPlatforms() {
    return insertPlatforms(platforms);
}
/**
 * Inserts the default ratings
 */
function insertDefaultRatings() {
    return insertRatings(ratings);
}
/**
 * Inserts the default games
 */
function insertDefaultGames() {
    return insertGames(games);
}

window.insertAll = insertAll;
window.insertDefaultPublishers = insertDefaultPublishers;
window.insertDefaultGenres = insertDefaultGenres;
window.insertDefaultPlatforms = insertDefaultPlatforms;
window.insertDefaultRatings = insertDefaultRatings;
window.insertDefaultGames = insertDefaultGames;
window.insertGame = insertGame;


getPublishers();
getPlatforms();

async function getPublishers() {
    let unresolvedPublishers = await carbonldp.documents.$getChildren("publishers/");

    let publishers = [];
    for (const unresolvedPublisher of unresolvedPublishers) {
        let publisher = await unresolvedPublisher.$resolve();
        publishers.push(publisher);
    }
    
    let newHtml = '';

    publishers.forEach(publisher => {
        newHtml += `<option value="${publisher.publisherName}">${publisher.publisherName}</option>`;
    });

    document.querySelector('#gamePublisher').innerHTML += newHtml;
}

async function getPlatforms() {
    let unresolvedPlatforms = await carbonldp.documents.$getChildren("platforms/");

    let platforms = [];
    for (const unresolvedPlatform of unresolvedPlatforms) {
        let platform = await unresolvedPlatform.$resolve();
        platforms.push(platform);
    }

    let newHtml = '';

    platforms.forEach(platform => {
        newHtml += `<option value="${platform.platformName}">${platform.platformName}</option>`;
    });

    document.querySelector('#gamePlatforms').innerHTML += newHtml;
}

/**
 * Reads data from the gameForm form and uploads it to the database using insertGames()
 */
async function insertGame() {
    // Get values to upload
    let newGame = {
        title: '', 
        releaseYear: -1, 
        sales: -1, 
        score: -1, 
        platforms: [], 
        rating: '', 
        publisher:'', 
        genre: ''
    };

    newGame.title       = document.getElementById("gameName").value;
    newGame.releaseYear = (new Date()).getFullYear();
    newGame.sales       = document.getElementById("gameSales").value;
    newGame.score       = document.getElementById("gameScore").value;

    let platformsSelect = document.getElementById("gamePlatforms");
    newGame.platforms.push(platformsSelect.options[platformsSelect.selectedIndex].value);
    
    let ratingsSelect = document.getElementById("gameRatings");
    newGame.rating   = ratingsSelect.options[ratingsSelect.selectedIndex].value;

    let publisherSelect = document.getElementById("gamePublisher");
    newGame.publisher   = publisherSelect.options[publisherSelect.selectedIndex].value;
    
    let genreSelect = document.getElementById("gameGenres");
    newGame.genre   = genreSelect.options[genreSelect.selectedIndex].value;
     
    // Verify values
    if (
        !newGame.title
        || !newGame.releaseYear
        || !newGame.sales
        || !newGame.score
        || !newGame.platforms
        || !newGame.rating
        || !newGame.publisher
        || !newGame.genre
    ) {
        alert("Please fill all the fields in the form and try again.");
        return;
    }

    // Verify existance
    let existance = await carbonldp.documents.$executeASKQuery(
        "games/", 
        `
            PREFIX local:<https://db.itesm-01.carbonldp.com/vocabularies/main/#>

            ASK {
                ?x local:title "${newGame.title}"
            }
        `
    );

    if (existance) {
        alert(`The game ${newGame.title} already exists.`);
        return;
    }

    // Add game
    insertGames([newGame]);

    console.log(newGame);
    alert(`The game ${newGame.title} was added succesfully!`);
    document.getElementById("gameForm").reset();
}