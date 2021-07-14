import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  ActiveNotRecruiting: schema.ActiveNotRecruiting,
  Completed: schema.Completed,
  EnrollingByInvitation: schema.EnrollingByInvitation,
  NotYetRecruiting: schema.NotYetRecruiting,
  Recruiting: schema.Recruiting,
  ResultsAvailable: schema.ResultsAvailable,
  ResultsNotAvailable: schema.ResultsNotAvailable,
  Suspended: schema.Suspended,
  Terminated: schema.Terminated,
  Withdrawn: schema.Withdrawn,
};

export type MedicalStudyStatus = typeof values[keyof typeof values];

export default values;
