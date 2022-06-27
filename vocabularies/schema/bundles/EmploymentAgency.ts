import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmploymentAgencyMixin } from '../lib/EmploymentAgency';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const EmploymentAgencyBundle = [
  EmploymentAgencyMixin as Mixin,
  LocalBusinessMixin as Mixin];
