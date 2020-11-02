import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { VeterinaryCareMixin } from '../VeterinaryCare';

export const VeterinaryCareBundle = [
  MedicalOrganizationMixin as Mixin,
  VeterinaryCareMixin as Mixin];
