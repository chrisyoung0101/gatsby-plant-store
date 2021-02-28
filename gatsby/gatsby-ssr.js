import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

// Wrap each element in <Layout />
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// destructures one argument called element
// here we are returning the OrderProvider element from OrderContext
// OrderContext holds our state.
// we are wrapping the root element in OrderProvider
// what is the root element?  Like whatever page we are rendering?
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
