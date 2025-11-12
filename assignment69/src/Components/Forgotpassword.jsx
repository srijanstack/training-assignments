import { BiCartDownload } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "./Login";
import {FormikInput} from "./FormInput";

function Forgor() {
  function handleForgor(values) {
    console.log("user forgor", values.email);
  }

  const forgorSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const initialValues = { email: "" };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleForgor}
        validationSchema={forgorSchema}
        validateOnMount
      >
        <div className="h-auto  w-full bg-backgrey flex items-center justify-center py-10 flex-grow">
          <Form className="min-h-[80vh] min-w-[80vw] bg-[blue] bg-cover flex flex-col items-center py-4 gap-2 rounded-3xl justify-around">
            <BiCartDownload className="text-white text-9xl " />
            <div className="flex flex-col gap-4 ">
              <h1 className="text-white text-3xl">Send code to your email.</h1>
              <FormikInput
                type="email"
                name="email"
                placeholder="email"
                label="email address"
                id="email"
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
          </Form>
        </div>
      </Formik>
    </>
  );
}

export default Forgor;
