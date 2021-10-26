import logo from './logo.svg';
import './App.css';
// TODO: import useFormik from formik library
import {useFormik} from "formik"; 

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Field Required';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Field required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Username should be an email';
  }

  return errors;
};

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>      
      <label htmlFor="email">Email Address: </label>
      <br></br>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div id="emailError" style = {{color: "red"}}>{formik.errors.email}</div> : null}
      <br></br>
      <label htmlFor="password">Password: </label>
      <br></br>
      <input
        id="pswField"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div id="pswError" style = {{color: "red"}}>{formik.errors.password}</div> : null}
      <br></br>

      <button id="submitBtn" type="submit">Submit</button>
    </form>
  );
}

export default App;
