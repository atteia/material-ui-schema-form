import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {MenuItem} from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import ThemeIcon from 'material-ui-icons/Opacity';

import * as ThemeActions from '../../redux/theme/actions';
import * as Themes from '../../themes';

import styles from './styles';

class Nav extends Component {
  shadeToggle = () => {
    const name = this.props.themeState.name;
    const shade = (this.props.themeState.shade === 'dark')? 'light' : 'dark';

    const theme = Themes[name];
    theme.palette = Object.assign({}, Themes[name].palette, {type: shade});

    this.props.themeSet(name, shade, theme);
  };

  NavTitle = (props) => {
    const {
      themeState: {
        theme: {
          palette: {
            common
          },
        },
      },
    } = this.props;

    const colors = {
      navTitle: `${common.darkGrey} !important`,
    };

    const Styled = withStyles(styles(colors))(({classes, ...p}) => <h1 className={classes.navTitle} {...p}/>);

    return (<Styled {...props}/>)
  };

  render() {
    const {
      NavTitle,
      props: {
        history,
      },
    } = this;

    return (
      <AppBar position="static">
        <Toolbar>
          <div style={{flex: 1}}>
            <NavTitle>Material UI Schema Form</NavTitle>
          </div>
          <div>
            <MenuItem>
              <IconButton
                onClick={this.shadeToggle}
              >
                <ThemeIcon />
              </IconButton>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeState: state.themeRedux,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...ThemeActions,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  Nav
);
