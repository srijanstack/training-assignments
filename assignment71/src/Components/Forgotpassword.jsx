import { BiCartDownload } from "react-icons/bi";
import { Formik, Form, withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "./Login";
import { FormikInput } from "./FormInput";

function handleForgor(values) {
  console.log("user forgor", values.email);
}

const forgorSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues = { email: "" };

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: forgorSchema,
  handleSubmit: handleForgor,
});

function ForgorPage({
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
          className="min-h-[80vh] min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around"
        >
          <BiCartDownload className="text-white text-9xl " />
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-white text-2xl sm:text-3xl">Send code to your email.</h1>
            <FormikInput
              type="email"
              name="email"
              placeholder="email"
              label="email address"
              id="email"
              value={values.email}
              touched={touched.email}
              onBlur={handleBlur}
              error={errors.email}
              onChange={handleChange}
              Icon={MdAlternateEmail}
            />
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

const Forgor = myHOC(ForgorPage);

export default Forgor;
