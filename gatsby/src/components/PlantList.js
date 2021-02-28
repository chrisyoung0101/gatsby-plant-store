import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { uuid } from 'uuidv4';
import formatMoney from '../utils/formatMoney';
import usePlant from '../utils/usePlant';

// component for one plant
function SinglePlant({ plant }) {
  const { addToCart } = usePlant({ plant });

  // const plant = plant.slug.current;
  // console.log({ plant });
  return (
    <>
      <Link to={`/plant/${plant.slug.current}`}>
        <h2>
          <span className="mark">{plant.name} </span>
        </h2>
      </Link>
      <h3>{formatMoney(plant.price)}</h3>
      <button
        type="button"
        key={uuid()}
        onClick={() =>
          addToCart({
            plant,
            // name: plant.name,
            // price: plant.price,
            // image: plant.image.asset.fluid,
          })
        }
      >
        + Cart
      </button>
      <p>{plant.description}</p>
      <Img fluid={plant.image.asset.fluid} alt={plant.name} />
    </>
  );
}

// GOTCHA must be plant={plant} and not plants={plants}
export default function PlantList({ plants }) {
  return (
    <>
      {plants.map((plant) => (
        <SinglePlant key={plant.id} plant={plant} />
      ))}
    </>
  );
}
