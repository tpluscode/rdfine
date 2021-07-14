import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  Diagnostic: schema.Diagnostic,
  Therapeutic: schema.Therapeutic,
};

export type MedicalDevicePurpose = typeof values[keyof typeof values];

export default values;
