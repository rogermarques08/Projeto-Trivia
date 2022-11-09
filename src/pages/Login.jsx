import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { sendUserInfos } from '../redux/actions/index';
import ButtonSettings from '../components/ButtonSettings';
import fetchTriviaToken from '../services/fetchTriviaToken';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { name, email } = this.state;
    return name.length > 0 && email.length > 0;
  };

  handleClick = async () => {
    const { dispatch, history } = this.props;
    dispatch(sendUserInfos(this.state));
    const token = await fetchTriviaToken();
    // o setItem não pode receber stringify pois já é uma string
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { name, email } = this.state;
    const { history } = this.props;

    return (
      <div>
        <ButtonSettings
          history={ history }
        />
        <form>
          <input
            type="text"
            placeholder="Nome"
            data-testid="input-player-name"
            value={ name }
            name="name"
            onChange={ this.handleInputChange }
          />
          <input
            type="text"
            placeholder="Email"
            data-testid="input-gravatar-email"
            value={ email }
            name="email"
            onChange={ this.handleInputChange }
          />
          <button
            type="button"
            disabled={ !this.validateForm() }
            onClick={ this.handleClick }
            data-testid="btn-play"
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect()(Login);
