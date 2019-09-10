import { Sprite, Texture } from 'pixi.js';

export default class Tile extends Sprite {
    constructor() {
        super();

        this.interactive = true;
        this.texture = Texture.from('../../assets/tile.png');
    }
}
