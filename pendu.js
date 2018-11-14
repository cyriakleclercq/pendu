
// initialisation du tableau

var tableau = ['aviateur', 'tendance', 'bivouac', 'bonjour', ' extraverti', 'domination','tordu','bulbe'];

var choix_ordi = 0;

var nbr_vie = 10;

// bouton facile
document.getElementById("facile").addEventListener("click", function () {
    nbr_vie = 10;
    document.getElementById("nb_vie").innerHTML = "10";

});

// bouton normal
document.getElementById("normal").addEventListener("click", function () {
    nbr_vie = 7;
    document.getElementById("nb_vie").innerHTML = "7";
});

// bouton difficile
document.getElementById("difficile").addEventListener("click", function () {
    nbr_vie = 5;
    document.getElementById("nb_vie").innerHTML = "5";
});


// fonction aleatoire

function alea () {

// initialisation de la variable aleatoire

    var calc_ordi = Math.floor(Math.random() * tableau.length);

// choix aleatoire dans le tableau

     choix_ordi = tableau[calc_ordi];


}

alea();

function reset2() {
    nbr_vie = 10;
    document.getElementById("felicitations").innerHTML = " ";

}

function focus() {

    document.getElementById('text').focus();

}
// variable de verification mot bon

var mot_correct = 0;


// reset de l'input

function reset () {
    document.getElementById("text").value = "";

}


// fonction bouton

document.getElementById("bouton").addEventListener('click', function () {




    for ( var i = 0; i < choix_ordi.length; i++) {

        var text = document.getElementById("text").value;


        console.log(choix_ordi);
        console.log(text);
        console.log(nbr_vie);

// message d'alerte en cas de surplus de lettre + reset de l'input

        if ( text.length >= 2 ) {
            document.getElementById("reponse").innerHTML = "votre réponse contient trop de lettre";
        }



// message si lettre proposée pas dans le mot recherché

        else if ( choix_ordi.indexOf(text) == -1) {

            document.getElementById("reponse").innerHTML = "votre lettre n'est pas dans la réponse, try again";

        } else {
            document.getElementById("reponse").innerHTML = " ";
        }


// comparaison et affichage dans le resultat en fonction de l'index

        if (text == choix_ordi[i]) {

            document.getElementById("resultat" + i).innerHTML = " " + choix_ordi[i];
            mot_correct++;
        }
}

// comparaison du nombre de lettre vrai avec le nombre de lettre du mot aleatoire

    if ( mot_correct === choix_ordi.length) {

        document.getElementById("felicitations").innerHTML = "Congratulation";
        document.getElementById("alpha").innerHTML = "";
        mot_correct = 0;
        alea();
    }

// deduction de la vie en fonction de mauvaises propositions

    if ( choix_ordi.indexOf(text) == -1) {

        nbr_vie--;
    }

//  raz apres la fin des vies et affichage d'un message loser

    if (nbr_vie === 0) {
        document.getElementById("felicitations").innerHTML = "LOSER" +" " + "mot recherché : " + " "  + choix_ordi;
        alea();

    } else if (nbr_vie < 0) {
        reset2();
    }

    document.getElementById("nb_vie").innerHTML = nbr_vie;
    reset();
    focus();
    });

