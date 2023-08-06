// CheckoutForm.js

import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './styles.css';
import { firebaseServices } from '../../services/firebase';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
  });

  const { cart, total } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    const deliveryDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const newOrder = {
      buyer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        confirmEmail: formData.confirmEmail,
      },
      createdAt: new Date(),
      id: 1,
      items: cart,
      total: total,
      payment: {
        currency: 'USD',
        method: 'CASH',
        type: 'CASH',
      },
      seller: {
        id: 1,
        name: 'Tomas',
        phone: '123211351',
        email: 'asdsad@asdasd.com',
      },
      shipping: {
        deliveryDate: deliveryDate,
        trackingNumber: '121sadsad123',
        type: 'DELIVERY',
      },
    };

    try {
      const orderCreated = await firebaseServices.createOrder(newOrder);
      setOrderId(orderCreated.id);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='checkoutForm'>
      <div className='checkoutContainerForm'>
        <input
          className='inputCheckout'
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className='inputCheckout'
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          className='inputCheckout'
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className='inputCheckout'
          type="email"
          name="confirmEmail"
          placeholder="Repetir correo electrónico"
          value={formData.confirmEmail}
          onChange={handleChange}
          required
        />

        <input
          className='inputCheckout'
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <input type="hidden" name="cart" value={JSON.stringify(cart)} />

      {orderId && (
        <div className='orderCreatedDiv'>
          <p>¡Pedido creado! ID del pedido: {orderId}</p>
        </div>
      )}

      <div className='submitDivCheckout'>
        <button type="submit" className='submitCheckout'>Enviar</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
