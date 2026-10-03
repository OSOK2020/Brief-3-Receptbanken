// Detta är ett test script för att se till så databasen funkar och går att kalla till index, 

import { recipes } from "../data/databas.js";

const recipeList = document.getElementById("recipe-list")


recipes.forEach(recipe => {
    console.log(recipe.titel);

    const li = document.createElement("li")
    li.id = "recipe" + recipe.id 
    li.classList.add("recipeCommon")

    const title = document.createElement("h3")
    title.textContent = recipe.titel
    
    const img = document.createElement("img")
    img.src = "data/img/" + recipe.imgsrc
    img.alt = "En bild på " + recipe.titel
    img.classList.add("recipeImg")
    

    li.appendChild(title)
    li.appendChild(img)


    recipeList.append(li)
});