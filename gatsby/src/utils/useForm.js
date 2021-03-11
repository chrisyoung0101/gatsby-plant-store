import { useState } from 'react';

// custom hook
// defaults? --> see default object and note on checkout.js.  This is defaults.
// why are we passing in defaults? Is it that we need to tell the function that it expects something, named whatever?
export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if user input is a number
    // "value" is destructured from e.target
    // is this value check being used? Not in slicks.  This is good because if the value us not a number it will force the value to be a number
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // copy the existing values into it --> we need this because we are not setting all of our values from the input fields at the same time.
      // We are creating a single object but not at once.  We are creating by adding values to the propeties one by one.
      ...values,
      // update the new value when the value in the input changes
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
