import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ addProducts }) => {
  //*Product state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    year: "",
  });

  function updateState(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }
  //*Error state
  const [error, setError] = useState(false);

  function submitData(e) {
    e.preventDefault();
    //* VALIDAMOS SI TODOS LOS CAMPOS ESTAN LLENOS
    for (const key in product) {
      if (!product[key]) {
        setError(true);
        return;
      }
    }
    if (error) {
        
        setError(false);

    }

    //*SI ESTAN LLENOS ENTONCES GENERAMOS UN ID
    product.id = uuidv4();

    //*LO AGREGAMOS AL ARREGLO DE OBJETOS QUE VIENE DEL PADRE(App)
    addProducts(product);

    //*RESETEAMOS EL FORMULARIO
    setProduct({
      name: "",
      price: "",
      year: "",
    });
  }

  //* USAMOS ESTOS VALORES PARA RESETEAR LA INFORMACION DEL FORMULARIO, DE ACUERDO A LA INFORMACION QUE TENGA EL OBJETO
  const { name, price, year } = product;

  return (
    <>
      {error && (
        <div className="error">
          <h4>All the fields are required</h4>
        </div>
      )}
      <div className="card-header">
        <h4>Add a product</h4>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitData}>
          <div className="campo">
            <label htmlFor="nombre">Product Name:</label>
            <input
              type="text"
              name="name"
              className="entrada"
              placeholder="Product name"
              onChange={updateState}
              value={name}
            />
          </div>
          <div className="campo">
            <label htmlFor="nombre">Product Price:</label>
            <input
              type="number"
              name="price"
              step="0.01"
              className="entrada"
              placeholder="Product Price"
              onChange={updateState}
              value={price}
            />
          </div>
          <div className="campo">
            <label htmlFor="nombre">Product Year:</label>
            <input
              type="number"
              name="year"
              className="entrada"
              placeholder="Year Product"
              min="1990"
              onChange={updateState}
              value={year}
            />
          </div>
          <input type="submit" value="Save" className="button" />
        </form>
      </div>
    </>
  );
};

export default Formulario;
