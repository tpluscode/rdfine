import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { EmploymentAgencyMixin } from '../lib/EmploymentAgency';

export const EmploymentAgencyBundle = [
  LocalBusinessMixin as Mixin,
  EmploymentAgencyMixin as Mixin];
