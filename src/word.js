class Word {
  constructor(x, y, size) {
    this.position = createVector(x, y)
    this.size = size
  }

  draw() {
    circle(this.position.x, this.position.y, this.size)
  }
}