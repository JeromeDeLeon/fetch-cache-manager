import { CacheItem } from '../..';
export declare type CacheItemIsExpired<T> = Pick<CacheItem<T>, 'cacheTtlMs' | 'lastUpdate'>;
export default function isExpired<T>({ cacheTtlMs, lastUpdate }: CacheItemIsExpired<T>): boolean;
