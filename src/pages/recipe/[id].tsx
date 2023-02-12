import { getRecipeId, getRecipeDataById } from "@/utils/fetch";
import { RecipeType } from "@/types/type";

type PropsType = {
  data: RecipeType;
};
export default function Recipe(props: any) {
  console.log(props.data);
  const directions = [];
  const ingredients = [];
  const nutritions = [];
  for (let i in props.data) {
    if (i.startsWith("ingredient") && props.data[i]) {
      ingredients.push(props.data[i]);
    }
    if (i.startsWith("directions") && props.data[i]) {
      directions.push(props.data[i]);
    }
    if (i.endsWith("grams")) {
      nutritions.push(props.data[i]);
    }
  }

  const filteredData: RecipeType = {
    id: props.data.id,
    name: props.data.recipe,
    nutrition: nutritions,
    ingredients: ingredients,
    direction_steps: directions,
    difficulty: props.data.difficulty,
    image: props.data.image,
    calories: props.data.calories,
  };
  console.log(filteredData);
  return <div></div>;
}

export async function getStaticPaths() {
  const paths = await getRecipeId();
  return {
    paths,
    fallback: false,
  };
}

type paramsType = {
  params: { id: number };
};
export async function getStaticProps(params: paramsType) {
  const recipedata = await getRecipeDataById(params.params.id);
  return {
    props: {
      data: recipedata,
    },
  };
}
