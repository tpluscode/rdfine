import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  InForce: schema.InForce,
  NotInForce: schema.NotInForce,
  PartiallyInForce: schema.PartiallyInForce,
};

export type LegalForceStatus = typeof values[keyof typeof values];

export default values;
