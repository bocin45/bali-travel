import React from "react";

import { Wrapper, SidebarLogo, SidebarLogoText, SideBarNav, SideBarNavUl, SideBarNavLi, SideBarNavCircle, SideBarNavA, SideBarNavRect } from "./Sidebar.styles";

const Sidebar = () => (
    <Wrapper>
        <SidebarLogo>
            <SidebarLogoText>Bali Travel</SidebarLogoText>
        </SidebarLogo>
        <SideBarNav>
            <SideBarNavUl>
                <SideBarNavLi>
                    <SideBarNavA href="#top">
                        <SideBarNavRect />
                        <SideBarNavCircle />
                        Home
                    </SideBarNavA>
                </SideBarNavLi>
                <SideBarNavLi>
                    <SideBarNavA href="#places">
                        <SideBarNavCircle />
                        Feature Places
                    </SideBarNavA>
                </SideBarNavLi>
                <SideBarNavLi>
                    <SideBarNavA href="#activity">
                        <SideBarNavCircle />
                        Recent Activity
                    </SideBarNavA>
                </SideBarNavLi>
                <SideBarNavLi>
                    <SideBarNavA href="#contact">
                        <SideBarNavCircle />
                        Contact us
                    </SideBarNavA>
                </SideBarNavLi>
            </SideBarNavUl>
        </SideBarNav>
    </Wrapper>
)

export default Sidebar;