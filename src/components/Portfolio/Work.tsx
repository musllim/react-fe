import "./work.css";

const Work: React.FC<{ alternate?: true }> = ({ alternate }) => {
  //   const { theme } = useSelector((state) => state.blogReducer);

  return (
    <div className="card">
      {!alternate && <img src="/github.png" />}

      <div className="card-body">
        <h3>Github home page clone</h3>
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
      {alternate && <img src="/github.png" />}
    </div>
  );
};

export default Work;
