import * as React from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';
import type { Form } from './types';

type Props = {
  form: Form,
  onChangeValidate: Function,
  value: mixed,
  error: mixed,
};

class FormText extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.form.htmlClass}>
        <TextField
          type={this.props.form.type}
          label={this.props.form.title}
          placeholder={this.props.form.placeholder}
          helperText={this.props.error}
          error={!!this.props.error}
          onChange={this.props.onChangeValidate}
          defaultValue={this.props.value}
          disabled={this.props.form.readonly}
          style={this.props.form.style || { width: '100%' }}
        />
      </div>
    );
  }
}

export default ComposedComponent(FormText);
