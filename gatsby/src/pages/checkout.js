import { graphql } from 'gatsby';
import React, { useContext } from 'react';

import { uuid } from 'uuidv4';
import Img from 'gatsby-image';
import OrderContext from '../components/OrderContext';
import OrderStyles from '../styles/OrderStyles';
import calculateCartTotal from '../utils/calculateCartTotal';
import formatMoney from '../utils/formatMoney';
import useForm from '../utils/useForm';
import usePlant from '../utils/usePlant';
import MenuItemStyles from '../styles/MenuItemStyles';

// TODO add honeypot
export default function Checkout({ data }) {
  const plants = data.plants.nodes;
  // cart values are set from shop.js, managed on OrderContext.
  // bring in cart values so we can display the order total that is shown in cart.
  const [cart] = useContext(OrderContext);

  // passing the defaults to usrForm()
  const { values, updateValue } = useForm({
    name: '',
    address: '',
    email: '',
  });

  console.log(values, updateValue);

  // bring in functionality of usePlant() custom hook
  // pass in plants, our queried data, and values, our user input data.
  const {
    // order,
    // addToOrder,
    removeFromCart,
    // error,
    // loading,
    // message,
    submitOrder,
  } = usePlant({
    plants,
    values,
  });

  return (
    <>
      <h3>Checkout</h3>
      <br />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>

        <fieldset className="menu">
          {/* TODO why does part of legend text show in the last item in the checkout cart? */}
          <legend>Your Order</legend>
          {cart.map((item, index) => (
            <MenuItemStyles key={uuid()}>
              <Img
                width="50"
                height="50"
                fluid={item.plant.image.asset.fluid}
                alt={item.plant.name}
              />
              <p>{item.plant.name}</p>
              <p>{formatMoney(item.plant.price)}</p>
              <button
                type="button"
                className="remove"
                title="Remove Item from cart"
                onClick={() => removeFromCart(index)}
              >
                ×
              </button>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset>
          <h3>Your Total is {formatMoney(calculateCartTotal(cart))}</h3>
          <button type="submit">Submit Order</button>
        </fieldset>
      </OrderStyles>
    </>
  );
}

export const query = graphql`
  query {
    plants: allSanityPlant {
      nodes {
        id
        name
        price
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
