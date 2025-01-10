import { build, type Format } from "esbuild";

const b = (format: Format) =>
    build({
    entryPoints: ["src/index.ts"],
    outfile: `dist/${format}.js`,
    globalName: "libkey",
    sourcemap: "linked",
    bundle: true,
    minify: true,
    format
})
b("cjs")
b("esm")
b("iife")