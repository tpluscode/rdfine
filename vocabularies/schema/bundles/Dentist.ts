import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DentistMixin } from '../lib/Dentist';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';

export const DentistBundle = [
  DentistMixin as Mixin,
  LocalBusinessMixin as Mixin,
  MedicalOrganizationMixin as Mixin];
