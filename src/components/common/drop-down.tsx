interface ICustomDropDown {
  onChange?: () => void;
  value?: string;
}

const CustomDropDown = ({ onChange, value }: ICustomDropDown) => {
  const options = [
    {
      label: "Fruit",
      value: "fruit",
    },
    {
      label: "Vegetable",
      value: "vegetable",
    },
    {
      label: "Meat",
      value: "meat",
    },
  ];
  return (
    <>
      <div>
        <select onChange={onChange} value={value}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CustomDropDown;
