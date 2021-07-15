interface Theme {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

interface ThemeConfig {
  Light: Theme;
  Dark: Theme;
  AMOLED: Theme;
}

const themeConfig: ThemeConfig = {
  Light: {
    '50': '#FFFFFF',
    '100': '#FAFAFA',
    '200': '#F1F0F0',
    '300': '#D8D2CD',
    '400': '#CDC4BA',
    '500': '#ABA59D',
    '600': '#8A8680',
    '700': '#686663',
    '800': '#484745',
    '900': '#282727',
  },
  Dark: {
    '50': '#212121',
    '100': '#2c2c2c',
    '200': '#424242',
    '300': '#616161',
    '400': '#757575',
    '500': '#9e9e9e',
    '600': '#bdbdbd',
    '700': '#e0e0e0',
    '800': '#eeeeee',
    '900': '#f5f5f5',
  },
  AMOLED: {
    '50': '#010101',
    '100': '#121212',
    '200': '#222222',
    '300': '#333333',
    '400': '#444',
    '500': '#696969',
    '600': '#8F8F8F',
    '700': '#B4B4B4',
    '800': '#DADADA',
    '900': '#FFFFFF',
  },
};

export default themeConfig;