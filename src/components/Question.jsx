import PropTypes from 'prop-types';
import { Component } from 'react';

class Question extends Component {
  state = {
    index: 0,
    allQuestions: [],
    showAnswers: false,
    timer: 0,
    timeLeft: 30,
  };

  componentDidMount() {
    this.randomizeQuestions();
    this.cronometro();
  }

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
    });
  };

  toggleShowAnswers = () => {
    this.setState((prev) => ({
      showAnswers: !prev.showAnswers,
    }));
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
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct_answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default Question;
