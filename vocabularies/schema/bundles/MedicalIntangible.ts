import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const MedicalIntangibleBundle = [
  MedicalEntityMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
