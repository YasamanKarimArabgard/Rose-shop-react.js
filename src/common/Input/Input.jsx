import './Input.css'
const Input = ({ type = 'text', name, formik, label }) => {
    return (
        <div>
            <label className='form-label mx-1' htmlFor={name}>{label}</label>
            <input
                className="form-control"
                id={name}
                type={type}
                {...formik.getFieldProps(name)}
                name={name} />
            {formik.errors[name] && formik.touched[name] && (
                <div className="error-text text-danger mx-2">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default Input