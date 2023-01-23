import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginUser, setError } from "../../db/blogSlices";
import { useLoginUserMutation } from "../../db/apiSlice";
import TextField from "../TextField";
import ButtonComponent from "../Button";
import Wrapper from "../Container";
import { Link, Navigate } from "react-router-dom";
import { Alert } from "../Alert";
import { useSelector } from "react-redux";
import { RootState } from "../../db/store";

const Login: React.FC = () => {
  const { error, user } = useSelector((state: RootState) => state.blogReducer);
  const dispatch = useDispatch();

  const [login, response] = useLoginUserMutation();
  const emailRef = useRef<HTMLInputElement | undefined>(null);
  const passwordRef = useRef<HTMLTextAreaElement | undefined>(null);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    login({ body: credentials })
      .unwrap()
      .then((data) => {
        dispatch(loginUser({ credentials: data?.data }));
        if (emailRef.current?.value && passwordRef.current?.value) {
          emailRef.current.value = "";
          passwordRef.current.value = "";
        }
      })
      .catch((error: any) => {
        dispatch(setError({ error: error.data.details }));
        setTimeout(() => {
          dispatch(setError({ error: null }));
        }, 3500);
      });
  };

  return user?.permision?.includes("admin") ? (
    <Navigate to="/dashboard" />
  ) : (
    <div
      style={{
        marginInline: "auto",
        marginTop: "3rem",
      }}
    >
      <Wrapper>
        <h4 style={{ textAlign: "center" }}>Start writing yOur blog</h4>
        {error && <Alert>{error}</Alert>}

        <form
          onSubmit={handleLogin}
          className="login"
          style={{
            marginTop: "2rem",
            width: "100%",
            marginInline: "auto",
            maxWidth: "600px",
            display: "grid",
            gap: "1em",
          }}
        >
          <TextField
            refr={emailRef}
            label="Email"
            placeholder="muslim@gmail.com"
            type="input"
          />

          <TextField
            refr={passwordRef}
            label="Password"
            type="input"
            password
          />

          <ButtonComponent primary>login</ButtonComponent>
          <Link
            style={{ marginTop: "1rem", textAlign: "center" }}
            to="/register"
          >
            create account?
          </Link>
        </form>
      </Wrapper>
    </div>
  );
};

export default Login;
