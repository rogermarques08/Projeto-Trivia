import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  render() {
    return (
      <p datatest-id="feedback-text">Feedback</p>
    );
  }
}
export default connect()(Feedback);
