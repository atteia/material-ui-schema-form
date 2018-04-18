import palette from './palette';
import {darken} from 'material-ui/styles/colorManipulator';

export default shade => ({
  '@global': {
    'html, body, #root': {
      backgroundColor: palette.shades[shade].background.default,
      fontSize: '16px',
      margin: 0,
      padding: 0,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      height: '100%',
    },
    'body *, html *': {
      boxSizing: 'border-box',
    },
    'h1, h2, h3, h4, h5, h6, p': {
      color: `${palette.shades[shade].text.primary} !important`,
    },
    a: {
      color: palette.common.teal,
      textDecoration: 'underline',
    },
    '.page-content': {
      padding: '10px',
      height: 'calc(100% - 48px)',
    },
    '.react-codemirror2, .CodeMirror': {
      height: '100%',
    },
  },
});