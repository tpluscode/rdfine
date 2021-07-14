import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  OriginalShippingFees: schema.OriginalShippingFees,
  RestockingFees: schema.RestockingFees,
  ReturnShippingFees: schema.ReturnShippingFees,
};

export type ReturnFeesEnumeration = typeof values[keyof typeof values];

export default values;
