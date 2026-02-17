//base de données local

const
    articles = [
    { id: 1, titre: "Pandora", contenu: " Planète peuplé de Na'vi, ils aiment communier avec la nature ", image: "pictures/pandora.jpg" },
    { id: 2, titre: "Arakis", contenu: " des épices et des vers géants ", image: "pictures/arakis.jpg" },
    { id: 3, titre: "Endor", contenu: " des ewoks un peu rageux peuvent être trouvés dans la forêt ", image: "pictures/endor.jpg" }
];


function createCard(article, container) {

    const trip = document.createElement("div");
    trip.classList.add("trip");
    container.appendChild(trip);

        const photo_trip = document.createElement("div");
        photo_trip.classList.add("photo_trip");
        trip.appendChild(photo_trip);

            const img = document.createElement("img");
            photo_trip.classList.add("img");
            photo_trip.appendChild(img);
            img.src = article.image;


        const texte_trip = document.createElement("div");
        texte_trip.classList.add("texte_trip");
        trip.appendChild(texte_trip);

            const h1 = document.createElement("h1");
            texte_trip.classList.add("h1");
            texte_trip.appendChild(h1);
            h1.textContent = article.titre;

            const p = document.createElement("p");
            texte_trip.classList.add("p");
            texte_trip.appendChild(p);
            p.textContent = article.contenu;

}

window.addEventListener('load', function () {
    const container = document.getElementById("container");
    articles.forEach((article) => { createCard(article, container) });
});

    async function fetchArticles() {
        const reponse = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10");
        const jokeapi = await reponse.json();
        console.log(jokeapi);
    }


//dropdown
function myFunction() {
        //alert() pour vérifier si le bouton fonctionne
    document.getElementById("myDropdown").classList.toggle("show");
}




























/*
function displayFeed() {
    
}
let paragraphe = document.createElement('p');
paragraphe.textContent = articles.value;
*/