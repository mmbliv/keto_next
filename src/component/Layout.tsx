import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import Header from "./Header";

type PropsType = {
  children: JSX.Element;
  icon: boolean;
  handleClick?: () => void;
};

export default function Layout(props: PropsType) {
  //   console.log(props);
  return (
    <>
      <Header icon={props.icon} handleClick={props.handleClick} />
      {props.children}
    </>
  );
}
