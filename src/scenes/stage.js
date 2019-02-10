class Stage extends Phaser.Scene {
  constructor() {
    super({ key: 'stage' })

    this.cursors = null
    this.player = null
  }

  preload () {
    console.log('Preload (Stage)')
    this.load.image('tiles', '/assets/drawtiles-spaced.png')
    this.load.image('car', '/assets/car90.png')
    this.load.tilemapCSV('map', '/assets/map.csv')
  }

  create () {
    console.log('Create (Stage)')

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tileset = map.addTilesetImage('tiles', null, 32, 32, 1, 2)
    const layer = map.createStaticLayer(0, tileset, 0, 0)

    this.player = new Player(this)

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update () {
    if (this.cursors.left.isDown) {
      this.player.move('left')
    } else if (this.cursors.right.isDown) {
      this.player.move('right')
    } else if (this.cursors.up.isDown) {
      this.player.move('up')
    } else if (this.cursors.down.isDown) {
      this.player.move('down')
    } else {
      this.player.stop()
    }
  }
}
