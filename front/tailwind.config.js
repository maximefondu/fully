module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './features/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: 'white',
            black: 'black',
            primary: '#FFB71B',
            secondary: '#12389F',
            grey: {
                200: '#F7F7F6',
                300: '#ECECEC',
                400: '#CCCCCC',
                600: '#A0A0A0',
                700: '#6E6C63',
                800: '#414141'
            }
        },
        fontSize: {
            xs: '1rem',
            sm: '1.2rem',
            lg: '1.4rem',
            base: '1.6rem',
            xl: '2.6rem'
        },
        screens: {
            sm: { max: '540px' },
            md: { max: '767px' },
            lg: { max: '1023px' },
            xl: { max: '1279px' },
            xxl: { max: '1535px' }
        },
        extend: {}
    },
    plugins: []
}
