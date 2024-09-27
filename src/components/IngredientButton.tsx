import * as React from 'react';
import {IngredientButtonProps} from '../types';

const IngredientButton: React.FC<IngredientButtonProps> = ({ingredient, onClick }) => {
    return (
        <div>
            <button
                onClick={() => onClick(ingredient.name)}>
                <img width= '80px' height= '80px' src={ingredient.image} alt={ingredient.name}/>
               <span>{ingredient.name}</span>
            </button>
        </div>
    );
};

export default IngredientButton;