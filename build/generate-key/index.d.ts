import { FetchOptions, QueryParam } from '../';
import { Agent } from '../agent/agents';
export interface GenerateKeyParams {
    agent: Pick<Agent, 'query' | 'headers'>;
    path: string;
    options: FetchOptions;
    queryParams: QueryParam[];
}
export interface GenerateKeyOptionsI {
    excludeHeaders?: string[];
    excludeQueryParams?: string[];
    sortHeaders?: boolean;
    sortKeys?: boolean;
}
export default function generateKey({ agent, path, options, queryParams }: GenerateKeyParams): string;
