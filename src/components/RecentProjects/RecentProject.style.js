import styled from "styled-components";
import { device } from "../../const/device";

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  background-color: white;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  background-image: ${(props) => (props.url ? `url(${props.url})` : "")};
  background-size: cover;
  background-position: center;
`;

export const BigImageContainer = styled.div`
  @media ${device.mobileS} {
    width: 55%;
  }
  @media ${device.tablet} {
    width: 66%;
  }
  height: 50vw;
  margin: 5px;
  overflow: hidden;
`;

export const MediumTwoImageContainer = styled.div`
  width: 31%;
  margin: 5px;
  height: 50vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MediumImageContainer = styled.div`
  width: 31%;
  margin: 5px;
  height: 25vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WideImageContainer = styled.div`
  @media ${device.mobileS} {
    width: 55%;
  }
  @media ${device.tablet} {
    width: 66%;
  }
  margin: 5px;
  height: 25vw;
  overflow: hidden;
`;
