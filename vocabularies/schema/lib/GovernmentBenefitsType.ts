import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  BasicIncome: schema.BasicIncome,
  BusinessSupport: schema.BusinessSupport,
  DisabilitySupport: schema.DisabilitySupport,
  HealthCare: schema.HealthCare,
  OneTimePayments: schema.OneTimePayments,
  PaidLeave: schema.PaidLeave,
  ParentalSupport: schema.ParentalSupport,
  UnemploymentSupport: schema.UnemploymentSupport,
};

export type GovernmentBenefitsType = typeof values[keyof typeof values];

export default values;
