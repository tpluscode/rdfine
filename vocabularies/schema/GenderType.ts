import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type GenderType = NamedNode;

export default {
  Female: schema.Female,
  Male: schema.Male,
};
