import React from 'react';

const THead = (props) => (
  <thead>
    <tr>
      <td>Uhrzeit</td>
      <td>Mo 06.07.</td>
      <td>Di 07.07.</td>
      <td className="active">Mi 08.07.</td>
      <td>Do 09.07.</td>
      <td>Fr 10.07.</td>
      <td className="free" >Sa 11.07.</td>
      <td className="free" >So 12.07.</td>
    </tr>
  </thead>
);

export default THead;
