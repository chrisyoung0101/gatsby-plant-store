import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
// import OrderContext from '../components/OrderContext';
import { uuid } from 'uuidv4';
import Img from 'gatsby-image';
import usePlant from '../utils/usePlant';
import OrderContext from '../components/OrderContext';
import formatMoney from '../utils/formatMoney';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculateCartTotal from '../utils/calculateCartTotal';

// Maybe this is how I work :
// data is queried.  query is named plants.  plants is passed to the usePlant() hook as the default state.
// addToCart() is a function from usePlant() hook that will add new plant items to the existing cart array of plants.
// So... with addToCart() we would need to just pass the selected item from shop.js so that it is set as an item on the cart state array
// Why are we querying all the plants and passing it to this Cart()?  Why would our cart need all the plants as a default array? Need to rewire this
// somehow?

export default function Cart({ data }) {
  const plants = data.plants.nodes;

  // console.log(`${plants.price}      <-- plants from cart`);

  // OrderContext's value we have set as an array of cart & setCart.  Since we just want to use the data that is in cart here we desctructure cart
  // from OrderContext
  // cart values are set from shop.js, managed on OrderContext.
  const [cart] = useContext(OrderContext);

  const {
    // order,
    // addToOrder,
    removeFromCart,
    // error,
    // loading,
    // message,
    // submitOrder,
  } = usePlant({
    plants,
  });

  // TODO remove
  // log out for testing
  // Object.keys(cart).forEach(function (key) {
  //   const val = cart[key];
  //   console.log(val.plant.price);
  //   // use val
  // });

  // cart.map((item) => console.log(item.name));

  // return <p>{cart.map((item) => item.name)}</p>;
  // TODO  add <MenuItemStyles > to <div key={uuid()}>
  return (
    <>
      <fieldset className="menu">
        <legend>Cart Items</legend>
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
      {/* TODO hide this fieldset if there is nothing in the cart. */}
      {/* TODO disable button when loading is true */}
      <fieldset>
        <h3>Your Total is {formatMoney(calculateCartTotal(cart))}</h3>
        <Link to="/checkout">
          <button type="button">Checkout</button>
        </Link>
        <br />
        <Link to="/shop">Return to shopping</Link>
      </fieldset>
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
