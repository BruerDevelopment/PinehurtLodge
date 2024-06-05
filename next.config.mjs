import mdx from '@next/mdx';
const withMDX = mdx()
/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    }
};

export default withMDX(nextConfig);
