import { CardType } from "@/types/type";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/CategoryCard.module.css";

type PropsType = {
  data: CardType;
  path: "category" | "recipe";
};
export default function CategoryCard(props: PropsType) {
  //   console.log(props);
  return (
    <Link
      href={
        props.path === "category"
          ? `/category/${props.data.id}`
          : `/recipe/${props.data.id}`
      }
      className={style.card}
    >
      <Image
        className={style.img}
        alt={props.data.name}
        src={props.data.image}
        // width={100}
        // height={100}
        fill
        style={{ objectFit: "cover" }}
        sizes="(min-width: 600px) 40vw,
        (min-width: 900px) 30vw,
        (min-width:1200px) 20vw
        80vw"
      />
      {props.data.difficulty && (
        <p className={style.badge}>{props.data.difficulty}</p>
      )}
      <p className={style.cardText}>{props.data.name}</p>
    </Link>
  );
}
