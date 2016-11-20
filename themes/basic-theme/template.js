import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class Template extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Main content={this.props.content}/>
        <Footer/>
      </div>
    );
  }
};

export default Template;
