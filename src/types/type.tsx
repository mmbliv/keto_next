export type CardType = {
  id: string;
  name: string;
  image: string;
  difficulty: string;
};

export type RecipeType = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  direction_steps: string[];
  nutrition: {}[];
  difficulty: string;
  calories: string;
};
