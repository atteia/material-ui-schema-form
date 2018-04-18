import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';

class FormTextArea extends Component {
  render() {
    // FIXME: Obviously fix rowsMax eventually..
    //console.log('FormTextArea', this.props.form);
    return React.createElement(
      'div',
      { className: this.props.form.htmlClass },
      React.createElement(TextField, {
        multiline: true,
        type: this.props.form.type,
        label: this.props.form.title,
        placeholder: this.props.form.placeholder,
        helperText: this.props.error,
        error: this.props.error ? true : false,
        onChange: this.props.onChangeValidate,
        defaultValue: this.props.value,
        disabled: this.props.form.readonly,
        style: this.props.form.style || { width: '100%' },
        rows: this.props.form.rows || 4,
        rowsMax: this.props.form.rowsMax
      })
    );
  }
}

export default ComposedComponent(FormTextArea);