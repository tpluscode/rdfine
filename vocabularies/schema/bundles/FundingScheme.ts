import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { FundingSchemeMixin } from '../FundingScheme';

export const FundingSchemeBundle = [
  OrganizationMixin as Mixin,
  FundingSchemeMixin as Mixin];
