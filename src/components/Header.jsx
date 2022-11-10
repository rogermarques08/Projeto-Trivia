import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  getSrc = () => {
    const { player } = this.props;
    const hash = md5(player.gravatarEmail).toString();
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  render() {
    const { player } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ this.getSrc() }
          alt={ player.name }
        />
        <p data-testid="header-player-name">{player.name}</p>
        <p data-testid="header-score">{player.score}</p>
      </header>
    );
  }
}

Header.propTypes = {
  player: PropTypes.shape({
    gravatarEmail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Header);
