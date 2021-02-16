import { TiLeaf as icon } from 'react-icons/ti';
import PriceInput from '../components/PriceInput';

export default {
  // Computer Name
  name: 'plant',
  // Title for humans
  title: 'Plants',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Plant Name',
      type: 'string',
      description: 'Name of the plant',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the plant in cents',
      // set a min price of $10 on a pizza
      validation: (Rule) => Rule.min(1000),
      // TODO
      // Add custom input component from components folder
      // This overrides the built-in input component from Sanity
      inputComponent: PriceInput,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this plant',
    },
  ],
  preview: {
    select: {
      // gotcha : we can name the field for 'name' whatever apparently
      title: 'name',
      // image field
      media: 'image',
    },
    // prepare is a function that takes in our fields
    prepare: ({ title, media }) =>
      // 1. Filter undefined out
      // Converting a value into a true boolean
      // Boolean of undefined returns false
      // Boolean of mushroom returns true
      // const tops = Object.values(toppings).filter(Boolean);
      // while we are writing this code
      // 2. Return the preview object for the pizza
      ({
        title, // return title property
        media, // return media property
        // subtitle: tops.join(', '), // tops is an array that we created above
      }),
  },
};
