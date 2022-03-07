import styled from "styled-components";

export const BodyContainer = styled.div`
 width: 1200px;
 height: 1244px;
 display: grid;
 grid-template-columns: repeat(12, 1fr);
 grid-template-rows: 40px 200px 40px;
 margin-top: 12px;
`;
export const CategoryMain = styled.div`
 height: 1240px;
 width: 310px ;
 grid-row: 1/3;
 margin: 4px 15px;
 background: violet;
`;
export const FilterDiv = styled.div`
 width: 820px;
 height: 23px;
 grid-column: 2/-1;
 margin: 4px 10px;
 align-items: center;
 display: flex;
 padding-left: 20px;
`;
export const CardDivContainer =styled.div`
 width: 840px;
 grid-column: 2/-1;
 margin: 0px 10px;
 height: 1190px;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`;
export const CardIcons =styled.div`
  margin-top:250px;
  justify-content: space-around;
  width: 100px;
  position: absolute;
  display: flex;
`;

export const CardImg =styled.img`
 width: 230px;
 height: 230px;
 mix-blend-mode: multiply;
`;
export const CardDiv =styled.div`
 width: 258px;
 height: 280px;
 display: flex;
 /* margin-left:15px ;
 margin-top: 0px; */
 margin: 15px 10px;
 align-items: center;
 justify-content: center;
 background: #FBFBFB;
  :hover{
   border-top: 1px solid rgba(70, 163, 88, 0.5);

 }
`;
export const CardPrice = styled.h4`
 font-size: 18px;
 color: #46A358;
 margin: 0 12px;
`;
export const CardSpan = styled.span`
 font-weight: lighter;
 font-size: 16px;
 margin-left: 12px;
 color: #3d3d3d;
 margin-bottom: 0;
`;