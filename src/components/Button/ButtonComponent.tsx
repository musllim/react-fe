import { Link } from "react-router-dom";
import { Button } from "../../types/button";
import "./button.css";
export const ButtonComponent: React.FC<Button> = ({
  children,
  link,
  primary,
  clickHandler,
}) => {
  return link ? (
    <Link to={link} className={`btn ${primary && "btn-primary"}`}>
      {children}
    </Link>
  ) : (
    <button
      onClick={clickHandler}
      className={`btn ${primary && "btn-primary"}`}
    >
      {children}
    </button>
  );
};
