import { useDeferredValue, useEffect, useState } from "react";
import Wrapper from "../Container";
import "./dashboard.css";
import Times from "../../assets/icons/Times";
import { Notification } from "../Notification";
import Bars from "../../assets/icons/Bars";
import { SideBar } from "../SideBar";
import { Trash } from "../../assets/icons/Trash";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetAllblogsQuery,
} from "../../db/apiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../db/store";
import { IBblog, IComment, Iuser } from "../../types/blogState";
import { setBlogs } from "../../db/blogSlices";
import { useDispatch } from "react-redux";
import { BlogInputFields } from "../BlogInputFields";
const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.blogReducer);
  const dispatch = useDispatch();
  const [sideBarShown, setSideBarShown] = useState(true);
  const { data, isSuccess } = useGetAllUsersQuery(user?.token);
  const { data: blogs, isSuccess: blogsLoaded } = useGetAllblogsQuery("");
  const [comments, setComments] = useState<IComment[]>([]);
  const [users, setUsers] = useState([]);
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    blogs?.data?.forEach((blog: IBblog) => {
      setComments((prevC) => [...prevC, ...blog?.comments]);
    });
    dispatch(setBlogs({ blogs: blogs?.data }));
    setBlogsList(blogs?.data);
  }, [blogs]);
  useEffect(() => {
    setUsers(data?.data);
  }, [data]);
  return (
    <section id="dashboard">
      <Wrapper>
        <h3>Admin dashboard</h3>
        <div className="dashboard">
          <span
            onClick={() => setSideBarShown(!sideBarShown)}
            id="side-toggler"
          >
            {sideBarShown ? <Bars /> : <Times />}
          </span>
          {sideBarShown && <SideBar />}

          <article className="main-dashboard">
            <div className="notifications">
              <Notification />
              <Notification />
              <Notification />
            </div>
            <BlogInputFields />
          </article>
        </div>
        {isSuccess && <UsersList users={users} setUsers={setUsers} />}
        {blogsLoaded && (
          <BlogsList blogs={blogsList} setBlogsList={setBlogsList} />
        )}
        <CommentsList comments={comments} setComments={setComments} />
      </Wrapper>
    </section>
  );
};

export default Dashboard;

const UsersList: React.FC<{
  users: Iuser[];
  setUsers: React.Dispatch<React.SetStateAction<never[]>>;
}> = ({ users, setUsers }) => {
  const [deleteUser, res] = useDeleteUserMutation();
  const { user } = useSelector((state: RootState) => state.blogReducer);

  const handleDeleteUser = (uid: string | undefined) => {
    if (uid === undefined) return;
    deleteUser({
      token: user?.token,
      id: uid,
    })
      .unwrap()
      .then((data) => {
        setUsers(users?.filter((user) => user?._id !== uid));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>List of users</h1>
      <table cellSpacing={0}>
        <tbody>
          <tr>
            <th>User name</th>
            <th>Email</th>
            <th>Delete user</th>
          </tr>
        </tbody>
        <tbody id="table-content">
          {users?.map((user) => (
            <tr key={user.email}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td onClick={() => handleDeleteUser(user._id)}>
                <Trash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const BlogsList: React.FC<{ blogs: IBblog[] }> = ({ blogs }) => {
  return (
    <>
      <h1>All my blogs</h1>

      <div className="wrapper">
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Blog Title</th>
              <th>Blog Content</th>
              <th>Comments</th>
              <th>Likes</th>
              <th>Delete Blog</th>
            </tr>
          </thead>
          <tbody id="blogs-table">
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <p className="txt-lg">{blog.title}</p>
                </td>
                <td>
                  <p className="txt-lg">{blog.body}</p>
                </td>
                <td>26</td>
                <td>27</td>
                <td className="blog-delete">
                  <Trash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const CommentsList: React.FC<{
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}> = ({ comments, setComments }) => {
  const { user } = useSelector((state: RootState) => state.blogReducer);
  // const handleDeleteComment = (cid: string | undefined) => {

  //   if (cid === undefined) return;
  //   deleteComment({
  //     token: user?.token,
  //     id: cid,
  //   })
  //     .unwrap()
  //     .then((data) => {
  //       setComments(comments?.filter((comments) => comments?._id !== cid));
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <h1>Comments table</h1>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Content</th>
            <th>Delete comment</th>
          </tr>
        </thead>
        <tbody id="comments-table">
          {comments?.map((comment) => (
            <tr key={crypto.randomUUID()}>
              <td>{comment._id}</td>
              <td>{comment.text}</td>
              <td className="comment-delete">
                <Trash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
