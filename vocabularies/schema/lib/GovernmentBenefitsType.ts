import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  BasicIncome: schema.BasicIncome as NamedNode<'http://schema.org/BasicIncome'>,
  BusinessSupport: schema.BusinessSupport as NamedNode<'http://schema.org/BusinessSupport'>,
  DisabilitySupport: schema.DisabilitySupport as NamedNode<'http://schema.org/DisabilitySupport'>,
  HealthCare: schema.HealthCare as NamedNode<'http://schema.org/HealthCare'>,
  OneTimePayments: schema.OneTimePayments as NamedNode<'http://schema.org/OneTimePayments'>,
  PaidLeave: schema.PaidLeave as NamedNode<'http://schema.org/PaidLeave'>,
  ParentalSupport: schema.ParentalSupport as NamedNode<'http://schema.org/ParentalSupport'>,
  UnemploymentSupport: schema.UnemploymentSupport as NamedNode<'http://schema.org/UnemploymentSupport'>,
};

export type GovernmentBenefitsType =
  NamedNode<'http://schema.org/BasicIncome'>
  | NamedNode<'http://schema.org/BusinessSupport'>
  | NamedNode<'http://schema.org/DisabilitySupport'>
  | NamedNode<'http://schema.org/HealthCare'>
  | NamedNode<'http://schema.org/OneTimePayments'>
  | NamedNode<'http://schema.org/PaidLeave'>
  | NamedNode<'http://schema.org/ParentalSupport'>
  | NamedNode<'http://schema.org/UnemploymentSupport'>;
