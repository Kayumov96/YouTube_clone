import styled from 'styled-components'

const Container = styled.div`
 width: 100%;
 height: 20%;
`;
const Search = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 55px;
 background: #212121;
 border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const Sort = styled.div`
 width: 100%;
 height: 55px;
 background: #212121;
 border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const Serch = styled.input`
 outline: none;
 
 width:80%;
 height: 30px;
 background:#000000;
 border: 1px solid rgba(255, 255, 255, 0.2);
`;
export { Container, Search, Sort, Serch };