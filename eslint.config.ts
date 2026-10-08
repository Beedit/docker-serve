import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    stylistic.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: {
            js,
            "@stylistic": stylistic,
        },
        rules: {
            "@stylistic/indent": ["error", 4],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/line-comment-position": ["error", { position: "above" }],
            "@stylistic/no-mixed-operators": "error",

            "@stylistic/quotes": ["warn", "double"],
            "@stylistic/array-bracket-spacing": ["warn", "never", { singleValue: false }],
            "@stylistic/semi-style": ["warn", "last"],
        },
        extends: ["js/recommended"],
        languageOptions: {
            globals: globals.node,
        },
    },

    tseslint.configs.recommended,
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json5",
        extends: ["json/recommended"],
    },
]);
