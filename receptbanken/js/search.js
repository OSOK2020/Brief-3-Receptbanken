import { recipes } from "../data/databas.js";

const searchElement = document.getElementById("searchInput");
const recipeList = document.getElementById("recipe-list");

searchElement.addEventListener('input', () => {

    recipeList.innerHTML = ""; //rensa gamla recept

    const searchTerm = searchElement.value.toLowerCase();

    const matches = recipes.filter(recipe =>
        recipe.titel.toLocaleLowerCase().includes(searchTerm)
    )
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
            img.src = "data/img/" + recipe.imgsrc
            img.alt = "En bild på " + recipe.titel
            img.classList.add("recipeImg")
            
            li.append(title, img)
            
            recipeList.appendChild(li)
        });

});
