export = StorageManager;

declare function StorageManager(
  mechanism: 'sessionStorage' | 'localStorage',
): StorageManager.Interface;

declare namespace StorageManager {
  export interface Interface {
    get(key: string): string | false;
    getAll(): {[key: string]: string};
    set(key: string, obj: any): boolean;
    remove(key: string): boolean;
    length(): number;
    clear(): void;
  }
}
