module.exports = {
    content: ["./public1/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
           fontFamily : {
            sans : ["Vazir"],
           },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: "class",
        }),
    ],
};