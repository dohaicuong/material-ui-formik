import React from 'react'
import { storiesOf } from '@storybook/react'

import TextField from '.'

import Paper from '@material-ui/core/Paper'
import { Grid } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

const showcases = [
  { label: 'Required', name: 'required', required: true },
  { label: 'Disabled', name: 'disabled', disabled: true },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Read only', name: 'readonly', readOnly: true },
  { label: 'Number', name: 'number', type: 'number' },
  { label: 'Search', name: 'search', type: 'search' },
  { label: 'Helper text', name: 'helpertext', helperText: 'Some descriptions' },
  { label: 'Error', name: 'error', helperText: 'touch to validate' },
  { label: 'Textarea', name: 'multiline', multiline: true },
  { label: 'Dense', name: 'dense', margin: 'dense' },
  { label: 'Icon', name: 'icon', icon: <AccountCircle /> },
  { label: 'Select', name: 'select', select: true, options: [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
    { label: 'Option 3', value: 'option_3' },
    { label: 'Option 4', value: 'option_4' },
  ]},
]
const formikProps = {
  formik: {
    initialValues: {
      required: 'Hello world!',
      disabled: 'Hello world!',
      password: 'Hello world!',
      readonly: 'Hello world!',
      number: '10',
      search: 'Hello worlds!',
      helpertext: 'Hello world!',
      error: 'Hello world!',
      multiline: 'text area input',
      dense: 'dense text field',
      icon: ''
    },
    validate: () => {
      return { error: 'worlds' }
    },
  }
}

storiesOf('TextField', module)
  .add('default', () => (
    <Paper style={{ height: '100%', overflow: 'auto', padding: 24 }}>
      <Grid container spacing={2} style={{ marginBottom: 16 }}>
        {showcases.map((props: any) => (
          <Grid item xs={2}>
            <TextField key={props.name} {...props} fullWidth />
          </Grid>
        ))}
      </Grid>
    </Paper>
  ), formikProps)
  .add('filled', () => (
    <Paper style={{ height: '100%', overflow: 'auto', padding: 24 }}>
      <Grid container spacing={2} style={{ marginBottom: 16 }}>
        {showcases.map((props: any) => (
          <Grid item xs={2}>
            <TextField variant='filled' key={props.name} {...props} fullWidth />
          </Grid>
        ))}
      </Grid>
    </Paper>
  ), formikProps)
  .add('outlined', () => (
    <Paper style={{ height: '100%', overflow: 'auto', padding: 24 }}>
      <Grid container spacing={2} style={{ marginBottom: 16 }}>
        {showcases.map((props: any) => (
          <Grid item xs={2}>
            <TextField variant='outlined' key={props.name} {...props} fullWidth />
          </Grid>
        ))}
      </Grid>
    </Paper>
  ), formikProps)