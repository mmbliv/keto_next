import style from "@/styles/Header.module.css";
import Link from "next/link";
import { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconType } from "react-icons/lib";

type PropsType = {
  icon: boolean;
  handleClick?: () => void;
};
export default function Header(props: PropsType) {
  //   console.log(props);
  return (
    <header className={style.header}>
      <Link href={"/"} className={style.logo}>
        Keto Diet
      </Link>
      {props.handleClick && (
        <div onClick={props.handleClick} className={style.icon}>
          {props.icon && <GiHamburgerMenu />}
        </div>
      )}
      {/* <GiHamburgerMenu /> */}
    </header>
  );
}
