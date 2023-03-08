import { CallbackRecord } from '../..';
export default function getLowestFrequency<T>(callbacks?: Partial<Pick<CallbackRecord<T>, 'frequencyMs'>>[]): number;
