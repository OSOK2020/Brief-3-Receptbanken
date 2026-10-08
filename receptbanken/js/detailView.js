import { recipes } from "../data/databas.js";

const recipeList = document.getElementById("recipe-list")

recipeList.addEventListener("click", (e) => {
    const li = e.target.closest("li.recipeCommon")

    if (li && recipeList.contains(li)) {
        const recipe = recipes.find(recipe => "recipe" + recipe.id === li.id)
        if(recipe) {
        displayDetails(recipe, li)
        }
    }
})

function displayDetails (recipe, li) {

    const sameLI = removeDetails(li)
    if(!sameLI){
        li.classList.add("detailView")
        scrollTo(li)
        addDetails(recipe, li)
    }
}

function addDetails (recipe, li) {
    addIngredient(recipe, li)
    addInstructions(recipe, li)
    addCategories(recipe, li)
    addStats(recipe, li)
}

function addIngredient (recipe, li) {
    const ingredientList = document.createElement("ul")
    ingredientList.classList.add("ingredientList")

    recipe.ingredients.forEach(ingredientTxt => {
        const ingredient = document.createElement("li")
        ingredient.textContent = ingredientTxt
        ingredientList.appendChild(ingredient)
    });

    li.appendChild(ingredientList)
}

function addInstructions(recipe, li) {
    const instructionList = document.createElement("ol")
    instructionList.classList.add("instructionList")

    recipe.instructions.forEach(instructionsTxt => {
        const instructions = document.createElement("li")
        instructions.textContent = instructionsTxt
        instructionList.appendChild(instructions)
    });

    li.appendChild(instructionList)
}

function addCategories(recipe, li) {
    const categories = document.createElement("p");
    categories.textContent = "Kategorier: "
    categories.textContent += recipe.category.join(", ");
    categories.classList.add("categoryDetails") 

    li.appendChild(categories)
}

function addStats(recipe, li) {
    const statsSection = document.createElement("section");

    const timeSection = document.createElement("p")
    timeSection.textContent = recipe.time + " min"
    timeSection.classList.add("timeSection")

    const difficultySection = document.createElement("p")
    difficultySection.textContent ="Svårighetsgrad: " + recipe.difficulty +"/5"
    difficultySection.classList.add("difficultySection")

    statsSection.append(timeSection, difficultySection)

    statsSection.classList.add("statsSection")

    li.appendChild(statsSection)
}

function removeDetails (li) {
    const previousDetail = document.querySelector(".detailView")
    
    if (previousDetail) {
        const detailsView = previousDetail.querySelectorAll("ul, ol, p, section")
        detailsView.forEach(listElement => listElement.remove()) 
        previousDetail.classList.remove("detailView")
    }
     return li === previousDetail
}

function scrollTo(li) {
        li.scrollIntoView({
        behavior: "smooth", 
        block: "center",
        inline: "nearest"
    })
}