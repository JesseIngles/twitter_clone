import BodyContainer from "../../components/bodycontainer/body_container";
import RigthBar from "../../components/rigthbar/rigth_bar";
import SideBar from "../../components/sidebar/side_bar";
import style from "./home_page.module.css";

const HomePage = () => {
  return (
    <div className={style.container}>
      <SideBar className={style.sideBar} />
      <BodyContainer className={style.bodyContainer} />
      <RigthBar className={style.rigthBar} />
    </div>
  );
};

export default HomePage;
