import React from 'react'
import { Container, Fail } from './style';
import error from '../../assets/images/error.png'

export const Error = () => {
  return (
      <div>
          <Container>
              <Fail src={ error } alt='Ooops something went wrong' />
              <h2>Ooops Something went wrong!</h2>
          </Container>
    </div>
  )
}
export default Error;