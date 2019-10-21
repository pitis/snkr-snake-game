export default class ChooseName extends Phaser.Scene {
  /**
   *  Show the game title and menu.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({ key: 'ChooseName' })
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

    const message = this.add.bitmapText(
      x - 120,
      y - 60,
      'font',
      'ENTER YOUR NAME:'
    )

    let nameInput = document.getElementById('snakeName')
    nameInput.style.display = 'block'

    const submitBtn = this.add.bitmapText(x - 50, y + 60, 'font', 'SUBMIT')
    this.add
      .zone(
        submitBtn.x - submitBtn.width * submitBtn.originX - 16,
        submitBtn.y - submitBtn.height * submitBtn.originY - 16,
        submitBtn.width + 32,
        submitBtn.height + 32
      )
      .setOrigin(0, 0)
      .setInteractive()
      .once('pointerup', () => {
        this.scene.stop('ChooseName')
        this.scene.start('Game')
        nameInput.style.display = 'none'
      })
  }
}
