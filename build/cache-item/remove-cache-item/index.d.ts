interface RemoveCacheItem {
    agentName: string;
    cacheKey: string;
}
export default function removeCacheItem({ agentName, cacheKey }: RemoveCacheItem): void;
export {};
