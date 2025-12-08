module.exports = [
"[project]/node_modules/fumadocs-ui/dist/components/dialog/search-default.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_fumadocs-core_dist_91819ed1._.js",
  "server/chunks/ssr/node_modules_89480160._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/fumadocs-ui/dist/components/dialog/search-default.js [app-ssr] (ecmascript)");
    });
});
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[turbopack]_browser_dev_hmr-client_hmr-client_ts_818f0fdf._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-ssr] (ecmascript)");
    });
});
}),
];