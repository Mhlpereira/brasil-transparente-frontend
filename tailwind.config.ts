module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#002776",
                "accent-yellow": "#ffdf00",
                "dark-green": "#075213",
                background: "#f8f9fa",
                "text-primary": "#2d3436",
                "azul-brasil": "#002776",
                "amarelo-ouro": "#ffdf00",
                "verde-escuro": "#075213",
            },
            boxShadow: {
                card: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
            transitionProperty: {
                all: "all",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
            },
        },
    },
    plugins: [],
};
