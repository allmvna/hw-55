import React from 'react';
import {IngredientButtonProps} from '../types';

interface AddButtonProps extends IngredientButtonProps {
    count: number;
    onRemove: (name: string) => void
}
const AddButton: React.FC<AddButtonProps> = ({ingredient, onClick, count, onRemove}) => {
    return (
        <div className='BlockWithBtn'>
            <button className='AddBtn'
                    onClick={() => onClick(ingredient.name)}>
                <img src={ingredient.image} alt={ingredient.name}/>
                <span>{ingredient.name}</span>
            </button>
            <span className='ingredient-count'>x{count}</span>
            <button className='RemoveBtn' onClick={() => onRemove(ingredient.name)}>-</button>
        </div>
    );
};

export default AddButton;