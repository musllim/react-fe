type Tinput = "input" | "textarea";
export interface TextFieldProps {
  label: string;
  type?: Tinput;
  placeholder?: string;
  refr: any;
  password?: boolean;
}
