import React from "react";

interface InputProps {
  type?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <input
        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
