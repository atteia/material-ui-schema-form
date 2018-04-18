import React from 'react';
import ComposedComponent from './ComposedComponent';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

const uid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16));

class FormSelect extends React.Component {
  componentWillMount() {
    const possibleValue = this.getModelKey(this.props.model, this.props.form.key);
    const currentValue = this.props.model !== undefined && typeof possibleValue === 'string' ? possibleValue : this.props.form.titleMap != null ? this.props.form.titleMap[0].value : '';
    this.setState({
      currentValue
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.model && nextProps.form.key) {
      const possibleValue = this.getModelKey(nextProps.model, nextProps.form.key);
      const currentValue = nextProps.model !== undefined && typeof possibleValue === 'string' ? possibleValue : nextProps.form.titleMap != null ? nextProps.form.titleMap[0].value : '';
      this.setState({
        currentValue
      });
    }
  }

  getModelKey(model, key) {
    if (Array.isArray(key)) {
      return key.reduce((cur, nxt) => (cur[nxt] || {}), model);
    } else {
      return model[key];
    }
  }

  onSelected = event => {
    this.setState({
      currentValue: event.target.value
    });
    this.props.onChangeValidate(event);
  };

  render() {
    const menuItems = this.props.form.titleMap.map((item, idx) => (
      <MenuItem
      	key={idx}
        value={item.value}
      >
        <Typography>
      	  {item.name}
        </Typography>
      </MenuItem>
    ));

    const theUid = uid();

    return (
      <div className={this.props.form.htmlClass}>
        <FormControl>
        <InputLabel htmlFor={`dropdown-${theUid}`}>{this.props.form.title}</InputLabel>
        <Select
          input={<Input id={`dropdown-${theUid}`} />}
          value={this.state.currentValue}
          onChange={this.onSelected}
          style={{width: '150px'}}
          disabled={this.props.form.readonly}
          fullWidth
        >
          {menuItems}
        </Select>
        </FormControl>
      </div>
    );
  }
}

export default ComposedComponent(FormSelect);
