import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "Erdi",
          lastName: "Topuzlu",
          email: "erditpzl@gmail.com",
          gender: "male",
          hobies : [],
          country : "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} />
            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
            />
            <br />
            <br />
            <div>
              <input type="checkbox" name="hobies" value="Football" onChange={formik.handleChange} />
              Football
            </div>

            <div>
              <input type="checkbox" name="hobies" value="Cinema" onChange={formik.handleChange} />
              Cinema
            </div>
            <div>
              <input type="checkbox" name="hobies" value="Photography" onChange={formik.handleChange} />
              Photography
            </div>
            <br />
            <br />

            <select name="country" value={formik.values.country} onChange={formik.handleChange}>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />
            <code>{JSON.stringify(formik.values)}</code>
          </form>
  
    </>
  );
}

export default App;
