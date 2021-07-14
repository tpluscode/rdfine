import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  OTC: schema.OTC,
  PrescriptionOnly: schema.PrescriptionOnly,
};

export type DrugPrescriptionStatus = typeof values[keyof typeof values];

export default values;
