document.onkeyup = function (e) {
    if (e.ctrlKey && e.which == 88) {
        window.location.href = "../pages/supersecretpage.html";
    }
};

//campo minato

let campo = [];
let colonne = 8;
let righe = 8;
let bombeC = 1;
let flag = false;
let perso = false;
let posBombe = [];
let casellaOn = 0;

window.onload = function () {
    inizio();
}
//aggiunta coordinate casuali nell'array di bombe
function aggiungiBombe() {
    //posBombe.push("2-2");
    //posBombe.push("2-3");
    //posBombe.push("5-6");
    //posBombe.push("3-4");
    //posBombe.push("1-1");

    let bombeRimaste = bombeC;
    while (bombeRimaste > 0) {
        let i = Math.floor(Math.random() * righe)
        let j = Math.floor(Math.random() * colonne)
        let id = i.toString() + "-" + j.toString();

        if (!posBombe.includes(id)) {
            posBombe.push(id);
            bombeRimaste -= 1;
        }
    }
}

function bandieraccia(e) {
    e.preventDefault();
    flag = true;
    console.log(flag);
    casellaCliccata.call(this);
    flag = false;
}

function inizio() {
    document.getElementById("bombe-rimaste").innerText = bombeC;
    document.getElementById("bottone-flag").addEventListener("click",() => {
        flag = !flag;
    });
    aggiungiBombe();


    for (let i = 0; i < righe; i++) {

        let riga = [];

        for (let j = 0; j < colonne; j++) {

            //riempio le righe di caselle che hanno dentro un div
            //e come id le rispettive coordinate x-y

            let casella = document.createElement("div");
            casella.id = i.toString() + "-" + j.toString();
            casella.addEventListener("click", casellaCliccata);
            casella.addEventListener("contextmenu", bandieraccia);
            document.getElementById("tavola").append(casella);
            riga.push(casella); //inserimento di ogni casella nella riga
        }

        campo.push(riga); //inserimento di ogni riga nel campo
    }

    console.log(campo);
}


//funzione per mettere o rimuovere le banierine
function casellaCliccata() {
    if (perso || this.classList.contains("click-casella")) {
        return;
    }

    let casella = this;
    if (flag) {
        if (casella.innerText == "") {
            casella.innerText = "🚩";
        }
        else if (casella.innerText == "🚩") {
            casella.innerText = "";
        }
        return;
    }

    if (posBombe.includes(casella.id)) {
        //alert("Hai Perso");
        perso = true;
        mostraBombe();
        return;
    }

    let coordinate = casella.id.split("-");
    let i = parseInt(coordinate[0]);
    let j = parseInt(coordinate[1]);
    controllaBombe(i, j);
}

function mostraBombe() {
    for (let i = 0; i < righe; i++) {
        for (let j = 0; j < colonne; j++) {
            let casella = campo[i][j];
            if (posBombe.includes(casella.id)) {
                casella.innerText = "💣"
                casella.style.backgroundColor = "red";
            }
        }
    }
}

function controllaBombe(i, j) {
    if (i < 0 || j < 0 || i >= righe || j >= colonne) {
        return;
    }

    if (campo[i][j].classList.contains("click-casella")) {
        return;
    }

    campo[i][j].classList.add("click-casella");
    casellaOn += 1;

    let bombeTrovate = 0;

    bombeTrovate += controllaCasella(i - 1, j - 1);
    bombeTrovate += controllaCasella(i - 1, j);
    bombeTrovate += controllaCasella(i - 1, j + 1);

    bombeTrovate += controllaCasella(i, j - 1);
    bombeTrovate += controllaCasella(i, j + 1);

    bombeTrovate += controllaCasella(i + 1, j - 1);
    bombeTrovate += controllaCasella(i + 1, j);
    bombeTrovate += controllaCasella(i + 1, j + 1);

    if (bombeTrovate > 0) {
        campo[i][j].innerText = bombeTrovate;
        campo[i][j].classList.add("n" + bombeTrovate.toString());
    }
    else {
        controllaBombe(i - 1, j - 1);
        controllaBombe(i - 1, j);
        controllaBombe(i - 1, j + 1);

        controllaBombe(i, j - 1);
        controllaBombe(i, j + 1);

        controllaBombe(i + 1, j - 1);
        controllaBombe(i + 1, j);
        controllaBombe(i + 1, j + 1);

    }

    console.table({ casellaOn, bombeC, righe, colonne })

    if (bombeC == righe * colonne - casellaOn) {
        document.getElementById("bombe-rimaste").innerText = "Hai finito!"
        perso = true;
    }
}

function controllaCasella(i, j) {
    if (i < 0 || j < 0 || i >= righe || j >= colonne) {
        return 0;
    }
    if (posBombe.includes(i.toString() + "-" + j.toString())) {
        return 1;
    }
    return 0;
}