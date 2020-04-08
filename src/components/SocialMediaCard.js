import React from 'react';
import styled from 'styled-components';

import StyledCard from './common/StyledCard';
import { P, H2, Span } from './common/Text';
import themeGet from '@styled-system/theme-get';
import { Flex, Image } from 'rebass';

const MainContainer = styled(StyledCard)`
  height: 200px;
  width: 300px;
  text-align: center;
  background-color: ${themeGet('colors.cardBackground')};

  :hover {
    background-color: ${themeGet('colors.hoverBackground')};
    cursor: pointer;
  }
`;

const Username = styled(P)`
  color: ${themeGet('colors.secondaryText')};
  font-weight: bold;
`;

const Followers = styled(H2)`
  color: ${themeGet('colors.primaryText')};
`;

const FollowersLabel = styled(P)`
  color: ${themeGet('colors.secondaryText')};
`;

function SocialMediaCard({ value, mediaColor }, ...props) {
  const ColorBanner = styled.div`
    width: 100%;
    height: 4px;
    background: ${mediaColor[value.name]};
  `;
  return (
    <MainContainer mb={4}>
      <ColorBanner></ColorBanner>
      <Flex alignItems='center' justifyContent='center'>
        <Image alt={value.name} src={`./static/icons/icon-${value.name}.svg`} />
        <Username m={3}>{value.username}</Username>
      </Flex>
      <Followers>{value.followers}</Followers>
      <FollowersLabel m={3} letterSpacing={2}>
        FOLLOWERS
      </FollowersLabel>
      {value.change[0] === 'up' ? (
        <Span color='primary.900' fontWeight='bold'>
          <Image alt={value.name} src={`./static/icons/icon-${value.change[0]}.svg`} mr='2' />
          {value.change[1]} today
        </Span>
      ) : (
        <Span color='red.900' fontWeight='bold'>
          <Image alt={value.name} src={`./static/icons/icon-${value.change[0]}.svg`} mr='2' />
          {value.change[1]} today
        </Span>
      )}
    </MainContainer>
  );
}

export default SocialMediaCard;
