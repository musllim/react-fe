import { useRef, useState } from "react";
import { useAddNewBlogMutation } from "../db/apiSlice";
import ButtonComponent from "./Button";
import { Stats } from "./Stats";
import TextField from "./TextField";
import { useSelector } from "react-redux";
import { RootState } from "../db/store";
import { useDispatch } from "react-redux";
import { setBlogs } from "../db/blogSlices";
export const BlogInputFields = () => {
  const { user, blogs } = useSelector((state: RootState) => state.blogReducer);
  const dispatch = useDispatch();
  const [addNewBlog, response] = useAddNewBlogMutation();
  const titleRef = useRef<HTMLInputElement | undefined>(null);
  const textRef = useRef<HTMLTextAreaElement | undefined>(null);
  const [banner, setBanner] = useState<
    string | ArrayBuffer | null | undefined
  >();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageReader = new FileReader();

    imageReader.onload = (e) => {
      setBanner(e.target?.result);
    };
    imageReader.readAsDataURL(e.target?.files[0]);
  };
  const handleSubmitBlog = () => {
    const blog = {
      title: titleRef.current?.value,
      body: textRef.current?.value,
      banner,
    };
    addNewBlog({ body: blog, token: user?.token })
      .unwrap()
      .then((data) => {
        dispatch(setBlogs({ blogs: [...blogs, data.data] }));
        if (titleRef.current?.value && textRef.current?.value) {
          titleRef.current.value = "";
          textRef.current.value = "";
          setBanner(null);
        }
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="word-pad">
      <h4>Start writing yOur blog</h4>
      <div id="error">test</div>
      <TextField
        refr={titleRef}
        label="Blog title"
        placeholder="title here please"
        type="input"
      />

      <div className="control">
        <label data-image="spider man.png" htmlFor="blogbanner">
          Blog banner
        </label>
        <input
          onChange={handleImageChange}
          accept="image/png"
          type="file"
          id="blogbanner"
        />
      </div>
      <TextField
        refr={textRef}
        label="Blog content"
        placeholder="write your blog here..."
        type="textarea"
      />

      <div className="ward-pad-controls">
        <ButtonComponent clickHandler={handleSubmitBlog} primary>
          post blog
        </ButtonComponent>
      </div>
      <h4>Yearly reads</h4>
      <Stats />
    </div>
  );
};
