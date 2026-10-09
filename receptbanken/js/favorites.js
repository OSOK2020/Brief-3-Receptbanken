//Favorites markings
import { updateRecipes, favoriteRecipesBank } from "../scripts/lista.js";

const isFavoritesPage =
    window.location.pathname.includes("favorites");
    
const imagePath = isFavoritesPage ? "../data/img/" : "data/img/";

function favoriteList() {
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
        console.log(img.src)
        img.alt = `Bild på ${favored.titel}`;
        img.classList.add("recipeImg");
        
        //Render out the favoriteRecipesBank
        console.log(favored)
        const myFavorites = favoriteRecipesBank(favored, favoriteRecipes);
        console.log(myFavorites)

        item.append(img, title, myFavorites);
        recipeList.append(item);
    });

}

favoriteList();