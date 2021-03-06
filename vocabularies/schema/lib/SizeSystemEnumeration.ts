import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  SizeSystemImperial: schema.SizeSystemImperial,
  SizeSystemMetric: schema.SizeSystemMetric,
};

export type SizeSystemEnumeration = typeof values[keyof typeof values];

export default values;
