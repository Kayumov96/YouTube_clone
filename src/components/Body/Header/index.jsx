import React from "react";
import { Header,Left,H5,Span,Sspan,Btn,Right,Miniimg,Icon, Slider } from "./style";
import image4 from '../../../assets/images/image4.png';
import circle from '../../../assets/icons/circle.svg';
import image3 from '../../../assets/images/image3.png';
import image6 from  '../../../assets/images/image6.png';

export const Head =()=>{
       return(
           <div className="mainHeaderPageContainer">
                    <Slider>
                       <a href="#header1"><Icon src={circle} alt='slide'/></a>
                       <a href="#header2"><Icon src={circle} alt='slide'/></a>
                       <a href="#header3"><Icon src={circle} alt='slide'/></a>
                    </Slider>
                <div className="slidePages">
                    <Header className='headerPage1' id="header1">
                      <Left>
                       <H5>Welcome to Greenshop</H5>
                         <Span>Let’s Make a Better <span className='active'>Planet</span></Span>
                        <Sspan>
                          We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                        </Sspan>
                     <Btn style={{width:'140px', height:'40px', marginTop:'44px'}}>SHOP NOW</Btn>
                 </Left>
                 <Right>
                     <Miniimg  src={image4} alt='product n4'/>
                     <Icon src={image4} alt='product n4'/>
                 </Right>
                     
                </Header>
                <Header className='headerPage1' id="header2">
                 <Left>
                     <H5>Welcome to Greenshop</H5>
                     <Span>Let’s Make a Better <span className='active'>Planet</span></Span>
                     <Sspan>
                     We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                     </Sspan>
                     <Btn style={{width:'140px', height:'40px', marginTop:'44px'}}>SHOP NOW</Btn>
                 </Left>
                 <Right>
                     {/* <Miniimg  src={image4} alt='product n4'/> */}
                     <Icon src={image3} alt='product n3'/>
                 </Right>
                </Header>
                <Header className='headerPage1' id="header3">
                 <Left>
                     <H5>Welcome to Greenshop</H5>
                     <Span>Let’s Make a Better <span className='active'>Planet</span></Span>
                     <Sspan>
                     We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                     </Sspan>
                     <Btn style={{width:'140px', height:'40px', marginTop:'44px'}}>SHOP NOW</Btn>
                 </Left>
                 <Right>
                     {/* <Miniimg  src={image4} alt='product n4'/> */}
                     <Icon  src={image6} alt='product n6'/>
                 </Right>
                </Header></div>
          </div>
       )       
}

export default Head;