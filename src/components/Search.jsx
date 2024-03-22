import { useState } from 'react';

import './Food-Search.css';

const Search = ({ setPickedMeal }) => {
	const [foodSearch, setFoodSearch] = useState('');
	const [food, setFood] = useState([]);

	// lägg till useEffect till API
	const apiMeals = async () => {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
		);

		const data = await response.json();
		console.log(data.meals);
		setFood(data.meals);
	};

	return (
		<div className='search-container'>
			<div className='search-input'>
				<h2>Search by dish or food category</h2>
				<input
					id='myInput'
					type='text'
					value={foodSearch}
					onChange={(event) => setFoodSearch(event.target.value)}
					onClick={() => setFoodSearch('')}
				/>
				<button onClick={apiMeals}>Search</button>
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
