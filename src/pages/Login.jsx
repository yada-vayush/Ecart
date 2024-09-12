import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [currentState, setCurrentState] = useState("Log In");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    currentState === "Log In" ? login() : signUp();
  };
  const login = async () => {
    console.log("Login FUNCTION", formData);
    let responseData;
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/login",
        formData,
        {
          headers: {
            Accept: "application/formData",
            "Content-Type": "application/json",
          },
        }
      );
      responseData = response.data;
      if (responseData.success == true) {
        localStorage.setItem("auth-token", responseData.data);
        window.location.replace("/");
      } else alert(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async () => {
    console.log("sIGN UP FUNCIOTN", formData);
    let responseData;
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/signup",
        formData,
        {
          headers: {
            Accept: "application/formData",
            "Content-Type": "application/json",
          },
        }
      );
      responseData = response.data;
      if (responseData.success == true) {
        localStorage.setItem("auth-token", responseData.data);
        window.location.replace("/");
      } else alert(responseData.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 ng-gray-800" />
      </div>
      {currentState === "Sign Up" ? (
        <input
          type="text"
          name="username"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          value={formData.username}
          onChange={changeHandler}
          required
        />
      ) : (
        <></>
      )}

      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
        required
      />
      <input
        type="password"
        name="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        value={formData.password}
        onChange={changeHandler}
        required
      />
      <div className="w-full  flex justify-between text-sm mt-[-8px]">
        {currentState === "Log In" ? (
          <p className="cursor-pointed">Forgot your password ?</p>
        ) : (
          <p className="cursor-pointer">Already have an account</p>
        )}
        {currentState === "Log In" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Log In")}
            className="cursor-pointer"
          >
            Log In
          </p>
        )}
      </div>
      <button className="bg-green-300 text-white font-light px-8 mt-4 py-2 rounded-md">
        {currentState === "Log In" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
