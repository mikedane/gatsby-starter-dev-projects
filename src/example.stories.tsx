import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'

const story = storiesOf('Components|Example', module).addDecorator(checkA11y)

story.add('Example Component', () => (
  <div className="text-blue-500">Example</div>
))
