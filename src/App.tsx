import './App.css';
import * as React from 'react';
import { Ingredient } from './types';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import { useState } from 'react';
import Menu from './components/Menu';
import Burger from './components/Burger';

interface IngredientState {
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
            prevState.map((ingredient) =>
                ingredient.name === name
                    ? { ...ingredient, count: ingredient.count + 1 }
                    : ingredient
            )
        );
        console.log(`${name} added to burger`);
    };

    return (
        <>
        <div className = 'App'>
            <Menu ingredients={INGREDIENTS} onAddIngredient={addIngredient} />
            <Burger ingredients={ingredients} />
        </div>
        </>
    );
};

export default App;
