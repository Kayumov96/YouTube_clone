import React from 'react'
import { Container, Icons, Logo, Mdiv, Menu, Text, Wrap, Wrapper } from './style';
import { sidebar, sidebarfunctions} from '../../utils/sidebar';

export const Sidebar = () => {
  return (
   
      <Container>
          <Wrapper>
             <Menu />
             <Logo /><h2>YouTube</h2>
          </Wrapper>
      <Mdiv>
        
      { sidebar.map( ( value ) => 
         <Wrap key={value.id}>
          <Icons src={ value.src } alt='icons' />
          <Text>{ value.title}</Text>
         </Wrap>
  
      )}
      </Mdiv>
      <Mdiv>
        { sidebarfunctions.map( ( parent ) => (
          <Wrap key={ parent.id }>
            <Icons src={ parent.src } alt='icons' />
            <Text>{ parent.title }</Text>
          </Wrap>
        ))}
      </Mdiv>
      </Container>
      
  )
}
export default Sidebar;