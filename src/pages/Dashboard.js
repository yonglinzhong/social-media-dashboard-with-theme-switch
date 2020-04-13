import React, { Component } from 'react';
import SocialMediaCard from '../components/SocialMediaCard';
import AnalyticsCard from '../components/AnalyticsCard';
import { H3, P, Span } from '../components/common/Text';

import { Flex, Box } from 'rebass';
import { Switch } from '@rebass/forms';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import theme from '../lib/theme';

const MainContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;

  ::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 200px;
    background-color: ${themeGet('colors.topBackground')};
  }
`;

const StyledHeading = styled(H3)`
  color: ${themeGet('colors.primaryText')};
`;

const StyledSubcap = styled(P)`
  color: ${themeGet('colors.secondaryText')};
  font-weight: bold;
`;

const ModeLabel = styled(Span)`
  color: ${themeGet('colors.secondaryText')};
  font-weight: bold;
`;

const ModeSwitch = styled(Switch)`
  background: ${themeGet('colors.switchBackground')} !important;
  border-color: ${themeGet('colors.switchBackground')} !important;

  :focus {
    box-shadow: none !important;
  }
`;

const OverviewHeading = styled(H3)`
  color: ${themeGet('colors.primaryText')};
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false,
      socialMedia: [],
      analytics: [],
      flexStyle: '',
    };

    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  componentDidMount() {
    const dynamicStyle = () => {
      if (window.matchMedia(`(max-width: ${theme.breakpoints[0]})`).matches) {
        this.setState({
          flexStyle: 'center',
        });
      } else {
        this.setState({
          flexStyle: 'space-between',
        });
      }
    };

    dynamicStyle();

    window.addEventListener('resize', dynamicStyle.bind(this));

    fetch('./data/SocialMedia.json')
      .then((response) => response.json())
      .then((data) => this.setState({ socialMedia: data.data }));
    fetch('./data/Analytics.json')
      .then((response) => response.json())
      .then((data) => this.setState({ analytics: data.data }));
  }

  handleSwitchChange(e) {
    const val = !this.state.mode;
    this.setState({
      mode: val,
    });
    this.props.onModeChange(+val);
  }

  render() {
    const socialMediaColor = {
      facebook: 'hsl(195, 100%, 50%)',
      twitter: 'hsl(203, 89%, 53%)',
      youtube: 'hsl(348, 97%, 39%)',
      instagram: 'linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%)',
    };

    return (
      <MainContainer>
        <Flex mb={4} justifyContent='space-between'>
          <Box>
            <StyledHeading>Social Media Dashboard</StyledHeading>
            <StyledSubcap>Total Followers: 2,304</StyledSubcap>
          </Box>
          <Box as='form'>
            <Flex alignItems='center'>
              {this.state.mode ? <ModeLabel mr={2}>Dark Mode</ModeLabel> : <ModeLabel mr={2}>Light Mode</ModeLabel>}
              <ModeSwitch id='mode' name='name' checked={this.state.mode} onClick={this.handleSwitchChange} />
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={this.state.flexStyle} flexWrap='wrap'>
          {this.state.socialMedia.map((item, key) => (
            <Box key={key}>
              <SocialMediaCard value={item} mediaColor={socialMediaColor}></SocialMediaCard>
            </Box>
          ))}
        </Flex>

        <Box mt={4}>
          <OverviewHeading mb={4}>Overview - Today</OverviewHeading>
          <Flex justifyContent={this.state.flexStyle} flexWrap='wrap'>
            {this.state.analytics.map((item, key) => (
              <Box key={key} mb={4}>
                <AnalyticsCard value={item}></AnalyticsCard>
              </Box>
            ))}
          </Flex>
        </Box>
      </MainContainer>
    );
  }
}

export default Dashboard;
