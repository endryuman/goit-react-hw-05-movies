import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { StyledDiv } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <StyledDiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </StyledDiv>
      </main>
    </>
  );
};
