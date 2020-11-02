import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  Diagnostic: schema.Diagnostic as NamedNode<'http://schema.org/Diagnostic'>,
  Therapeutic: schema.Therapeutic as NamedNode<'http://schema.org/Therapeutic'>,
};

export type MedicalDevicePurpose =
  NamedNode<'http://schema.org/Diagnostic'>
  | NamedNode<'http://schema.org/Therapeutic'>;
