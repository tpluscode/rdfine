import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalIndicationMixin } from '../MedicalIndication';

export const MedicalIndicationBundle = [
  MedicalEntityMixin as Mixin,
  MedicalIndicationMixin as Mixin];
