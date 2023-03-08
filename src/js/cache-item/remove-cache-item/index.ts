import { agents } from '../../agent/agents';

interface RemoveCacheItem {
    agentName: string;
    cacheKey: string;
}

export default function removeCacheItem({ agentName, cacheKey }: RemoveCacheItem): void {
    const agent = agents[agentName];

    if (!agent) {
        throw new Error(`Agent '${agentName}' doesn't exist`);
    }

    delete agent.cache[cacheKey];
}
