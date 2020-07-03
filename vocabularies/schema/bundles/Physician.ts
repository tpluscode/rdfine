import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { PhysicianMixin } from '../Physician';

export const PhysicianBundle = [
  MedicalOrganizationMixin as Mixin,
  PhysicianMixin as Mixin];
