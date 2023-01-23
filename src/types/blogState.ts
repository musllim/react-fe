type Ttoken = string | null;
type Ttheme = "light" | "dark";
type TPermission = ["admin"] | [];
export interface Iuser {
  userName?: string;
  email?: string;
  avatar?: string | null;
  token: Ttoken | null;
  permision?: TPermission;
  _id?: string;
}

export interface BlogState {
  theme: Ttheme;
  user: Iuser | null;
  error: string | null;
  blogs: IBblog | [];
}
export interface IComment {
  user: string;
  text: string;
  _id: string;
  likes: string[];
  updatedAt: string;
}
export interface IBblog {
  _id?: string;
  author?: string;
  body: string;
  banner: string;
  title: string;
  updatedAt?: string;
  comments?: IComment[];
}
export interface LoginPayloadAction {
  credentials: Iuser;
}
