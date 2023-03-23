import React from "react";
import { Field, Form, Formik } from "formik";
import { Addpet } from "../utils/api/pets";

const NewPage = () => {
  function submit(x) {
    Addpet(x);
  }

  return (
    <div>
      <Formik
        initialValues={{ name: "", type: "", image: "", adopted: 0 }}
        onSubmit={submit}
      >
        <Form>
          <Field as="input" name="name" type="text"></Field>
          <Field as="input" name="type" type="text"></Field>
          <Field as="input" name="image" type="text"></Field>
          <button type="submit">Submit</button>
          <button typr="reset">Reset</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewPage;
