import { getCategoryId, getCategoryDataById } from "@/utils/fetch";
import { CardType } from "@/types/type";
import CategoryCard from "@/component/CategoryCard";
import style from "@/styles/Home.module.css";

type propsType = {
  data: CardType[];
};
export default function Category(props: propsType) {
  //   console.log(getCategoryDataById(2));
  //   console.log(props);
  const filteredData = props.data.map((d: any) => {
    return { id: d.id, name: d.recipe, image: d.image };
  });
  console.log(filteredData);
  return (
    <main className={style.main}>
      {filteredData.map((d: CardType) => {
        return <CategoryCard data={d} key={d.id} path="recipe" />;
      })}
    </main>
  );
}

export async function getStaticPaths() {
  const paths = await getCategoryId();
  return {
    paths,
    fallback: false,
  };
}

type paramsType = {
  params: { id: number };
};
export async function getStaticProps(params: paramsType) {
  const data = await getCategoryDataById(params.params.id);
  const dataArray = Object.values(data);
  //   console.log(dataArray[0]);
  //   const filteredData = dataArray.map((d: any) => {
  //     return { id: d.id, recipe: d.recipe, image: d.image };
  //   });
  return {
    props: {
      data: dataArray,
    },
  };
}
