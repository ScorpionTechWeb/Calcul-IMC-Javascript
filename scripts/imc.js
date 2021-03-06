let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let imc;
let indicateur;
let addT = document.getElementById("addT");
let addP = document.getElementById("addP");
let reset = document.getElementById("reset");

// Focus par defaut dans le premier champ "Taille"
taille.focus();
document.getElementById("imcresult").style.display = "none";
document.getElementById("h1result").style.display = "none";
reset.hidden = true;

taille.addEventListener("keyup", () => {
    if (taille.value !== "") {
        addT.disabled = false;
    } else {
        addT.disabled = true;
    }
});

poids.addEventListener("keyup", () => {
    if (poids.value !== "") {
        addP.disabled = false;
    } else {
        addP.disabled = true;
    }
});

addT.addEventListener("click", () => {
    taille = document.getElementById("taille").value;
    document.getElementById("imcresult").style.display = "block";
    document.getElementById("h1result").style.display = "none";
    document.getElementById("result").innerHTML = "Votre taille est " + taille + " cm";

    poids.focus();
});

addP.addEventListener("click", () => {
    poids = document.getElementById("poids").value;
    document.getElementById("result").innerHTML = "Votre poids est " + poids;
    if (!isNaN(parseInt(taille)) && taille > 120 && taille < 250) {
        if (!isNaN(parseInt(poids)) && poids > 20 && poids < 500) {
            imc = (poids * 10000) / (taille * taille);
            imc = Math.round(imc);
            document.getElementById("result").innerHTML = "Votre taille est " + taille + " cm" + "<br>" + "Votre poids est de " + poids + " kg" + "<br>" + "Votre IMC est donc de " + '<div class="numberCircle">' + imc + "</div>";
        }
    }
    document.getElementById("imccalcul").style.display = "none";
    document.getElementById("imcresult").style.display = "block";
    document.getElementById("h1result").style.display = "block";
    document.getElementById("taille").value = "";
    document.getElementById("poids").value = "";
    reset.hidden = false;
    reset.disabled = false;
});

reset.addEventListener("click", () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("imcresult").style.display = "none";
    document.getElementById("imccalcul").style.display = "block";
});
