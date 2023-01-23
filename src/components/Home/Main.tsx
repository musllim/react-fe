import ButtonComponent from "../Button";
import Wrapper from "../Container";
import "./main.css";

const Nav: React.FC = () => {
  return (
    <main>
      <Wrapper>
        <h1>Creative web developer and designer</h1>
        <ButtonComponent link="#">Explore my creativity</ButtonComponent>
      </Wrapper>
    </main>
  );
};

export default Nav;
