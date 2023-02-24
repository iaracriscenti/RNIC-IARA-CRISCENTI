import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

export const myTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#afafaf',
    primary: '#230443',
    secondary: '#503459',
    light: '#b695c0',
  },
};
