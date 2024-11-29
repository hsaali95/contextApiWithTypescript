// import { FieldValues, useForm } from "react-hook-form";
// import InputField from "../../components/common/input-field";
// import Button from "../../components/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "../../schema";

// const ZodReactHookForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     reValidateMode: "onChange",
//     mode: "onChange",
//     resolver: zodResolver(loginSchema),
//   });
//   const onSubmit = (e: FieldValues) => {
//     console.log("e", e);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <InputField
//           label="Name"
//           name="name"
//           register={register}
//           error={errors.name}
//         />
//         <br />
//         <br />
//         <InputField
//           label="Email"
//           name="email"
//           register={register}
//           error={errors.email}
//         />
//         <br />
//         <br />
//         <Button type="submit" text="Submit" />
//       </form>
//     </>
//   );
// };

// export default ZodReactHookForm;

import { FieldValues, useForm } from "react-hook-form";
import InputField from "../../components/common/input-field";
import Button from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema";

const ZodReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Name"
        name="name"
        register={register}
        error={errors.name} // Pass the specific error
      />
      <br />
      <InputField
        label="Email"
        name="email"
        register={register}
        error={errors.email} // Pass the specific error
      />
      <br />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default ZodReactHookForm;
