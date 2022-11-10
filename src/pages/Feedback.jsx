import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    const { player } = this.props;
    console.log(player);
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        <h2 data-testid="feedback-total-score">{player.score}</h2>
        <h2 data-testid="feedback-total-question">{player.assertions}</h2>
      </div>
    );
  }
}

Feedback.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Feedback);
