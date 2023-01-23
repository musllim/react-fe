import Wrapper from "../Container";
import Work from "./Work";
import "./portfolio.css";

const Portfolio: React.FC = () => {
  //   const { theme } = useSelector((state) => state.blogReducer);

  return (
    <Wrapper>
      <div className="project-grid">
        <Work />
        <Work alternate={true} />
        <Work />
      </div>
    </Wrapper>
  );
};

export default Portfolio;
