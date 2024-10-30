/*Crea un botón con la etiqueta <button> en tu página HTML y 
añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.*/

const buttonElement = document.getElementById('buttonElement')
const printClick = () => {
    console.log(buttonElement.textContent)
}
buttonElement.addEventListener('click', printClick)

/*- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá
 cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"*/

const h1Element = document.getElementById('h1Element')
const mouseOver = () => {
    h1Element.textContent = 'Quita de encima!!!';
}
const mouseLeave = () => {
    h1Element.textContent = 'Soy un título';
}
h1Element.addEventListener('mouseover', mouseOver)
h1Element.addEventListener('mouseleave', mouseLeave)

/*- Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá
  poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando 
  entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación
   de teclas con alt, shift o control*/

const pElement = document.getElementById('pElement');
const keyClick = () => {
    let textChange = 'Has pulsado la tecla '
    pElement.textContent = textChange + event.key
    console.log(event)
}
const keyDown = () => {
    pElement.textContent = 'esperando entrada de teclado...'
}
document.addEventListener('keydown', keyClick)
document.addEventListener('keyup', keyDown)

/*- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el
 texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las 
 palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando
  estés en la primera podrás volver a la última dandole a previous.*/

const exampleArray = ['perro', 'gato', 'hurón', 'hamster', 'unicornio']
const h2Element = document.getElementById('h2Element')
const previousButtonElement = document.getElementById('previousButtonElement')
const nextButtonElement = document.getElementById('nextButtonElement')
let currentPosition = 0
const nextWord = () => {
    h2Element.textContent = exampleArray[currentPosition]
    currentPosition += 1
    if (currentPosition === exampleArray.length) {
        currentPosition = 0;
    }
}
const previousWord = () => {
    h2Element.textContent = exampleArray[currentPosition]
    currentPosition -= 1
    if (currentPosition === -1) {
        currentPosition = exampleArray.length - 1;
    }
}
nextButtonElement.addEventListener('click', nextWord)
previousButtonElement.addEventListener('click', previousWord)
