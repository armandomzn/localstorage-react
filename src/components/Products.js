import React from "react";

const Products = ({ product, deleteProduct }) => {
  const { name, price, year, id } = product;
  return (
    <>
      <div className="card-body">
        <p>Nombre: {name}</p>
        <p>Precio: {price}</p>
        <p>Año: {year}</p>
        <a
          href="#"
          className="button delete"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          Delete
          <span>
            <svg
              className="w-1 h-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Products;
