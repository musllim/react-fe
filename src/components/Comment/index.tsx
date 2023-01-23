import { IComment } from "../../types/blogState";
import SingleComment from "./SingleComment";
import "./comments.css";
const Comments: React.FC<{ comments: IComment[] | undefined }> = ({
  comments,
}) => (
  <div className="comments">
    {comments?.map((comment) => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </div>
);

export default Comments;
