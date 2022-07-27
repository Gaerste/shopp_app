import React from "react";
import styled from "styled-components";
const Carrito = ({ carrito }) => {
    return (
        <div>
            {carrito.length > 0 ?
                carrito.map((producto, index) => {
                    return (
                        <Producto key={index}>
                            <NombreProducto>
                                {producto.nombre}
                            </NombreProducto>
                            Cantidad: {producto.cantidad}
                        </Producto>
                    );
                })
            :
                <p>No hay productos en el carrito</p>
            }
        </div>
  );
};

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export default Carrito;
