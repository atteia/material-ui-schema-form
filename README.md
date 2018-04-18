# Material UI Schema Form

View [live demo](https://jeanlescure.github.io/material-ui-schema-form/)!

# material-ui-schema-form

This library is an ongoing re-write of Network New Technologies' [react-schema-form](https://github.com/networknt/react-schema-form).

**Why forked?**
Fix array fields on form view

**Why re-write?**

The original `react-schema-form` evolved a bit chaotically ending up becoming a subset of `material-ui` rather than agnostic react component. This repo is trying to accept said relationship and shifting focus to making sure it is understood that this library is meant for projects using `material-ui`.

Also the original library has fallen behind in dependency management and its maintainers don't seem to have an upgrade anywhere on their roadmap. This re-write is meant to bring the `SchemaForm` component up to date with React 16 and Material UI v1 and move on forward from there.

# Installation

```sh
npm install material-ui-schema-form --save
```

There is one added on component react-schema-form-rc-select for multiple select and dynamically loading dropdown from server. To install it.

```
npm install react-schema-form-rc-select --save
```

# Usage

```js
var { SchemaForm } = require('material-ui-schema-form');

<SchemaForm schema={this.state.schema} form={this.state.form} model={this.props.model} onModelChange={this.props.onModelChange} />

// for example:
_onChange: function() {
    this.setState({
        schema: FormStore.getForm('com.networknt.light.example').schema,
        form: FormStore.getForm('com.networknt.light.example').form
    });
}
```

# Form format

React-schema-form implements the form format as defined by the json-schema-form standard.

The documentation for that format is located at the [json-schema-form wiki](https://github.com/json-schema-form/json-schema-form/wiki/Documentation).

# Customization

material-ui-schema-form provides most fields including FieldSet and Array and they might cover most use cases; however, you might have requirement that needs something that is not built in. In this case, you
can implement your own field and inject it into the generic mapper for the builder to leverage your component. By passing a mapper as a props to the SchemaForm, you can replace built in component with
yours or you can define a brand new type and provide your component to render it.

[react-schema-form-rc-select](https://github.com/networknt/react-schema-form-rc-select) is an example to provide multiple select to the react schema form.

```js
require('rc-select/assets/index.css');
import RcSelect from 'react-schema-form-rc-select/lib/RcSelect';
...

        var mapper = {
            "rc-select": RcSelect
        };

        var schemaForm = '';
        if (this.state.form.length > 0) {
            schemaForm = (
                <SchemaForm schema={this.state.schema} form={this.state.form} model={this.state.model} onModelChange={this.onModelChange} mapper={mapper} />
            );
        }


```

# License

MIT Licensed.
