import style from "@/styles/SideBar.module.css";
import { RecipeType } from "@/types/type";

type PropsType = {
  showUp: boolean;
  data: RecipeType;
  handleClick: (a: "nutrition" | "direction" | "ingredient" | "image") => void;
};
export default function SideBar(props: PropsType) {
  //   console.log(props);
  return (
    <div className={props.showUp ? style.sidebarShow : style.sidebarHidden}>
      {props.showUp && (
        <div className={style.list}>
          <p onClick={() => props.handleClick("nutrition")}>Nutrition</p>
          <p onClick={() => props.handleClick("direction")}>Directions</p>
          <p onClick={() => props.handleClick("ingredient")}>Ingredients</p>
          <p onClick={() => props.handleClick("image")}>Images</p>
        </div>
      )}
    </div>
  );
}
