import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ${'' /* remove temporarily */}
  ${'' /* margin-bottom: 3rem; */}
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    /*bump the nav up*/
    margin-top: -6rem;
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /*should you want the link to turn a color*/
    /*&[aria-current='page'] {
      color: var(--red);
    }*/
  }

  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/plantwrangler">PlantWranglers</Link>
        </li>
        <li>
          <Link to="/shop">Shop Houseplants</Link>
        </li>
        <li>
          <Link to="/howto">HowTo</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
