function doIt() {
  console.log("I'm working dude")
  fetch("http://127.0.0.1:3000/translate?w=mathematics&sl=en&tl=fa")
    .then((data) => data.json())
    .then((result) => console.log(result))
}
