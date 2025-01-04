const structuredClonePolyfill = (value) => {
    return JSON.parse(JSON.stringify(value));
};
  
export const initStructuredClonePolyfill = () => {
    if(typeof globalThis.structuredClone !== 'function') {
        globalThis.structuredClone = structuredClonePolyfill;
    }
};