// @flow
import type { Source } from '../types/source';

const sources: Source[] = [
  {
    ldf: 'legioncoreset',
    name: 'Legion Core Set',
    wave: 0,
    released: true,
    contents: {
      units: {
        lukeskywalker: 1,
        darthvader: 1,
        rebeltroopers: 2,
        stormtroopers: 2,
        atrt: 1,
        '74zspeederbikes': 1,
      },
      upgrades: {
        longrangecomlink: 2,
        battlemeditation: 2,
        forcechoke: 1,
        forcepush: 2,
        forcereflexes: 2,
        jedimindtrick: 1,
        saberthrow: 2,
        targetingscopes: 4,
        concussiongrenades: 4,
        atrtlasercannon: 1,
        atrtflamethrower: 1,
        atrtrotaryblaster: 1,
        dlt19stormtrooper: 2,
        hh12stormtrooper: 2,
        mpl57iontrooper: 2,
        z6trooper: 2,
        rebeltrooper: 2,
        stormtrooper: 2,
      },
    },
  },
  {
    ldf: 'atrtunit',
    name: 'AT-RT Unit',
    wave: 1,
    released: true,
    contents: {
      units: { atrt: 1 },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        atrtlasercannon: 1,
        atrtflamethrower: 1,
        atrtrotaryblaster: 1,
      },
    },
  },
  {
    ldf: 'rebeltroopersunit',
    name: 'Rebel Troopers Unit',
    wave: 1,
    released: true,
    contents: {
      units: { rebeltroopers: 1 },
      upgrades: {
        mpl57iontrooper: 1,
        z6trooper: 1,
        rebeltrooper: 1,
        grapplinghooks: 1,
        targetingscopes: 1,
        impactgrenades: 1,
        concussiongrenades: 1,
      },
    },
  },
  {
    ldf: '74zspeederbikesunit',
    name: '74-Z Speeder Bikes Unit',
    wave: 1,
    released: true,
    contents: {
      units: { '74zspeederbikes': 1 },
      upgrades: {
        commsjammer: 1,
        longrangecomlink: 1,
      },
    },
  },
  {
    ldf: 'stormtroopersunit',
    name: 'Stormtroopers Unit',
    wave: 1,
    released: true,
    contents: {
      units: { stormtroopers: 1 },
      upgrades: {
        grapplinghooks: 1,
        impactgrenades: 1,
        dlt19stormtrooper: 1,
        hh12stormtrooper: 1,
        stormtrooper: 1,
        targetingscopes: 1,
        concussiongrenades: 1,
      },
    },
  },
  {
    ldf: 't47airspeederunit',
    name: 'T-47 Airspeeder Unit',
    wave: 1,
    released: true,
    contents: {
      units: { t47airspeeder: 1 },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        ax108groundbuzzer: 1,
        modkpowerharpoon: 1,
        wedgeantilles: 1,
      },
    },
  },
  {
    ldf: 'atstunit',
    name: 'AT-ST Unit',
    wave: 1,
    released: true,
    contents: {
      units: { atst: 1 },
      upgrades: {
        longrangecomlink: 1,
        commsjammer: 1,
        '88twinlightblastercannon': 1,
        atstmortarlauncher: 1,
        dw3concussiongrenadelauncher: 1,
        generalweiss: 1,
      },
    },
  },
  {
    ldf: 'snowtroopersunit',
    name: 'Snowtroopers Unit',
    wave: 2,
    released: true,
    contents: {
      units: { snowtroopers: 1 },
      upgrades: {
        targetingscopes: 1,
        concussiongrenades: 1,
        grapplinghooks: 1,
        impactgrenades: 1,
        snowtrooper: 1,
        flametrooper: 1,
        t7ionsnowtrooper: 1,
      },
    },
  },
  {
    ldf: 'generalveerscommander',
    name: 'General Veers Commander',
    wave: 2,
    released: true,
    contents: {
      units: { generalveers: 1 },
      upgrades: {
        commandingpresence: 1,
        esteemedleader: 1,
        environmentalgear: 1,
      },
    },
  },
  {
    ldf: 'fleettroopersunit',
    name: 'Fleet Troopers Unit',
    wave: 2,
    released: true,
    contents: {
      units: { fleettroopers: 1 },
      upgrades: {
        targetingscopes: 1,
        concussiongrenades: 1,
        grapplinghooks: 1,
        impactgrenades: 1,
        fleettrooper: 1,
        mpl57barragetrooper: 1,
        scatterguntrooper: 1,
      },
    },
  },
  {
    ldf: 'leiaorganacommander',
    name: 'Leia Organa Commander',
    wave: 2,
    released: true,
    contents: {
      units: { leiaorgana: 1 },
      upgrades: {
        commandingpresence: 1,
        esteemedleader: 1,
        environmentalgear: 1,
      },
    },
  },
  {
    ldf: 'rebelcommandosunit',
    name: 'Rebel Commandos Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        rebelcommandos: 1,
        rebelcommandosstriketeam: 1,
      },
      upgrades: {
        duckandcover: 1,
        hquplink: 1,
        emergencystims: 1,
        protonchargesaboteur: 1,
        dh447sniper: 1,
      },
    },
  },
  {
    ldf: 'hansolocommander',
    name: 'Han Solo Commander',
    wave: 3,
    released: true,
    contents: {
      units: { hansolo: 1 },
      upgrades: {
        improvisedorders: 1,
        duckandcover: 1,
        emergencystims: 1,
      },
    },
  },
  {
    ldf: 'scouttroopersunit',
    name: 'Scout Troopers Unit',
    wave: 3,
    released: true,
    contents: {
      units: {
        scouttroopers: 1,
        scouttroopersstriketeam: 1,
      },
      upgrades: {
        duckandcover: 1,
        hquplink: 1,
        emergencystims: 1,
        sonicchargesaboteur: 1,
        dlt19xsniper: 1,
      },
    },
  },
  {
    ldf: 'bobafettoperative',
    name: 'Boba Fett Operative',
    wave: 3,
    released: true,
    contents: {
      units: { bobafett: 1 },
      upgrades: {
        hunter: 1,
        emergencystims: 1,
        duckandcover: 1,
      },
    },
  },
  {
    ldf: 'ewebheavyblasterteamunit',
    name: 'E-Web Heavy Blaster Team Unit',
    wave: 3,
    released: true,
    contents: {
      units: { ewebheavyblasterteam: 1 },
      upgrades: {
        hquplink: 1,
        overchargedgenerator: 1,
        barragegenerator: 1,
      },
    },
  },
  {
    ldf: '14fdlasercannonteamunit',
    name: '1.4 FD Laser Cannon Unit',
    wave: 3,
    released: true,
    contents: {
      units: { '14fdlasercannonteam': 1 },
      upgrades: {
        hquplink: 1,
        overchargedgenerator: 1,
        barragegenerator: 1,
      },
    },
  },
  {
    ldf: 'emperorpalpatinecommander',
    name: 'Emperor Palpatine Commander',
    wave: 4,
    released: true,
    contents: {
      units: { emperorpalpatine: 1 },
      upgrades: {
        anger: 1,
        forcechoke: 1,
        improvisedorders: 1,
      },
    },
  },
  {
    ldf: 'imperialroyalguardsunit',
    name: 'Imperial Royal Guards Unit',
    wave: 4,
    released: true,
    contents: {
      units: { imperialroyalguards: 1 },
      upgrades: {
        reconintel: 1,
        fragmentationgrenades: 1,
        electrostaffguard: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'wookieewarriorsunit',
    name: 'Wookiee Warriors Unit',
    wave: 4,
    released: true,
    contents: {
      units: { wookieewarriors: 1 },
      upgrades: {
        reconintel: 1,
        fragmentationgrenades: 1,
        bowcasterwookiee: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'chewbaccaoperative',
    name: 'Chewbacca Operative',
    wave: 4,
    released: true,
    contents: {
      units: { chewbacca: 1 },
      upgrades: {
        emergencystims: 1,
        tenacity: 1,
        hunter: 1,
      },
    },
  },
  {
    ldf: 'rebelspecialistspersonnel',
    name: 'Rebel Specialists Personnel',
    wave: 5,
    released: true,
    contents: {
      units: { rebelofficer: 1 },
      upgrades: {
        commandingpresence: 1,
        commsrelay: 1,
        reconintel: 1,
        rebelofficer: 1,
        rebelcommstechnician: 1,
        r5astromechdroid: 1,
        '21bmedicaldroid': 1,
      },
    },
  },
  {
    ldf: 'imperialspecialistspersonnel',
    name: 'Imperial Specialists Personnel',
    wave: 5,
    released: true,
    contents: {
      units: { imperialofficer: 1 },
      upgrades: {
        commandingpresence: 1,
        commsrelay: 1,
        reconintel: 1,
        imperialofficer: 1,
        imperialcommstechnician: 1,
        r4astromechdroid: 1,
        fx9medicaldroid: 1,
      },
    },
  },
];

export default sources;
