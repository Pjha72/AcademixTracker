import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../../redux/actions/adminActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup
  .object({
    dob: yup.string().required(),
    name: yup.string().required(),
    avatar: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    department: yup.string().required(),
    joiningYear: yup.string().required(),
    contactNumber: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const defaultValues = {
  dob: "",
  name: "",
  email: "",
  avatar: "",
  username: "",
  password: "",
  department: "",
  joiningYear: "",
  showPassword: "",
  contactNumber: "",
};

const AdminRegister = () => {
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
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

  const onSubmit = (data) => {
    setLoading(true);

    const {
      dob,
      name,
      email,
      avatar,
      username,
      password,
      department,
      contactNumber,
      joiningYear,
    } = data;

    dispatch(
      addAdmin({
        dob,
        name,
        email,
        avatar,
        username,
        password,
        department,
        contactNumber,
        joiningYear: new Date(joiningYear).getFullYear(),
      })
    );
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
          className={`h-[36rem] w-full bg-white flex items-center justify-center ${
            translate ? "translate-x-[21rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem]  font-bold text-center">
            Admin
            <br />
            Register
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`h-[36rem] w-full bg-[#2c2f35] grid grid-cols-2 gap-4 p-[2rem] ${
            translate ? "-translate-x-[12rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-white text-3xl font-semibold col-span-2">
            Admin
          </h1>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Name</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.name ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Email</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.email ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="johndoe@email.com"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
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
            <div className="bg-[#515966] rounded-lg px-2 flex  items-center">
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
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">DOB</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.dob ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="dob"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Department</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.department ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="department"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Contact Number</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.contactNumber ? "border border-red-500" : ""
              }`}
            >
              <Controller
                control={control}
                name="contactNumber"
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="number"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Joining Date</p>
            <div
              className={`bg-[#515966] rounded-lg w-[14rem] flex  items-center ${
                errors.joiningYear ? "border border-red-500" : ""
              }`}
            >
              <Controller
                control={control}
                name="joiningYear"
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="date"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="space-y-1 col-span-2">
            <p className="text-[#515966] font-bold text-sm">Avatar</p>
            <div
              className={`bg-[#515966] rounded-lg w-full flex  items-center ${
                errors.avatar ? "border border-red-500" : ""
              }`}
            >
              <Controller
                name="avatar"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="file"
                    className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-1 bg-[#04bd7d]"
          >
            Register
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
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
