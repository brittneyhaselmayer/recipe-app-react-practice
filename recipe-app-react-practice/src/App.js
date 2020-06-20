import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	const APP_ID = 'e6ff7964';
	const APP_KEY = '56e76f4af067d9244f81054dd441dddd';
	const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	console.log(search);

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(exampleReq);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					type="text"
					className="search-bar"
					onChange={updateSearch}
				></input>
				<button type="submit" className="search-button">
					Submit
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe recipe={recipe} />
			))}
		</div>
	);
};

export default App;
