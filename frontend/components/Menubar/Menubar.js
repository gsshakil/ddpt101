import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { faUsers, faBuilding, faProjectDiagram, faShoppingBasket, faTasks, faFunnelDollar, faUniversity, faPollH  } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faUsers, faBuilding, faProjectDiagram, faShoppingBasket, faTasks, faFunnelDollar, faUniversity, faPollH)

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul>
                <li><Link href="/people"><a><FontAwesomeIcon icon="users"/>People</a></Link></li>
                <li><Link href="/brands"><a><FontAwesomeIcon icon="building"/>Brands</a></Link></li>
                <li><Link href="/projects"><a><FontAwesomeIcon icon="project-diagram" />Projects</a></Link></li>
                <li><Link href="/products"><a><FontAwesomeIcon icon="shopping-basket" />Products</a></Link></li>
                <li><Link href="/jobs"><a><FontAwesomeIcon icon="tasks" />Jobs</a></Link></li>
                <li><Link href="/campaigns"><a><FontAwesomeIcon icon="funnel-dollar"/>Campaigns</a></Link></li>
                <li><Link href="/academy"><a><FontAwesomeIcon icon="university"/>Academy</a></Link></li>
                <li><Link href="/apps"><a><FontAwesomeIcon icon="poll-h" />Apps</a></Link></li>
            </ul>
        </div>
    )
};

export default MenuBar;