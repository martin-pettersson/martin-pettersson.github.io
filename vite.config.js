/*
 * Copyright (c) 2024 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import lightningcss from "vite-plugin-lightningcss";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    publicDir: "resources/public",
    build: {
        sourcemap: true,
        emptyOutDir: true,
        minify: "terser",
        cssMinify: "lightningcss"
    },
    plugins: [
        tsconfigPaths(),
        lightningcss(),
        {
            name: "defer-stylesheet",
            transformIndexHtml(html) {
                const stylesheet = html.match(/<link [^>]*rel\s*=\s*(?:"stylesheet"|'stylesheet'|stylesheet)[^>]*>/)[0];

                return html.replace(stylesheet, "").replace("<!-- STYLESHEET -->", stylesheet);
            }
        },
        visualizer()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: [
                    "resources/sass"
                ]
            }
        }
    },
    resolve: {
        alias: {
            "configuration": resolve(__dirname, "configuration")
        }
    }
});
