import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/GraphGPU/',
    resolve: {
        alias: {
            'graphgpu': resolve(__dirname, '../src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});
