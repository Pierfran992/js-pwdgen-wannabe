// creare tramite l'inserimento del nome, del cognome e del colore preferito una password personalizzata per l'utente con un 21 finale fisso


// chiedi all'utente il nome
var nameUser = prompt('Inserisci il tuo Nome');

console.log(nameUser);

// chiedi all'utente il cognome
var secondNameUser = prompt('Inserisci il tuo Cognome');

console.log(secondNameUser);

// chiedi all'utente il suo colore preferito
var favouriteColor = prompt('Inserisci il tuo colore preferito');

console.log(favouriteColor);

// inserisci dopo i dati ricevuti dall'utente il numero 21

const elementPswd = '21'; 

console.log(elementPswd);

// genera la password avente questo formato generale - nomeCognomeColorepreferito21 -
var password = nameUser + secondNameUser + favouriteColor + elementPswd;

console.log(password); 

// output della password 
document.getElementById('pswd').innerHTML = `La Password che abbiamo creato per te, attraverso un complicatissimo e sicurissimo algoritmo è ${password}`;