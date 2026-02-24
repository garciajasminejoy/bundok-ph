//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const AppPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
  semantic: {
    primary: {
      200: '#CDD7CE',
      500: '#2c5f34',
      600: '#244c2b',
      700: '#1b3a21',
    },
  },
});

export { AppPreset };
