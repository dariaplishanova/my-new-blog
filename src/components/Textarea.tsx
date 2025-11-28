import React from 'react';

interface TextareaProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ id, value, onChange, required }) => {
  return (
    <textarea
        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Textarea;
