// Custom storage manager using localStorage for persistent sessions
class StorageManager {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}

export const customStorage = new StorageManager();
