import React from "react";

const Input = ({
  label,
  type,
  name,
  classname,
  placeholder,
  value,
  options,
}) => {
  return (
    <>
      {name === "ball" ? (
        <div className={classname}>
          <label>
            {label}
            <select type={type} name={name} id={name} placeholder={placeholder}>
              {options.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </label>
        </div>
      ) : type !== "checkbox" ? (
        <div className={classname}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      ) : (
        <div className={classname}>
          <input type={type} name={name} id={name} />
          <label htmlFor={name}>{label}</label>
        </div>
      )}
    </>
  );
};

export default Input;
