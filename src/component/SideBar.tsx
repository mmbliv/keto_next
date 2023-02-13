import style from "@/styles/SideBar.module.css";

type PropsType = {
  showUp: boolean;
};
export default function SideBar(props: PropsType) {
  console.log(style.sidebar);
  return (
    <div
      className={style.sidebar}
      style={props.showUp ? { width: "30%" } : { width: 0 }}
    >
      sidebar{" "}
    </div>
  );
}
