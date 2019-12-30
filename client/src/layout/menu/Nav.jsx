import React, { Component } from "react"
import {
    Navbar,
    Icon,
} from "react-materialize"
import SideMenu from "./SideMenu"
import SideNavItems from './SideNavItems'

class Nav extends Component {
    render() {
        return (
            <Navbar
                alignLinks='left'
                className=" teal lighten-2"
               
                brand={
                    <a   className='brand-logo center' href='#'>
                        Book Me In
                    </a>
                }
                children = {<SideMenu/>}
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: "left",
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                sidenav={
                    <SideNavItems/>
                }
            >
            </Navbar>
        );
    }
}

export default Nav;
