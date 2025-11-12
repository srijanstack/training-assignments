import { useField } from "formik";
import Input from "./NormalInput";

function FormInput(WrappedComponent) {
  return function FormikConnectedComponent({ name, ...props }) {
    const [field, meta] = useField(name);
    const { error, touched } = meta;

    return (
      <WrappedComponent {...props} {...field} error={error} touched={touched} />
    );
  };
}

export const FormikInput = FormInput(Input);
