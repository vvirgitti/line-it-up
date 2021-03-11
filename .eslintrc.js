module.exports = {
    'env': {
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        project: './tsconfig.json'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'react-hooks'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'react/prop-types': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/no-unescaped-entities": "off"
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
