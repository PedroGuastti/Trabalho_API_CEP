import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider} from '@material-ui/core'
/* cores */
import { orange, deepOrange, blue, lightBlue} from '@material-ui/core/colors'
import CssBaseLine from '@material-ui/core/CssBaseline'

import Rotas from './rotas'

export default function App(){
  const temaDark = true
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? orange[500] : blue[500]
  const corSecundaria = temaDark ? deepOrange[900] : lightBlue[500]

  let theme = createMuiTheme({
    palette:{type: tipoPaleta,
    primary:{main: corPrimaria},
    secondary:{main: corSecundaria}
    }
  })

  theme = responsiveFontSizes(theme)
  
  return(
    <MuiThemeProvider theme={theme}>
      <CssBaseLine />
      <Rotas />
    </MuiThemeProvider>
  )
}