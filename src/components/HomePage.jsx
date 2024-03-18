import { useState } from 'react';
import Search from './Search';
import FoodDetail from './FoodDetail';

const HomePage = () => {
	const [pickedMeal, setPickedMeal] = useState(null);
	return (
		<div className='wrap'>
			<Search setPickedMeal={setPickedMeal} />
			{pickedMeal && <FoodDetail pickedMeal={pickedMeal} />}
		</div>
	);
};

export default HomePage;
