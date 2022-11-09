import React from 'react';
import { connect } from 'react-redux';

class Feedback extends React.Component {
  render() {
    return (
      <p>Feedback</p>
    );
  }
}
export default connect()(Feedback);
