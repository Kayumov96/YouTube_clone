import React, { useState, setState } from 'react';
import search from '../../../assets/icons/search.svg';
import card from '../../../assets/icons/card.svg';
import heart from '../../../assets/icons/heart.svg';
import { BodyContainer, CardDiv, CardDivContainer, CardIcons, CardImg, CardPrice, CardSpan, CategoryMain, FilterDiv, SortPlants } from './style';
import { flowers } from '../../../mock/mock';

export const BodyCard = ( { data } ) => {
  const onValueSelect = ( e ) => {
    this.setState({option: e.target.value})
  }

  return (
    <div>
        <BodyContainer>
          <CategoryMain>

          </CategoryMain>
          <FilterDiv>
            {data.map((value)=>(
              <h5 key={value.id} onClick={()=>(value.id)} className='sorter'>{value.title}</h5>
            ) ) }
          <div className='sortBy'>
            <h5>Sortby:</h5>
            <select name="" id="" className='selectTag' onchange={onValueSelect}>
              <option value="id">Default sorting</option>
              <option value="price">Price sorting</option>
              <option value="title">Name sorting</option>
          </select> 
          </div>
          </FilterDiv>
          <CardDivContainer>
             {flowers.map((value)=>(
               <div key={value.id}>
               <CardDiv >
                 <CardImg src={value.image}/>
                 <CardIcons className='visible'>
                   <CardImg style={{height:'20px',width:'20px'}} src={card}/>
                   <CardImg style={{height:'18px',width:'18px'}} src={heart}/>
                   <CardImg style={{height:'19px',width:'19px'}} src={search}/>
                   </CardIcons>
               </CardDiv>
               <CardSpan>{value.title}</CardSpan>
               <CardPrice>${value.price}</CardPrice>
               </div>
             ))}
          </CardDivContainer>
        </BodyContainer>
    </div>
  )
}
export default BodyCard;