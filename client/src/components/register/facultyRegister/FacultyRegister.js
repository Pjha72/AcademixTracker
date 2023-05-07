import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "../../../utils/Spinner";

const FacultyRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [gender, setGender] = useState(undefined);
  const [avatar, setAvatar] = useState("");
  const [dob, setDob] = useState(new Date());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [translate, setTranslate] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [joiningYear, setJoiningYear] = useState(new Date());

  // const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (store.errors) {
      setError(store.errors);
    }
  }, [store.errors]);

  const register = (e) => {
    e.preventDefault();
    setLoading(true);

    // dispatch(
    //   addFaculty({
    //     dob,
    //     name,
    //     email,
    //     gender,
    //     avatar,
    //     username,
    //     password,
    //     department,
    //     designation,
    //     contactNumber,
    //     joiningYear: new Date(joiningYear).getFullYear(),
    //   })
    // );
  };

  useEffect(() => {
    if (store.errors) {
      setName("");
      setEmail("");
      setAvatar("");
      setGender("");
      setUsername("");
      setPassword("");
      setLoading(false);
      setDepartment("");
      setDesignation("");
      setDob(new Date());
      setShowPassword("");
      setContactNumber("");
      setJoiningYear(new Date().getFullYear());
    }
  }, [store.errors]);
  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center">
      <a href="/">
        <button className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-right justify-center text-white text-base py-1 bg-[#FF2400]">
          Home
        </button>
      </a>
      <div className="grid grid-cols-2">
        <div
          className={`h-[40rem] w-full bg-white flex items-center justify-center ${
            translate ? "translate-x-[21rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem]  font-bold text-center">
            Faculty
            <br />
            Register
          </h1>
        </div>
        <form
          onSubmit={register}
          className={`h-[40rem] w-full bg-[#2c2f35] grid grid-cols-2 gap-4 p-[2rem] ${
            translate ? "-translate-x-[12rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-white text-3xl font-semibold col-span-2">
            Faculty
          </h1>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Name</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="text"
                value={name}
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Email</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="email"
                value={email}
                placeholder="johndoe@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Username</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                required
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Password</p>
            <div className="bg-[#515966] rounded-lg px-2 flex w-[14rem] items-center">
              <input
                required
                value={password}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                pattern="^(?=.*[A-Z])(?=.*[@])(?=.*\d).{6,}$"
                onChange={(e) => setPassword(e.target.value)}
                title="USE ONE : @-Number-UpperCase (at least 6 character)"
                className="bg-[#515966] text-white rounded-lg outline-none py-2  placeholder:text-sm"
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
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Gender</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-[13.5rem] bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Designation</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="text"
                value={designation}
                placeholder="Teacher"
                onChange={(e) => setDesignation(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">DOB</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                value={dob}
                type="date"
                onChange={(e) => setDob(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Department</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Contact Number</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Joining Date</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                value={joiningYear}
                type="date"
                onChange={(e) => setJoiningYear(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1 col-span-2">
            <p className="text-[#515966] font-bold text-sm">Avatar</p>
            <div className="bg-[#515966] rounded-lg flex items-center w-full">
              <input
                required
                type="file"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
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
          {(error.usernameError || error.passwordError) && (
            <p className="text-red-500">
              {error.usernameError || error.passwordError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FacultyRegister;
