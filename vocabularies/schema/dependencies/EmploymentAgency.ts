import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { EmploymentAgencyMixin } from '../EmploymentAgency';

export const EmploymentAgencyDependencies = [
  LocalBusinessMixin as Mixin,
  EmploymentAgencyMixin as Mixin];
