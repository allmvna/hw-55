export interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export interface MenuProps {
    ingredients: Ingredient[];
    onAddIngredient: (name: string) => void;
}

export interface IngredientButtonProps {
    ingredient: Ingredient;
    onClick: (name: string) => void;
}

