import React from "react";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.insertProductName) {
    errors.insertProductName = "Obrigatório";
  }

  if (!values.insertProductDescription) {
    errors.insertProductDescription = "Obrigatório";
  }

  if (!values.insertImageLink) {
    errors.insertImageLink = "Obrigatório";
  }

  if (!values.insertProductPrice) {
    errors.insertProductPrice = "Obrigatório e apenas NUMEROS";
  }

  if (!values.insertCategoryId) {
    errors.insertCategoryId = "Obrigatório e apenas NUMEROS";
  }

  return errors;
};

const FormPost = () => {
  const formik = useFormik({
    initialValues: {
      insertProductName: "",
      insertProductDescription: "",
      insertImageLink: "",
      insertProductPrice: "",
      insertCategoryId: "",
    },
    validate,
    onSubmit: (values) => {
      NewWine();
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="formAdm" onSubmit={formik.handleSubmit}>
      <label htmlFor="insertProductName">Product Name</label>
      <input
        id="insertProductName"
        name="insertProductName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.insertProductName}
      />
      {formik.touched.insertProductName && formik.errors.insertProductName ? (
        <div>{formik.errors.insertProductName}</div>
      ) : null}

      <label htmlFor="insertProductDescription">Description</label>
      <input
        id="insertProductDescription"
        name="insertProductDescription"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.insertProductDescription}
      />
      {formik.touched.insertProductDescription && formik.errors.insertProductDescription ? (
        <div>{formik.errors.insertProductDescription}</div>
      ) : null}

      <label htmlFor="insertImageLink">Image Link</label>
      <input
        id="insertImageLink"
        name="insertImageLink"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.insertImageLink}
      />
      {formik.touched.insertImageLink && formik.errors.insertImageLink ? (
        <div>{formik.errors.insertImageLink}</div>
      ) : null}

      <label htmlFor="insertProductPrice">Price</label>
      <input
        id="insertProductPrice"
        name="insertProductPrice"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.insertProductPrice}
      />
      {formik.touched.insertProductPrice && formik.errors.insertProductPrice ? (
        <div>{formik.errors.insertProductPrice}</div>
      ) : null}

      <label htmlFor="insertCategoryId">Category Id</label>
      <input
        id="insertCategoryId"
        name="insertCategoryId"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.insertCategoryId}
      />
      {formik.touched.insertCategoryId && formik.errors.insertCategoryId ? (
        <div>{formik.errors.insertCategoryId}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPost;

function NewWine() {
  fetch("http://52.53.193.244:8081/products", {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      "title": `${insertProductName.value}`,
      "description": `${insertProductDescription.value}`,
      "image": `${insertImageLink.value}`,
      "price": `${insertProductPrice.value}`,
      "categories": [
        {
          "id": `${insertCategoryId.value}`,
        },
      ],
    }),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
}