import { create } from '@storybook/theming/create'
import packageJson from '../package.json'

export default create({
  base: 'light',
  brandTitle: 'Secret Dino: Claws',
  brandUrl: packageJson.repository.url
})
