import React from 'react';
import { IngredientState } from '../App';

interface IngredientCounterProps{
    ingredients: IngredientState[];
}

const CountIngredients: React.FC<IngredientCounterProps> = ({ingredients}) => {
    return (
        <div>
            <ul className="counter">
                {ingredients.map((ingredient) => (
                    <li key={ingredient.name}>{ingredient.name}: {ingredient.count}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountIngredients;