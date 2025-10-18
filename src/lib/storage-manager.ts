// Custom storage manager to support multiple sessions
class StorageManager {
  private storage: Storage;
  private prefix: string;

  constructor() {
    // Use sessionStorage for tab-isolated sessions
    this.storage = sessionStorage;
    // ALWAYS generate a unique prefix for each page load/instance
    // This ensures complete isolation between tabs and different logins
    this.prefix = `tab_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(`${this.prefix}_${key}`);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(`${this.prefix}_${key}`, value);
  }

  removeItem(key: string): void {
    this.storage.removeItem(`${this.prefix}_${key}`);
  }
}

export const customStorage = new StorageManager();
