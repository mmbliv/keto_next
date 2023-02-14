import { getRecipeId, getRecipeDataById } from "@/utils/fetch";
import { RecipeType } from "@/types/type";
import Layout from "@/component/Layout";
import SideBar from "@/component/SideBar";
import Image from "next/image";
import style from "@/styles/Recipe.module.css";
import { ReactElement, useState } from "react";

type PropsType = {
  data: RecipeType;
};
export default function Recipe(props: any) {
  const [sidebarShowUp, setSidebarShowUp] = useState(false);
  const [reactNode, setReactNode] = useState<ReactElement>();
  //   console.log(props.data);
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
      nutritions.push({ [i]: props.data[i] });
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
  function handleClick() {
    setSidebarShowUp(!sidebarShowUp);
  }

  function handleOption(a: string) {
    if (a === "direction") {
      setReactNode(
        <div className={style.list}>
          {filteredData.direction_steps.map((d, i) => {
            return (
              <p key={i}>
                {i + 1}:{d}
              </p>
            );
          })}
        </div>
      );
    }
    if (a === "ingredient") {
      setReactNode(
        <div className={style.list}>
          {filteredData.ingredients.map((d, i) => {
            return (
              <p key={i}>
                {i + 1}:{d}
              </p>
            );
          })}
        </div>
      );
    }
    if (a === "image") {
      setReactNode(
        <div className={style.img}>
          <Image
            src={filteredData.image}
            // width={500}
            // height={500}
            alt={filteredData.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    }
    if (a === "nutrition") {
      setReactNode(
        <div className={style.list}>
          {filteredData.nutrition.map((d, i) => {
            return (
              <p key={i}>
                {Object.keys(d)}:{Object.values(d)}
              </p>
            );
          })}
        </div>
      );
    }
  }
  return (
    <Layout icon={true} handleClick={handleClick}>
      <div className={style.recipe}>
        {reactNode ? (
          reactNode
        ) : (
          <div className={style.img}>
            <Image
              src={filteredData.image}
              // width={500}
              // height={500}
              alt={filteredData.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <SideBar
          showUp={sidebarShowUp}
          data={filteredData}
          handleClick={handleOption}
        />
      </div>
    </Layout>
  );
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
