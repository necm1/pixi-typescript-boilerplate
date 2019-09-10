import Room from './room';
import Tile from '../sprites/room/tile';

export default class TileMap {
    private room: Room;

    private map: any[] = [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
    ];

    constructor(room: Room) {
        this.room = room;
    }

    public drawMap(): void {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                const tile = new Tile();

                tile.x = (x * 32) - (y * 32);
                tile.y = (x * 16) + (y * 16);

                this.room.addChild(tile);
            }
        }
    }
}
