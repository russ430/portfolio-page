module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      }
    ],
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "react/state-in-constructor": "off",
    "react/no-unused-state": "off",
    "react/no-access-state-in-setstate": "off",
    "react/no-unescaped-entities": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off"
  }
}