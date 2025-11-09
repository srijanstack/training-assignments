import { BiCartDownload } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "./Login";

function SignUp() {
  function handleSignup() {
    console.log(
      "user signed up",
      values.userName,
      values.passWord,
      values.fullName,
      values.email
    );
  }

  const loginSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required Field"),
    userName: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required Field"),
    passWord: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required Field"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("passWord"), null], "Passwords must match")
      .required("Required Field"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        userName: "",
        passWord: "",
        confirmPassword: "",
        email: "",
      },
      onSubmit: handleSignup,
      validationSchema: loginSchema,
    });
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <form
          onSubmit={handleSubmit}
          className="min-h-[80vh]  min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around"
        >
          <BiCartDownload className="text-white text-9xl " />
          <div className="h-[30%] flex flex-col justify-center gap-3 ">
            <label htmlFor="fullName" className=" sr-only">
              Full Name
            </label>
            <div>
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  type="text"
                  name="fullName"
                  onBlur={handleBlur}
                  required
                  placeholder="full name"
                  className=" pl-3 outline-0 w-[70%] sm:w-[80%] placeholder-white placeholder:opacity-80 text-white"
                />
              </div>
              {touched.fullName && errors.fullName && (
                <span className="text-sm text-red-300">{errors.fullName}</span>
              )}
            </div>
            <label htmlFor="email" className=" sr-only">
              E mail
            </label>
            <div>
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                <input
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  required
                  placeholder="email"
                  className=" pl-3 outline-0 w-[70%] sm:w-[80%] placeholder-white placeholder:opacity-80 text-white"
                />
              </div>
              {touched.email && errors.email && (
                <span className="text-sm text-red-300">{errors.email}</span>
              )}
            </div>
            <label htmlFor="userName" className=" sr-only">
              User name
            </label>
            <div>
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                <input
                  value={values.userName}
                  onChange={handleChange}
                  type="text"
                  name="userName"
                  onBlur={handleBlur}
                  required
                  placeholder="username"
                  className=" pl-3 outline-0 w-[70%] sm:w-[80%] placeholder-white placeholder:opacity-80 text-white"
                />
              </div>
              {touched.userName && errors.userName && (
                <span className="text-sm text-red-300">{errors.userName}</span>
              )}
            </div>

            <label htmlFor="passWord" className="sr-only">
              Password
            </label>
            <div>
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                <input
                  value={values.passWord}
                  onChange={handleChange}
                  type="password"
                  name="passWord"
                  onBlur={handleBlur}
                  required
                  className=" pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white"
                  placeholder="password"
                />
              </div>
              {touched.passWord && errors.passWord && (
                <span className="text-sm text-red-300">{errors.passWord}</span>
              )}
            </div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <div>
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                <input
                  value={values.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  required
                  className=" pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white"
                  placeholder="confirm password"
                />
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <span className="text-sm text-red-300">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>
          <div className="h-[25%] flex flex-col justify-between">
            <Button className="text-[blue] font-semibold mt-5" type='submit'>Signup</Button>
            <p className="text-[#e7e0e0] text-[0.9rem] self-start mt-5 ">
              Already have an account?
              <Link to="/login" className="text-gray-300 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
