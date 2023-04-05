import { schema } from './namespace';

const values = {
  ActiveActionStatus: schema.ActiveActionStatus,
  CompletedActionStatus: schema.CompletedActionStatus,
  FailedActionStatus: schema.FailedActionStatus,
  PotentialActionStatus: schema.PotentialActionStatus,
};

export type ActionStatusType = typeof values[keyof typeof values];

export default values;
