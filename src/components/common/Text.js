import styled from 'styled-components';
import { color, display, space, typography, letterSpacing } from 'styled-system';

import { textTransform, whiteSpace, wordBreak, cursor } from '../../lib/styled-system-custom-properties';

export const P = styled.p.attrs((props) => ({
  mb: props.mb || props.my || props.m || 0,
  mt: props.mt || props.my || props.m || 0,
}))`
  ${color}
  ${display}
  ${space}
  ${typography}
  ${textTransform}
  ${whiteSpace}
  ${wordBreak}
  ${cursor},
  ${letterSpacing}
`;

P.defaultProps = {
  fontSize: 'Paragraph',
  letterSpacing: '-0.4px',
  lineHeight: '1.1em',
};

export const Span = P.withComponent('span');

Span.defaultProps = {
  ...P.defaultProps,
  fontSize: 'inherit',
  lineHeight: 'inherit',
};

export const Label = P.withComponent('label');

export const Strong = P.withComponent('strong');

export const H1 = P.withComponent('h1');

H1.defaultProps = {
  ...P.defaultProps,
  fontSize: 'H1',
  fontWeight: 'bold',
  letterSpacing: '-1.2px',
  lineHeight: 'H1',
  textAlign: 'left',
};

export const H2 = P.withComponent('h2');

H2.defaultProps = {
  ...P.defaultProps,
  fontSize: 'H2',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: 'H2',
};

export const H3 = P.withComponent('h3');

H3.defaultProps = {
  ...P.defaultProps,
  fontSize: 'H3',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: 'H3',
};

export const H4 = P.withComponent('h4');

H4.defaultProps = {
  ...P.defaultProps,
  fontSize: 'H4',
  fontWeight: 'bold',
  letterSpacing: '-0.4px',
  lineHeight: 'H4',
};

export const H5 = P.withComponent('h5');

H5.defaultProps = {
  ...P.defaultProps,
  fontSize: 'H5',
  letterSpacing: '-0.4px',
  lineHeight: 'H5',
  fontWeight: 500,
  color: 'black.900',
};
