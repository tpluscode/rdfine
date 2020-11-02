import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  ActiveNotRecruiting: schema.ActiveNotRecruiting as NamedNode<'http://schema.org/ActiveNotRecruiting'>,
  Completed: schema.Completed as NamedNode<'http://schema.org/Completed'>,
  EnrollingByInvitation: schema.EnrollingByInvitation as NamedNode<'http://schema.org/EnrollingByInvitation'>,
  NotYetRecruiting: schema.NotYetRecruiting as NamedNode<'http://schema.org/NotYetRecruiting'>,
  Recruiting: schema.Recruiting as NamedNode<'http://schema.org/Recruiting'>,
  ResultsAvailable: schema.ResultsAvailable as NamedNode<'http://schema.org/ResultsAvailable'>,
  ResultsNotAvailable: schema.ResultsNotAvailable as NamedNode<'http://schema.org/ResultsNotAvailable'>,
  Suspended: schema.Suspended as NamedNode<'http://schema.org/Suspended'>,
  Terminated: schema.Terminated as NamedNode<'http://schema.org/Terminated'>,
  Withdrawn: schema.Withdrawn as NamedNode<'http://schema.org/Withdrawn'>,
};

export type MedicalStudyStatus =
  NamedNode<'http://schema.org/ActiveNotRecruiting'>
  | NamedNode<'http://schema.org/Completed'>
  | NamedNode<'http://schema.org/EnrollingByInvitation'>
  | NamedNode<'http://schema.org/NotYetRecruiting'>
  | NamedNode<'http://schema.org/Recruiting'>
  | NamedNode<'http://schema.org/ResultsAvailable'>
  | NamedNode<'http://schema.org/ResultsNotAvailable'>
  | NamedNode<'http://schema.org/Suspended'>
  | NamedNode<'http://schema.org/Terminated'>
  | NamedNode<'http://schema.org/Withdrawn'>;
