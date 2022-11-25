import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  theme: {
    primary: '#000000',
  }
}

const styles = {
  global: () => ({
    body: {
      bg: '#FFFFFF'
    },
  }),
}

const layerStyles = {
  button: {
    primary: {
      color: '#ffffff',
      backgroundColor: 'theme.primary',
      '&:hover': { backgroundColor: '#989898' },
    },
  }
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1920px',
}

const theme = extendTheme({
  config,
  colors,
  // fonts,
  // textStyles,
  layerStyles,
  // shadows,
  breakpoints,
  styles,
})

export default theme
