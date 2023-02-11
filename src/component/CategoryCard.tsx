import { CategoryType } from "@/types/type";

type PropsType = {
  category: CategoryType;
};
export default function CategoryCard(props: PropsType) {
  return <p>{props.category.category}</p>;
}
