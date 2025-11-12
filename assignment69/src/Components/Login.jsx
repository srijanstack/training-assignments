import { CiUser, CiLock } from "react-icons/ci";
import { BiCartDownload } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {FormikInput} from "./FormInput";

function Login() {
  function handleLogin(values) {
    console.log("user logged in", values.username, values.password);
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string().min(3).max(50).required(),
    password: Yup.string().min(3).max(50).required(),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
        validateOnMount
      >
        <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
          <Form className="min-h-[80vh] min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around">
            <BiCartDownload className="text-white text-9xl " />
            <div className="h-[30%] flex flex-col justify-center gap-3 ">
              <FormikInput
                id="usrnme"
                type="text"
                name="username"
                label="Username"
                placeholder="username"
                Icon={CiUser}
                required
              />

              <FormikInput
                id="pswrd"
                type="password"
                name="password"
                label="password"
                required
                placeholder="password"
                Icon={CiLock}
              />
            </div>
            <div className="h-[25%] flex flex-col justify-between">
              <Button className="text-[blue] font-semibold mt-5" type="submit">
                Login
              </Button>
              <p className="text-gray-300 hover:underline text-[0.9rem] self-end mt-1 cursor-pointer">
                Forgot Password?
              </p>
              <p className="text-[#e7e0e0] text-[0.9rem] self-start mt-5 ">
                Dont have an account?
                <Link to="/signup" className="text-gray-300 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
}

export function Button({ children, className, disabled, ...rest }) {
  return (
    <>
      <button
        className={"h-10 w-[60] sm:w-75 bg-white flex items-center justify-center rounded-md hover:bg-gray-200 cursor-pointer focus:border-2 focus:border-black " + className}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
export default Login;
