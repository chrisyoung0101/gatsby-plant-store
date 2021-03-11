import React, { useContext } from 'react';
import OrderContext from '../components/OrderContext';
import calculateCartTotal from './calculateCartTotal';
import formatMoney from './formatMoney';

export default function usePlant({ values }) {
  // 1. Create some state hold the cart
  // cart is an array of cart items
  const [cart, setCart] = useContext(OrderContext);

  // 2. Make a function add things to our cart
  function addToCart(anotherCartItem) {
    setCart([...cart, anotherCartItem]);
  }

  // 3. Make a function remove things from the cart
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

  // 4. Handle Checkout. Gather all the cart/order data > put it on an object called "body"
  async function submitOrder(e) {
    e.preventDefault();
    // setLoading(true);
    // initialize :
    // setError(null);
    // setMessage(null);

    // gather all the data
    const body = {
      order: cart,
      total: formatMoney(calculateCartTotal(cart)),
      // total : --> ???,
      name: values.name,
      address: values.address,
      email: values.email,
      // mapleSyrup: values.mapleSyrup
    };
    // console.log(body);

    // 5. Stringify the "body" data and send it to a serverless function
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    submitOrder,
  };
}
