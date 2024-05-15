import mdx from '@next/mdx';
const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack(config) {
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
};

export default withMDX(nextConfig);
