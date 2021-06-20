import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  CaseSeries: schema.CaseSeries as NamedNode<'http://schema.org/CaseSeries'>,
  CohortStudy: schema.CohortStudy as NamedNode<'http://schema.org/CohortStudy'>,
  CrossSectional: schema.CrossSectional as NamedNode<'http://schema.org/CrossSectional'>,
  Longitudinal: schema.Longitudinal as NamedNode<'http://schema.org/Longitudinal'>,
  Observational: schema.Observational as NamedNode<'http://schema.org/Observational'>,
  Registry: schema.Registry as NamedNode<'http://schema.org/Registry'>,
};

export type MedicalObservationalStudyDesign =
  NamedNode<'http://schema.org/CaseSeries'>
  | NamedNode<'http://schema.org/CohortStudy'>
  | NamedNode<'http://schema.org/CrossSectional'>
  | NamedNode<'http://schema.org/Longitudinal'>
  | NamedNode<'http://schema.org/Observational'>
  | NamedNode<'http://schema.org/Registry'>;
