import React, { useState } from 'react';
import search from '../../../assets/icons/search.svg';
import card from '../../../assets/icons/card.svg';
import heart from '../../../assets/icons/heart.svg';
import { BodyContainer, CardDiv, CardDivContainer, CardIcons, CardImg, CardPrice, CardSpan, CategoryMain, FilterDiv, SortPlants } from './style';
import { flowers } from '../../../mock/mock';

export const BodyCard = ({data}) => {
  return (
    <div>
        <BodyContainer>
          <CategoryMain>

          </CategoryMain>
          <FilterDiv>
            {data.map((value)=>(
              <h5 key={value.id} className='sorter'>{value.title}</h5>
            ))}
          </FilterDiv>
          <CardDivContainer>
             {flowers.map((value)=>(
               <div>
               <CardDiv key={value.id}>
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