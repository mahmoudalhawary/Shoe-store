import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    base: '/Shoe-store/',

});
// import { defineConfig } from 'vite';

// export default defineConfig({
//     base: '/Shoe-store/',
// });