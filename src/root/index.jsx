import React from 'react'
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container, H2, Wrapper } from './style';

export const Root = () => {
  return (
      <Container>
          <Sidebar />
          <Wrapper>
              <Navbar />
              <Body/>
          </Wrapper>
      </Container>
  )
}
export default Root;