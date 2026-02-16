//base de données local

const articles = [
    { id: 1, titre: "Lune", contenu: " text descriptif trip 1", image: "media/moon_title.jpg" },
    { id: 2, titre: "Mars", contenu: " text descriptif trip 2", image: "media/mars.jpg" },
    { id: 3, titre: "Jupiter", contenu: " text descriptif trip 3", image: "media/jupiter.jpg" }
];

function createCard(article) {
    const divProduit = document.createElement("div");
    divProduit.setAttribute("class", "trip");

    const divImage = document.createElement("div"); //on créer la div
    divImage.setAttribute("class", "photo"); //on lui met les attributs
    divProduit.appendChild(divImage); //divImage enfant de divProduit

    const p = document.createElement("p");
    divImage.appendChild(p);

    const image = document.createElement("img");
    image.setAttribute("src", article.image);
    p.appendChild(image);

    const divText = document.createElement("div");
    divText.setAttribute("class", "text_trip");
    divProduit.appendChild(divText);

    const h1 = document.createElement("h1");
    divText.appendChild(h1);
    h1.textContent = article.titre;

    const textProduit = document.createElement("p");
    textProduit.setAttribute("class", "text_produit");
    divText.appendChild(textProduit);
    textProduit.textContent = article.contenu;

    return divProduit;
}


let x;
const container = container.querySelector("#feed-container"); //creation de variable container qui contient la div feed-container
for (let i = 0; i < articles.length; i++) { //boucle des articles
    x = createCard(articles[i]);
    container.appendChild(x);
}































/*
function displayFeed() {
    
}
let paragraphe = document.createElement('p');
paragraphe.textContent = articles.value;
*/