import { useState } from 'react';
import './FoodDetail.css'; 

const FoodDetail = ({ pickedMeal }) => {
	const [ingredientsArr, setIngredientsArr] = useState([]);

	return (
		<div className='food-detail-container'>
			<ul>
				<li>
					<p>{pickedMeal.strCategory}</p>
					<hr />
					<p className="instructions">{pickedMeal.strInstructions}</p>
					<hr />
				</li>
				<h2>Ingredients:</h2>
				<li>
					{ingredientsArr.map((ingredient, index) => (
						<li key={index}>
							{ingredient.name} - {ingredient.measure}
						</li>
					))}
				</li>
			</ul>
		</div>
	);
};

export default FoodDetail;
