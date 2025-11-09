import { BiCartDownload } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "./Login";

function Forgor() {
  function handleForgor() {
    console.log("user forgor", values.email);
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: handleForgor,
      validationSchema: loginSchema,
    });
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <form
          onSubmit={handleSubmit}
          className="min-h-[80vh] min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around"
        >
          <BiCartDownload className="text-white text-9xl " />
          <div className="flex flex-col gap-4 ">
            <h1 className="text-white text-3xl">Send code to your email.</h1>

            <label htmlFor="email" className="sr-only">
              email
            </label>
            <div >
              <div className="flex items-center border-white border rounded-md h-10 w-60 sm:w-75 pl-2">
                < MdAlternateEmail  className="text-white text-2xl" />
                <input
                  value={values.password}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  required
                  className=" pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white"
                  placeholder="email"
                />
              </div>
              {touched.email && errors.email && (
                <span className="text-sm text-red-300">{errors.email}</span>
              )}
            </div>
        </div>
          <div className="h-[25%] flex flex-col justify-between">
            <Button className="text-[blue] font-semibold mt-5" type="submit">
              Send Code
            </Button>
            <p className="text-[#e7e0e0] text-[0.9rem] self-start mt-5 ">
              Dont have an account?
              <Link to="/signup" className="text-gray-300 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgor;
