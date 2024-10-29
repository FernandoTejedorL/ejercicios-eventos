/*Crea un botón con la etiqueta <button> en tu página HTML y 
añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.*/

/*- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá
 cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"*/

/*- Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá
  poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando 
  entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación
   de teclas con alt, shift o control*/

/*- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el
 texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las 
 palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando
  estés en la primera podrás volver a la última dandole a previous.*/

const main = {
    tagname: 'main',
    classList: [main],
    children: [
        {
            children: [],
            tagname: 'button',
            classList: ['button-console'],
            textContent: 'Si clickas aqui aparecerá esto en consola'
        },
        {
            tagname: 'h1',
            classList: ['newH1'],
            textContent: 'Soy un título'
        },
        {
            tagname: 'p',
            classList: ['para'],
            textContent: 'esperando entrada de teclado...'
        },
        {
            tagname: 'h2',
            classList: ['newH2'],
            textContent: ''
        },
        {
            tagname: 'button',
            classList: ['previousButton'],
            textContent: 'previous'
        },
        {
            tagname: 'button',
            classList: ['nextButton'],
            textContent: 'next'
        }
    ]
}