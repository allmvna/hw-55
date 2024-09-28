import React from 'react';
import {MenuProps} from '../types';
import AddButton from './AddButton';
import {IngredientState} from '../App';


interface ExtendedMenuProps extends MenuProps {
    ingredientCounts: IngredientState[];
    onRemoveIngredient: (name: string) => void;
}

const Menu: React.FC<ExtendedMenuProps> = ({ingredients, onAddIngredient, ingredientCounts, onRemoveIngredient }) => {

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
                    price={ingredient.price}
                    onClick={onAddIngredient}
                    onRemove={onRemoveIngredient}
                />
            ))}
        </div>
    );
};

export default Menu;