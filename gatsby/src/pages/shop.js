import React from 'react';
import { graphql } from 'gatsby';
import PlantList from '../components/PlantList';
// TODO add SEO

export default function Shop({ data }) {
  const plants = data.plants.nodes;

  return (
    <>
      <PlantList plants={plants} />
    </>
  );
}

export const query = graphql`
  query PlantQuery {
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
              #GraphQL fragment :
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
