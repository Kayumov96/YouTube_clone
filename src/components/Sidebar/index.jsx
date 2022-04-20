import React from 'react'
import { Container, Logo, Menu, Wrapper } from './style';

export const Sidebar = () => {
  return (
   
      <Container>
          <Wrapper>
             <Menu />
             <Logo /><h2>YouTube</h2>
          </Wrapper>
      </Container>
      
  )
}
export default Sidebar;