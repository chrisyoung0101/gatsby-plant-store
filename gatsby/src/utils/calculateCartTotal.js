// cart - array of cart items on cart.js
// note - the difference between this function and the same in the slick code is that here we are pulling the price from the cart array which has
// all the data while slick's was using two arrays (one with the id from the order that is matched with the full data pizza array) -  we don't need
// compare or run a find() against two arrays here.
export default function calculateCartTotal(cart) {
  // reduce :
  // param 1 = callback function :
  //  //1st arg is the accumulator that you name whatever.
  //  //2nd arg is (I think) the current item in the cart we are doing work on.
  // param 2 = What you start with. Here we start with 0.
  const total = cart.reduce((accum, item) => accum + item.plant.price, 0);
  return total;
}
