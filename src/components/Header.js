import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/"></NavLink>
    </MainHeader>
  )
};
const MainHeader = styled.header`
    padding: 0 4 4.8rem,
    height: 10rem,
    background-color: ${({theme}) => theme.colors.bg};
    display:flex;
    justify-content: center;
    align-items: center;
    position : relative;

    .logo{
        height: 5rem;
    }
`;

export default Header;
