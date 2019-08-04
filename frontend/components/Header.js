import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faStream, faToggleOn, faCartPlus, faBell, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
 
library.add(faUserCircle, faStream, faToggleOn, faCartPlus, faBell, faEnvelopeOpenText)

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import MenuBar from './Menubar/Menubar';
import SearchBox from './SearchBox/index';
import ProfileMenu from './ProfileMenu/index';
import SaDropdown from './Header/SaDropdown';


class Header extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggleSA = this.toggleSA.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.toggleBell = this.toggleBell.bind(this);
        this.toggleInbox = this.toggleInbox.bind(this);
        this.state = {
          dropdownOpenSA: false,
          dropdownOpenCart: false,
          dropdownOpenBell: false,
          dropdownOpenInbox: false
        };
      }
    
      toggleSA() {
        this.setState(prevState => ({
          dropdownOpenSA: !prevState.dropdownOpenSA
        }));
      }
      toggleCart() {
        this.setState(prevState => ({
          dropdownOpenCart: !prevState.dropdownOpenCart
        }));
      }
      toggleBell() {
        this.setState(prevState => ({
          dropdownOpenBell: !prevState.dropdownOpenBell
        }));
      }
      toggleInbox() {
        this.setState(prevState => ({
          dropdownOpenInbox: !prevState.dropdownOpenInbox
        }));
      }    

    render(){
        return(
            <section>
                <header>
                    <nav className="navbar navbar-expand-md fixed-top navbar-dark">
                    <Link href="/">
                        <a className="nav-link"><img src="http://deepdenv1.herokuapp.com/9d1b1a3d1bfd40c2e0173de06dda6a83.png" height="34px" alt="logo"/></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <SearchBox />
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto navbar-logged-in">
                            <li><Link href="/people"><a><FontAwesomeIcon icon="stream"/></a></Link></li>
                            {/* <li><Link href="/brands"><a><FontAwesomeIcon icon="toggle-on"/></a></Link></li> */}
                            <li>
                                <Dropdown className="icon-menu switch-account" isOpen={this.state.dropdownOpenSA} toggle={this.toggleSA}>
                                    <DropdownToggle toggle>
                                        <FontAwesomeIcon icon="toggle-on"/></DropdownToggle>
                                    <div className="dropdown-wrapper">
                                        <DropdownMenu>
                                        <DropdownItem header>Switch Account</DropdownItem>
                                        <SaDropdown />    
                                        </DropdownMenu>
                                    </div>
                                </Dropdown>
                            </li>
                            {/* <li><Link href="/projects"><a><FontAwesomeIcon icon="cart-plus" /></a></Link></li> */}
                            <li>
                                <Dropdown className="icon-menu cart" isOpen={this.state.dropdownOpenCart} toggle={this.toggleCart}>
                                    <DropdownToggle><FontAwesomeIcon icon="cart-plus"/></DropdownToggle>
                                    <div className="dropdown-wrapper">                                   
                                        <DropdownMenu>
                                            <DropdownItem header>Cart</DropdownItem>
                                            <SaDropdown />    
                                        </DropdownMenu>
                                    </div>
                                </Dropdown>
                            </li>
                            {/* <li><Link href="/products"><a><FontAwesomeIcon icon="bell" /></a></Link></li> */}
                            <li>
                                <Dropdown className="icon-menu notification" isOpen={this.state.dropdownOpenBell} toggle={this.toggleBell}>
                                    <DropdownToggle><FontAwesomeIcon icon="bell"/></DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Notifications</DropdownItem>
                                        <SaDropdown />                                            
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            {/* <li><Link href="/jobs"><a><FontAwesomeIcon icon="envelope-open-text" /></a></Link></li> */}
                            <li>
                                <Dropdown className="icon-menu inbox" isOpen={this.state.dropdownOpenInbox} toggle={this.toggleInbox}>
                                    <DropdownToggle><FontAwesomeIcon icon="envelope-open-text"/></DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Inbox</DropdownItem>
                                        <SaDropdown />                                            
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li><Link href="/campaigns"><a><FontAwesomeIcon icon="user-circle"/>
                                <ProfileMenu></ProfileMenu>
                            </a></Link></li>
                        </ul>
                        {/* <ul className="navbar-nav mr-auto navbar-auth">
                            <li className="nav-item active">
                                <Link href="/">
                                    <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/people">
                                    <a class="btn btn-outline-primary">Sign up</a>                                    
                                </Link>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </header>

            <MenuBar/>

          </section>
      
        );
    }

}


export default Header;