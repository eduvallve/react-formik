import { Formik, Form, ErrorMessage } from "formik";
import TextInput from "./components/textInput";
import Checkbox from "./components/checkbox";
import Select from "./components/select";
import Radio from "./components/radio";

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

  // Criterios de validación para el campo radio
  if (!values.radio) {
    errors.radio = "Requerido";
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        chancho: "",
        radio: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Correo" />
        <Select label="Tipo de chancho" name="chancho">
          <option value="">Seleccione Chancho</option>
          <option value="felipe"> Felipe</option>
          <option value="chanchitofeliz"> Cahnchito feliz</option>
          <option value="chanchitotriste"> Cahnchito triste</option>
        </Select>
        <br />
        <Checkbox name="accept">Aceptar términos y condiciones</Checkbox>
        <Radio name="radio" label="chanchito1" value="chanchito1" />
        <Radio name="radio" label="chanchito2" value="chanchito2" />
        <Radio name="radio" label="chanchito3" value="chanchito3" />
        <ErrorMessage name="radio" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
