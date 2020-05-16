import React, { useState, useContext } from 'react';
import { Switch, Image } from 'react-native';
import { ThemeContext } from 'styled-components';

import { useTheme } from '../../hooks/theme';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors } = useContext(ThemeContext);
  const { theme } = useTheme();

  const [isEnabled, setIsEnabled] = useState(theme.title !== 'light');
  const toggleSwitch = (): void => {
    toggleTheme();
    setIsEnabled(previousState => !previousState);
  };

  // '#f4f3f4'
  // '#767577'
  // isEnabled ? '#767577' : '#767577'

  return (
    <Container>
      <Image source={Logo} />
      <Switch
        trackColor={{ false: `${colors.primary}`, true: `${colors.primary}` }}
        thumbColor={isEnabled ? '#f4f3f4' : '#767577'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

export default Header;
