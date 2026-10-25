import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/analytics.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/analytics.js',
  format: 'iife',
  platform: 'browser',
});

console.log('✓ Analytics built successfully');
