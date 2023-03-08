import { CacheItem, CallbackHandler } from '../..';
export declare type StopFeedCacheItem<T> = Pick<CacheItem<T>, 'callbacks' | 'abort' | 'nextRefresh' | 'isFetching'>;
export default function stopFeed<T>(cacheItem: StopFeedCacheItem<T>, callbackFn: CallbackHandler<T>): void;
