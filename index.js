"use strict";


const cardsContainer = document.getElementById("cardContainer");

const cardHTML = actors
.filter((actor) => actor.name && actor.photo && actor.birthdate)
.map((actor) => createActorCard(actor));
console.log(cardHTML)

cardsContainer.append(...cardHTML);