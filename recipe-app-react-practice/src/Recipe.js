import React from 'react';

const Recipe = (recipe) => {
	return (
		<div>
			<h1>{recipe.recipe.recipe.label}</h1>
			<img src={recipe.recipe.recipe.image} alt=""></img>
			<p>Calories: {recipe.recipe.recipe.calories}</p>
			<ul>
				{recipe.recipe.recipe.ingredients.map((ingrident) => (
					<li>{ingrident.text}</li>
				))}
			</ul>
		</div>
	);
};
export default Recipe;
