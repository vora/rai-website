module.exports = {
  "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"],
  "*.{js,jsx,ts,tsx}": ["npm run lint:js", "jest --bail --findRelatedTests"],
  "*.{md,mdx}": ["yarn lint:md"],
};
