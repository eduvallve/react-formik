import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  // Criterios de validación para el campo Name
  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }
  // Criterios de validación para el campo Lastname
  if (!values.lastname) {
    errors.lastname = "Requerido";
  } else if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }
  return errors;
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Correo</label>
      <input
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
