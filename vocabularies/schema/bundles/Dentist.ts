import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { DentistMixin } from '../lib/Dentist';

export const DentistBundle = [
  LocalBusinessMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  DentistMixin as Mixin];
