import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  NoninvasiveProcedure: schema.NoninvasiveProcedure as NamedNode<'http://schema.org/NoninvasiveProcedure'>,
  PercutaneousProcedure: schema.PercutaneousProcedure as NamedNode<'http://schema.org/PercutaneousProcedure'>,
};

export type MedicalProcedureType =
  NamedNode<'http://schema.org/NoninvasiveProcedure'>
  | NamedNode<'http://schema.org/PercutaneousProcedure'>;
