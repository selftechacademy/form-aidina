import React, { useState } from "react";

const CustomDropDown = ({
  options,
  label,
  secondLabel = "",
  name,
  onChangeHandler,
  width = "100%",
  size = "sm",
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onSelectionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div class="mb-3">
      <div className="d-flex" style={{ width: `${width}` }}>
        <label class="form-label text-nowrap">{label}:</label>
        <select
          class={`form-select form-select-${size}`}
          name={name}
          id={name}
          value={selectedOption}
          onChange={onSelectionChange}
        >
          {/* <option selected>Select one</option> */}
          {options.map((el, index) => (
            <option value={el} key={index}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-3 fw-bold">{secondLabel?.toUpperCase()}</span>
    </div>
  );
};

export default CustomDropDown;
