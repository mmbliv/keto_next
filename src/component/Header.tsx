import style from "@/styles/Header.module.css";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import Image from "next/image";
import logo from "../../public/steak.png";

type PropsType = {
  icon: boolean;
  handleClick?: () => void;
};
export default function Header(props: PropsType) {
  //   console.log(props);
  return (
    <header className={style.header}>
      <Link href={"/"} className={style.logo}>
        <p>Keto Diet</p>
        <Image
          src={logo}
          alt="logo-steak"
          width={30}
          height={30}
          priority
          className={style.logo_img}
        />
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
