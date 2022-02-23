import React, {useState} from 'react'
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import { itemSorting } from '../mock/mock';
import { navbar } from '../mock/mock';



export const Root = () => {
  const [data]= useState(navbar);
  const[dat] =useState(itemSorting)
  return (
    <div> 
        <Navbar dta={data}/>
        <Body plantsFilter={dat}/>
    </div>
  )
}
export default Root;