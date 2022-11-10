import PropTypes from 'prop-types';
import React from 'react';

class ButtonSettings extends React.Component {
  clickSettingsButton = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    return (
      <button
        type="button"
        onClick={ this.clickSettingsButton }
        data-testid="btn-settings"
      >
        settings
      </button>
    );
  }
}

ButtonSettings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ButtonSettings;
