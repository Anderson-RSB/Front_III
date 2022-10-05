import React from "react";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.updateProductId) {
    errors.updateProductId = "Obrigatório";
  }

  if (!values.updateProductName) {
    errors.updateProductName = "Obrigatório";
  }

  if (!values.updateProductDescription) {
    errors.updateProductDescription = "Obrigatório";
  }

  if (!values.updateImageLink) {
    errors.updateImageLink = "Obrigatório";
  }

  if (!values.updateProductPrice) {
    errors.updateProductPrice = "Obrigatório e apenas NUMEROS";
  }

  if (!values.updateCategoryId) {
    errors.updateCategoryId = "Obrigatório e apenas NUMEROS";
  }

  return errors;
};

const FormUpdate = () => {
  const formik = useFormik({
    initialValues: {
      updateProductId: "",
      updateProductName: "",
      updateProductDescription: "",
      updateImageLink: "",
      updateProductPrice: "",
      updateCategoryId: "",
    },
    validate,
    onSubmit: (values) => {
      UpdateWine();
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="formAdm" onSubmit={formik.handleSubmit}>
      <label htmlFor="updateProductId">Product ID</label>
      <input
        id="updateProductId"
        name="updateProductId"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateProductId}
      />
      {formik.touched.updateProductId && formik.errors.updateProductId ? (
        <div>{formik.errors.updateProductId}</div>
      ) : null}

      <label htmlFor="updateProductName">Product Name</label>
      <input
        id="updateProductName"
        name="updateProductName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateProductName}
      />
      {formik.touched.updateProductName && formik.errors.updateProductName ? (
        <div>{formik.errors.updateProductName}</div>
      ) : null}

      <label htmlFor="updateProductDescription">Description</label>
      <input
        id="updateProductDescription"
        name="updateProductDescription"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateProductDescription}
      />
      {formik.touched.updateProductDescription && formik.errors.updateProductDescription ? (
        <div>{formik.errors.updateProductDescription}</div>
      ) : null}

      <label htmlFor="updateImageLink">Link da Imagem</label>
      <input
        id="updateImageLink"
        name="updateImageLink"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateImageLink}
      />
      {formik.touched.updateImageLink && formik.errors.updateImageLink ? (
        <div>{formik.errors.updateImageLink}</div>
      ) : null}

      <label htmlFor="updateProductPrice">Price</label>
      <input
        id="updateProductPrice"
        name="updateProductPrice"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateProductPrice}
      />
      {formik.touched.updateProductPrice && formik.errors.updateProductPrice ? (
        <div>{formik.errors.updateProductPrice}</div>
      ) : null}

      <label htmlFor="updateCategoryId">Category Id</label>
      <input
        id="updateCategoryId"
        name="updateCategoryId"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.updateCategoryId}
      />
      {formik.touched.updateCategoryId && formik.errors.updateCategoryId ? (
        <div>{formik.errors.updateCategoryId}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUpdate;

function UpdateWine() {
  fetch(`http://52.53.193.244:8081/products/${updateProductId.value}`, {
    method: "PUT",
    headers: {
      "Accept": "*/* , application/json, text/plain",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      "title": `${updateProductName.value}`,
      "description": `${updateProductDescription.value}`,
      "image": `${updateImageLink.value}`,
      "price": `${updateProductPrice.value}`,
      "categories": [
        {
          "id": `${updateCategoryId.value}`,
        },
      ],
    }),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
}