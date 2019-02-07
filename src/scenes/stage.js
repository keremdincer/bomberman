class Stage extends Phaser.Scene {
  constructor() {
    super({ key: 'stage' })
  }

  preload() {
    console.log('Preload (Stage)')
    this.load.image('tiles', '/assets/drawtiles-spaced.png')
    this.load.image('car', '/assets/car90.png')
    this.load.tilemapCSV('map', '/assets/map.csv')
  }

  create() {
    console.log('Create (Stage)')

    const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 })
    const tileset = map.addTilesetImage('tiles', null, 32, 32, 1, 2)
    const layer = map.createStaticLayer(0, tileset, 0, 86)

    const player = this.add.image(64 + 16, 150 + 16, 'car')

    this.input.keyboard.on('keydown_A', event => {
      const tile = layer.getTileAtWorldXY(player.x - 32, player.y, true)
      if (tile.index !== 2) {
        player.x -= 32
        player.angle = 180
      }
    })

    this.input.keyboard.on('keydown_D', event => {
      const tile = layer.getTileAtWorldXY(player.x + 32, player.y, true)
      if (tile.index !== 2) {
        player.x += 32
        player.angle = 0
      }
    })

    this.input.keyboard.on('keydown_W', event => {
      const tile = layer.getTileAtWorldXY(player.x, player.y - 32, true)
      if (tile.index !== 2) {
        player.y -= 32
        player.angle = -90
      }
    })

    this.input.keyboard.on('keydown_S', event => {
      const tile = layer.getTileAtWorldXY(player.x, player.y + 32, true)
      if (tile.index !== 2) {
        player.y += 32
        player.angle = 90
      }
    })
  }
}
