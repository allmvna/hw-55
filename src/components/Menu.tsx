import React from 'react';
import {MenuProps} from '../types';
import IngredientButton from './IngredientButton';

const Menu: React.FC<MenuProps> = ({ingredients, onAddIngredient }) => {
    return (
        <div>
            <div className="Menu">
                <h1>Меню:</h1>
                {ingredients.map((ingredient) => (
                    <IngredientButton
                        key={ingredient.name}
                        ingredient={ingredient}
                        onClick={onAddIngredient}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;