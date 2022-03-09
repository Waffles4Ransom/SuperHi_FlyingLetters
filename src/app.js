function setup()  {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background('#16ab59') //overwrite bckgd w/each draw to have single circle

  let w = new Word(mouseX, mouseY, 50)
  w.draw()
}