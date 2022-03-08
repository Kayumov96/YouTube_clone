import React from 'react';
import { Container, Div, Img, H1, Icon, Btn, Link} from './style';
import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.svg';
import card from '../../assets/icons/card.svg';
import logout from '../../assets/icons/logout.svg';

export const Navbar = ({dta}) => {

     return (
    <div>
        <Container>
          <Div> <Img src={logo} alt='logo' />
            <H1>GREENSHOP</H1>
          </Div>
          <Div style={{justifyContent:'space-around', width:'850px'}}>  
            {
                dta.map((value)=>(
                    <Link key={value.id} to={value.path}> {value.title}</Link>
                ))
            }
          </Div>
           <Div style={{width:'250px', justifyContent:'space-around'}}>
               <Icon src={search} alt='search'/>
               <Icon src={card} alt='card'/>
               <Btn><Icon src={logout} alt='log'/>Login</Btn>
           </Div>
           
        </Container>
    </div>
  )
}
export default Navbar;