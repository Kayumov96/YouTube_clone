import React from 'react';
import BodyCard from './BodyCard/index';
import Head from '../Header/index';

export const Body = ({plantsFilter}) => {
    return (
    <div>
        <Head/>
        <BodyCard data={plantsFilter}/>
    </div>
  )
}
export default Body;