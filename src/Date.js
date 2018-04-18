import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import DateTime from 'react-datetime';

const utils = require('./utils');
const classNames = require('classnames');

const DatePicker = props => ({
  render: function(){
  	const {
  		label,
  		dateFormat,
  		onChange,
	    disabled,
	    style,
  	} = props;

	  return (<DateTime
		  label={label}
	    renderInput={this.renderInput}
	    dateFormat={dateFormat || 'YYYY-MM-DD'}
	    timeFormat={false}
	    onChange={onChange}
	    inputProps={{
				disabled,
				style,
	    }}
	  />);
  },
  renderInput: (inputProps, openCalendar) => {
	  function clear(){
	    inputProps.onChange({target: {value: ''}});
	  }

	  const {
	    id,
	    label,
	  } = props;

	  return (
	    <FormControl>
		    <InputLabel htmlFor={id}>{label}</InputLabel>
		    <Input
		    	{...inputProps}
		    	id={id}
		    	onClick={openCalendar}
		    />
	    </FormControl>
	  );
  },
});

class FormDate extends Component {
  render() {
  	const {
  		form,
  		value,
  		onChangeValidate,
  	} = this.props;

    return (
      <div style={{width: '100%', display: 'block'}} className={form.htmlClass}>
        <DatePicker
        	id={form.key.slice(-1)[0]}
          label={form.title}
          onChange={onChangeValidate}
          value={value}
          disabled={form.readonly}
          style={form.style || {width: '100%'}}
        />
      </div>
    );
  }
}

export default ComposedComponent(FormDate);
