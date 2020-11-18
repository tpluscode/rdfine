import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../lib/MedicalIndication';
import { PreventionIndicationMixin } from '../lib/PreventionIndication';

export const PreventionIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  PreventionIndicationMixin as Mixin];
