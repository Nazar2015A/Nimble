import React from "react";

interface InputFieldProps {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) => {
  const hasLabel = Boolean(label);

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        {hasLabel && (
          <label
            htmlFor={id}
            className="block text-md font-medium text-gray-700 shrink-0"
          >
            {label}
          </label>
        )}

        {error && <p className="text-red-500 text-sm truncate">{error}</p>}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};
