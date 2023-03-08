import { CacheItem } from '../..';
declare type ExpiresInCacheItem<T> = Pick<CacheItem<T>, 'lastUpdate' | 'cacheTtlMs'>;
export default function expiresIn<T>(cacheItem: ExpiresInCacheItem<T>): number;
export {};
