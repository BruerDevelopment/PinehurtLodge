import mdx from '@next/mdx';
const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        console.log(process.cwd())
        config.resolve.alias["@"] = `${process.cwd()}\\src`
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
