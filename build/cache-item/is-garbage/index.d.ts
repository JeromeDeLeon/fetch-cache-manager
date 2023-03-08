import { CacheItem } from '../..';
export default function isGarbage<T>(cacheItem: Pick<CacheItem<T>, 'callbacks' | 'isFetching' | 'cacheTtlMs' | 'lastUpdate'>): boolean;
