import * as PIXI from "pixi.js";
import { viewport } from "./Scene";

const text = viewport.addChild(
  new PIXI.Text("Hello, World\n😀", {
    fontsize: 24,
    fill: 0xffffff,
    align: "center"
  })
);
text.anchor.set(0.5);
text.resolution = 8;
text.x = viewport.screenWidth / 2;
text.y = viewport.screenHeight / 2;
