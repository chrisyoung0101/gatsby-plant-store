import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import formatMoney from '../utils/formatMoney';

// component for one plant
function SinglePlant({ plant }) {
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
