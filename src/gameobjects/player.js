class Player {
  constructor(stage) {
    this.stage = stage
    this.gameobject = stage.physics.add.image(64 + 16, 64 + 16, 'car')
    this.speed = 120

    this.tileSize = 32
  }

  /**
   * Yön parametreleri geldiğinde belli bir eksende hareket etmeye başladığında;
   * diğer eksendeki sıra ya da sütuna hizalaması doğru değilse o hizalamayı
   * yapmalı. Örneğin; input left olarak gelmişse ve karakterin pozisyonu sola
   * gidecek şekilde değişiyorsa ama önceki hareketinden dolayı dikey eksende
   * hizalanmamışsa sola yürürken biraz da dikey eksende hizaya oturması için
   * hareket etmesi gerekecek.
   *
   * Öncelikle hareket ettiği eksen dışındaki eksendeki hangi sıraya ya da
   * sütuna daha yakın olduğuna karar vermeli.
   * @param {direction} direction "left" | "right" | "up" | "down"
   */
  move (direction) {
    let offsets = this.alignment()

    if (direction === 'left') {
      this.gameobject.setVelocityX(-this.speed)
      this.gameobject.setVelocityY(0)

      this.gameobject.angle = 180

      this.gameobject.y = offsets.y + 16
    } else if (direction === 'right') {
      this.gameobject.setVelocityX(this.speed)
      this.gameobject.setVelocityY(0)

      this.gameobject.angle = 0

      this.gameobject.y = offsets.y + 16
    } else if (direction === 'up') {
      this.gameobject.setVelocityY(-this.speed)
      this.gameobject.setVelocityX(0)

      this.gameobject.angle = -90

      this.gameobject.x = offsets.x + 16
    } else if (direction === 'down') {
      this.gameobject.setVelocityY(this.speed)
      this.gameobject.setVelocityX(0)

      this.gameobject.angle = 90

      this.gameobject.x = offsets.x + 16
    }

    this.alignment()
  }

  stop () {
    this.gameobject.setVelocityX(0)
    this.gameobject.setVelocityY(0)
  }

  placeBomb () { }
  die () { }

  alignment () {
    let position = {
      x: this.gameobject.x - 16,
      y: this.gameobject.y - 16
    }

    let columnNumber = Math.round(position.x / 32)
    let rowNumber = Math.round(position.y / 32)

    let offsetX = (position.x) - columnNumber * 32
    let offsetY = (position.y) - rowNumber * 32
    // console.log(`X: ${columnNumber}, Y: ${rowNumber}`)
    // console.log(`OffsetX: ${offsetX}, OffsetY: ${offsetY}`)
    // console.log(`offsetX: ${offsetX}, offsetY: ${offsetY}`)

    return { offsetX, offsetY, x: columnNumber * 32, y: rowNumber * 32 }
  }
}
