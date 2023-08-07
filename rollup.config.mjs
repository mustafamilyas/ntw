import pkg from "./package.json" assert { type: "json" };
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [typescript(), terser(), commonjs(), resolve()],
};
