import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  EvidenceLevelA: schema.EvidenceLevelA,
  EvidenceLevelB: schema.EvidenceLevelB,
  EvidenceLevelC: schema.EvidenceLevelC,
};

export type MedicalEvidenceLevel = typeof values[keyof typeof values];

export default values;
