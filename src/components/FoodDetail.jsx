import { useState } from 'react';
import './Food-Search.css';

const FoodDetail = ({ pickedMeal }) => {
	const [ingredientsArr, setIngredientsArr] = useState([]);

	return (
		<div className='food-detail-container' style={{ overflow: 'auto' }}>
			<ul className='food-meals'>
				<h2>{pickedMeal.strMeal}</h2>
				<p>
					<span class='Kind-of-meal'>Category: {pickedMeal.strCategory}</span>
				</p>

				<hr />

				<h3>Ingredients:</h3>
				<p>Coming soon</p>
				<li>
					{ingredientsArr.map((ingredient, index) => (
						<li key={index}>
							{ingredient.name} - {ingredient.measure}
						</li>
					))}
				</li>
				<hr />

				<p className='food-instructions'>{pickedMeal.strInstructions}</p>

				<a href={pickedMeal.strYoutube} target='_blank'>
					<button className='youtube'>For more inspiration</button>
				</a>
			</ul>
		</div>
	);
};

export default FoodDetail;
