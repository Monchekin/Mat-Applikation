import { useState } from 'react';
import HomePage from './components/HomePage';
import './App.css';


const App = () => {
	const [handPickedMeals, setHandPickedMeals] = useState(null);

	const selectMeal = (meal) => {
		setHandPickedMeals(meal);
	};

	return (
		<div>
			<HomePage handPickedMeals={selectMeal} pickedMeals={handPickedMeals} />
		</div>
	);
};

export default App;
