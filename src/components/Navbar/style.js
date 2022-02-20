import styled from "styled-components";

export const Container = styled.div`
 height: 60px;
 width: 1200px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const Header = styled.div`
 height: 450px;
 display: flex;
 width: 1200px;
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
 display: flexbox;
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

export const Div = styled.div`
 display: flex;
 height: 60px;
 align-items: center;
 justify-content: center;
`;

export const Img = styled.img`
 width: 30px;
 height: 30px;
`;

export const Icon = styled.img`
 cursor: pointer;
`;
export const Miniimg =styled.img`
 width: 135px;
 position: absolute;
 height: 135px;
 margin-top: 150px;
 margin-left: -140px;
`;

export const H1 =styled.h1`
 color: #46A358;
 font-weight: 700;
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