import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  OTC: schema.OTC as NamedNode<'http://schema.org/OTC'>,
  PrescriptionOnly: schema.PrescriptionOnly as NamedNode<'http://schema.org/PrescriptionOnly'>,
};

export type DrugPrescriptionStatus =
  NamedNode<'http://schema.org/OTC'>
  | NamedNode<'http://schema.org/PrescriptionOnly'>;
