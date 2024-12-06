import React from "react";

const InputField = ({
  label,
  icon,
  type = "text",
  value,
  disabled = false,
  onChange,
  placeholder = "",
  error = "",
  name,
  appendIcon,
}) => {
  const mainColor = "rgb(99,102,241)";
  const errorColor = "rgb(239,68,68)";

  return (
    <div className="mb-6">
      <label
        className="text-lg font-medium mb-2 flex items-center gap-2"
        style={{ color: error ? errorColor : mainColor }}
      >
        {icon} {label}
      </label>
      <div className="relative">
        <input
          type={type}
          defaultValue={value}
          disabled={disabled}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg text-lg transition focus:outline-none ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-[rgb(99,102,241)]"
          } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {appendIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {appendIcon}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
