import React from 'react';


class Footer extends React.Component {
  render () {
    return (
      <div
        style={{
          height: '100px',
          backgroundColor: 'gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>Footer</p>
      </div>
    )
  }
}

export default Footer;
