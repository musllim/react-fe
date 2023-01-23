import { BlogIcon } from "../assets/icons/BlogIcon";
import { Msg } from "../assets/icons/Msg";
import { ProjectIcon } from "../assets/icons/Project";
import { StandUp } from "../assets/icons/StandUp";
import { Task } from "../assets/icons/Task";

export const SideBar = () => (
  <aside className="side-bar">
    <div className="user">
      <img src="/profile.jpg" className="avatar" alt="avatar" />
      <div className="user-info">
        <strong>Muslim uwi</strong>
        <span>Designer &amp; developer</span>
      </div>
    </div>

    <nav className="nav-aside">
      <strong>Menu</strong>
      <p>
        <Task />
        <span>My Task</span>
      </p>
      <p>
        <BlogIcon />
        <span>Blog</span>
      </p>
      <p>
        <Msg />
        <span>Comments</span>
      </p>
      <p>
        <StandUp />
        <span>standups</span>
      </p>
      <p>
        <ProjectIcon />
        <span>Projects</span>
      </p>
      <p>
        <a href="/auth/logout.html">
          <span>⧫</span>
          <span>Logout</span>
        </a>
      </p>
    </nav>
  </aside>
);
