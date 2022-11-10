import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import fetchTriviaQuestions from '../services/fetchTriviaQuestions';
import Question from '../components/Question';

class Game extends React.Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    this.getApiQuestions();
  }

  getApiQuestions = async () => {
    const { history } = this.props;
    const RESPONSE_CODE_ERROR = 3;
    const token = localStorage.getItem('token');
    const response = await fetchTriviaQuestions(token);
    if (response.response_code === RESPONSE_CODE_ERROR) {
      localStorage.removeItem('token');
      history.push('/');
    } else {
      this.setState({
        questions: response.results,
      });
    }
  };

  render() {
    const { questions } = this.state;
    return (
      <div>
        <h1>game</h1>
        <Header />

        {
          questions.length > 0 && <Question questions={ questions } />
        }

      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape().isRequired,
};
export default connect()(Game);
