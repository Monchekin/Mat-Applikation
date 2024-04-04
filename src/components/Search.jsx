import { useState, useRef, useEffect } from 'react';

import './Food-Search.css';

const Search = ({ setPickedMeal }) => {
	const [foodSearch, setFoodSearch] = useState('');
	const [food, setFood] = useState([]);
	const searchButtonRef = useRef(null);

	useEffect(() => {
		if (!foodSearch) {
			searchButtonRef.current.disabled = true;
		} else {
			searchButtonRef.current.disabled = false;
		}
	}, [foodSearch]);

	// lägg till useEffect till API
	const apiMeals = async () => {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
		);

		const data = await response.json();
		console.log(data.meals);
		setFood(data.meals);
	};

	// Funktion för att ändra texten på knappen
	const changeButtonText = () => {
		searchButtonRef.current.innerText = 'Search for a new dish';
		setTimeout(() => {
			searchButtonRef.current.innerText = 'Search';
		}, 10000);
	};

	const handleKeyDownSearch = (event) => {
		if (event.key === 'Enter') {
			apiMeals();
		}
	};

	return (
		<div className='search-container'>
			<div className='search-input'>
				<h2>Search by dish or food category</h2>
				<input
					id='myInput'
					type='text'
					value={foodSearch}
					onKeyDown={(event) => handleKeyDownSearch(event)}
					onChange={(event) => setFoodSearch(event.target.value)}
					onClick={() => setFoodSearch('')}
				/>
				<button
					ref={searchButtonRef}
					onClick={() => {
						changeButtonText();
						apiMeals();
					}}>
					Search
				</button>{' '}
				{/* Använd useRef för att referera till knappen */}
			</div>
			<div>
				<ul className='SearchMeals'>
					{food &&
						food.map((meal) => (
							<li key={meal.idMeal} onClick={() => setPickedMeal(meal)}>
								<h1>{meal.strMeal}</h1>
								<img src={meal.strMealThumb} alt={meal.strMeal} />
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Search;
