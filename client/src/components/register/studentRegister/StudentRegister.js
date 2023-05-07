import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import Spinner from "../../../utils/Spinner";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [avatar, setAvatar] = useState("");
  const [dob, setDob] = useState(new Date());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(undefined);
  const [department, setDepartment] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [section, setSection] = useState(undefined);
  const [translate, setTranslate] = useState(false);
  const [subjects, setSubjects] = useState(undefined);
  const [fatherContact, setFatherContact] = useState("");
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
      setBatch("");
      setAvatar("");
      setGender("");
      setUsername("");
      setPassword("");
      setFatherName("");
      setLoading(false);
      setDepartment("");
      setDob(new Date());
      setShowPassword("");
      setContactNumber("");
      setSubjects(undefined);
      setJoiningYear(new Date().getFullYear());
    }
  }, [store.errors]);
  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-2">
        <div
          className={`h-[40rem] w-full bg-white flex items-center justify-center ${
            translate ? "translate-x-[23rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-[3rem]  font-bold text-center">
            Student
            <br />
            Register
          </h1>
        </div>
        <form
          onSubmit={register}
          className={`h-[40rem] w-full bg-[#2c2f35] grid grid-cols-3 gap-4 p-[2rem] ${
            translate ? "-translate-x-[24rem]" : ""
          }  duration-1000 transition-all rounded-3xl shadow-2xl`}
        >
          <h1 className="text-white text-3xl font-semibold col-span-3">
            Student
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
            <p className="text-[#515966] font-bold text-sm">Batch</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="text"
                value={batch}
                placeholder="Batch 19"
                onChange={(e) => setBatch(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Section</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                required
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
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
            <p className="text-[#515966] font-bold text-sm">Father Name</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                type="text"
                value={fatherName}
                placeholder="John Doe"
                onChange={(e) => setFatherName(e.target.value)}
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Father Contact</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                type="text"
                value={fatherContact}
                onChange={(e) => setFatherContact(e.target.value)}
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
            <p className="text-[#515966] font-bold text-sm">Year</p>
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

          <div className="space-y-1">
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
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Subjects</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <select
                multiple
                name="subjects"
                value={subjects}
                onChange={(e) => setSubjects(e.target.value)}
                className="w-[13.5rem] bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
              >
                <option value="maths">Maths</option>
                <option value="science">Science</option>
                <option value="english">English</option>
                <option value="history">History</option>
                <option value="economics">Economics</option>
              </select>
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-between">
            <button
              type="submit"
              className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-1 bg-[#04bd7d]"
            >
              Register
            </button>{" "}
            <a href="/">
              <button className="w-36 hover:scale-105 transition-all duration-150 rounded-lg flex items-right justify-center text-white text-base py-1 bg-[#FF2400]">
                <ChevronLeftOutlined /> Back to Home
              </button>
            </a>
          </div>
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

export default StudentRegister;
