//generazione del numero randomico (valore da 1 a 100)
let randomNumber = Math.floor (Math.random()*(100-1 + 1)+1);

//togliere il commento dalla riga di codice sotto per controllare subito il numero
// console.log(randomNumber);

//variabile che conterrà i numeri in input dell'utente settata a 0 per avviare almeno la prima volta il ciclo
let userNum = 0;

while(userNum !== randomNumber){

    //input del numero da parte dell'utente
    userNum = parseInt(prompt("Indovina il numero (da 1 a 100)"));

    //controllo sul numero per vedere se è più grande o più grande e restituire la stringa corretta
    if (userNum > randomNumber){
        console.log(`Il numero ${userNum} è troppo alto`);

    }else if (userNum < randomNumber){
        console.log(`Il numero ${userNum} è troppo basso`);

    }
}

//se l'utente dovesse inserire il numero corretto  il ciclo non verrebbe più eseguito e in console vedremmo questo l'output
console.log(`Complimenti! il numero esatto è ${userNum}`);


