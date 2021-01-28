import React, { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Products from "./components/Products";

function App() {
  const [productos, setProductos] = useState(() => {
    let productos = JSON.parse(localStorage.getItem("productos"));
    if (!productos) {
      productos = [];
    }
    return productos;
  });

  function addProducts(product) {
    setProductos([...productos, product]);
  }

  function deleteProduct(id) {
    const newArray = productos.filter((product) => {
      return product.id !== id;
    });
    setProductos(newArray);
  }

  //*USAMOS EL HOOK DE USEEFFECT PARA ALMACENAR EN EL LOCALSTORAGE EL PRODUCTO, CADA VEZ QUE HAYA CAMBIOS EN EL ARREGLO DE [productos]
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  return (
    <div className="container">
      <h1>LocalStorage Products</h1>
      <div className="flex-container">
        <div className="formulario">
          <Formulario addProducts={addProducts} />
        </div>
        <div className="productos">
          {productos.length === 0 ? (
            <h2>There aren't elements</h2>
          ) : (
            productos.map((product) => {
              return (
                <Products
                  key={product.id}
                  product={product}
                  deleteProduct={deleteProduct}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
