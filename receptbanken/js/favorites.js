//Favorites markings
import { updateRecipes, favoriteRecipesBank } from "../js/lista.js";

const isFavoritesPage =
    window.location.pathname.includes("favorites");
    
const imagePath = isFavoritesPage ? "../data/img/" : "data/img/";

export function favoriteList() {
    const recipeList = document.getElementById("recipe-list");

    if (!recipeList){ return }

    recipeList.replaceChildren();

    const favoriteRecipes = updateRecipes()
    .filter(recipe => recipe.favorite === true);


    favoriteRecipes.forEach((favored) => {
        const item = document.createElement("li");
        item.id = "recipe" + favored.id
        item.classList.add("recipeCommon");

        const title = document.createElement("h2");
        title.textContent = favored.titel;

        const img = document.createElement("img");
        img.src = imagePath + favored.imgsrc;
       
        img.alt = `Bild på ${favored.titel}`;
        img.classList.add("recipeImg");
        
        //Render out the favoriteRecipesBank
        const myFavorites = favoriteRecipesBank(favored, favoriteRecipes);

        item.append(img, title, myFavorites);
        recipeList.append(item);
    });
    // update Favorite-page with favorite-recipes  on click on the html id=faveStatus
   recipeList.addEventListener("click", (event) => {
        if (event.target.matches(".faveStatus")) {
                favoriteList();
            }
    });
}

favoriteList();

