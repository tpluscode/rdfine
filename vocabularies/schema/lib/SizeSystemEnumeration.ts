import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  SizeSystemImperial: schema.SizeSystemImperial as NamedNode<'http://schema.org/SizeSystemImperial'>,
  SizeSystemMetric: schema.SizeSystemMetric as NamedNode<'http://schema.org/SizeSystemMetric'>,
};

export type SizeSystemEnumeration =
  NamedNode<'http://schema.org/SizeSystemImperial'>
  | NamedNode<'http://schema.org/SizeSystemMetric'>;
