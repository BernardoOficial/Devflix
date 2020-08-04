import React from 'react';
import Styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 0 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
