import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PhotographerCard from "../templates/HomePage.js";

const photographersSection = document.querySelector(".main_photographers");
const photographersApi = new Api("./data/photographers.json");

const displayPhotographers = async () => {
    const photographersData = await photographersApi.get();
    const photographers = photographersData.photographers;

    photographers
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const template = new PhotographerCard(photographer);
            const photographerCard = template.createPhotographerCard();
            photographersSection.appendChild(photographerCard);
        });
};

displayPhotographers();