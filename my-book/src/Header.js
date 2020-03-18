import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Book App</h1>
          <div className="btn-box">
            <h2>Home</h2>
            <h2>Books</h2>
            <h2>About</h2>
          </div>

        </nav>

      </div>
    );
  }

}

export default Header;
