// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import simpleImportSort from 'eslint-plugin-simple-import-sort';


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   { 
//     languageOptions: { 
//       parserOptions: { ecmaFeatures: { jsx: true } } } },
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReactConfig,
//   {
//     plugins: {
//       'simple-import-sort': simpleImportSort,
//     },
//     languageOptions: {
//       rules: {
//         'react/react-in-jsx-scope': 'off',
//         'simple-import-sort/imports': 'error',
//       'simple-import-sort/exports': 'error',
//       },
//     },
//   },
// ];

import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
