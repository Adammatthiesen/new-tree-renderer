// @ts-check
import { defineConfig } from 'astro/config';
import UI from '@studiocms/ui';

// https://astro.build/config
export default defineConfig({
    integrations: [
        UI()
    ],
});
