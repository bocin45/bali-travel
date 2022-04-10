import styled from "styled-components";
import { keyframes } from "styled-components";

// export const Wrapper = styled.div`
//     padding-top: 0px;
//     min-width: 100%;
//     min-height: 100vh;
//     width: 100%;
//     height: 600px;
//     text-align: center;
//     box-sizing: border-box ;
//     border: 1px solid #ddd;
// `
const zoomin = keyframes`
  0% {
      -webkit-transform: scale(1);
    }
  100% {
        -webkit-transform: scale(1.2);
    }
`;

export const HomeImageWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100hv;
    min-height: 1px;
    overflow: hidden ;
`;

export const HomeImage = styled.div`
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-image: url(${({ image }) => image});
    background-color: white;
    
    animation: ${zoomin} 12s ease-in-out infinite alternate;
    -webkit-animation: ${zoomin}  12s ease-in-out infinite alternate;
`

export const HomeCaption = styled.div`
    text-align: center;
    position: absolute;
    z-index: 10;
    top: 50%;
    right: 60px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    display: inline-block;
`

export const HomeCaptionH1 = styled.h1`
    margin-top: 0px;
    margin-bottom: 15px;
    font-size: 48px;
    color: #fff;
    font-weight: 700;
`
export const HomeCaptionP = styled.p`
    font-size: 15px;
    color: #fff;
`

export const HomePrevButton = styled.span`    outline: none;
    outline: none;
    position: absolute;
    top: -300px;
    right: 60px;
    width: 50px;
    height: 50px;
    border: 0 none;
    margin-top: -22.5px;
    text-align: center;
    font: 32px/50px FontAwesome;
    color: #fff;
    z-index: 5;
`

export const HomeNextButton = styled.span`    outline: none;
    outline: none;
    position: absolute;
    top: -300px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: 0 none;
    margin-top: -22.5px;
    text-align: center;
    font: 32px/50px FontAwesome;
    color: #fff;
    z-index: 5;
`


