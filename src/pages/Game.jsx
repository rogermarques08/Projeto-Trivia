import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>game</h1>
        <Header />
      </div>
    );
  }
}
export default connect()(Game);
