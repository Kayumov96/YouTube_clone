import styled from 'styled-components'
import { ReactComponent as hamburger } from '../../assets/icons/hamburger.svg'
import { ReactComponent as logo } from '../../assets/icons/logo.svg'


const Container = styled.div`
 height:100vh;
 width: 250px;
 background: #212121;
 `;
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 color: #ffffff;
 height :70px;
 padding-right: 20px;
`;
const Menu = styled( hamburger )`
 width: 25%;
 height: 25%;
`;
const Logo = styled( logo )`
 width: 40%;
 height: 40%;
 margin-right: -22px;
`;

export { Container, Wrapper, Menu, Logo };