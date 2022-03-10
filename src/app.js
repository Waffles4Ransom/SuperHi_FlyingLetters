let words

function setup()  {
  createCanvas(windowWidth, windowHeight)
  words = []
}

function draw() {
  background('#16ab59') //overwrite bckgd w/each draw to have single circle
  words.forEach(w => w.draw()) 
}

function mouseDragged() {
  let w = new Word(mouseX, mouseY, 50)
  words.push(w)
}