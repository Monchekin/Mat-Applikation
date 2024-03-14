import { useState } from 'react';

import './Search.css'; 

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

	// const arr = [{id:1}, {id: 2}] // loopa igenom
	// arr.map((a) => (
	//     <>{a.id}</>
	// ))
	// const mockObj = {id: 1} // kräver ingen loop, kom åt genom mockObj.id - då får du 1

	return (
		<div className='search-container'>
			<input
				id='myInput'
				type='text'
				value={foodSearch}
				onChange={(event) => setFoodSearch(event.target.value)}
			/>

			<button onClick={apiMeals}>Sök</button>

			<ul>
				{food &&
					food.map((meal) => (
						<li key={meal.idMeal} onClick={() => setPickedMeal(meal)}>
							<h1>{meal.strMeal}</h1>
							<img src={meal.strMealThumb} alt={meal.strMeal} />
							<hr />
						</li>
					))}
			</ul>
		</div>
	);
};

export default Search;
