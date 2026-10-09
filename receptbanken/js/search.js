import { recipes } from "../data/databas.js";

const searchElement = document.getElementById("searchInput");
const recipeList = document.getElementById("recipe-list");

searchElement.addEventListener('input', () => {

    recipeList.innerHTML = ""; //rensa gamla recept genom att -
                               //ta bort allt html-innehåll innanför 
                               // ul id="recipe-list"></ul>

    const searchTerm = searchElement.value.toLowerCase();

    const matches = recipes.filter(recipe =>
        recipe.titel.toLowerCase().includes(searchTerm)
    )
        if (matches.length === 0){
                const p = document.createElement("p")
                p.textContent = "Inga recept matchar sökning"
                p.classList.add("noSearchResult")
                recipeList.appendChild(p)
                return;
        }
        matches.forEach(recipe => {
            const li = document.createElement("li")
            li.id = "recipe" + recipe.id 
            li.classList.add("recipeCommon")

            const title = document.createElement("h2")
            title.textContent = recipe.titel
            
            const img = document.createElement("img")
            img.src = "data/img/" + recipe.imgsrc
            img.alt = "En bild på " + recipe.titel
            img.classList.add("recipeImg")
            
            li.append(img, title)
            
            recipeList.appendChild(li)
        });

});
