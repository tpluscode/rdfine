import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../Project';
import { FundingAgencyMixin } from '../FundingAgency';

export const FundingAgencyBundle = [
  ProjectMixin as Mixin,
  FundingAgencyMixin as Mixin];
