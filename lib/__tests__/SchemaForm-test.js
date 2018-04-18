jest.dontMock('../SchemaForm');
jest.dontMock('../utils');
jest.dontMock('lodash');

const React = require('react');
const TestUtils = require('react-dom/test-utils');
const ReactShallowRenderer = require('react-test-renderer/shallow');
const SchemaForm = require('../SchemaForm');

describe('SchemaForm', function () {
  it('shows SchemaForm', function () {
    const shallowRenderer = ReactShallowRenderer.createRenderer();
    const cfg = {
      form: {},
      schema: {
        'type': 'object'
      },
      model: {},
      mapper: {}
    };
    const result = shallowRenderer.render(React.createElement(SchemaForm, {
      schema: cfg.schema,
      mapper: cfg.mapper
    }));

    console.log('result = ', result.props);
    expect(result.props.children).toEqual('SchemaForm');
  });
});