import mdx from '@next/mdx';
import path from 'path';
const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        console.log(`alias["@"]: ${process.cwd()}${path.sep}src`)
        config.resolve.alias["@"] = `${process.cwd()}${path.sep}src`
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
    },
    compiler: {
        styledComponents: {
            ssr: true
        },
    },
    images: { unoptimized: true }
};

export default withMDX(nextConfig);
