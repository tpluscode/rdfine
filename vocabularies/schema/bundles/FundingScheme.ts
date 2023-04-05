import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FundingSchemeMixin } from '../lib/FundingScheme';
import { OrganizationMixin } from '../lib/Organization';

export const FundingSchemeBundle = [
  FundingSchemeMixin as Mixin,
  OrganizationMixin as Mixin];
