// import { HTMLInputTypeAttribute } from "react";
// import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

// interface InputFieldProps {
//   type?: HTMLInputTypeAttribute;
//   placeholder?: string;
//   register: UseFormRegister<FieldValues>;
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
//   name,
//   register,
// }: InputFieldProps) => {
//   return (
//     <>
//       <label>{label}</label>
//       <input
//         placeholder={placeholder}
//         type={type}
//         name={name}
//         {...register(name)}
//       />
//       {error && <span style={{ color: "red" }}>{error.message}</span>}
//     </>
//   );
// };

// export default InputField;
import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface InputFieldProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  error: FieldError | undefined | Merge<FieldError, FieldErrorsImpl<any>>;
  label?: string;
  name: string;
}

const InputField = ({
  type = "text", // Default type
  placeholder,
  error,
  label,
  name,
  register,
}: InputFieldProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name)} // Pass register directly
      />
      {error && (
        <span style={{ color: "red" }}>
          {error.message || "Invalid input"}
        </span>
      )}
    </>
  );
};

export default InputField;
