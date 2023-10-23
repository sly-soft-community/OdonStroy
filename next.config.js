const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
    output: "export",
    trailingSlash: true,
});

module.exports = nextConfig;
