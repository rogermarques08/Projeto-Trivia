import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { playerScore } from '../redux/actions';

class Question extends Component {
  state = {
    index: 0,
    allQuestions: [],
    showAnswers: false,
    timer: 0,
    timeLeft: 30,
    correctAnswer: '',
  };

  componentDidMount() {
    this.randomizeQuestions();
    this.cronometro();
  }

  difficultLevel = () => {
    const { index } = this.state;
    const { questions } = this.props;
    const answers = questions[index];
    const { difficulty } = answers;

    const hard = 3;
    const medium = 2;
    const easy = 1;

    switch (difficulty) {
    case 'hard':
      return hard;
    case 'medium':
      return medium;
    case 'easy':
      return easy;
    default:
      break;
    }
  };

  calculeteScore = (target) => {
    const { timeLeft, correctAnswer } = this.state;
    const { dispatch } = this.props;
    const initialScore = 10;

    if (target === correctAnswer) {
      const sum = initialScore + ((timeLeft - 1) * this.difficultLevel());
      dispatch(playerScore(sum));
    }
  };

  cronometro = () => {
    this.setState({ timeLeft: 30 }, () => {
      const second = 1000;
      const idInterval = setInterval(() => {
        this.setState((prevState) => ({
          timeLeft: prevState.timeLeft - 1,
        }), () => {
          const { timeLeft, showAnswers } = this.state;
          if (timeLeft === 0 || showAnswers) {
            clearInterval(idInterval);
            this.setState({
              timer: timeLeft,
            });
          }
        });
      }, second);
    });
  };

  randomizeQuestions = () => {
    const { questions } = this.props;
    const { index } = this.state;
    const allQ = [questions[index].correct_answer, ...questions[index].incorrect_answers];
    const allQsort = allQ.sort((a, b) => a.length - b.length);
    // stackoverflow > buscar monitoria para entender melhor!
    for (let start = 0; start < allQ.length; start += 1) {
      const randomPosition = Math.floor((allQ.length - start) * Math.random());
      const randomItem = allQ.splice(randomPosition, 1);
      allQ.push(...randomItem);
    }

    this.setState({
      allQuestions: allQsort,
      correctAnswer: questions[index].correct_answer,
    });
  };

  toggleShowAnswers = ({ target }) => {
    this.setState((prev) => ({
      showAnswers: !prev.showAnswers,
    }), () => this.calculeteScore(target.innerText));
  };

  changeIndex = () => {
    this.setState((prev) => ({
      index: prev.index + 1,
      showAnswers: false,
    }), () => {
      this.cronometro();
      this.randomizeQuestions();
    });
  };

  render() {
    const { questions } = this.props;
    const { index, allQuestions, showAnswers, timeLeft, timer } = this.state;
    console.log(timer);

    return (
      <div>
        <h2 data-testid="question-text">{questions[index].question}</h2>
        <h3 data-testid="question-category">{questions[index].category}</h3>
        <p>
          {' '}
          TimeLeft:
          {' '}
          { timeLeft }
        </p>
        <div data-testid="answer-options">
          {
            allQuestions.map((e, i) => {
              if (e === questions[index].correct_answer) {
                return (
                  (
                    <button
                      type="button"
                      data-testid="correct-answer"
                      style={ { border: showAnswers && '3px solid rgb(6, 240, 15)' } }
                      onClick={ this.toggleShowAnswers }
                      key={ e }
                      disabled={ showAnswers || timeLeft === 0 }
                    >
                      {questions[index].correct_answer}
                    </button>)
                );
              }
              return (
                (
                  <button
                    data-testid={ `wrong-answer-${i}` }
                    type="button"
                    key={ e }
                    style={ { border: showAnswers && '3px solid red' } }
                    onClick={ this.toggleShowAnswers }
                    disabled={ showAnswers || timeLeft === 0 }
                  >
                    {e}
                  </button>
                )
              );
            })
          }
        </div>
        <div>
          {
            showAnswers && (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ this.changeIndex }
              >
                Next

              </button>)
          }
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct_answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect()(Question);
