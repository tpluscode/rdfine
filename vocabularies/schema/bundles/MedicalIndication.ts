import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalIndicationMixin } from '../lib/MedicalIndication';

export const MedicalIndicationBundle = [
  MedicalEntityMixin as Mixin,
  MedicalIndicationMixin as Mixin];
