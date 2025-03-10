import { InputFieldProps } from "../types";

const InputField = ({
  title,
  type,
  onChangeHandler,
  placeholder,
  value,
}: InputFieldProps) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-[#F8F7FA]/80 w-20 font-medium">{title}</label>
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className="flex-1 bg-[#25293c] text-[#F8F7FA] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-[#F8F7FA]/40"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
