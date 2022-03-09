import React, { useState, } from 'react'
import Body from '../Home/Body';
import Navbar from '../Home/Navbar';
import { itemSorting } from '../mock/mock';
import { navbar } from '../mock/mock';
import Home from '../Home';
import Error from '../Generic/Error/index';
import Shop from '../Shop';
import PlantCare from '../Plantcare';
import Blogs from '../Blogs'
import alanBtn from '@alan-ai/alan-sdk-web';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



export const Root = () => {
  const [data]= useState(navbar);
  const[dat] =useState(itemSorting);


  return (
    <div> 
      <Router>
        
        <Navbar dta={data}/>
        {/* <Body plantsFilter={ dat } /> */}
        <Switch>
        <Route exact path={ '/' } component={ Home } />
        <Route exact path={ '/shop' } component={ Shop } />
        <Route exact path={ '/plantcare' } component={ PlantCare } />
        <Route exact path={ '/blogs' } component={ Blogs } />
          <Route path='*'> <Error /> </Route>  
      </Switch>
      </Router>
    </div>
  )
}
export default Root;