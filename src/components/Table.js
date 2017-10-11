import React from 'react';

import TBody from './TBody';
import THead from './THead';

class Table extends React.Component {

  render() {
    return (
      <div className="table">
        <table>

          <THead/>
          <TBody/>

        </table>
      </div>
    )
  }
}

export default Table;
