import styled from 'styled-components'
import { ReactComponent as hamburger } from '../../assets/icons/hamburger.svg'
import { ReactComponent as logo } from '../../assets/icons/logo.svg'


const Container = styled.div`
 height:100vh;
 width: 250px;
 background: #212121;
 color: #ffffff;
 `;
const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 color: #ffffff;
 height :70px;
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
const Icons = styled.img`
`;
const Text= styled.h2`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 17px;
 line-height: 20px;
 margin-left: 40px;
`;
const Wrap = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 height:60px;
 padding-left:12%;
`;
const Mdiv = styled.div`
 height: auto;
 display: flex; 
 flex-direction: column; 
 border-bottom: 1px solid  rgba(255, 255, 255, 0.2)
`;

export { Container, Wrapper, Menu, Logo, Icons, Text, Wrap, Mdiv };