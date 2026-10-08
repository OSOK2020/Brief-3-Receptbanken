import { recipes } from "../data/databas.js";

//Add favorites to each object

const storedRecipes = JSON.parse(localStorage.getItem("recipes"));

const updateRecipes = storedRecipes || recipes.map(recipe => ({
    ...recipe,
    favorite: false
}));
console.log(updateRecipes)

export function lista() {
    const recipeList = document.getElementById("recipe-list");

    if (!recipeList) return;

    recipeList.replaceChildren();

    updateRecipes.forEach((recipe) => {
        const item = document.createElement("li");
        item.id = "recipe" + recipe.id
        item.classList.add("recipeCommon");

        const title = document.createElement("h2");
        title.textContent = recipe.titel;

        const img = document.createElement("img");
        img.src = `data/img/${recipe.imgsrc}`;
        img.alt = `Bild på ${recipe.titel}`;
        img.classList.add("recipeImg");

        //Add favorites -------------------------------------------|Odia|
        const favoriteRecipe = document.createElement("button");
        const myFavorites = JSON.parse(localStorage.getItem("favorites")) || []; //If
        
        //Check if id in localstorage "favorites" matches the database (true/false)
        const isFavorite = myFavorites.some(
            favorite => favorite.id === recipe.id
        );

        console.log(isFavorite)
        //If there is no match:
        if (!isFavorite) {
            favoriteRecipe.textContent = `Spara som favorit`;
        //If there is a match:
        } else {
            favoriteRecipe.textContent = `Spara som favorit ⭐`
        }

        //One click changes the attribute of the button between favorite and not
        favoriteRecipe.addEventListener("click", () => {
            recipe.favorite = !recipe.favorite;

            if (recipe.favorite){
                favoriteRecipe.textContent = `Sparad som favorit ⭐`;
            } else {
                favoriteRecipe.textContent = `Spara som favorit`;
            }

            //Filter on favorite from the updatedRecipes-database
            const favoriteRecipes = updateRecipes.filter(recipe => recipe.favorite);
            
            //Save them as favorites to the localStorage
            localStorage.setItem(
                "favorites",
                JSON.stringify(favoriteRecipes)
            );
        });

        item.append(img, title, favoriteRecipe);
        recipeList.append(item);
    });
}

console.log(JSON.parse(localStorage.getItem("favorites")));

lista();