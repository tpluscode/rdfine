import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { DentistMixin } from '../Dentist';

export const DentistBundle = [
  LocalBusinessMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  DentistMixin as Mixin];
