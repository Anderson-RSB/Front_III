import React from "react";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.deleteProductID) {
    errors.deleteProductID = "Obrigatório";
  }

  return errors;
};

const FormDelete = () => {
  const formik = useFormik({
    initialValues: {
      deleteProductID: "",
    },
    validate,
    onSubmit: (values) => {
      DeleteWine();
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="formAdm" onSubmit={formik.handleSubmit}>
      <label htmlFor="deleteProductID">Product ID</label>
      <input
        id="deleteProductID"
        name="deleteProductID"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.deleteProductID}
      />
      {formik.touched.deleteProductID && formik.errors.deleteProductID ? (
        <div>{formik.errors.deleteProductID}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDelete;

export function DeleteWine(propdelete) {
  fetch(`http://52.53.193.244:8081/products/${propdelete.value}`, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Headers": "*",
    },
  }).then((response) => {
    console.log(response);
  });
}