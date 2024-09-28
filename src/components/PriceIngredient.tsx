import React from 'react';
import { IngredientState } from '../App';

interface PriceCounterProps {
    ingredients: IngredientState[];
}

const prices: { [key: string]: number } = {
    Salad: 10,
    Cheese: 50,
    Meat: 80,
    Bacon: 60,
};

const startPrice = 30;

const PriceIngredient: React.FC<PriceCounterProps> = ({ ingredients }) => {

    const getTotalPrice = (): number => {
        return startPrice + ingredients.reduce((total, ingredient) => {
            const ingredientPrice = prices[ingredient.name] || 0;
            return total + ingredient.count * ingredientPrice;
        }, 0);
    };

    return (
        <div className="PriceIngredient">
            <h2>Total price: {getTotalPrice()} som</h2>
        </div>
    );
};

export default PriceIngredient;