import React from 'react';
import search from '../../../assets/icons/search.svg';
import card from '../../../assets/icons/card.svg';
import logout from '../../../assets/icons/logout.svg';
import { BodyContainer } from './style';

export const BodyCard = () => {
  return (
    <div>
        <BodyContainer>
          <img src={card} alt="card" />
        </BodyContainer>
    </div>
  )
}
export default BodyCard;