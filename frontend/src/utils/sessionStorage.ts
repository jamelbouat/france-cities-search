import CryptoJS from 'crypto-js';

import { RootState } from '../interfaces/state';

const secretKey = process.env.REACT_APP_API_SECRET_KEY as string;

export const getStateFromSessionStorage = (): RootState => {
    try {
        const encryptedState = sessionStorage.getItem('state');
        if (encryptedState === null) {
            return undefined;
        }
        return decryptState(encryptedState);
    } catch(e) {
        return undefined;
    }
};

export const saveStateToSessionStorage = (state: RootState): void => {
    try {
        const encryptedState = encryptState(state);
        sessionStorage.setItem('state', encryptedState);
    } catch(e) {
        console.log(e);
    }
};

export const removeStateFromStorage = (): void => {
    sessionStorage.removeItem('state');
};

const encryptState = (state: RootState) => {
    return CryptoJS.AES
        .encrypt(JSON.stringify(state), secretKey)
        .toString();
};

const decryptState = (encryptedState: string) => {
    const bytes = CryptoJS.AES.decrypt(encryptedState, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
