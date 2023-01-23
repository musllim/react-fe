import { useDispatch } from "react-redux";
import Circle from "../../../assets/icons/Circle";
import Moon from "../../../assets/icons/Moon";
import Sun from "../../../assets/icons/Sun";
import { changeTheme } from "../../../db/blogSlices";
import "./style.css";
const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <span className="theme-toggler" onClick={toggleTheme}>
      <div className="theme-swither-active" id="theme-swither">
        <Moon />
        <Sun />
        <Circle />
      </div>
    </span>
  );
};
export default ThemeSwitcher;
