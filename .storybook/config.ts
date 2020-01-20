import { configure, addDecorator } from '@storybook/react' // addParameters,
// import { themes } from '@storybook/theming'
import ThemeDecorator from './ThemeDecorator'
import withFormik from 'storybook-formik'

// addParameters({ options: { theme: themes.dark } })
addDecorator(ThemeDecorator)
addDecorator(withFormik)

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module)