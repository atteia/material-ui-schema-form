import React from 'react';
import classNames from 'classnames';

class Help extends React.Component {
  render() {
    //console.log('Help:', this.props);
    const { form } = this.props;
    let classes = classNames(form.htmlClass);
    return React.createElement('div', { className: classes, dangerouslySetInnerHTML: { __html: form.description } });
  }
}

export default Help;