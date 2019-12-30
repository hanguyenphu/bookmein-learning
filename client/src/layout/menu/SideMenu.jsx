import React, { Component } from "react";
import { SideNav, Icon } from "react-materialize";

import M from "materialize-css";
import SideNavItems from "./SideNavItems";



class SideMenu extends Component {
   
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
       
        return (
            <div>
                <style>
                    {`
                #root > div > div {
                z-index: 99999 !important;
                }
            `}
                </style>
                <SideNav
                    className='left '
                    options={{
                        closeOnClick: true
                    }}
                    trigger={
                        <a href='#'>
                            <Icon>menu</Icon>
                        </a>
                    }
                >
                    <SideNavItems />
                </SideNav>
            </div>
        );
    }
}

export default SideMenu;
