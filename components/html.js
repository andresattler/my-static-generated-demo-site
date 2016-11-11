import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'

class Html extends React.Component {
  render () {
    //console.log(normalize);
    return (
      <html lang="eng">
        <head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="./css/normalize.css"/>
        </head>
        <body>
          <Header/>
          <Main/>
          <Footer/>
        </body>
      </html>
    )
  }
};

export default Html
