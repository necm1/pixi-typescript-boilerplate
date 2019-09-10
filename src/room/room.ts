import { Container } from 'pixi.js';
import TileMap from './tilemap';

export default class Room extends Container {

    constructor() {
        super();

        // Raum mittig positionieren
        this.position.set(window.innerWidth / 2, window.innerHeight / 2);

        const tileMap = new TileMap(this);
        tileMap.drawMap();
    }
}
