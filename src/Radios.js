import React, { Component } from 'react';
import utils from './utils';
import classNames from 'classnames';
import ComposedComponent from './ComposedComponent';

import Radio from 'material-ui/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

class FormRadios extends Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    console.log('event, value', event, value);
    this.setState({ value }, () => {
    	this.props.onChangeValidate({target:{value}});
    });
  };

  componentWillMount() {
  	this.setState({
  		value: this.props.value,
  	});
  }

  componentWillReceiveProps(nextProps) {
  	this.setState({
  		value: nextProps.value,
  	});
  }

  render() {
  	const {
  		value,
  	} = this.state;

  	const {
  		form,
  	} = this.props;

    let items = form.titleMap.map((item, index) => {
      return (
        <FormControlLabel
					key={index}
        	label={item.name}
        	value={item.value}
        	disabled={form.readonly}
        	control={<Radio />}
        />
      );
    });

    return (
      <span className={form.htmlClass}>
        <FormControl component="fieldset">
          <FormLabel component="legend">{form.title}</FormLabel>
          <RadioGroup
        		name={form.title}
            value={value}
            onChange={this.handleChange}
          >
            {items}
          </RadioGroup>
        </FormControl>
      </span>
    );
  }
}

export default ComposedComponent(FormRadios);
