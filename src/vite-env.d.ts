/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_KEY: any,
    readonly VITE_VECTOR: any,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}