import { CallbackResponse, FetchOptions } from '..';
export interface AsPromise {
    agentName: string;
    path: string;
    options?: FetchOptions;
}
export default function asPromise<T>({ agentName, path, options }: AsPromise): Promise<CallbackResponse<T>>;
