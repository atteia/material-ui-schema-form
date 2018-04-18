import React, { Component } from 'react';
import utils from './utils';
import classNames from 'classnames';
import ComposedComponent from './ComposedComponent';

import Radio from 'material-ui/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

class FormRadios extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      value: ''
    }, this.handleChange = (event, value) => {
      console.log('event, value', event, value);
      this.setState({ value }, () => {
        this.props.onChangeValidate({ target: { value } });
      });
    }, _temp;
  }

  componentWillMount() {
    this.setState({
      value: this.props.value
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  render() {
    const {
      value
    } = this.state;

    const {
      form
    } = this.props;

    let items = form.titleMap.map((item, index) => {
      return React.createElement(FormControlLabel, {
        key: index,
        label: item.name,
        value: item.value,
        disabled: form.readonly,
        control: React.createElement(Radio, null)
      });
    });

    return React.createElement(
      'span',
      { className: form.htmlClass },
      React.createElement(
        FormControl,
        { component: 'fieldset' },
        React.createElement(
          FormLabel,
          { component: 'legend' },
          form.title
        ),
        React.createElement(
          RadioGroup,
          {
            name: form.title,
            value: value,
            onChange: this.handleChange
          },
          items
        )
      )
    );
  }
}

export default ComposedComponent(FormRadios);