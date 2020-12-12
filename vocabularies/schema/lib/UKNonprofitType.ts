import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  CharitableIncorporatedOrganization: schema.CharitableIncorporatedOrganization as NamedNode<'http://schema.org/CharitableIncorporatedOrganization'>,
  LimitedByGuaranteeCharity: schema.LimitedByGuaranteeCharity as NamedNode<'http://schema.org/LimitedByGuaranteeCharity'>,
  UKTrust: schema.UKTrust as NamedNode<'http://schema.org/UKTrust'>,
  UnincorporatedAssociationCharity: schema.UnincorporatedAssociationCharity as NamedNode<'http://schema.org/UnincorporatedAssociationCharity'>,
};

export type UKNonprofitType =
  NamedNode<'http://schema.org/CharitableIncorporatedOrganization'>
  | NamedNode<'http://schema.org/LimitedByGuaranteeCharity'>
  | NamedNode<'http://schema.org/UKTrust'>
  | NamedNode<'http://schema.org/UnincorporatedAssociationCharity'>;
