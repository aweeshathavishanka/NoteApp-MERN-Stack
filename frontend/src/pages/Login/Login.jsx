import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PasswordInputs from "../../components/PasswordInputs";
import { useState } from "react";
import { validateEmail } from "../../utills/helper";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid Email");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setError("");
  };
  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center mt-28">
        <div className="py-10 bg-white border rounded w-96 px-7">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Log In</h4>

            <input
              type="email"
              placeholder="Email"
              className=" input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInputs
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="pb-1 text-xs text-red-500">{error}</p>}
            <button className="btn-primary" type="submit">
              Login
            </button>
            <p className="mt-4 text-sm text-center ">
              Not Registered yet? {""}
              <Link
                to={"/signup"}
                className="font-medium underline text-primary">
                Create a Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
