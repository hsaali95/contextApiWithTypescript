import { ChangeEvent, useState } from "react";
import { IForm } from "../types";

const InputFields = () => {
  const [formData, setFormData] = useState<IForm>({
    myname: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
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
    </>
  );
};

export default InputFields;
