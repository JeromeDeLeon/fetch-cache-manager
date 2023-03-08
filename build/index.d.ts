/// <reference types="node" />
import { GenerateKeyOptionsI } from './generate-key';
import addAgent from './agent/add-agent';
import asCallback from './as-callback';
import asPromise from './as-promise';
import removeAllAgents from './agent/remove-all-agents';
import removeAgent from './agent/remove-agent';
import removeCacheItem from './cache-item/remove-cache-item';
export declare type CallbackHandler<T> = (err: Error, res?: CallbackResponse<T>) => void;
export declare type AbortCall = () => void;
export interface RunnerResponse<T> {
    data: T;
    status: number;
}
export interface CallbackResponse<T> {
    response: RunnerResponse<T>;
    expiresInMs: number;
    isCacheable: boolean;
}
export interface QueryParam {
    key: string;
    value: string;
}
export interface Header {
    key: string;
    value: string;
}
export interface FetchOptions {
    cacheKey?: string;
    method?: string;
    body?: string;
    cacheOptions?: CacheConfig;
    query?: QueryParam[];
    headers?: Header[];
}
export interface CacheConfig {
    cacheTtlMs?: number;
    force?: boolean;
    keyOptions?: GenerateKeyOptionsI;
}
export interface CacheItem<T> {
    key: string;
    url: string;
    lastUpdate: number;
    cacheTtlMs: number;
    callbacks: CallbackRecord<T>[];
    value: RunnerResponse<T>;
    error: Error;
    isFetched: boolean;
    isFetching: boolean;
    nextRefresh: ReturnType<typeof setTimeout>;
    options: FetchOptions;
    abort: AbortCall;
    callback: (error: Error, response: RunnerResponse<T>) => void;
}
export interface CallbackRecord<T> {
    callback: CallbackHandler<T>;
    frequencyMs?: number;
}
declare const _default: {
    addAgent: typeof addAgent;
    asPromise: typeof asPromise;
    asCallback: typeof asCallback;
    removeAgent: typeof removeAgent;
    removeAllAgents: typeof removeAllAgents;
    removeCacheItem: typeof removeCacheItem;
};
export default _default;
