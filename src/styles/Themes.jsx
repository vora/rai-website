import { colors } from './Colors'

const baseTheme = {
    pageMargin: "100px"
}

export const lightTheme = {
    name: 'light',
    ...baseTheme,
    color: {
        ...colors,
    },
}