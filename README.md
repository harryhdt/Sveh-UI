# Sveh UI

Svelte component powered by tailwind css, for my personal project only.

### Requirement

Please install following libs:

- Tailwind 3
- Tailwind Form
- Iconify

### Preset

You can create one presets, ex. `sveh-ui.cjs`

    module.exports = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#edf4fc',
                        100: '#dbe9f9',
                        200: '#b7d3f3',
                        300: '#92bcee',
                        400: '#80b1eb',
                        500: '#5c9be5',
                        600: '#4a90e2',
                        700: '#4382cb',
                        800: '#3b73b5',
                        900: '#34659e'
                    },
                    secondary: {
                        50: '#f6fafe',
                        100: '#edf4fc',
                        200: '#dbe9f9',
                        300: '#c9def7',
                        400: '#b7d3f4',
                        500: '#aecef2',
                        600: '#a5c8f1',
                        700: '#95b4d9',
                        800: '#84a0c1',
                        900: '#637891'
                    },
                    success: {
                        50: '#eaf3ec',
                        100: '#d5e7d9',
                        200: '#abceb3',
                        300: '#82b68c',
                        400: '#589d66',
                        500: '#2e8540',
                        600: '#439153',
                        700: '#2e8540',
                        800: '#29783a',
                        900: '#205d2d'
                    },
                    error: {
                        50: '#fce8ec',
                        100: '#f9d2d8',
                        200: '#f7bbc5',
                        300: '#f18e9e',
                        400: '#eb6077',
                        500: '#e63350',
                        600: '#e31c3d',
                        700: '#cc1937',
                        800: '#b61631',
                        900: '#881125'
                    },
                    info: {
                        50: '#fbfbfb',
                        100: '#f7f7f7',
                        200: '#f4f4f4',
                        300: '#f0f0f0',
                        400: '#e8e8e8',
                        500: '#e4e4e4',
                        600: '#e1e1e1',
                        700: '#d9d9d9',
                        800: '#c3c3c3',
                        900: '#828282'
                    },
                    warning: {
                        50: '#fef9ec',
                        100: '#fef4d9',
                        200: '#fde8b3',
                        300: '#fbdd8e',
                        400: '#fad168',
                        500: '#facc55',
                        600: '#f9c642',
                        700: '#e0b23b',
                        800: '#957728',
                        900: '#7d6321'
                    }
                }
            }
        }
    };

### Tailwind Config

    content: [
        ...,
        "./node_modules/sveh-ui/**/*.svelte",
    ],
    ...,
    presets: [require('./sveh-ui.cjs')]
