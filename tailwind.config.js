/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#E48E2E",
                "background-light": "#F9FAFB",
                "background-dark": "#0F1115",
                secondary: "#1A1D23",
                orange: {
                    50: '#FDF6EC',
                    100: '#FAEAD3',
                    200: '#F5D3A6',
                    300: '#EFBD7A',
                    400: '#E9A64E',
                    500: '#E48E2E',
                    600: '#C57217',
                    700: '#945611',
                    800: '#63390B',
                    900: '#321D06',
                },
                "section-gray": "#F8FAFC",
                "section-white": "#FFFFFF",
                "section-divider": "#F1F5F9",
            },
            fontFamily: {
                display: ["Oswald", "sans-serif"],
                sans: ["Inter", "sans-serif"],
                nav: ["Sora", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1.5rem",
            },
            boxShadow: {
                'premium': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.03), 0 30px 50px -10px rgba(0, 0, 0, 0.1)',
                'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
