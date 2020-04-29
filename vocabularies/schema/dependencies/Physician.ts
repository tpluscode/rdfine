import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { PhysicianMixin } from '../Physician';

export const PhysicianDependencies = [
  MedicalOrganizationMixin as Mixin,
  PhysicianMixin as Mixin];
