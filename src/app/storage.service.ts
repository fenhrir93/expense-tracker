import { Injectable } from '@angular/core';
import { deflate, inflate } from 'pako';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  writeToStorage<T>(data: T[], key: StorageKey) {
    const deflated = deflate(JSON.stringify(data), { level: 9 });
    const base64Str = btoa(String.fromCharCode(...deflated));
    this.clearStorage(key);
    localStorage.setItem(key, base64Str);
  }

  readFromStorage<T>(key: StorageKey): T[] {
    const storageRecord = localStorage.getItem(key);
    if (!storageRecord) {
      return [];
    }

    try {
      const base64ToUnitArr = new Uint8Array(
        atob(storageRecord)
          .split('')
          .map((char) => char.charCodeAt(0))
      );

      const inflated = inflate(base64ToUnitArr, { to: 'string' });

      const parsedData = JSON.parse(inflated);
      return parsedData;
    } catch (e) {
      console.error('Error during decompression or parsing:', e);
      return [];
    }
  }

  clearStorage(key: StorageKey) {
    localStorage.removeItem(key);
  }
}

type StorageKey = 'transactions' | 'categories';
