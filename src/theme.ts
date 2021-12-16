import {
  extendTheme,
  theme as baseTheme,
  ThemeOverride,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme(<ThemeOverride>{
  config: {
    cssVarPrefix: 'cui',
  },
  colors: {
    primary: {
      50: '#7CC0F8',
      100: '#69B7F7',
      200: '#42A5F4',
      300: '#1B92F2',
      400: '#0C7DD9',
      500: '#0A67B2',
      600: '#07487D',
      700: '#042A48',
      800: '#010B13',
      900: '#000000',
    },
    secondary: {
      50: '#FDE4D0',
      100: '#FCDABC',
      200: '#FAC495',
      300: '#F9AE6E',
      400: '#F79847',
      500: '#F58220',
      600: '#D36609',
      700: '#9E4C07',
      800: '#683205',
      900: '#321802',
    },
    tertiary: {
      50: '#FDEFC8',
      100: '#FCE9B5',
      200: '#FBDD8D',
      300: '#FAD166',
      400: '#F8C53E',
      500: '#F7B917',
      600: '#CF9807',
      700: '#997005',
      800: '#624803',
      900: '#2C2002',
    },
  },
  fonts: {
    heading: `'Inter', ${baseTheme.fonts.heading}`,
    body: `'Inter', ${baseTheme.fonts.body}`,
  },
  shadows: {
    outline: '0 0 0 2px rgba(66, 153, 225, 0.6)',
  },
  styles: {
    global: props => ({
      'html, body': {
        // fontSize: '16px',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        color: mode('#36445a', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
    }),
  },
  components: {
    Button: {
      sizes: {
        md: {
          fontSize: 'sm',
          minW: 20,
        },
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            fontSize: 'sm',
          },
        },
      },
      variants: {
        outline: {
          field: {
            _focus: {
              boxShadow: '0 0 0 3px rgb(10 103 178 / 30%)',
            },
            _invalid: {
              boxShadow: '0 0 0 3px rgb(252 129 129 / 30%)',
            },
          },
        },
      },
      defaultProps: {
        focusBorderColor: 'primary.500',
        errorBorderColor: 'red.300',
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 'sm',
      },
    },
    FormError: {
      baseStyle: {
        text: {
          fontSize: 'xs',
          lineHeight: 'normal',
        },
      },
    },
    Menu: {
      baseStyle: {
        item: {
          fontSize: 'sm',
        },
      },
    },
    Link: {
      variants: {
        // you can name it whatever you want
        primary: ({ colorScheme = 'blue' }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.400`,
          },
        }),
      },
    },
  },
});
