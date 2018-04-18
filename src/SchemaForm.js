// @flow

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

type Props = {
  onModelChange: (key: string, value: mixed) => void,
  className: string,
  model: any,
  schema: any,
  mapper: any,
  form: any,
  ignore: any,
  option: any,
};

class SchemaForm extends React.Component<Props> {
  mapper = {
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
    fieldset: FieldSet,
  };

  onChange = (key: string, val: mixed) => {
    this.props.onModelChange(key, val);
  };

  builder = (
    form: any,
    model: any,
    index: number,
    onChange: Function,
    mapper: any
  ) => {
    const type = form.type;
    const Field = this.mapper[type];

    if (!Field) {
      console.log(`Invalid field: "${form.key[0]}"!`);
      return null;
    }

    if (form.condition && eval(form.condition) === false) {
      return null;
    }

    return (
      <div key={index} style={{ marginTop: 10 }}>
        <Field
          model={model}
          form={form}
          onChange={onChange}
          mapper={mapper}
          builder={this.builder}
        />
      </div>
    );
  };

  render() {
    const merged = utils.merge(
      this.props.schema,
      this.props.form,
      this.props.ignore,
      this.props.option
    );
    // console.log('SchemaForm merged = ', JSON.stringify(merged, undefined, 2));

    let mapper = this.mapper;
    if (this.props.mapper) {
      mapper = _.merge(this.mapper, this.props.mapper);
    }

    const forms = merged.map((form, index) =>
      this.builder(form, this.props.model, index, this.onChange, mapper)
    );

    return (
      <div
        style={{ width: '100%' }}
        className={`SchemaForm ${this.props.className}`}
      >
        {forms}
      </div>
    );
  }
}

export default SchemaForm;
