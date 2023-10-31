// const studente1 = "andrea francioni";
// const studente2 = "francesco bonanno";
// const studente3 = "lorenzo monforte";
// const studente4 = "pasquale iannace";
// //...

// console.log(studente1);
// console.log(studente2);
// console.log(studente3);
// console.log(studente4);

const studenti = [ "francesco mazzocchi", "andrea francioni",  "francesco bonanno", "lorenzo monforte", "pasquale iannace" ];

// studenti = "nuovo valore"; // <-------- ERRORE!

studenti[2] = "Ana Maria Correa Espinosa"; // <------ CONSENTITO! (riassegnazione di un valore)
studenti.push("Andrea Bartoloni"); // <------- CONSENTITO! (aggiunta di un valore)
studenti.push("Lorenzo Pagani"); // <------- CONSENTITO! (aggiunta di un valore)

console.log( studenti );

// const indice = 3;
// const indice = parseInt(prompt("Insierisci un numero tra 0 e 5"));
// console.log( studenti[indice] );

const btn = document.getElementById("getStudentBtn");
btn.addEventListener("click", function() {
    const numero = document.getElementById("numeroStudente").value;
    console.log( studenti[numero] );
});

const randomBtn = document.getElementById("getRandomStudentBtn");
randomBtn.addEventListener("click", function() {
    const numeroCasuale = Math.floor( Math.random() * 5 );
    console.log( studenti[numeroCasuale] );
});

for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];
    console.log( studente );
}

/***************************** */
let numeri = [ 1, 2, 3, 5, 8 ];
numeri.push( 16 );
numeri.push( Math.floor(Math.random() * 100) ); //pusha un numero casuale tra 0 e 100
numeri.push( Math.floor(Math.random() * 100) ); //pusha un numero casuale tra 0 e 100

for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];

    //Stampa solo i numeri pari
    if(numero%2 == 0) {
        console.log(numero);
    }
    
}
