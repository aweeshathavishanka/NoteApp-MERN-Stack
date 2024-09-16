import { useState } from "react";
import NavBar from "../../components/NavBar";
import PasswordInputs from "../../components/PasswordInputs";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required");
      return;
    }

    if (!email) {
      setError("Email is required");
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
          <form onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder="Full Name"
              className=" input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Create Account
            </button>
            <p className="mt-4 text-sm text-center ">
              If you have Account {""}
              <Link
                to={"/login"}
                className="font-medium underline text-primary">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
