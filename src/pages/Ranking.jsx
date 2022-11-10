import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Ranking extends React.Component {
  playAgain = () => {
    const { history } = this.props;
    localStorage.removeItem('token');
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
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
