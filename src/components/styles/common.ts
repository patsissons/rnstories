import {
  Dimensions,
  LayoutAnimation,
  Platform,
  StyleSheet,
} from 'react-native';

const vars = {
  screen: Dimensions.get('window'),
  bgLight: '#fff',
  bgDim: '#bbb',
  bgDark: '#000',
  fgLight: '#fff',
  fgDim: '#888',
  fgDark: '#000',
  fgError: '#f00',
  fgWarning: '#ff0',
  fontLarge: 24,
  fontMedium: 18,
  fontSmall: 16,
  defaultRadius: 5,
  defaultSeparation: 10,
  layoutAnimations: {
    spring: Platform.select({
      android: {
        ...LayoutAnimation.Presets.spring,
        delete: undefined,
      },
      default: LayoutAnimation.Presets.spring,
    }),
  },
};

export const common = {
  vars,
  ...StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: vars.bgLight,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: vars.bgLight,
    },
    component: {},
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredContent: {
      textAlign: 'center',
    },
    errorContent: {
      color: vars.fgError,
    },
    warningContent: {
      color: vars.fgWarning,
    },
    mutedContent: {
      color: vars.fgDim,
    },
  }),
};
