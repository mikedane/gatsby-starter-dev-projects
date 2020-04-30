import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'

const story = storiesOf('Components|Header', module).addDecorator(checkA11y)

story.add('Header Component', () => (
  <div className="text-blue-500">Example</div>
))
