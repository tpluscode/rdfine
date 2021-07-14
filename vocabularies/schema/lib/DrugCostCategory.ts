import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  ReimbursementCap: schema.ReimbursementCap,
  Retail: schema.Retail,
  Wholesale: schema.Wholesale,
};

export type DrugCostCategory = typeof values[keyof typeof values];

export default values;
