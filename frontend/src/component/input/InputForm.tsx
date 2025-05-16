import React from 'react';

interface InputFormProps {
  label?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-gray-900 text-base font-bold mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputForm;