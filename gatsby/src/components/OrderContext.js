import React, { useState } from 'react';

// create context for items in the cart
const OrderContext = React.createContext();

// Provider :
// A component that lives at a higher level.
// We wrap the root in the order context or inject it around the root.
// We will stick our state here in our Provider

export function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    // using value here surfaces the state we created here in OrderProvider
    <OrderContext.Provider value={[cart, setCart]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
