import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerImage } from '../redux/actions';

class Header extends Component {
  state = {
    src: '',
  };

  componentDidMount() {
    this.getSrc();
  }

  getSrc = () => {
    const { player, dispatch } = this.props;
    const hash = md5(player.gravatarEmail).toString();
    const src = `https://www.gravatar.com/avatar/${hash}`;
    this.setState({
      src,
    }, () => {
      const { src: url } = this.state;
      dispatch(getPlayerImage(url));
    });
  };

  render() {
    const { player } = this.props;
    const { src } = this.state;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ src }
          alt={ player.name }
        />
        <p data-testid="header-player-name">{player.name}</p>
        <p data-testid="header-score">{player.score}</p>
      </header>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
