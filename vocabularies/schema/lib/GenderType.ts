import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  Female: schema.Female as NamedNode<'http://schema.org/Female'>,
  Male: schema.Male as NamedNode<'http://schema.org/Male'>,
};

export type GenderType =
  NamedNode<'http://schema.org/Female'>
  | NamedNode<'http://schema.org/Male'>;
