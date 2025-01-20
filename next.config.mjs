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
    images: {
        loader: "custom",
        imageSizes: [96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        nextImageExportOptimizer_imageFolderPath: "public/images",
        nextImageExportOptimizer_exportFolderPath: "out",
        nextImageExportOptimizer_quality: "75",
        nextImageExportOptimizer_storePicturesInWEBP: "true",
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
        nextImageExportOptimizer_generateAndUseBlurImages: "true",
        nextImageExportOptimizer_remoteImageCacheTTL: "0",
    },
};

export default withMDX(nextConfig);
