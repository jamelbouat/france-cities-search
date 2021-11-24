let timeoutStorage: NodeJS.Timeout;
let timeoutQuery: NodeJS.Timeout;

const throttleSaveToStorage = (func: () => void, delay: number): void => {
    clearTimeout(timeoutStorage);
    if (func !== undefined && delay !== undefined) {
        timeoutStorage = setTimeout(func, delay);
    }};

const throttleQuery = (func: () => void, delay: number): void => {
    clearTimeout(timeoutQuery);
    if (func !== undefined && delay !== undefined) {
        timeoutQuery = setTimeout(func, delay);
    }
};

export {
    throttleQuery,
    throttleSaveToStorage
};
