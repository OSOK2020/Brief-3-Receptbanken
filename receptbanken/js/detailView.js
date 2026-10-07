import { recipes } from "../data/databas.js";

const recipeList = document.getElementById("recipe-list")

recipeList.addEventListener("click", (e) => {
    const li = e.target.closest("li")

    if (li && recipeList.contains(li)) {
        const recipe = recipes.find(recipe => "recipe" + recipe.id === li.id)

        
        displayDetails(recipe, li)
    }
    
})

function displayDetails (recipe, li) {

    const sameLI = removeDetails(li)
    if(!sameLI){
        li.classList.add("detailView")
        scrollTo(li)

        addDetails(li)
    }

    
}

function addDetails (li) {
    const recipe = recipes.find(e => "recipe" + e.id === li.id)

    addIngredient(recipe, li)
    addInstructions(recipe, li)
    changeStyleDetails(recipe, li)
}

function addIngredient (recipe, li) {
    const ingredientList = document.createElement("ul")
    ingredientList.classList.add("ingredientList")

    recipe.ingredients.forEach(ingredientTxt => {
        const ingredient = document.createElement("li")
        ingredient.innerText = ingredientTxt
        ingredientList.appendChild(ingredient)
    });

    li.appendChild(ingredientList)
}

function addInstructions(recipe, li) {
    const instructionList = document.createElement("ol")
    instructionList.classList.add("instructionList")

    recipe.instructions.forEach(instructionsTxt => {
        const instructions = document.createElement("li")
        instructions.innerText = instructionsTxt
        instructionList.appendChild(instructions)
    });

    li.appendChild(instructionList)
}

function changeStyleDetails(recipe, li) {

}

function removeDetails (li) {
    const previusDetail = document.querySelector(".detailView")
    
    if (previusDetail) {
        const detailsView = previusDetail.querySelectorAll("ul, ol")
        detailsView.forEach(detailsView => detailsView.remove()) 

        previusDetail.classList.remove("detailView")
    }
     return li === previusDetail
}

function scrollTo(li) {
        li.scrollIntoView({
        behavior: "smooth", 
        block: "center",
        inline: "nearest"
    })
}