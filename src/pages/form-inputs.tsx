import { ChangeEvent, FormEvent, useState } from "react";
import { IForm } from "../types";

const FormInputs = () => {
  const [formData, setFormData] = useState<IForm>({
    myname: "",
    phone: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <label>Name</label>
        <input
          type="text"
          name={"myname"}
          value={formData.myname}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Phone</label>
        <input
          type={"number"}
          name={"phone"}
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FormInputs;
