/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontSize: {
                base: "1.3rem",
                lg: "1.5rem",
                xl: "1.7rem"
            },
            minWidth: {
                0.5: "15vw",
                1: "25vw"
            },
            maxWidth: {
                0.5: "15vw",
                1: "25vw",
                2: "30vw"
            }
        },
    },
    plugins: [],
}
