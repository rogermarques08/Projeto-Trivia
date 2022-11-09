import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
  render() {
    return (
      <p>NotFound</p>
    );
  }
}
export default connect()(NotFound);
