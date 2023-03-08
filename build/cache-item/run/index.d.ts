import { Agent } from '../../agent/agents';
import { CacheItem } from '../..';
export declare function reRun<T>(agent: Pick<Agent, 'runner'>, cacheItem: CacheItem<T>): void;
export default function run<T>(agent: Pick<Agent, 'runner'>, cacheItem: CacheItem<T>): void;
