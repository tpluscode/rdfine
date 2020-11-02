import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../MedicalIndication';
import { PreventionIndicationMixin } from '../PreventionIndication';

export const PreventionIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  PreventionIndicationMixin as Mixin];
