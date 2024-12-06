import { Injectable } from '@angular/core';
import { deflate, inflate } from 'pako';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  writeToStorage<T>(data: T[], key: StorageKey) {
    const deflated = deflate(JSON.stringify(data), { level: 9 });
    const base64Str = btoa(String.fromCharCode(...deflated));
    localStorage.setItem(key, base64Str);
  }

  readFromStorage() {
    const storageRecord = localStorage.getItem('transactions');
    if (!storageRecord) return [];
    try {
      const base64ToUnitArr = new Uint8Array(
        atob(storageRecord)
          .split('')
          .map((char) => char.charCodeAt(0))
      );
      const inflated = inflate(base64ToUnitArr, { to: 'string' });
      return JSON.parse(inflated);
    } catch (e) {
      console.error('Error while inflating', e);
      return [];
    }
  }
}

type StorageKey = 'transactions' | 'categories';
