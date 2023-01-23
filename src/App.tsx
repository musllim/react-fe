import Nav from "./components/Header";
import "./App.css";
import { useSelector } from "react-redux";
import Main from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { RootState } from "./db/store";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import SingleBlog from "./components/Blog/SingleBlog";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
const App: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.blogReducer);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Portfolio />
                <About />
                <Skills />
                <Contacts />
                <Blog />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const ProtectedRoutes = () => {
  const { user } = useSelector((state: RootState) => state.blogReducer);
  return user?.token && user?.permision?.includes("admin") ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
