import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryBright: string;
      background: string;
      backgroundCard: string;
      text: string;
      backupText: string;

      addCardIcon: string;
    };
  }
}
