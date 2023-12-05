import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  border: 3px solid aqua;
  border-radius: 20px;
  padding: 5px;
  &.active {
    color: red;
  }
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
