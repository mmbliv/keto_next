import style from "@/styles/SideBar.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";

type PropsType = {
  showUp: boolean;
};
export default function SideBar(props: PropsType) {
  console.log(props.showUp);
  return (
    <div className={props.showUp ? style.sidebarShow : style.sidebarHidden}>
      sidebar
    </div>
  );
}
