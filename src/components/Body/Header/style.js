import styled from "styled-components";


export const Header = styled.div`
 height: 450px;
 display: flex;
 width: 1200px;
 position: relative;
 margin-top: 12px;
 background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
`;
export const Left = styled.div`
 flex: 1.5;
 padding-left: 43px;
 padding-top: 68px;
`;
export const H5 = styled.h5`
 font-weight: 500;
 color: #3D3D3D;
 font-size: 14px;
 line-height: 16px;
 letter-spacing: 10%;
 margin-bottom: 2px;
 text-transform: uppercase;
`;
export const Span = styled.div`
 width: 530px;
 /* display: flexbox; */
 flex-wrap: nowrap;
 text-transform: uppercase;
 height: 140px;
 font-weight: 900;
 font-size: 70px;
`;
export const Sspan = styled.div`
 margin-top: 4% ;
 width: 557px;
 color: #727272;
 height: 45px;
 font-weight: 400 lighter;
 font-size: 14px;
 line-height: 24px;
`;
export const Right =styled.div`
flex: 1;
align-items: center;
justify-content: center;
display: flex;
`;

export const Icon = styled.img`
 cursor: pointer;
`;
export const Miniimg =styled.img`
 width: 135px;
 position: absolute;
 height: 135px;
 margin-top: 310px;
 margin-left: -250px;
`;

export const Btn = styled.button`
 width: 100px;
 height: 35px;
 display: flex;
 color: #fff;
 align-items: center;
 justify-content: center;
 background: #46A358;
 border-radius: 6px;
 border: none;
 cursor: pointer;
`;
export const Slider = styled.div`
 display: flex;
 width: 40px;
 height: 8px;
 position: absolute;
 top: 65%;
 left: 50%;
 justify-content: space-around;
`;