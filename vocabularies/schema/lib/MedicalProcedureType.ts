import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  NoninvasiveProcedure: schema.NoninvasiveProcedure,
  PercutaneousProcedure: schema.PercutaneousProcedure,
};

export type MedicalProcedureType = typeof values[keyof typeof values];

export default values;
