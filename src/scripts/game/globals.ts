import LoadManager from "util/loader";
import MyWorker from "worker-loader?filename=engine.js!../engine";

export const EngineWorker = MyWorker;

export const FPS = 10;

export const WIDTH = 854;
export const HEIGHT = 1390;

export const WIDTH_CENTER = WIDTH / 2;
export const HEIGHT_CENTER = HEIGHT / 2;

export const event = new Phaser.Events.EventEmitter();
export const loader = new LoadManager();
