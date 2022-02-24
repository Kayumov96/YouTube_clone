import React, {useState, useEffect} from 'react'
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import { itemSorting } from '../mock/mock';
import { navbar } from '../mock/mock';
import alanBtn from '@alan-ai/alan-sdk-web';



export const Root = () => {
  const [data]= useState(navbar);
  const[dat] =useState(itemSorting);

  fetch('http://localhost:3001/api/user/autorize')
  .then(res=>res.json())
  .then((json)=>console.log(json));

  useEffect(() => {
    alanBtn({
        key: '32e49d86977e3ef619757f5358faf6442e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            
          }
        }
    });
  }, []);

  return (
    <div> 
        <Navbar dta={data}/>
        <Body plantsFilter={dat}/>
    </div>
  )
}
export default Root;