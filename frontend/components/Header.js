import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faStream, faToggleOn, faCartPlus, faBell, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
 
library.add(faUserCircle, faStream, faToggleOn, faCartPlus, faBell, faEnvelopeOpenText)



import MenuBar from './Menubar/Menubar';
import SearchBox from './SearchBox/index';
import ProfileMenu from './ProfileMenu/index'


class Header extends React.Component {

    render(){
        return(
            <section>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark">
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
                            <li><Link href="/brands"><a><FontAwesomeIcon icon="toggle-on"/></a></Link></li>
                            <li><Link href="/projects"><a><FontAwesomeIcon icon="cart-plus" /></a></Link></li>
                            <li><Link href="/products"><a><FontAwesomeIcon icon="bell" /></a></Link></li>
                            <li><Link href="/jobs"><a><FontAwesomeIcon icon="envelope-open-text" /></a></Link></li>
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