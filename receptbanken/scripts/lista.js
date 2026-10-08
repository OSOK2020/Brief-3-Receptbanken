import { recipes } from "../data/databas.js";

export function lista() {
    const recipeList = document.getElementById("recipe-list");

    if (!recipeList) return;

    recipeList.replaceChildren();

    recipes.forEach((recipe) => {
        const item = document.createElement("li");
        item.classList.add("recipeCommon");

        const title = document.createElement("h2");
        title.textContent = recipe.titel;

        const img = document.createElement("img");
        img.src = `data/img/${recipe.imgsrc}`;
        img.alt = `Bild på ${recipe.titel}`;
        img.classList.add("recipeImg");

        item.append(img, title);
        recipeList.append(item);
    });
}

lista();