import React from 'react';

class Header extends React.Component {

  render() {
    return (
			<div className="header">
				<h2>Terminplaner</h2>
				<div className="control">
					<span className="prev">&lt;</span>
					<span className="date">6 &mdash; 12. Juli 2015</span>
					<span className="next">&gt;</span>
				</div>
				<span className="month"></span>
				<span className="slider"></span>
			</div>
    );
  }
}

export default Header;
