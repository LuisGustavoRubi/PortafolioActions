import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    plugins: [
        htmlPurge()
    ]
});