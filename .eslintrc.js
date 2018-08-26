module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2015
  },
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],

    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-cap": [
      "error",
      {
        "capIsNew": false
      }
    ],
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-else-return": [
      "error",
      {
        "allowElseIf": true
      }
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-func-assign": "error",
    "no-loop-func": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-unneeded-ternary": "error",
    "no-useless-constructor": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "prefer-rest-params": "error",
    "prefer-template": "warn",
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "spaced-comment": [
      "error",
      "always"
    ],
    "template-curly-spacing": "error"
  }
};