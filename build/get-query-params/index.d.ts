import { FetchOptions, QueryParam } from '..';
import { Agent } from '../agent/agents';
export interface GetQueryParams {
    agent: Pick<Agent, 'query'>;
    path: string;
    options: Pick<FetchOptions, 'query'>;
}
export default function getQueryParams({ agent, options, path }: GetQueryParams): QueryParam[];
