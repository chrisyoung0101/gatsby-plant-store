import React, { useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePlant() {
  // cart is an array of cart items
  const [cart, setCart] = useContext(OrderContext);

  function addToCart(anotherCartItem) {
    setCart([...cart, anotherCartItem]);
  }

  //  removeFromCart takes in an index that needs to be removed
  //  With setCart, here we pass in an array that contains everything before & after the item we want to
  //  remove essentially creating a new array that does not contain the item we want to remove.
  function removeFromCart(index) {
    setCart([
      // everything before the item we want to remove
      ...cart.slice(0, index),
      // everything after the item we want to remove
      ...cart.slice(index + 1),
    ]);
  }

  async function submitOrder(e) {
    e.preventDefault();
    // setLoading(true);
    // initialize :
    // setError(null);
    // setMessage(null);

    // gather all the data
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}
