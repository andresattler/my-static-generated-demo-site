import React from 'react';


class Header extends React.Component {
  render () {
    return (
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          height: '150px',
          width: '100%',
          backgroundColor: "gray",
          margin: "0",
          textAlign: "center"
        }}
      >
        <h1>Header</h1>
      </div>
    )
  }
}

export default Header;
