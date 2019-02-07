class Lobby extends Phaser.Scene {
  constructor() {
    super({ key: 'lobby' })
  }

  preload() {
    console.log('Preload (Lobby)')
  }

  create() {
    console.log('Create (Lobby)')

    this.input.manager.enabled = true
    this.input.once('pointerdown', function () {
      this.scene.start('stage')
    }, this)
  }
}
