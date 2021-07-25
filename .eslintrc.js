module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:@typescript-eslint/recommended",
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "quotes": ["error", "double"],
        "no-var": "error",
        "indent": ["error", 4, { SwitchCase: 1 }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};
