import Book from "../../assets/icons/Book";
import Heart from "../../assets/icons/Heart";
import Paper from "../../assets/icons/Paper";
import { IBblog } from "../../types/blogState";
import ButtonComponent from "../Button";
import Comments from "../Comment";
import Banner from "./Banner";
import "./article.css";
interface IBblogProps extends IBblog {
  open?: boolean;
  state?: "standalone";
  id?: string;
}
const Article: React.FC<IBblogProps> = ({
  title,
  body,
  banner,
  open,
  state,
  id,
  comments,
}) => {
  return (
    <div className="blogs__element">
      <details id="63c4fd7b2e17a4a092b0fdc0" open={open}>
        <summary>{title}</summary>
        <Banner alt={`${title} image`} src={banner} />
        <br />

        <div className="content">
          <pre>{body}</pre>
        </div>

        <div className="user-controls">
          {state === "standalone" ? (
            ""
          ) : (
            <ButtonComponent link={`/blog/${id}`}>Read more</ButtonComponent>
          )}

          <span
            data-like="1"
            data-id="63c4fd7b2e17a4a092b0fdc0"
            className="control-item"
          >
            <Heart />
            <span className="likes">27</span>
          </span>
          <span
            data-comment="1"
            data-id="63c4fd7b2e17a4a092b0fdc0"
            className="control-item"
          >
            <Paper />
            <span>{comments?.length}</span>
          </span>
          <span data-id="63c4fd7b2e17a4a092b0fdc0" className="control-item">
            <Book />
            <span>45</span>
          </span>
          <div className="user-nav">
            <div
              style={{ backgroundImage: "url('/logo.png')" }}
              className="avatar"
            ></div>
            <textarea></textarea>
            <button id="comment" className="btn btn-primary reply">
              comment
            </button>
          </div>
        </div>
        {state === "standalone" ? <Comments comments={comments} /> : ""}
      </details>
    </div>
  );
};

export default Article;
