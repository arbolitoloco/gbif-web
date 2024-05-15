// TypeScript will transpile dynamic imports to require() calls.
// This is a workaround to allow dynamic imports in TypeScript.
// It is used to import ESM only modules in CommonJS code.
export const dynamicImport = new Function('modulePath', 'return import(modulePath)') as <T = any>(modulePath: string) => Promise<T>;