function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000)
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
}

const fakePic = 'https://thispersondoesnotexist.com/'

function game() {
  const imagesCon = document.getElementById('images')
  const resultCon = document.getElementById('result')
  const streakCon = document.getElementById('streak')
  let streak = 0

  function draw() {
    imagesCon.innerHTML = ''
    resultCon.innerHTML = ''
    imagesCon.style.pointerEvents = 'auto'

    const again = document.createElement('button')
    again.textContent = 'Play again!'
    again.onclick = draw

    const randomBool = Math.random() > 0.5
    const arr = [randomBool, !randomBool]

    for (const isReal of arr) {
      const img = document.createElement('img')
      img.src = isReal ? realPic() : fakePic
      img.onclick = function () {
        imagesCon.style.pointerEvents = 'none'
        resultCon.textContent = isReal
          ? 'You are Correct! '
          : 'You are Incorrect :( '
        streak = isReal ? streak + 1 : 0
        streakCon.innerHTML = 'Streak: ' + streak
        resultCon.appendChild(again)
      }
      imagesCon.appendChild(img)
    }
  }

  draw()
}

game()
