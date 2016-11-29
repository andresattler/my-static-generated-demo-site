import React from 'react';
import Aside from './Aside'

class Main extends React.Component {
  render () {
    let content;
    if(this.props.content.articles){
      content = this.props.content.articles.map(val => (
        <article
          key={val.title}
          >
          <h1>{val.title}</h1>
        </article>
      ));
    }else{
      content=<article dangerouslySetInnerHTML={{__html: this.props.content.content}}></article>;
    }

    return (
      <div id="wrapper">
        <main>
          {content}
        </main>
        <Aside/>
      </div>
    )
  }
}

export default Main;
