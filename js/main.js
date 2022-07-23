console.log('Pokemon API');

const URL = 'https://pokeapi.co/api/v2/pokemon/'

function render( personajes ) {
    personajes.forEach( personaje => {
        document.write(`<li>${personaje.name}</li>`)
    });
}

fetch( URL )
    .then( res => res.json() )
    .then( data => {
        console.log( data )
        render( data.results )
    })