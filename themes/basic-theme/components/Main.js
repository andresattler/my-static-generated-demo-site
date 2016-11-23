import React from 'react';
import Aside from './Aside'

class Main extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <main>
          <article>
            <h1>secound Post</h1>
          </article>
          <article>
            <h1>first Post</h1>
          </article>
        </main>
        <Aside/>
      </div>
    )
  }
}

export default Main;
