export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    };

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector(".main_about");
        const formName = document.querySelector(".modal_form_name");
        formName.textContent = this.photographer.name;
        const about = `
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="btn btn_cta" type="button" aria-label="Contact Me" role="Ouvrir le formulaire de contact">Contactez-moi</button>
            <img class="photographer_thumbnail" src="assets/images/photographers/thumbnails/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profilePageHeader.innerHTML = about;
        return about;
    };
};