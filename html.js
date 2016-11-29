import React from 'react';
import Template from './themes/basic-theme/template'
class Html extends React.Component {
  render () {
    return (
      <html lang="eng">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>
          <Template content={this.props}/>
        </body>
      </html>
    )
  }
};

export default Html
