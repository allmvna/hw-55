import './App.css';
import * as React from 'react';
import {useState} from 'react';
import {Ingredient} from './types';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Menu from './components/Menu';
import Burger from './components/Burger';
import PriceIngredient from './components/PriceIngredient';

export interface IngredientState {
    name: string;
    count: number;
}

const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage },
];

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState<IngredientState[]>([
        { name: 'Salad', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Meat', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);


    const addIngredient = (name: string) => {
        setIngredients((prevState) =>
            prevState.reduce((acc, ingredient) => {
                if (ingredient.name === name) {
                    acc.push({ ...ingredient, count: ingredient.count + 1 });
                } else {
                    acc.push(ingredient);
                }
                return acc;
            }, [] as IngredientState[])
        );
    };

    const removeIngredient = (name: string) => {
        setIngredients((prevState) =>
            prevState.reduce((acc, ingredient) => {
                if (ingredient.name === name && ingredient.count > 0) {
                    acc.push({ ...ingredient, count: ingredient.count - 1 });
                } else {
                    acc.push(ingredient);
                }
                return acc;
            }, [] as IngredientState[])
        );
    };

    return (
        <>
            <div className='App'>
                <Menu ingredients={INGREDIENTS}
                      onAddIngredient={addIngredient}
                      ingredientCounts={ingredients}
                      onRemoveIngredient={removeIngredient}/>
                <Burger ingredients={ingredients}/>
            </div>
            <PriceIngredient ingredients={ingredients} />
        </>
    );
};

export default App;
