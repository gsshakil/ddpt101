import React from 'react';
import Link from 'next/link';

import PeopleList from '../components/People/index';

class People extends React.Component {

  render(){
    return(
      <div>
        <PeopleList></PeopleList>
      </div>
    );
  }

}

export default People;
