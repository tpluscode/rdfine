import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FundingAgencyMixin } from '../lib/FundingAgency';
import { ProjectMixin } from '../lib/Project';

export const FundingAgencyBundle = [
  FundingAgencyMixin as Mixin,
  ProjectMixin as Mixin];
