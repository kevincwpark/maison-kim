import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // alias resolver + rules
  {
    plugins: { import: pluginImport },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json", // picks up baseUrl/paths
        },
      },
    },
    rules: {
      // optional, but nice to surface unresolved path mistakes
      "import/no-unresolved": "error",
    },
  },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
