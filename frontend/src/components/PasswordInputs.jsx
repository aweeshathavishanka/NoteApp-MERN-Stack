import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const PasswordInputs = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        value={value}
        onChange={onChange}
        className=" w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />
      {showPassword ? (
        <FaRegEye
          size={22}
          onClick={() => toggleShowPassword()}
          className=" text-primary cursor-pointer"
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          onClick={() => toggleShowPassword()}
          className=" text-slate-400 cursor-pointer"
        />
      )}
    </div>
  );
};

export default PasswordInputs;
