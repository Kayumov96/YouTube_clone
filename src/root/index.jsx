import React from 'react'
import Navbar from '../components/Navbar'
import{Route, Routes} from 'react-router-dom'
import { Container } from './style'


export const Root = ({navbar}) => {


  return (
    <div> 
        <Navbar navbar={navbar}/>  
    </div>
  )
}
export default Root;