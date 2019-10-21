export default class Leaderboard extends Phaser.Scene {
  /**
   *  Show the game title and menu.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({ key: 'Leaderboard' })
  }

  /**
   *  Responsible for setting up the game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(/* data */) {
    //  Save viewport center coordinates for reference.
    const x = this.cameras.main.width / 2
    const y = this.cameras.main.height / 2
    //  Place the Title image above the middle of the screen.
    //this.add.image(x, y - 80, 'title')

    let scores
    axios
      .get('https://snake.sneakerindustry.ro:5000/leaderboard')
      .then(res => {
        scores = res.data
      })
      .then(data => {
        scores.map((elem, i) => {
          this.add
            .bitmapText(
              x,
              y + 20 * i,
              'font',
              `${i + 1} ${elem.name.toUpperCase()} ${elem.score}`
            )
            .setOrigin(0.5, 10 - i)
        })
      })

    const backBtn = this.add.bitmapText(x - 300, y + 160, 'font', 'BACK')

    this.add
      .zone(
        backBtn.x - backBtn.width * backBtn.originX - 16,
        backBtn.y - backBtn.height * backBtn.originY - 16,
        backBtn.width + 32,
        backBtn.height + 32
      )
      .setOrigin(0, 0)
      .setInteractive()
      .once('pointerup', () => {
        this.scene.stop('Leaderboard')
        this.scene.start('Menu')
      })
  }
}
