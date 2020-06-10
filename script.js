let messageParagraph = document.getElementById(`messageParagraph`)
let image = document.getElementById(`image`)

let gameStarted = false
let randomNumber
let rotation = 0
let intervalId

image.addEventListener(`click`, clickImage)

function clickImage() {
  if (gameStarted == false) {
    randomNumber = Math.floor(Math.random() * 270) + 90
    messageParagraph.innerHTML = `Click the image when its rotation is ${randomNumber}.`

    intervalId = setInterval(changeRotation, 10)
    gameStarted = true

    image.style.transform = ``
    rotation = 0
  }
  else {
    let diff = Math.abs(randomNumber - rotation)

    if (diff == 0) {
      messageParagraph.innerHTML = `You got it exactly, nice job!`
    }
    else {
      messageParagraph.innerHTML = `Rotation is ${rotation}. You were off by ${diff}.`
    }

    clearInterval(intervalId)
    gameStarted = false
  }
}

function changeRotation() {
  rotation = rotation + 1
  image.style.transform = `rotate(${rotation}deg)`
}