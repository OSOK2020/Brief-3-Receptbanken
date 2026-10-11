

import { recipes } from "../data/databas.js";

const recipeList = document.getElementById("recipe-list");
const filterButtons = document.querySelectorAll(".filter-knapp");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.kategori;

        const recipeCards = recipeList.querySelectorAll("li.recipeCommon");

        recipeCards.forEach(card => {
            const recipeId = card.id.replace("recipe", "");

            const recipe = recipes.find(
                r => String(r.id) === recipeId
            );

            if (!recipe) return;

            const categories = Array.isArray(recipe.category)
                ? recipe.category
                : [recipe.category];

            const matchesCategory =
                selectedCategory === "alla" ||
                categories.some(category =>
                    String(category).toLowerCase() === selectedCategory
                );

            card.hidden = !matchesCategory;
        });
    });
});
