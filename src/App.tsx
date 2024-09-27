import './App.css';
import * as React from 'react';
import {Ingredient} from './types';
import meatImage from './assets/meat.jpg';
import cheeseImage from './assets/cheese.jpg';
import saladImage from './assets/salad.jpg';
import baconImage from './assets/bacon.jpg';
import {useState} from 'react';

const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage },
];

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState([
        { name: 'Salad', count: 0 },
        { name: 'Cheese', count: 0 },
        { name: 'Meat', count: 0 },
        { name: 'Bacon', count: 0 },
    ]);

    return (
      <>
          <div className="App">
              <div className="Menu">
                  <h1>Меню:</h1>
                  <div className="ingridients">
                  </div>
              </div>
              <div className="Burger">
                  <div className="BreadTop">
                      <div className="Seeds1"></div>
                      <div className="Seeds2"></div>
                  </div>
                  <div className="Salad"></div>
                  <div className="Cheese"></div>
                  <div className="Meat"></div>
                  <div className="BreadBottom"></div>
              </div>
          </div>
      </>
  );
};

export default App;
