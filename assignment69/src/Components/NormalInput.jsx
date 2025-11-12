function Input({ label, name, id, className, error, touched, Icon, inputclass, iconClass, ...rest }) {
  let broderB = "border border-white ";
  if (error && touched) broderB = "border-2 border-red-400  rounded-md  ";

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div>
        <div
          className={`${broderB} flex items-center h-10 rounded-md  w-60 sm:w-75 pl-2 ${className}`}
        >
          {Icon && <Icon className={` text-white text-3xl `} />}
          <input
            id={id}
            name={name}
            className={` pl-3  sm:w-[80%] outline-0 placeholder-white placeholder:opacity-80 text-white`}
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
