import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import Test from './test'

const story = storiesOf('Components|Test', module).addDecorator(checkA11y)

story.add('Test Component', () => <Test />)
