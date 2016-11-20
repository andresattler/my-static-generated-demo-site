import React from 'react';
import Template from './themes/basic-theme/template'
class Html extends React.Component {
  render () {
    return (
      <html lang="eng">
        <head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="./css/normalize.css"/>
        </head>
        <body>
          <Template content={this.props.content}/>
        </body>
      </html>
    )
  }
};

export default Html
