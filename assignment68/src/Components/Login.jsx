import { CiUser, CiLock } from "react-icons/ci";
import { BiCartDownload } from "react-icons/bi";
import { useFormik,  } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

function Login() {
  function handleLogin() {
    console.log("user logged in", values.username, values.password);
  }

   const loginSchema = Yup.object().shape({
   username: Yup.string()
     .min(3)
     .max(50)
     .required(),
   password: Yup.string()
     .min(3)
     .max(50)
     .required(),
 });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: loginSchema,
  });
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <form onSubmit={handleSubmit} className="min-h-[80vh] min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around">
          <BiCartDownload className="text-white text-9xl " />
          <div className="h-[30%] flex flex-col justify-center gap-3 ">
            <label htmlFor="username" className=" sr-only">
              Username
            </label>
            <div>
            <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
              <CiUser className="text-white text-3xl" />
              <input
                value={values.username}
                onChange={handleChange}
                type="text"
                name="username"
                onBlur={handleBlur}
                required
                placeholder="username"
                className=" pl-3 outline-0 w-[70%] sm:w-[80%] placeholder-white placeholder:opacity-80 text-white"
              />
            </div>
            {touched.username && errors.username && (<span className="text-sm text-red-300">{errors.username}</span>)}
            </div>

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div>
            <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
              <CiLock className="text-white text-3xl" />
              <input
                value={values.password}
                onChange={handleChange}
                type="password"
                name="password"
                onBlur={handleBlur}
                required
                className=" pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white"
                placeholder="password"
              />
            </div>
            {touched.password && errors.password && (<span className="text-sm text-red-300">{errors.password}</span>)}
            </div>
          </div>
          <div className="h-[25%] flex flex-col justify-between">
            <Button className="text-[blue] font-semibold mt-5" >Login</Button>
            <p className="text-gray-300 hover:underline text-[0.9rem] self-end mt-1">
              Forgot Password?
            </p>
            <p className="text-[#e7e0e0] text-[0.9rem] self-start mt-5 ">
              Dont have an account? <Link to='/signup' className="text-gray-300 hover:underline">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export function Button({ children, className, type='button', onClick}) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`h-10 w-[60] sm:w-75  bg-white flex items-center justify-center rounded-md ${className} cursor-pointer outline-0 hover:bg-[#e3e3e3]`}
      >
        {children}
      </button>
    </>
  );
}
export default Login;
