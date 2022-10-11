import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-style">
      <Link to={"/"}>
        <div className="logo-style">
          <h3>Architect</h3>
          <h1>Land</h1>
        </div>
      </Link>
      <Link to={"/projects"}>Projects</Link>
    </div>
  );
};
export default Navigation;
