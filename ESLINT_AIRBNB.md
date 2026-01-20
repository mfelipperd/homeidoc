# Airbnb ESLint Configuration

Para usar a configuração completa do Airbnb, execute:

```bash
npm install --save-dev eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Depois atualize `.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "linebreak-style": "off"
  }
}
```

**Nota**: A configuração foi temporariamente simplificada devido a incompatibilidades entre as versões do ESLint 9.x e airbnb-config que ainda utiliza ESLint 8.x.
