import React, { useState } from "react";

const CustomInput = ({
  label,
  name,
  onChangeHandler,
  width = "100%",
  size = "sm",
  placeholder = "",
  type = "text",
  defaultValue = "",
}) => {
  const [value, setValue] = useState(defaultValue);
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ width: `${width}` }}>
      <label class="form-label-sm text-nowrap">{label}:</label>
      <input
        id={name}
        class={"form-control"}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default CustomInput;
