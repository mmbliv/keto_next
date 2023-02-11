import { getCategoryId, getCategoryDataById } from "@/utils/fetch";
import { CategoryType } from "@/types/type";

type propsType = {
  categoryData: CategoryType;
};
export default function Category(props: propsType) {
  console.log(getCategoryDataById(2));
  console.log(props);
  return <p></p>;
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
  const categoryData = await getCategoryDataById(params.params.id);
  return {
    props: {
      categoryData,
    },
  };
}
