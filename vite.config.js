import { defineConfig } from 'vite';

const webprovisionsPackageVitePlugin = () => {
  const outputEntryFile = 'index.js';
  const outputDir = 'dist';

  return {
    name: 'webprovisions-package',
    async config(config) {
      return {
        ...config,
        base: './',
        build: {
          ...config?.build,
          assetsDir: '.',
          rollupOptions: {
            ...config?.build?.rollupOptions,
            output: {
              ...config?.build?.rollupOptions?.output,
              dir: outputDir,
              entryFileNames: outputEntryFile,
              format: 'es',
              chunkFileNames: `[name]-[hash].js`,
            },
          },
        },
      };
    },
  };
};

export default defineConfig({
  plugins: [webprovisionsPackageVitePlugin()],
  build: {
    rollupOptions: {
      input: 'src/index.ts',
    },
  },
});
