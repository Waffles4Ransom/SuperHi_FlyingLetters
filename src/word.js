class Word {
  constructor(x, y, size) {
    this.position = createVector(x, y)
    this.speed = createVector(0, -5)
    this.size = size
  }

  move() {
    this.position = this.position.add(this.speed)
  }

  draw() {
    this.move()
    circle(this.position.x, this.position.y, this.size)
  }
}