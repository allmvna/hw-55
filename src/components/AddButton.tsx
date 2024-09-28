import React from 'react';
import {IngredientButtonProps} from '../types';

interface AddButtonProps extends IngredientButtonProps {
    count: number;
}
const AddButton: React.FC<AddButtonProps> = ({ingredient, onClick, count}) => {
    return (
        <div className= 'BlockWithBtn'>
            <button className='AddBtn'
                    onClick={() => onClick(ingredient.name)}>
                <img width='80px' height='80px' src={ingredient.image} alt={ingredient.name}/>
                <span>{ingredient.name}</span>
            </button>
            <span className='ingredient-count'>x{count}</span>
        </div>
    );
};

export default AddButton;