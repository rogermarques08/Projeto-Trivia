import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resetGlobalState } from '../redux/actions';

class Feedback extends React.Component {
  componentDidMount() {
    this.savePlayerScore();
  }

  savePlayerScore = () => {
    const { player } = this.props;
    const playerScore = {
      name: player.name,
      score: player.score,
      picture: player.src,
    };
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    if (!ranking) {
      localStorage.setItem('ranking', JSON.stringify([playerScore]));
    } else {
      const newRank = [...ranking, playerScore];
      localStorage.setItem('ranking', JSON.stringify(newRank));
    }
  };

  playAgain = () => {
    const { history, dispatch } = this.props;
    localStorage.removeItem('token');
    dispatch(resetGlobalState());
    history.push('/');
  };

  render() {
    const { player: { assertions, score }, history } = this.props;
    const ASSERTIONS = 3;
    return (
      <div>
        <Header />
        <h1>Feedback</h1>
        <h2 data-testid="feedback-total-score">{score}</h2>
        <h2 data-testid="feedback-total-question">{assertions}</h2>
        {
          assertions < ASSERTIONS
            ? <h1 data-testid="feedback-text">Could be better...</h1>
            : <h1 data-testid="feedback-text">Well Done!</h1>
        }
        <div>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.playAgain }
          >
            Play Again

          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            Ranking

          </button>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Feedback);
