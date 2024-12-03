import { FieldValues, useForm } from "react-hook-form";
import InputField from "../../components/common/input-field";
import Button from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schema";
import CustomDropDown from "../../components/common/drop-down";

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
    console.log("Form Data", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Name"
        name="uname"
        register={register}
        errorMessage={errors.uname?.message as string} // Pass errors correctly
      />
      <br />
      <InputField
        label="Email"
        name="email"
        register={register}
        errorMessage={errors.email?.message as string} // Pass errors correctly
      />
      <br />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default ZodReactHookForm;
