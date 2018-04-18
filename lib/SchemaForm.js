import * as React from 'react';
import _ from 'lodash';
import utils from './utils';
import Number from './Number';
import Text from './Text';
import TextArea from './TextArea';
import Select from './Select';
import Radios from './Radios';
import Date from './Date';
import Switch from './Switch';
import Help from './Help';
import FormArray from './Array';
import FieldSet from './FieldSet';

class SchemaForm extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mapper = {
      number: Number,
      text: Text,
      password: Text,
      textarea: TextArea,
      select: Select,
      radios: Radios,
      date: Date,
      toggleswitch: Switch,
      help: Help,
      array: FormArray,
      fieldset: FieldSet
    }, this.onChange = (key, val) => {
      this.props.onModelChange(key, val);
    }, this.builder = (form, model, index, onChange, mapper) => {
      const type = form.type;
      const Field = this.mapper[type];

      if (!Field) {
        console.log(`Invalid field: "${form.key[0]}"!`);
        return null;
      }

      if (form.condition && eval(form.condition) === false) {
        return null;
      }

      return React.createElement(
        'div',
        { key: index, style: { marginTop: 10 } },
        React.createElement(Field, {
          model: model,
          form: form,
          onChange: onChange,
          mapper: mapper,
          builder: this.builder
        })
      );
    }, _temp;
  }

  render() {
    const merged = utils.merge(this.props.schema, this.props.form, this.props.ignore, this.props.option);
    // console.log('SchemaForm merged = ', JSON.stringify(merged, undefined, 2));

    let mapper = this.mapper;
    if (this.props.mapper) {
      mapper = _.merge(this.mapper, this.props.mapper);
    }

    const forms = merged.map((form, index) => this.builder(form, this.props.model, index, this.onChange, mapper));

    return React.createElement(
      'div',
      {
        style: { width: '100%' },
        className: `SchemaForm ${this.props.className}`
      },
      forms
    );
  }
}

export default SchemaForm;