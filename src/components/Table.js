import React from 'react';

import TBody from './TBody';
import THead from './THead';

const Table = (props) => (
  <div className="table">
    <table>

      <THead/>
      <TBody/>

    </table>
  </div>
);

export default Table;
