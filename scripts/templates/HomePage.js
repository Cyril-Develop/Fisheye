export default class PhotographerCard {
    constructor(photographer){
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement( 'a' );
        article.setAttribute("aria-label", `Voir le profil de ${this.photographer.name}`);
        article.setAttribute("role", "link");
        article.href = `photographer.html?id=${this.photographer.id}`;
        const photographerCard = `
            <article class="photographer_card">
                <img class="photographer_thumbnail" src="./assets/images/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>
                <span class="photographer_price">${this.photographer.price}€/jour</span>
            </article>
                
        `;
        article.innerHTML = photographerCard;
        return article; 
    }
}