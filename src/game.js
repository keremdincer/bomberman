const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  parent: 'bomberman',
  scene: [
    // Menu,
    // Lobby,
    Stage
  ]
}

const game = new Phaser.Game(config)
