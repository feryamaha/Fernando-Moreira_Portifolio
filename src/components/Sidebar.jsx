import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./informationContainer";
import Avatar from "../img/img-profile.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Fernando Moreira" />
      <p className="title">Desenvolvedor Fullstack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Dowload currículo
      </a>
    </aside>
  );
};

export default Sidebar;
