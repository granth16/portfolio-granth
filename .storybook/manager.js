import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://Granthw.com/icon.svg',
    brandTitle: 'Granth Jain Components',
    brandUrl: 'https://Granthw.com',
  },
});
