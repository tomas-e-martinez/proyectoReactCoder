import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cart-context'; // Importa el contexto del carrito

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
  });

  const { cart } = useContext(CartContext); // Obtén el carrito del contexto

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar validaciones y enviar los datos a tu backend, si lo deseas.
    // Además, agrega el contenido del carrito a los datos del formulario antes de enviarlos.
    const dataToSend = {
      ...formData,
      cart: cart, // Agrega el carrito al objeto de datos a enviar
    };
    console.log(dataToSend);
    // Aquí podrías enviar los datos al servidor utilizando una función para procesar la compra, por ejemplo.
    // Si estás utilizando una biblioteca de manejo de formularios como Formik, puedes hacer esto más fácilmente.
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos para nombre y apellido */}
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      {/* Campos para correo electrónico */}
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="confirmEmail"
        placeholder="Repetir correo electrónico"
        value={formData.confirmEmail}
        onChange={handleChange}
        required
      />

      {/* Campo para teléfono */}
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {/* Campo oculto para enviar el contenido del carrito */}
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />

      {/* Botón de enviar */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CheckoutForm;
