import React from 'react';
import Link from 'next/link';
import { elastic as Menu } from 'react-burger-menu';


class ProfileMenu extends React.Component {

    render(){
        
        // let profileMenuClassName;                    
        const onToggleProfileMenu = () => {
            profileMenuClassName = this.state.profileMenuOpen ? 'profile-menu open' : 'profile-menu'; 
        }

        return (
            <div id="outer-container">
                <Menu right elastic width={ 280 } disableCloseOnEsc pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <main id="page-wrap">

                </main>
        
                    <div className="profile-menu">

                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src="https://via.placeholder.com/150" alt="User Picture"/>
                            </div>
                            <h1><Link href=""><a>Jhon Doe</a></Link></h1>
                            <small>20000 Credits</small>
                        </div>
                        <hr/> 
                        <div className="d-flex align-items-center h-100 justify-content-center">
                            <ul className="menu-items">
                                <li><Link href="admin/dashboard"><a>Dashboard</a></Link></li>
                                <li><Link href="userprofile"><a>View Profile</a></Link></li>
                                <li><Link href="/people-edit"><a>Edit Profile</a></Link></li>
                                <li><Link href="/brand-create-connect"><a>Create/Connect Brands</a></Link></li>
                                <li><Link href="create-job"><a>Post a Job</a></Link></li>
                                <li><Link href="create-shop"><a>Create a Shop</a></Link></li>
                                <li><Link href="/become-instructor"><a>Become an Instructor</a></Link></li>
                                <li><Link href="/account-settings"><a>Account Settings</a></Link></li>
                                <li><Link href=""><a>Log Out</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </Menu>
            </div>
        )
    }
};

export default ProfileMenu;
