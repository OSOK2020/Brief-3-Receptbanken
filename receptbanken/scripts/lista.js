import { recipes } from "../data/databas.js";

const isFavoritesPage =
    window.location.pathname.includes("favorites");
    
const imagePath = isFavoritesPage ? "../data/img/" : "data/img/";

//Add favorites to each object

export function updateRecipes() {
    //Get favorites and if null then empty array...
    const myFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    console.log(myFavorites)
    return recipes.map(recipe => ({
        ...recipe,
        favorite: myFavorites.some(
            favorite => favorite.id === recipe.id 
        )
    }));
}
console.log(updateRecipes())

export function saveFavorites(recipesArray) {
    
    //Filter on favorite from the updatedRecipes-database 
        // with only id and favorite saved
        const favoriteRecipes = recipesArray.filter(
            recipe => recipe.favorite === true)
        .map(recipe => ({
            id: recipe.id, 
            favorite: recipe.favorite
                        }));
        console.log("Ska sparas:", favoriteRecipes)

        //Save them as favorites to the localStorage 
        localStorage.setItem(
            "favorites",
            JSON.stringify(favoriteRecipes)
        );
        
        return favoriteRecipes
}


//Export favoriteRecipesBank to search (and perhaps other js-files)
export function favoriteRecipesBank (recipe, recipesArray) {
    //Add favorites -------------------------------------------|Odia|
    const favoriteRecipe = document.createElement("button");
    
    //If there is no match:
    if (!recipe.favorite) {
        favoriteRecipe.textContent = `Spara som favorit`;
    //If there is a match:
    } else {
        favoriteRecipe.textContent = `Sparad som favorit ⭐`
    };

    //One click changes the attribute of the button between favorite and not favorite
    favoriteRecipe.addEventListener("click", () => {
        
        recipe.favorite = !recipe.favorite;

        if (recipe.favorite){
            favoriteRecipe.textContent = `Sparad som favorit ⭐`;
        } else {
            favoriteRecipe.textContent = `Spara som favorit`; 
        };
        //Save the current version of rece
        saveFavorites(recipesArray)
    });
 return favoriteRecipe;
}

export function lista() {
    const recipeList = document.getElementById("recipe-list");

    if (!recipeList) return;

    recipeList.replaceChildren();
    
    const updatedRecipes = updateRecipes();

    updatedRecipes.forEach((recipe) => {
        const item = document.createElement("li");
        item.id = "recipe" + recipe.id
        item.classList.add("recipeCommon");

        const title = document.createElement("h2");
        title.textContent = recipe.titel;

        const img = document.createElement("img");
        img.src = imagePath + recipe.imgsrc;
        img.alt = `Bild på ${recipe.titel}`;
        img.classList.add("recipeImg");
        
        //Render out the favoriteRecipesBank
        const myFavorites = favoriteRecipesBank(recipe, updatedRecipes);

        item.append(img, title, myFavorites);
        recipeList.append(item);
    });
}

lista();