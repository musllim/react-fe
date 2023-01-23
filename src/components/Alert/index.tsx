import { IAlert } from "../../types/alert";

export const Alert: React.FC<IAlert> = ({ children }) => (
  <div
    style={{
      textAlign: "center",
      color: "white",
      borderRadius: "0.4em",
      marginInline: "auto",
      backgroundColor: "rgb(255, 111, 0)",
      maxWidth: "fit-content",
      padding: "1em 2em",
      transition: "0.3s",
      marginTop: "1rem",
    }}
  >
    {children}
  </div>
);
