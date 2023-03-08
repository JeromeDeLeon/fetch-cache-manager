import { CacheItem, FetchOptions } from '../..';
import { AgentCache } from '../../agent/add-agent';
interface CacheItemProps {
    cache: AgentCache;
    key: string;
    url: string;
    cacheTtlMs: number;
    options: FetchOptions;
}
export default function getItem<T>({ cache, key, cacheTtlMs, options, url }: CacheItemProps): CacheItem<T>;
export {};
