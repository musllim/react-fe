import { useDispatch } from "react-redux";
import Wrapper from "../Container";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import "./nav.css";
import { logoutUser } from "../../db/blogSlices";
import { useSelector } from "react-redux";
import { RootState } from "../../db/store";
import { Link, Navigate } from "react-router-dom";
const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.blogReducer);

  const logout = () => {
    dispatch(logoutUser());
    <Navigate to="/" />;
  };
  return (
    <header>
      <Wrapper>
        <Logo />
        <nav>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">work</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
            <li>
              <Link to="/skills">skills</Link>
            </li>
            <li>
              {user ? (
                <a onClick={logout}>logout</a>
              ) : (
                <Link to="/login">login</Link>
              )}
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </Wrapper>
    </header>
  );
};

export default Nav;
