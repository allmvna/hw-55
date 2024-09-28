import React from 'react';
import {MenuProps} from '../types';
import AddButton from './AddButton';
import {IngredientState} from '../App';

interface ExtendedMenuProps extends MenuProps {
    ingredientCounts: IngredientState[];
}

const Menu: React.FC<ExtendedMenuProps> = ({ingredients, onAddIngredient, ingredientCounts }) => {

    const getIngredientCount = (name: string): number => {
        const ingredient = ingredientCounts.find((countIngredient) => countIngredient.name === name);
        return ingredient ? ingredient.count : 0;
    };

    return (
        <div className="Menu">
            <h1>Ингредиенты:</h1>
            {ingredients.map((ingredient) => (
                <AddButton
                    key={ingredient.name}
                    ingredient={ingredient}
                    count={getIngredientCount(ingredient.name)}
                    onClick={onAddIngredient}
                />
            ))}
        </div>
    );
};

export default Menu;