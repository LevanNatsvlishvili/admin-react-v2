/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // screens: require('./src/commons/theme/screens'),
    spacing: require('./src/commons/theme/spacing'),
    inset: require('./src/commons/theme/spacing'),
    colors: require('./src/commons/theme/colors'),
    fontWeight: require('./src/commons/theme/fontWeight'),
    fontSize: require('./src/commons/theme/fontSize'),
    borderRadius: require('./src/commons/theme/borderRadius'),
    lineHeight: require('./src/commons/theme/lineHeight'),

    container: require('./src/commons/theme/container'),
    maxWidth: require('./src/commons/theme/maxWidth'),
    minWidth: require('./src/commons/theme/minWidth'),
    maxHeight: require('./src/commons/theme/maxHeight'),
    minHeight: require('./src/commons/theme/minHeight'),
    display: require('./src/commons/theme/display'),
  },
  ins: [],
};
