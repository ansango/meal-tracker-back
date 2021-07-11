const getMeals = require("./getMeals");
const getRecipes = require("./getRecipes");

const getPopulatedMeals = async () => {
  const meals = await getMeals();
  const recipes = await getRecipes();
  return meals.map((meal) => ({
    ...meal,
    recipe: recipes.find((recipe) => recipe.id === meal.recipeId),
  }));
};

module.exports = getPopulatedMeals;
