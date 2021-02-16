// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
// Intl.NumberFormat is built into the browser as well as node.js
// en-US tells you where to put the commas and decimals
// USD formats the number as a currency
const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
