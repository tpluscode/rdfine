import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { FundingSchemeMixin } from '../lib/FundingScheme';

export const FundingSchemeBundle = [
  OrganizationMixin as Mixin,
  FundingSchemeMixin as Mixin];
