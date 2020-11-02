import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalIntangibleMixin } from '../MedicalIntangible';

export const MedicalIntangibleBundle = [
  MedicalEntityMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
