import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  EvidenceLevelA: schema.EvidenceLevelA as NamedNode<'http://schema.org/EvidenceLevelA'>,
  EvidenceLevelB: schema.EvidenceLevelB as NamedNode<'http://schema.org/EvidenceLevelB'>,
  EvidenceLevelC: schema.EvidenceLevelC as NamedNode<'http://schema.org/EvidenceLevelC'>,
};

export type MedicalEvidenceLevel =
  NamedNode<'http://schema.org/EvidenceLevelA'>
  | NamedNode<'http://schema.org/EvidenceLevelB'>
  | NamedNode<'http://schema.org/EvidenceLevelC'>;
