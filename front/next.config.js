/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        STRAPI_API_URL: 'http://localhost:1337/',
        STRAPI_API_TOKEN:
            'e1771815ac78287b10f3762a0cc8a6ecebd3a9513d4628db7e8c898c9363b403d08c11c2043081e53c185bb058125af2065658346e30126c226da87434843aef382f828fcf059c1f5e1a05da7b590f8c270b4a8fb9b4e1328c8dfdd02f3dfa8772ef21ec82ce2c2f22d4a574d8cd63645cdd49b945c637aa28f5cdf3ea98bdd8'
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        })

        return config
    }
}

module.exports = nextConfig
