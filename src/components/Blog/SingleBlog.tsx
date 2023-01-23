import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../db/apiSlice";
import Wrapper from "../Container";
import Article from "./Article";

const SingleBlog = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBlogQuery(id);
  if (isLoading) return <h1>Loading</h1>;
  return (
    <>
      <Wrapper>
        <Article
          state="standalone"
          open
          title={data.data.title}
          body={data.data.body}
          comments={data.data.comments}
          banner={data.data.banner}
        />
      </Wrapper>
    </>
  );
};

export default SingleBlog;
