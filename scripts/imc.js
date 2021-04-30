let taille = document.getElementById("taille");
let poids = document.getElementById("poids");
let imc;
let indicateur;
let addT = document.getElementById("addT");
let addP = document.getElementById("addP");
let reset = document.getElementById("reset");

// Focus par defaut dans le premier champ "Taille"
taille.focus();
document.getElementById("imcresult").style.display = 'none';

addT.addEventListener("click", () => {
    taille = document.getElementById("taille").value;
    document.getElementById("imcresult").style.display = 'block';
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
            document.getElementById("result").innerHTML = "Votre poids est " + poids + " kg" + "<br>" + "Votre taille est de " + taille + " m" + "<br>" + "Votre IMC est donc de " + "<div class=\"numberCircle\">" + imc + "</div>";

        }
    }
    document.getElementById("imccalcul").style.display = 'none';
    document.getElementById("imcresult").style.display = 'block';
    document.getElementById("taille").value = '';
    document.getElementById("poids").value = '';
});

reset.addEventListener("click", () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("imcresult").style.display = 'none';
    document.getElementById("imccalcul").style.display = 'block';
    taille.focus();
});