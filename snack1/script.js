//array vuoto che conterrà i valori inseriti dall'utente
const numArray = [];

//variabile che conterrà la somma dei valori inseriti nell'array
let sumOfNumbers = 0;

//ciclo while - se la somma dei numeri è, o supererà, il valore "50" smetterà di chiedere i valori all'utente
while(sumOfNumbers < 50){

    //input del valore
    let userNum = parseInt(prompt("inserisci un numero"));

    //inserimento del valore nell'array
    numArray.push(userNum);

    //somma numero il a quelli precedentemente inseriti
    sumOfNumbers += userNum;
}

//output di tutto l'array e della somma
console.log(numArray);
console.log(sumOfNumbers);