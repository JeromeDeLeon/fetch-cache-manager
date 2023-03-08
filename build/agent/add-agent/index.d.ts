import { AbortCall, CacheItem, Header, QueryParam } from '../../index';
import { AgentFetchParams } from '../agents';
export interface AgentOptions {
    name: string;
    basePath: string;
    headers?: Header[];
    query?: QueryParam[];
    runner<T>(options: AgentFetchParams<T>): AbortCall;
}
export interface AgentCache {
    [key: string]: CacheItem<any>;
}
export default function addAgent({ name, basePath, headers, query, runner }: AgentOptions): void;
