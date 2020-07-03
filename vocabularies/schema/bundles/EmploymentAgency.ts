import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EmploymentAgencyMixin } from '../EmploymentAgency';

export const EmploymentAgencyBundle = [
  LocalBusinessMixin as Mixin,
  EmploymentAgencyMixin as Mixin];
