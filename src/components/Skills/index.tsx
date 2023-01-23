import Wrapper from "../Container";
import "./skills.css";
const Skills = () => {
  return (
    <div id="skills">
      <Wrapper>
        <h3>Skills &amp; competencies</h3>
        <div className="skills-container">
          <div className="card-skills">
            <h4>Design skills</h4>

            <div className="body">
              <img src="/Adobe logo.png" />
              <img src="/Figma logo.png" />
              <img src="/Ai.png" />
            </div>
          </div>
          <div className="card-skills">
            <h4>Front-end skills</h4>

            <div className="body">
              <img src="/HTML logo.png" />
              <img src="/javascript logo.png" />
              <img src="/Svelte logo.png" />
              <img src="/vite.svg" />
            </div>
          </div>
          <div className="card-skills">
            <h4>Back-end skills</h4>

            <div className="body">
              <img src="/Firebase logo.png" />
              <img src="/MongoDB_Logo logo.png" />
              <img src="/MySQL logo.png" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Skills;
