import { BiCartDownload } from "react-icons/bi";
import { CiUser, CiLock, CiChat1 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Formik, Form, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "./Login";
import Input from "./NormalInput";
import axios from "axios";
import Alert from "./Alert";
import {withAlert, withUser} from "./WithPorvider";

function handleSignup(values, bag) {
  axios
    .post("https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com/signup", {
      firstName: values.firstName,
      email: values.email,
      password: values.passWord,
    })
    .then((res) => {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({ message: " User created", type: "Success!" });
    })
    .catch(() =>
      bag.props.setAlert({ message: " User already exists", type: "Error!" })
    );
}

const signupSchema = Yup.object().shape({
  firstName: Yup.string()
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

const initialValues = {
  firstName: "",
  userName: "",
  passWord: "",
  confirmPassword: "",
  email: "",
};

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: signupSchema,
  handleSubmit: handleSignup,
});

function SignUpPage({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow  flex-col gap-t2">
        <Alert />
        <form
          onSubmit={handleSubmit}
          className="min-h-[80vh] max-h-[80vh]  min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around"
        >
          <BiCartDownload className="text-white text-9xl " />
          <div className="h-[30%] flex flex-col justify-center gap-3 ">
            <Input
              type="text"
              name="firstName"
              placeholder="first name"
              id="fname"
              label="first name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.firstName}
              touched={touched.firstName}
              value={values.firstName}
              Icon={CiChat1}
            />

            <Input
              type="email"
              name="email"
              placeholder="email"
              label="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              value={values.email}
              Icon={MdAlternateEmail}
            />
            <Input
              type="text"
              name="userName"
              placeholder="username"
              label="username"
              id="usrnme"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userName}
              touched={touched.userName}
              value={values.userName}
              Icon={CiUser}
            />

            <Input
              type="password"
              name="passWord"
              placeholder="password"
              id="pswrd"
              label="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.passWord}
              touched={touched.passWord}
              value={values.passWord}
              Icon={CiLock}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              id="cpass"
              label="Confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              value={values.confirmPassword}
              Icon={CiLock}
            />
          </div>
          <div className="h-[25%] flex flex-col justify-between">
            <Button className="text-[blue] font-semibold mt-5" type="submit">
              Signup
            </Button>
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

const SignUp = myHOC(SignUpPage);

export default withAlert(withUser(SignUp));
