import { useRef } from "react";
import { TextFieldProps } from "../../types/textField";
import "./textfield.css";
const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  placeholder,
  password,
  refr,
}) => {
  return (
    <div className="control">
      <label htmlFor={label}>{label}</label>
      {type === "input" ? (
        <input
          ref={refr}
          type={password ? "password" : "text"}
          name={label}
          placeholder={placeholder}
        />
      ) : (
        <textarea ref={refr} name={label} placeholder={placeholder}></textarea>
      )}
    </div>
  );
};

export default TextField;
