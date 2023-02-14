import { getRecipeId, getRecipeDataById } from "@/utils/fetch";
import { RecipeType } from "@/types/type";
import Layout from "@/component/Layout";
import SideBar from "@/component/SideBar";
import Image, { StaticImageData } from "next/image";
import style from "@/styles/Recipe.module.css";
import { ReactElement, useState } from "react";
import protein from "../../../public/protein.png";
import carb from "../../../public/carb.png";
import fat from "../../../public/fat.png";
import nutrition from "../../../public/nutrition.png";
import ingredient from "../../../public/ingredient.png";
import cooking from "../../../public/cooking.png";

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
      const key = i.split("_").join(" ").toUpperCase();
      nutritions.push({ [key]: props.data[i] });
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
  //   console.log(filteredData);
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
                <span className={style.list_number}>{i + 1}</span>: {d}
              </p>
            );
          })}
          <Image
            src={cooking}
            width={30}
            height={30}
            alt="nutrition"
            className={style.icon}
          />
        </div>
      );
    }
    if (a === "ingredient") {
      setReactNode(
        <div className={style.list}>
          {filteredData.ingredients.map((d, i) => {
            return (
              <p key={i}>
                <span className={style.list_number}>{i + 1}</span>: {d}
              </p>
            );
          })}
          <Image
            src={ingredient}
            width={30}
            height={30}
            alt="nutrition"
            className={style.icon}
          />
        </div>
      );
    }
    if (a === "image") {
      setReactNode(
        <div className={style.img_container}>
          <Image
            src={filteredData.image}
            // width={500}
            // height={500}
            alt={filteredData.name}
            fill
            style={{ objectFit: "cover" }}
            className={style.img}
          />
          <p className={style.name}>{filteredData.name}</p>
        </div>
      );
    }
    if (a === "nutrition") {
      setReactNode(
        <div className={style.list}>
          {filteredData.nutrition.map((d, i) => {
            return (
              <p key={i} className={style.nutrition}>
                <span>{getIcon(Object.keys(d)[0])}</span>
                {Object.keys(d)}:{" "}
                <span className={style.nutrition_value}>
                  {Object.values(d)}
                </span>
              </p>
            );
          })}
          <Image
            src={nutrition}
            width={30}
            height={30}
            alt="nutrition"
            className={style.icon}
          />
        </div>
      );
    }
  }

  function getIcon(a: string) {
    let src: StaticImageData = fat;
    if (a.startsWith("FAT")) {
      src = fat;
    }
    if (a.startsWith("CARB")) {
      src = carb;
    }
    if (a.startsWith("PRO")) {
      src = protein;
    }
    return <Image src={src} alt="img" height={25} width={25} />;
  }
  return (
    <Layout icon={true} handleClick={handleClick}>
      <div className={style.recipe}>
        {reactNode ? (
          reactNode
        ) : (
          <div className={style.img_container}>
            <Image
              src={filteredData.image}
              // width={500}
              // height={500}
              alt={filteredData.name}
              fill
              style={{ objectFit: "cover" }}
              className={style.img}
            />
            <p className={style.name}>{filteredData.name}</p>
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
