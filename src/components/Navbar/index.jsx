import React from 'react'
import { Container, Icon, Iconsdiv, Logo, Logodiv, Logotext, Navbutton, Navdiv, Navtext, } from './style'
import { navbar } from '../../Utils/Navbar'
import logo from '../../assets/images/logo.png'
import search from '../../assets/icons/search.svg'
import card from '../../assets/icons/card.svg'
import logout from '../../assets/icons/logout.svg'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
          <Container>
                <Logodiv>
                  <Logo src={ logo } alt="Greenshop" />
                  <Logotext>Greenshop</Logotext>
                </Logodiv>
                <Navdiv> {
                    navbar.map( ( parent ) => (
                        <NavLink className="navlink"
                            style={ ( { isActive } ) => {
                                return {
                                   borderBottom: isActive ? '3px solid #46A358': 'none'
                                }  
                            }}
                            key={ parent.id } to={ parent.path }>
                           <Navtext> { parent.title }</Navtext>
                        </NavLink>
                    ))
                  }
                </Navdiv>
                <Iconsdiv>
                    <Icon src={ search } alt="search" />
                    <Icon style={ { width: '24px' } } src={ card } alt="card" />
                    <Navbutton>
                        <Icon src={ logout } alt="logout" />
                        <Navtext style={ { color: '#fff', fontSize:'15px'}}>Login</Navtext>
                    </Navbutton>
                </Iconsdiv>
          </Container>
          
        </div>
    )
}
export default Navbar;