import { Injectable } from '@angular/core';
import { Constants } from '../model/constants.enum';

@Injectable({
    providedIn: 'root'
})
export class DataSecureService {

    private readonly XOR_KEY = Constants.MESSAGE_KEY;

    public xorEncryptDecrypt(str: string): string {
        let output = '';
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i) ^ this.XOR_KEY.charCodeAt(i % this.XOR_KEY.length);
            output += String.fromCharCode(charCode);
        }
        return output;
    }

    public save(key: string, value: string): void {
        const stringValue = JSON.stringify(value);
        const encryptedValue = this.xorEncryptDecrypt(stringValue);
        localStorage.setItem(this.xorEncryptDecrypt(key), encryptedValue);
    }

    public get(key: string): undefined {
        const encryptedValue = localStorage.getItem(key);
        if (!encryptedValue) {
            return undefined;
        }

        try {
            const decryptedValue = this.xorEncryptDecrypt(encryptedValue);
            return JSON.parse(decryptedValue);
        } catch (e) {
            console.error('Error - ', e);
            return undefined;
        }
    }
}