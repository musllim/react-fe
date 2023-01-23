import "./style.css";

const Wrapper: React.FC<{ children: any }> = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default Wrapper;
