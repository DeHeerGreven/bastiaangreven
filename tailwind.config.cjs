const multiplier = {
    none: 1, // Fontsize 1px - 11px
    md: 0.9, // Fontsize 12px - 17px
    lg: 0.8, // Fontsize 18px - 30px
    xl: 0.7, // Fontsize 31px - 50px
    xxl: 0.6, // Fontsize > 50px - 60px
    xxxl: 0.5, // Fontsize > 61px
};

// name: '50_54', fontSize: 50, lineHeight: 54, multiplier: multiplier.xl //// Uses multiplier on font
// name: '60_64_32_32', fontSize: 60, lineHeight: 64, multiplier: null, fontSizeMob: 32, lineHeightMob: 32 //// Uses mobile font sizes as minimum

const fontSizesList = [
    { name: '53_54', fontSize: 53, lineHeight: 54, multiplier: multiplier.xxl},
    { name: '43_45', fontSize: 43, lineHeight: 45, multiplier: multiplier.xl},
    { name: '27_32', fontSize: 27, lineHeight: 32, multiplier: multiplier.lg},
    { name: '23_32', fontSize: 23, lineHeight: 32, multiplier: multiplier.lg},
    { name: '21_23', fontSize: 21, lineHeight: 23, multiplier: multiplier.lg},
    // { name: '18_30', fontSize: 18, lineHeight: 30, multiplier: multiplier.lg},
    { name: '17_26', fontSize: 17, lineHeight: 26, multiplier: multiplier.md},
    { name: '17_18', fontSize: 17, lineHeight: 18, multiplier: multiplier.md},
    { name: "default", fontSize: 18, lineHeight: 30, multiplier: null, fontSizeMob: 13, lineHeightMob: 24, },
];

import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./public/**/*.html",    // alle HTML in /public
    "./src/**/*.scss"        // optioneel: zodat @apply in SCSS ook scande wordt
    ],

    theme: {
        screens: {
            // '2xl': null,
            // Null value causes error.
            'xl': '1177px',
            'lg': { 'max': '1176px' },
            'md': { 'max': '900px' },
            'sm': { 'max': '768px' },
            'mob': { 'max': '600px' },
            'xs': { 'max': '500px' },
        },

        extend: {
            fontFamily: {
                fontText: ['Montserrat', 'sans-serif'],
                fontTitle: ['Montserrat', 'sans-serif'],
                bebas: ['Bebas Neue', 'sans-serif'],
                fontAwesome: ['"Font Awesome 6 Pro"'],
            },
            colors: {
                background: "#1A1A1A",
                border: "#707070",
                black: "#000000",
                primary: {
                    DEFAULT: "#E58D23",
                    dark: "#c57718"
                }
            },
            margin: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                '30': '30px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            padding: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                '30': '30px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            inset: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            borderRadius: {
                '8': '8px',
                '24': '24px',
                '35': '35px'
            },
            zIndex: {
                "-1": "-1",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "99": "99",
                "999": "999",
            },
            container: {
                center: true,
            },
            fontSize: loadFontSizes(fontSizesList),
            gap: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
            },
            height: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px'
            },
            width: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px'
            },
        },
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/aspect-ratio')
    ],
}

function loadFontSizes(fontList) {
    var response = {};
    fontList.forEach((element) => {
        response[element.name] = fontClamp(
            element.fontSize,
            element.lineHeight,
            element.multiplier,
            element.fontSizeMob,
            element.lineHeightMob
        );
    });

    return response;
}

function fontClamp(
    fontsize,
    lineheight,
    multiplier = null,
    fontsizeMob = 0,
    lineheightMob = 0
) {
    var useMultiplier = multiplier != null ? multiplier : 1;
    var useFontSize = fontsize;
    var useFontSizeMob =
        fontsizeMob > 0 ? fontsizeMob : useFontSize * useMultiplier;
    var useLineHeight = lineheight;
    var useLineHeightMob =
        lineheightMob > 0 ? lineheightMob : useLineHeight * useMultiplier;

    return [
        `clamp(${useFontSizeMob}px, calc(${useFontSizeMob}px + ((${fontsize} - ${useFontSizeMob}) * ((100vw - 360px) / (1230 - 360)))), ${useFontSize}px)`,
        {
            lineHeight: `clamp(${useLineHeightMob}px, calc(${useLineHeightMob}px + ((${lineheight} - ${useLineHeightMob}) * ((100vw - 360px) / (1230 - 360)))), ${useLineHeight}px)`,
        },
    ];
}

