export interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export interface Props {
    name: string;
    count: number;
}
export interface IngredientButtonProps {
    name: string;
    image: string;
    onClick: () => void;
    AddIngredient: () => void;
}
