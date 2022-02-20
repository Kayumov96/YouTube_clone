import React, { useState } from 'react';
import { Container, Left, Right, Div, Img, H1, H5, Icon, Btn, Header, Span, Sspan, Miniimg } from './style';
import logo from '../../assets/images/logo.png';
import { navbar } from '../../mock/mock';
import search from '../../assets/icons/search.svg';
import card from '../../assets/icons/card.svg';
import logout from '../../assets/icons/logout.svg';

export const Navbar = () => {


    const [data, setActive]= useState(navbar);
    
    
    

        return (
    <div>
        <Container>
          <Div> <Img src={logo} alt='logo' />
            <H1>GREENSHOP</H1>
          </Div>
          <Div style={{justifyContent:'space-around', width:'850px'}}>  
            {
                data.map((value)=>(
                    <h2 key={value.id} style={{cursor:'pointer'}}>{value.title}</h2>
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