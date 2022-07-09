import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const primaryColor = '#5200FF'
const secondaryColor = '#0057FF'

// Create a theme instance.
const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      light: '#F3EEFF',
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    grey: {
      200: '#efefef',
      400: '#cccccc',
      900: '#110727',
    }
  },
  typography: {
    fontFamily: 'Outfit',
    h1: {
      fontSize: '3rem',
      fontWeight: 500
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7F7F7',
          borderRadius: 4,
          '& > fieldset': {
            borderColor: 'transparent'
          },
          ':hover:not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        focusHighlight: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          height: 53,
          fontSize: '1rem',
          fontWeight: 700,
          textTransform: 'unset'
        }
      }
    },
    MuiList: {
      defaultProps: {
        disablePadding: true
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          cursor: 'pointer'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
          paddingRight: '18px'
        }
      }
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: 'hidden'
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        rectangular: {
          borderRadius: 4
        }
      }
    },
    MuiDialog: {
      defaultProps: {
        scroll: 'body'
      },
      styleOverrides: {
        paper: {
          borderRadius: 18
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '0 32px'
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 32px'
        }
      } 
    },
    MuiAccordion: {
      defaultProps: {
        square: true,
        disableGutters: true
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F5FF'
        }
      }
    },
  },
}));

export default theme;