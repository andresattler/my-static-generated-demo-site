import React from 'react';


class Main extends React.Component {
  render () {
    return (
      <div
        dangerouslySetInnerHTML={{__html: this.props.content}}
        style={{
          height: '1000px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      </div>
    )
  }
}

export default Main;
