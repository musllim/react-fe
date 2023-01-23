import { useGetAllblogsQuery } from "../../db/apiSlice";
import { IBblog } from "../../types/blogState";
import Wrapper from "../Container";
import Article from "./Article";
import "./blog.css";
const Blog = () => {
  const { data, isLoading, isSuccess } = useGetAllblogsQuery("");

  return (
    <section id="blog">
      <Wrapper>
        <h3>My blog</h3>
        {isLoading && <h1>loading...</h1>}
        {isSuccess &&
          data.data.map((blog: IBblog) => (
            <Article
              key={blog._id}
              banner={blog.banner}
              body={blog.body}
              title={blog.title}
              id={blog._id}
              comments={blog.comments}
              open
            />
          ))}
      </Wrapper>
    </section>
  );
};

export default Blog;
