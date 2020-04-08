import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../src/lib/theme';

export default class ThemeWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
