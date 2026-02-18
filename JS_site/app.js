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
        document.getElementById("myDropdown").classList.toggle("show");
}

//FORMULAIRE DYNAMIQUE
function getInputValue() {
    const inputValue = document.getElementById("avis").value;
        const newElement = document.createElement("p"); // créer un élément <p>
        newElement.innerText = inputValue; // mettre le texte dedans
        document.getElementById("output").appendChild(newElement);  // l'ajouter dans la div output
        document.getElementById("avis").value = ""; // vider le champ après envoi

}
//FIN FORMULAIRE DYNAMIQUE


//boucle images
const gallery = [
        {image: "altered/vendangeur.webp"},
        {image: "altered/kitsune.webp"},
        {image: "altered/coucou.webp"},
        {image: "altered/dodo.webp"},
        {image: "altered/contorsionniste.webp"},
        {image: "altered/fille.webp"},
        {image: "altered/meet.webp"}
    ];

function picture(){
    for (let image of gallery) {
        const img = document.createElement("img");
        img.src = image.image;
        container.appendChild(img);
    }
}

function add(){
    const img = document.createElement("img");
    img.src = "altered/dodo.webp";

    const src = document.getElementById("addPic");
    src.appendChild(img);
}



const deleteButton = document
    .getElementById('supp');
const imageElement = document
    .getElementById('addPic');

deleteButton.addEventListener('click',
    function () {
        imageElement.parentNode.removeChild(addPic);
    });


    /*
function supp(){
    const img = document.getElementById("addPic");
    img.src = "galerie/devine.webp";

    const del = document.removeChild(img);
    src.appendChild(img);
    const supprimer = document.getElementById('deleteButton');
    const img = document.getElementById('addPic');

    supprimer.addEventListener('click', function () {
            img.parentNode.removeChild(img);
        });
}
*/

















/*
function getInputValue() {
    const inputValue = document.getElementById("avis").value;
    document.createElement("output").innerText = "output";
    const newElement = document.createElement("avis");
    inputValue.appendChild("avis", newElement);
}
*/