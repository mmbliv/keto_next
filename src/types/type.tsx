export type CardType = {
  id: string;
  name: string;
  image: string;
};

export type RecipeType = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  direction_steps: string[];
  nutrition: string[];
  difficulty: string;
  calories: string;
};
