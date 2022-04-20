import React from 'react'
import { Container, Search, Serch, Sort } from './style';

export const Navbar = () => {
  return (
    
      <Container>
          <Search>
              <Serch type="search" placeholder="Search">
              </Serch>
          </Search>
          <Sort>

          </Sort>
      </Container>
  )
}
export default Navbar;