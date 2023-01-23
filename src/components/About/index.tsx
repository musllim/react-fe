import Wrapper from "../Container";
import "./about.css";

const About: React.FC = () => {
  //   const { theme } = useSelector((state) => state.blogReducer);

  return (
    <Wrapper>
      <div id="about-me">
        <h3>About me</h3>
        <div className="card">
          <img src="/profile.jpg" />
          <div className="card-body">
            <h3>Github home page clone</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incid.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incid.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incid.
            </p>
            <div className="btn-group">
              <a href="#" className="btn">
                github
              </a>
              <a href="#" className="btn">
                live web
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
