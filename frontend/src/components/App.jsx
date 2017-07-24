import React from 'react';
import '../../styles/index.scss';
import Header from './Header'
import Main from './Main'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
