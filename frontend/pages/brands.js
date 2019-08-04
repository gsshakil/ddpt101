import React from 'react';
import Link from 'next/link';

import BrandList from '../components/Brands/index';

class Brands extends React.Component {

  render(){
    return(
      <div>
        <BrandList></BrandList>
      </div>
    );
  }

}

export default Brands;
