import Heart from "../../assets/icons/Heart";
import { IComment } from "../../types/blogState";
import "./comments.css";
const SingleComment: React.FC<{ comment: IComment }> = ({ comment }) => (
  <div key={comment?._id} id="63c9932e9c836188b90e5b79">
    <div className="flex">
      <span className="default-avatar avatar sm">U</span>

      <span>{comment?.text}</span>
    </div>
    <div className="user-controls">
      <div
        data-blogid="63c4fd7b2e17a4a092b0fdc0"
        data-id="63c9932e9c836188b90e5b79"
        className="like"
      >
        <span>{comment?.likes.length}</span> <Heart />
      </div>
    </div>
  </div>
);

export default SingleComment;
