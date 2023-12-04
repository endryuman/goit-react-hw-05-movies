import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
