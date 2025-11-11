import { BiCartDownload } from "react-icons/bi";
import { CiUser, CiLock, CiChat1,  } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "./Login";
import Input from "./FormInput";

function SignUp() {
  function handleSignup(values) {
    console.log(
      "user signed up",
      values.userName,
      values.passWord,
      values.fullName,
      values.email
    );
  }

  const signupSchema = Yup.object().shape({
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


  const initialValues = {
    fullName: "",
    userName: "",
    passWord: "",
    confirmPassword: "",
    email: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignup}
        validationSchema={signupSchema}
        validateOnMount
      >
        <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
          <Form className="min-h-[80vh]  min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around">
            <BiCartDownload className="text-white text-9xl " />
            <div className="h-[30%] flex flex-col justify-center gap-3 ">
              <Input
                type="text"
                name="fullName"
                placeholder="full name"
                id="fname"
                label="full name"
                Icon={CiChat1}
              />

              <Input
                type="email"
                name="email"
                placeholder="email"
                label="email"
                id="email"
                Icon={MdAlternateEmail}
              />
              <Input
                type="text"
                name="userName"
                placeholder="username"
                label="username"
                id="usrnme"
                Icon={CiUser}
              />

              <Input
                type="password"
                name="passWord"
                placeholder="password"
                id="pswrd"
                label="password"
                Icon={CiLock}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                id="cpass"
                label="Confirm Password"
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
          </Form>
        </div>
      </Formik>
    </>
  );
}

export default SignUp;
