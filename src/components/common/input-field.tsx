// import { HTMLInputTypeAttribute } from "react";
// import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

// interface InputFieldProps {
//   type?: HTMLInputTypeAttribute;
//   placeholder?: string;
//   register?: UseFormRegister<FieldValues>;
//   error?: FieldError | undefined;
//   label?: string;
//   name?: string;
//   errorMessage?: string;
// }
// const InputField = ({
//   type = "text",
//   placeholder,
//   error,
//   label,
//   ...props
// }: InputFieldProps) => {
//   const register = props.register && props.register(props?.name || "");

//   return (
//     <>
//       <label>{label}</label>
//       <input placeholder={placeholder} type={type} {...register} />
//       {props.errorMessage && (
//         <span style={{ color: "red" }}>{props.errorMessage}</span>
//       )}
//     </>
//   );
// };

// export default InputField;

import { HTMLInputTypeAttribute } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  name: string; // Make 'name' required for proper registration
  errorMessage?: string;
  label?: string;
}

const InputField = ({
  type = "text",
  placeholder,
  label,
  register,
  name,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)} // Properly register the field with its name
      />
      {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default InputField;
