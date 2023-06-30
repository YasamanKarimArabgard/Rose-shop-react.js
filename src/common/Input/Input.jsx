const Input = ({ type = 'text', name, formik, label }) => {
    return (
        <div className="flex flex-col my-4">
            {/* <label className='form-label mb-1 text-purple-900' htmlFor={name}>{label}</label> */}
            <input
                className="form-input appearance-none my-1 p-2 border border-sm rounded-md bg-gray-50 focus:bg-white focus:text-slate-800 focus:border-purple-500 focus:border-2 focus:outline-none"
                id={name}
                type={type}
                {...formik.getFieldProps(name)}
                name={name}
                placeholder={name}
                />
            {formik.errors[name] && formik.touched[name] && (
                <div className="text-sm text-red-500">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default Input;