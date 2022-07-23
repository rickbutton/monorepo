import * as esbuild from "esbuild";

const srcDir = (pkg: string) => `packages/${pkg}/src`;
const distDir = (pkg: string) => `packages/${pkg}/dist`;
const join = (...parts: string[]) => parts.join("/");

const watch = process.argv[2] === "--watch";
const libraries = ["core"];

const baseConfig: esbuild.BuildOptions = {
    external: ["./node_modules/*", "@my-org/*"],
    bundle: true,
    watch,
};

function buildLibraries() {
    for (const lib of libraries) {
        const config: esbuild.BuildOptions = {
            ...baseConfig,
            entryPoints: [join(srcDir(lib), "index.ts")],
        };

        esbuild.build({
            ...config,
            format: "cjs",
            outfile: join(distDir(lib), "index.js"),
        });
        esbuild.build({
            ...config,
            format: "esm",
            outfile: join(distDir(lib), "index.esm.js"),
        });
    }
}

function buildCli() {
    const config: esbuild.BuildOptions = {
        ...baseConfig,
        entryPoints: [join(srcDir("cli"), "index.ts")],
    };

    esbuild.build({
        ...config,
        format: "cjs",
        outfile: join(distDir("cli"), "index.js"),
    });
}

buildLibraries();
buildCli();
