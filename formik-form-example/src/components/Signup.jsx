import { useFormik } from 'formik';
import React from 'react'
import signUpSchema from './SignUpValidation';

function Signup() {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirm: "",
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema: signUpSchema,
      });
  return (
    <>
      <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <label>Email</label>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} />
            <br />
            <br />

            <label>Password</label>
            <input
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <br />
            <br />

            <label>Confirm Password</label>
            <input
              name="passwordConfirm"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
            />
            <br />
            <br />


            <button type="submit">Submit</button>

            <br />
            <br />
            <code>{JSON.stringify(formik.values)}</code>
          </form>
  
    </>
  )
}

export default Signup
