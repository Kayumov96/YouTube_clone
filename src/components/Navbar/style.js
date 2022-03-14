import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom:  0.3px solid rgba(70, 163, 88, 0.5);
`;
export const Logodiv = styled.div`
 display: flex;
 align-items: center;
 height: inherit;
`;
export const Logo = styled.img`
 width: 34px;
 height: 34px;
 cursor: pointer;
`;
export const Logotext = styled.h1`
 color:#46A358;
 font-size: 24px;
 text-transform: uppercase;
 cursor: pointer;
`;
export const Navdiv = styled.div`
 width: 400px;
 height:inherit;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;
export const Navtext = styled.div`
 height: inherit;
 font-size: 16px;
 color: #3d3d3d;
 font-weight: 300;
 display: flex;
 align-items: center;
 cursor: pointer;
`;
export const Iconsdiv = styled.div`
 width: 220px;
 height: inherit;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;
export const Icon = styled.img`
 width: 20px;
 height:20px;
 cursor: pointer;
`;
export const Navbutton = styled.button`
 width: 100px;
 height: 35px;
 border-radius:6px;
 background: #46A358;
 display: flex;
 align-items: center;
 justify-content: space-around; 
 cursor: pointer;
 outline: none;
 border: none;
`;