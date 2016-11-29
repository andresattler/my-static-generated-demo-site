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
          <a href={val.link}>
            <h1>{val.title}</h1>
            <p dangerouslySetInnerHTML={{__html: val.description}}></p>
          </a>
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
