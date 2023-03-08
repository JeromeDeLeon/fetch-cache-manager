import { FetchOptions, Header } from '..';
import { Agent } from '../agent/agents';
export interface JoinHeadersParams {
    agent: Pick<Agent, 'headers'>;
    options: Pick<FetchOptions, 'headers'>;
}
export default function joinHeaders({ agent, options }: JoinHeadersParams): Header[];
