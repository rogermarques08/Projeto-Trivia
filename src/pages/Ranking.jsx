import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { resetGlobalState } from '../redux/actions';

class Ranking extends React.Component {
  playAgain = () => {
    const { history, dispatch } = this.props;
    localStorage.removeItem('token');
    dispatch(resetGlobalState());
    history.push('/');
  };

  render() {
    const rankingList = JSON.parse(localStorage.getItem('ranking'))
      .sort((a, b) => b.score - a.score);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <ol>
          {rankingList.map((e, i) => (
            <li key={ e.picture }>
              <p data-testid={ `player-name-${i}` }>{e.name}</p>
              <p data-testid={ `player-score-${i}` }>{e.score}</p>
              <img src={ e.picture } alt="user" />
            </li>
          ))}
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect()(Ranking);
