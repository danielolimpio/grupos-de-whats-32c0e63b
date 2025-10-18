// Dedicated storage manager for admin authentication
// This ensures complete isolation from regular user authentication
class AdminStorageManager {
  private storage: Storage;
  private prefix: string = 'admin_auth_';

  constructor() {
    // Use sessionStorage for tab-isolated admin sessions
    this.storage = sessionStorage;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(`${this.prefix}${key}`);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(`${this.prefix}${key}`, value);
  }

  removeItem(key: string): void {
    this.storage.removeItem(`${this.prefix}${key}`);
  }
}

export const adminStorage = new AdminStorageManager();
