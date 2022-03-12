class Word {
  constructor(x, y, size) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI)
    let mass = 0.25 + random(0, 0.5)
    this.position = createVector(x, y)
    this.speed = createVector(0, -10)
    this.speed = this.speed.rotate(randomAngle)
    this.acceleration = createVector(0, mass)
    this.size = size
  }

  move() {
    this.speed = this.speed.add(this.acceleration)
    this.position = this.position.add(this.speed)
    this.size = constrain(this.size -1, 0, 50)
    // this.speed = this.speed.rotate(PI * 0.01)
  }

  draw() {
    this.move()
    circle(this.position.x, this.position.y, this.size)
  }
}