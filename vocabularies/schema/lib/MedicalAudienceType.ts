import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  Clinician: schema.Clinician as NamedNode<'http://schema.org/Clinician'>,
  MedicalResearcher: schema.MedicalResearcher as NamedNode<'http://schema.org/MedicalResearcher'>,
};

export type MedicalAudienceType =
  NamedNode<'http://schema.org/Clinician'>
  | NamedNode<'http://schema.org/MedicalResearcher'>;
