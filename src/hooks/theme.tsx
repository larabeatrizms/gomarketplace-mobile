import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const STORAGE_KEY = '@GoMarketplace:theme';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  console.log(theme.title);

  const toggleTheme = useCallback(async () => {
    setTheme(theme.title === 'light' ? dark : light);

    await AsyncStorage.setItem(STORAGE_KEY, theme.title);
  }, [theme.title]);

  const value = React.useMemo(() => ({ toggleTheme, theme }), [
    toggleTheme,
    theme,
  ]);

  // useEffect(() => {
  //   async function loadAndSave(): Promise<void> {
  //     const storageValue = await AsyncStorage.getItem(STORAGE_KEY);

  //     console.log(storageValue);
  //   }

  //   loadAndSave();
  // }, [theme.title]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used whitin a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
