import { useField } from "formik";


function Input({name, label, id,  Icon,  className, ...rest}) {
    const [data, meta] = useField(name);
    const {value, onBlur, onChange} = data;
    const {error, touched} = meta;
    let broderB = "border border-white"
    if(error && touched)
        broderB = "border-2 border-red-400 "
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div>
        <div className={`${broderB}   flex items-center  rounded-md h-10 w-60 sm:w-75 pl-2  ${className}`}>
          {Icon && <Icon className="text-white text-3xl" />}
          <input
            id={id} 
            required
            className=" pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            {...rest}
          />
        </div>
        {touched && error && (
          <span className="text-sm text-red-300">{error}</span>
        )}
      </div>
    </>
  );
}

export default Input;
