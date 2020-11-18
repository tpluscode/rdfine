import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../lib/Project';
import { FundingAgencyMixin } from '../lib/FundingAgency';

export const FundingAgencyBundle = [
  ProjectMixin as Mixin,
  FundingAgencyMixin as Mixin];
