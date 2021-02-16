import React from 'react';
import Layout from './src/components/Layout';

// Wrap each element in <Layout />
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
