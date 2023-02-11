import { CategoryType } from "@/types/type";
import Link from "next/link";

type PropsType = {
  category: CategoryType;
};
export default function CategoryCard(props: PropsType) {
  return (
    <Link href={`/category/${props.category.id}`}>
      {props.category.category}
    </Link>
  );
}
