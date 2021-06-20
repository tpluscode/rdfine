import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  Diagnostic: schema.Diagnostic as NamedNode<'http://schema.org/Diagnostic'>,
  Therapeutic: schema.Therapeutic as NamedNode<'http://schema.org/Therapeutic'>,
};

export type MedicalDevicePurpose =
  NamedNode<'http://schema.org/Diagnostic'>
  | NamedNode<'http://schema.org/Therapeutic'>;
