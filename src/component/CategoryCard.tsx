import { CardType } from "@/types/type";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/CategoryCard.module.css";

type PropsType = {
  data: CardType;
};
export default function CategoryCard(props: PropsType) {
  //   console.log(props);
  return (
    <Link href={`/category/${props.data.id}`} className={style.card}>
      <Image
        alt={props.data.name}
        src={props.data.image}
        // width={100}
        // height={100}
        fill
      />
      <p className={style.cardText}>{props.data.name}</p>
    </Link>
  );
}
