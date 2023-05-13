import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { adminSignIn } from "../../../redux/actions/adminActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const defaultValues = {
  username: "",
  password: "",
};

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1000);
  }, []);

  const onSubmit = ({ username, password }) => {
    setLoading(true);

    dispatch(adminSignIn({ username, password }, navigate));
  };

  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center">
      <a href="/">
        <button className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-right justify-center text-white text-base py-1 bg-[#FF2400]">
          Home
        </button>
      </a>
      <div className="grid grid-cols-2">
        <div
          className={`h-96 w-96 bg-white flex items-center justify-center ${
            translate ? "translate-x-[12rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem]  font-bold text-center">
            Admin
            <br />
            Login
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            loading ? "h-[27rem]" : "h-96"
          } w-96 bg-[#2c2f35] flex flex-col items-center justify-center ${
            translate ? "-translate-x-[12rem]" : ""
          }  duration-1000 transition-all space-y-6 rounded-3xl shadow-2xl`}
        >
          <h1 className="text-white text-3xl font-semibold">Admin</h1>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Username</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.username ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Username"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Password</p>
            <div
              className={`bg-[#515966] rounded-lg px-2 flex items-center ${
                errors.password ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      pattern="^(?=.*[A-Z])(?=.*[@])(?=.*\d).{6,}$"
                      title="USE ONE : @-Number-UpperCase (at least 6 character)"
                      className="bg-[#515966] text-white rounded-lg outline-none py-2  placeholder:text-sm"
                      {...field}
                    />
                    {showPassword ? (
                      <VisibilityIcon
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer"
                      />
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-1 bg-[#04bd7d]"
          >
            Login
          </button>
          {loading && (
            <Spinner
              message="Logging In"
              height={30}
              width={150}
              color="#ffffff"
              messageColor="#fff"
            />
          )}
          <ul className="mt-2">
            {errors.username ? (
              <li>
                <small className="text-red-500">
                  {errors.username.message}
                </small>
              </li>
            ) : null}
            {errors.password ? (
              <li>
                <small className="text-red-500">
                  {errors.password.message}
                </small>
              </li>
            ) : null}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
