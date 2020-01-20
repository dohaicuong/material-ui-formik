import React from 'react'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ThemeProvider from '../src/providers/ThemeProvider'

export default storyFn => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider>
      {storyFn()}
    </ThemeProvider>
  </MuiPickersUtilsProvider>
)