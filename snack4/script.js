let userNum;

let userArraylength;

const numeriInseriti = [];

//controllo se il valore è superiore a 10 e anche se non è un numero
do{
    userArraylength =  parseInt(prompt('Quanti valori vuoi inserire? (max 10)'))

}while(isNaN(userArraylength) || userArraylength > 10)

//ciclo per prendere i valori in input dall'utente e caricarli nell'array
for (let i = 0; i < userArraylength; i++) {

    //ciclo do-while solo per evitare che vengano inseriti caratteri diversi da numeri
    do{
        userNum = parseInt(prompt('Inserisci un numero'))
    
    }while(isNaN(userNum));

    //se il resto è diverso da zero significa che il numero inserito è dispari, quindi viene incrementato di 1.
    if(userNum % 2 !== 0){
        userNum++;
    }
    numeriInseriti.push(userNum);
}
//output dell'array con tutti i valori (saranno tutti pari)
console.log("Ai numeri dispari è stato incrementato il valore di uno", numeriInseriti);

