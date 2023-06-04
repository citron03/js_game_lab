import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("logo", "assets/old-school.png");
  }

  create() {
    this.add.image(400, 300, "logo");
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);
