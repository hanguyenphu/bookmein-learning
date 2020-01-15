import React, { Component } from "react";
import { SideNavItem } from "react-materialize";


class SideNavItems extends Component {

     state = {
        authenticated: true
    }

    handleLogout = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            authenticated: false
        })
    }

    render() {
        const  { authenticated }  = this.state;

        return (
            <div>
                {authenticated ? (
                    <div>
                        <SideNavItem
                            user={{
                                background:
                                    "assets/images/curtis-macnewton-vVIwtmqsIuk-unsplash.jpg",
                                email: "salon@gmail.com",
                                name: "Book Me In Inc",

                            }}
                            userView
                        />
                        <SideNavItem
                            href='/project'
                            icon='calendar_today'
                        >
                            Calendar
                        </SideNavItem>
                        <SideNavItem href='/history' icon='history'>
                            History
                        </SideNavItem>
                        <SideNavItem href='/history' icon='show_chart'>
                            Sales
                        </SideNavItem>

                        <SideNavItem divider />
                        {/* <SideNavItem subheader>My Account</SideNavItem> */}
                        <SideNavItem href='/customers' waves icon='perm_contact_calendar'>
                            Customers
                        </SideNavItem>
                        <SideNavItem href='/employees' waves icon='group'>
                            Employees
                        </SideNavItem>
                        <SideNavItem href='/settings' icon='build'>
                            Settings
                        </SideNavItem>
                        <SideNavItem
                            href='/logout'
                            onClick = {this.handleLogout}
                            waves
                            icon='power_settings_new'
                        >
                            Logout
                        </SideNavItem>
                    </div>
                ) : (
                    <SideNavItem href='/login' waves icon='trending_flat'>
                        Login
                    </SideNavItem>
                )}
            </div>
        );
    }
}

export default SideNavItems;
