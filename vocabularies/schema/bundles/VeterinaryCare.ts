import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { VeterinaryCareMixin } from '../lib/VeterinaryCare';

export const VeterinaryCareBundle = [
  MedicalOrganizationMixin as Mixin,
  VeterinaryCareMixin as Mixin];
