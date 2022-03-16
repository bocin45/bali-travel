import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20%;
  float: left;
  height: 100%;
  position: fixed;
  background-color: rgba(12, 12, 12, 0.9);
  z-index: 10;
`;

export const SidebarLogo = styled.div`
  position: relative;
  /* width: 100%; */
  height: 100px;
  line-height: 100px;
  background-color: #81a183;
  padding: 20px;
  text-align: center; 
`;

export const SidebarLogoText = styled.a`
  text-decoration: none;
  color: #226b6b;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  height: 100px;
  width: 100%;
  display: inline-block;
  border: 1px solid rgba(250, 250, 250, 0.5);
`

export const SideBarNav = styled.nav`
  position: relative;
  top: 30%;
  left: 60%;
  -webkit-transform: translateX(-60%) translateY(-60%);
  -moz-transform: translateX(-60%) translateY(-60%);
  -ms-transform: translateX(-60%) translateY(-60%);
  -o-transform: translateX(-60%) translateY(-60%);
  transform: translateX(-60%) translateY(-60%);
`;

export const SideBarNavUl = styled.ul`
  margin-left: 45px;
  list-style: none;
  padding: 0;
`;

export const SideBarNavLi = styled.li`
  padding: 10px 0;
`;



export const SideBarNavA = styled.a`
  display: inline-block;
  color: #fff;
  margin-top: 5px;
  text-decoration: none !important;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`
export const SideBarNavCircle = styled.span`
  /* transition: all 0.3s; */

  height: 10px;
  width: 10px; 
  margin-right: 5px; 
  background-color: transparent;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid #fff; 
`
export const SideBarNavRect = styled.span`
  height: 1px;
  width: 0px;
  left: 0;
  bottom: 5.5px;
  background-color: #fff;
  -webkit-transition: -webkit-transform 0.1s, width 0.6s;
  -moz-transition: -webkit-transform 0.1s, width 0.6s;
  transition: transform 0.1s, width 0.6s;
`


