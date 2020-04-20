import React from 'react'
import renderer from 'react-test-renderer'
import { AudioPlayer } from '../'

it('renders an AudioPlayer correctly', () => {
  const tree = renderer.create(<AudioPlayer />).toJSON()
  expect(tree).toMatchSnapshot()
})
