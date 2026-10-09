import { updateRecipes, favoriteRecipesBank } from "../scripts/lista.js";

// //Add favorites to each object
const searchElement = document.getElementById("searchInput");
const recipeList = document.getElementById("recipe-list");

const isFavoritesPage =
    window.location.pathname.includes("favorites");

searchElement.addEventListener('input', () => {

    recipeList.innerHTML = ""; //rensa gamla recept genom att -
                            //ta bort allt html-innehåll innanför 
                            // ul id="recipe-list"></ul>

    const searchTerm = searchElement.value.toLowerCase();

    const updatedRecipes = updateRecipes();

    const recipesToSearch = isFavoritesPage ? updatedRecipes.filter(
        recipe => recipe.favorite
    ) : updatedRecipes;

    const imagePath = isFavoritesPage ? "../data/img/" : "data/img/";

    const matches = recipesToSearch.filter(recipe =>
        recipe.titel.toLowerCase().includes(searchTerm)
    );

    if (matches.length === 0){
            const li = document.createElement("li")
            li.textContent = "No such recipe"
            recipeList.appendChild(li)
            return;
    }
    matches.forEach(recipe => {
        const li = document.createElement("li")
        li.id = "recipe" + recipe.id 
        li.classList.add("recipeCommon")

        const title = document.createElement("h3")
        title.textContent = recipe.titel
        
        const img = document.createElement("img")
        img.src = imagePath + recipe.imgsrc
        img.alt = "En bild på " + recipe.titel
        img.classList.add("recipeImg")
        
        //Add favorites -------------------------------------------|Odia|
        //Render out the favoriteRecipesBank
        const myFavorites = favoriteRecipesBank(recipe, updatedRecipes);

        li.append(title, img, myFavorites)
        
        recipeList.appendChild(li)
    });
});
