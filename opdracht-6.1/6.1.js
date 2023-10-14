function kleur_aanpassen() {
    // Selecteer het eerste h1 element
    var h1 = document.querySelector("h1");

    // Verander de kleur
    h1.style.color = "red";

    // Verander de tekst
    h1.textContent = "Inhoud aangepast!";
}

// Roep de functie aan
kleur_aanpassen();
