import { CiUser, CiLock } from "react-icons/ci";
import { BiCartDownload } from "react-icons/bi";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./NormalInput";
import axios from "axios";
import { MdAlternateEmail } from "react-icons/md";

function handleLogin(values, bag) {
  axios
    .post("https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/signin", {
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch((err) => console.log(err.name));
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(3).max(50).required(),
});

const initialValues = {
  email: "",
  password: "",
};

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: loginSchema,
  handleSubmit: handleLogin,
});

export function Loginform({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
        <form
          onSubmit={handleSubmit}
          className="min-h-[80vh] max-h-[80vh]  min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around"
        >
          <BiCartDownload className="text-white text-9xl " />
          <div className="h-[30%] flex flex-col justify-center gap-3 ">
            <Input
              id="email"
              type="email"
              name="email"
              label="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              value={values.email}
              Icon={MdAlternateEmail}
              required
            />

            <Input
              id="pswrd"
              type="password"
              name="password"
              label="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              value={values.password}
              required
              placeholder="password"
              Icon={CiLock}
            />
          </div>
          <div className="h-[25%] flex flex-col justify-between">
            <Button className="text-[blue] font-semibold mt-5" type="submit">
              Login
            </Button>

            <Link
              to="/forgot"
              className="text-gray-300 hover:underline text-[0.9rem] self-end mt-1 cursor-pointer"
            >
              Forgot Password?
            </Link>
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

export function Button({ children, className, disabled, ...rest }) {
  return (
    <>
      <button
        className={
          "h-10 w-[60] sm:w-75 bg-white flex items-center justify-center rounded-md hover:bg-gray-200 cursor-pointer focus:border-2 focus:border-black " +
          className
        }
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

const Login = myHOC(Loginform);

export default Login;
