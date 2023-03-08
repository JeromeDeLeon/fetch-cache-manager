import { Agent } from '../agent/agents';
import { CallbackHandler, FetchOptions, QueryParam } from '..';
export interface BuildUrlParams {
    agent: Agent;
    path: string;
    queryParams: QueryParam[];
}
export interface AsCallback<T> {
    agentName: string;
    path: string;
    frequencyMs?: number;
    callback: CallbackHandler<T>;
    options?: FetchOptions;
}
export default function asCallback<T>({ agentName, path, options, frequencyMs, callback }: AsCallback<T>): () => void;
