import * as React from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';


class FormText extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: this.props.form.htmlClass },
      React.createElement(TextField, {
        type: this.props.form.type,
        label: this.props.form.title,
        placeholder: this.props.form.placeholder,
        helperText: this.props.error,
        error: !!this.props.error,
        onChange: this.props.onChangeValidate,
        defaultValue: this.props.value,
        disabled: this.props.form.readonly,
        style: this.props.form.style || { width: '100%' }
      })
    );
  }
}

export default ComposedComponent(FormText);