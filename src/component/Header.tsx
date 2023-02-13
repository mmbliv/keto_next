import style from "@/styles/Header.module.css";
import { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconType } from "react-icons/lib";

type PropsType = {
  icon: boolean;
};
export default function Header(props: PropsType) {
  console.log(props);
  return (
    <header className={style.header}>
      <p>Keto Diet</p>
      {props.icon && <GiHamburgerMenu />}
      {/* <GiHamburgerMenu /> */}
    </header>
  );
}
