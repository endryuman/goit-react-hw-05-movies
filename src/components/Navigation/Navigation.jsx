import { StyledItem, StyledLink, StyledUl } from './Navigation.styled';
export const Navigation = () => {
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </StyledUl>
    </nav>
  );
};
