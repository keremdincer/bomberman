class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' })
  }

  preload() {
    console.log('Preload (Menu)')
    this.load.image('splash', '/assets/splash.png')
  }

  create() {
    console.log('Create (Menu)')

    this.splash = this.add.image(400, 300, 'splash')

    this.input.manager.enabled = true
    this.input.once('pointerdown', function () {
      this.scene.start('lobby')
    }, this)
  }
}
