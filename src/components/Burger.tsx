import * as React from 'react';

interface BurgerProps {
    ingredients: { name: string; count: number }[];
}
const Burger: React.FC<BurgerProps> = ({ingredients}) => {
    return (
        <div>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {ingredients.map((ingredient) =>
                    [...Array(ingredient.count)].map((_, index) => (
                        <div key={ingredient.name + index} className={ingredient.name}></div>
                    ))
                )}
                <div className="BreadBottom"></div>
            </div>
        </div>
    );
};

export default Burger;