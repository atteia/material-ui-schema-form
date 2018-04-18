import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class FormNumber extends Component {
  componentWillMount() {
    this.setState({
      lastSuccessfulValue: this.props.value || 0,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({
        lastSuccessfulValue: nextProps.value,
      });
    }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Prevent the field from accepting non-numeric characters.
   * @param e
   */
  preValidationCheck = e => {
    if (this.isNumeric(e.target.value)) {
      this.setState({
        lastSuccessfulValue: e.target.value,
      });
      this.props.onChangeValidate(e);
    }
  };

  render() {
    return (
      <div className={this.props.form.htmlClass}>
        <TextField
          type={this.props.form.type}
          label={this.props.form.title}
          placeholder={this.props.form.placeholder}
          helperText={this.props.error}
          error={this.props.error}
          onChange={this.preValidationCheck}
          value={this.state.lastSuccessfulValue}
          disabled={this.props.form.readonly}
          style={this.props.form.style || { width: '100%' }}
        />
      </div>
    );
  }
}

export default ComposedComponent(FormNumber);
