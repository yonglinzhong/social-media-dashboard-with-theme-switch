import React from 'react';
import StyledCard from './common/StyledCard';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { H3, P, Span } from './common/Text';
import themeGet from '@styled-system/theme-get';
import { Image } from 'rebass';

const MainContainer = styled(StyledCard)`
  width: 300px;
  height: 120px;
  background-color: ${themeGet('colors.cardBackground')};

  :hover {
    background-color: ${themeGet('colors.hoverBackground')};
    cursor: pointer;
  }
`;

const CardLabel = styled(P)`
  color: ${themeGet('colors.secondaryText')};
`;

const CardHeading = styled(H3)`
  color: ${themeGet('colors.primaryText')};
`;

function AnalyticsCard({ value }) {
  return (
    <MainContainer>
      <Flex justifyContent='space-between' alignItems='center' p='3'>
        <CardLabel>{value.label}</CardLabel>
        <Image alt={value.name} src={`./static/icons/icon-${value.name}.svg`} />
      </Flex>
      <Flex justifyContent='space-between' alignItems='center' p='3'>
        <CardHeading>{value.count}</CardHeading>
        {value.change[0] === 'up' ? (
          <Span color='primary.700' fontWeight='bold'>
            <Image alt={value.name} src={`./static/icons/icon-${value.change[0]}.svg`} mr='2' />
            {value.change[1]} today
          </Span>
        ) : (
          <Span color='red.700' fontWeight='bold'>
            <Image alt={value.name} src={`./static/icons/icon-${value.change[0]}.svg`} mr='2' />
            {value.change[1]} today
          </Span>
        )}
      </Flex>
    </MainContainer>
  );
}

export default AnalyticsCard;
