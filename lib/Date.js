var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import DateTime from 'react-datetime';

const utils = require('./utils');
const classNames = require('classnames');

const DatePicker = props => ({
		render: function () {
				const {
						label,
						dateFormat,
						onChange,
						disabled,
						style
				} = props;

				return React.createElement(DateTime, {
						label: label,
						renderInput: this.renderInput,
						dateFormat: dateFormat || 'YYYY-MM-DD',
						timeFormat: false,
						onChange: onChange,
						inputProps: {
								disabled,
								style
						}
				});
		},
		renderInput: (inputProps, openCalendar) => {
				function clear() {
						inputProps.onChange({ target: { value: '' } });
				}

				const {
						id,
						label
				} = props;

				return React.createElement(
						FormControl,
						null,
						React.createElement(
								InputLabel,
								{ htmlFor: id },
								label
						),
						React.createElement(Input, _extends({}, inputProps, {
								id: id,
								onClick: openCalendar
						}))
				);
		}
});

class FormDate extends Component {
		render() {
				const {
						form,
						value,
						onChangeValidate
				} = this.props;

				return React.createElement(
						'div',
						{ style: { width: '100%', display: 'block' }, className: form.htmlClass },
						React.createElement(DatePicker, {
								id: form.key.slice(-1)[0],
								label: form.title,
								onChange: onChangeValidate,
								value: value,
								disabled: form.readonly,
								style: form.style || { width: '100%' }
						})
				);
		}
}

export default ComposedComponent(FormDate);