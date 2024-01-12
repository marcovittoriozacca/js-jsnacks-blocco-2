// due array con grandezze diverse
const array1 = [
    'leone',
    'elefante',
    'tigre',
    'orso',
    'cane',
    'gatto',
    'ippopotamo',
    'zebra',
    'giraffa',
    'lupo',
]

const array2 = [
    'Italia',
    'Stati Uniti',
    'Cina',
    'Brasile',
    'India',
    'Giappone',
    'Australia',
    'Francia',
    'Germania',
    'Sudafrica',
    'Canada',
    'Messico',
    'Argentina',
    'Russia',
    'Regno Unito',
]

//controllo se il primo ha una grandezza maggiore rispetto al secondo
//utile soltanto se si ha voglia di intercambiare elementi o aggiornare le dimensioni degli array
if(array1.length > array2.length){
    
    //assegno al contatore la lunghezza del secondo array (quello più piccolo) e faccio iterare tante volte quanta la differenza tra i due vettori
    // es: array1.length = 15 array2.length = 10  allora il ciclo verrà eseguito 5 volte perché parte dalla base di 10 e arriva a 15
    for (let i = array2.length; i < array1.length; i++) {
        
        //input e push del valore dato dall'utente
        let userText = prompt('Inserisci un elemento da aggiungere');

        array2.push(userText);
    }

}else if ( array1.length < array2.length ){

    //stesso funzionamento di prima ma con i vettori invertiti
    for (let i = array1.length; i < array2.length; i++) {

        let userText = prompt('Inserisci un elemento da aggiungere');

        array1.push(userText);
    }

}
//output dei due array
console.log('Adesso i due array hanno lo stesso numero di elementi!');
console.log(array1, array2);



