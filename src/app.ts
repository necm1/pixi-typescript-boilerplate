import { Application } from 'pixi.js';
import Room from './room/room';

const app = new Application({
    backgroundColor: 0x000,
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true
});

document.body.appendChild(app.view);

app.stage.addChild(new Room());
