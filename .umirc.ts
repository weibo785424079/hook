import { defineConfig } from 'umi';

export default defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/site-hook/' : '/',
    title: '@tms/site-hook',
    description: 'site的hook組件库',
    outputPath: "docs_dist",
});