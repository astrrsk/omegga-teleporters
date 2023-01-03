import OmeggaPlugin, { OL, PS, PC, WriteSaveObject, OmeggaPlayer } from 'omegga';

type Config = { allowedRole: string };
type Storage = { bar: string };

export default class Plugin implements OmeggaPlugin<Config, Storage> {
  omegga: OL;
  config: PC<Config>;
  store: PS<Storage>;

  constructor(omegga: OL, config: PC<Config>, store: PS<Storage>) {
    this.omegga = omegga;
    this.config = config;
    this.store = store;
  }

  async generateWarpBrick(pos, paint, player) { // This is very annoying to just load 1 brick
    const [x, y, z] = pos;
    let positionalData = [];
    positionalData.push({
      position:[0, 0, 0],
      size: [5, 5, 5],
      color: paint.color,
      material_index: paint.material_index,
      components: {
        BCD_Interact: {
          bPlayInteractSound: false,
          Message: '',
          ConsoleTag: `event:tpb:${x},${y},${z}`
        }
      }
    })

    const loadingUser = {
      id: player.id,
      name: player.name,
    };
  
    const save:WriteSaveObject = {
      author: {
        id: loadingUser.id,
        name: 'TypeScript',
      },
      description: 'Load Segment',
      map: 'Load Segment',
      brick_assets: [ 'PB_DefaultMicroBrick' ],
      colors: [
        [ 255, 255, 255, 255 ], [ 184, 184, 184, 255 ], [ 136, 136, 136, 255 ],
        [ 114, 114, 114, 255 ], [ 90, 90, 90, 255 ],    [ 57, 57, 57, 255 ],
        [ 35, 35, 35, 255 ],    [ 24, 24, 24, 255 ],    [ 17, 17, 17, 255 ],
        [ 6, 6, 6, 255 ],       [ 2, 2, 2, 255 ],       [ 0, 0, 0, 255 ],
        [ 87, 5, 9, 255 ],      [ 235, 6, 6, 255 ],     [ 255, 29, 3, 255 ],
        [ 246, 73, 6, 255 ],    [ 235, 157, 6, 255 ],   [ 61, 164, 4, 255 ],
        [ 9, 139, 5, 255 ],     [ 3, 16, 255, 255 ],    [ 12, 244, 255, 255 ],
        [ 163, 35, 85, 255 ],   [ 48, 8, 72, 255 ],     [ 14, 6, 49, 255 ],
        [ 41, 25, 25, 255 ],    [ 96, 71, 73, 255 ],    [ 181, 131, 134, 255 ],
        [ 45, 44, 27, 255 ],    [ 114, 109, 65, 255 ],  [ 144, 139, 100, 255 ],
        [ 27, 45, 28, 255 ],    [ 65, 114, 68, 255 ],   [ 100, 144, 103, 255 ],
        [ 30, 39, 41, 255 ],    [ 71, 92, 96, 255 ],    [ 131, 171, 181, 255 ],
        [ 23, 5, 2, 255 ],      [ 90, 16, 5, 255 ],     [ 77, 20, 1, 255 ],
        [ 77, 30, 7, 255 ],     [ 144, 60, 18, 255 ],   [ 166, 104, 62, 255 ],
        [ 255, 159, 78, 255 ],  [ 255, 121, 78, 255 ],  [ 50, 20, 13, 255 ],
        [ 21, 12, 3, 255 ],     [ 51, 33, 13, 255 ],    [ 194, 163, 58, 255 ],
        [ 19, 2, 1, 255 ],      [ 73, 4, 1, 255 ],      [ 190, 23, 18, 255 ],
        [ 190, 59, 53, 255 ],   [ 255, 149, 156, 255 ], [ 255, 79, 38, 255 ],
        [ 255, 41, 2, 255 ],    [ 171, 54, 27, 255 ],   [ 109, 64, 5, 255 ],
        [ 171, 99, 8, 255 ],    [ 255, 146, 11, 255 ],  [ 255, 175, 47, 255 ],
        [ 22, 37, 1, 255 ],     [ 67, 80, 12, 255 ],    [ 122, 144, 30, 255 ],
        [ 101, 255, 81, 255 ],  [ 13, 204, 47, 255 ],   [ 0, 77, 0, 255 ],
        [ 11, 54, 11, 255 ],    [ 5, 30, 3, 255 ],      [ 5, 18, 5, 255 ],
        [ 8, 43, 27, 255 ],     [ 9, 96, 53, 255 ],     [ 8, 146, 66, 255 ],
        [ 5, 13, 17, 255 ],     [ 11, 30, 44, 255 ],    [ 1, 34, 64, 255 ],
        [ 0, 65, 122, 255 ],    [ 8, 118, 200, 255 ],   [ 5, 152, 171, 255 ],
        [ 80, 147, 163, 255 ],  [ 134, 250, 255, 255 ], [ 86, 119, 242, 255 ],
        [ 37, 55, 235, 255 ],   [ 12, 25, 156, 255 ],   [ 1, 4, 44, 255 ],
        [ 8, 0, 30, 255 ],      [ 18, 0, 57, 255 ],     [ 56, 19, 100, 255 ],
        [ 141, 45, 255, 255 ],  [ 255, 93, 255, 255 ],  [ 253, 149, 255, 255 ],
        [ 255, 58, 116, 255 ],  [ 91, 18, 55, 255 ],    [ 255, 24, 255, 255 ],
        [ 255, 0, 55, 255 ],    [ 127, 0, 29, 255 ],    [ 55, 0, 55, 255 ]
      ],
      materials: [
        'BMC_Hidden',
        'BMC_Ghost',
        'BMC_Ghost_Fail',
        'BMC_Plastic',
        'BMC_Glass',
        'BMC_Glow',
        'BMC_Metallic',
        'BMC_Hologram'
      ],
      brick_owners: [loadingUser],
      bricks: positionalData
        .map(({position, size, color, material_index, components}) => ({
          size: size,
          position: position,
          color:color,
          material_index:material_index,
          components:components
        })
      )
    };

    return save;
  }

  async init() {
    this.omegga.on('cmd:createtp', async (speaker: string) => {
      const player = this.omegga.getPlayer(speaker);
      if (!player) { return; }
      if (!player.getRoles().includes(this.config.allowedRole) && !player.isHost()) {
        this.omegga.whisper(speaker, 'You do not have permission to run this command.');
        return;
      }
      const position = await player.getPosition();
      let [x, y, z]: number[] | string[] = position;
      x = Math.floor(x).toString(16);
      y = Math.floor(y).toString(16);
      z = Math.floor(z).toString(16);

      const paint = await player.getPaint();
      const loadMe = await this.generateWarpBrick([x, y, z], paint, player);

      player.loadSaveData(loadMe, {quiet: true});

      this.omegga.whisper(speaker, `Generated teleporter interactable for position [<color="fff000">${x}</>, <color="fff000">${y}</>, <color="fff000">${z}</>].`);
    });

    this.omegga.on('event:tpb', (player: OmeggaPlayer, ...args: any[]) => {
      let [x, y, z] = args;
      if (!x || !y || !z) return;
      x = parseInt(x, 16);
      y = parseInt(y, 16);
      z = parseInt(z, 16);

      this.omegga.writeln(`Chat.Command /TP "${player.name}" ${x} ${y} ${z} 0`);
    });

    return { registeredCommands: ['createtp'] };
  }

  async stop() {}
}
