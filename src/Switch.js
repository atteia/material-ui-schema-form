import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

class FormSwitch extends Component {
  render() {
  	const {
  		form,
  		value,
  		onChangeValidate,
  	} = this.props;

    return (
      <div className={form.className}>
        <FormControlLabel
          control={
            <Switch
          		name={form.key.slice(-1)[0]}
		          value={form.key.slice(-1)[0]}
		          checked={value || false}
          		disabled={form.readonly}
              onChange={(e, checked) => {onChangeValidate(e)}}
            />
          }
          label={form.title}
        />
     </div>
    );
  }
}

export default ComposedComponent(FormSwitch);
