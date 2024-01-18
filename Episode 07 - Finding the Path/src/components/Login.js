import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {};

    if(!values.email) {
        errors.email = "Fill Email";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email";
    }
    
    if(!values.password) {
        errors.password = "Fill Password";
    }
    

    return errors;
};

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, 
        validate,
        onSubmit: values => {
            alert("Login Successful!");
        }
    });

    return (
        <section className="form">
            <h1 className='form-heading'>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="input">
                    <input id='email' name='email' type='email' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' />
                    {formik.errors.email ? <p className='error-message'>{formik.errors.email}</p> : null}
                </div>

                <div className="input">
                    <input id="password" name="password" type='password' onChange={formik.handleChange} value={formik.values.password} placeholder='Password' />
                    {formik.errors.password ? <p className='error-message'>{formik.errors.password}</p> : null}
                </div>

                <button type='submit'>Login</button>
            </form>
        </section>
    );
};

export default Login;