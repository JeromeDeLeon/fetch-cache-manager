import { Agent } from '../agent/agents';
export declare const garbageCollectorFrequency = 9000;
export declare type GarbageAgent = Pick<Agent, 'cache' | 'garbageCollectorTimeout'>;
export default function manageGarbage(agent: GarbageAgent): void;
