import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../lib/MedicalIndication';
import { ApprovedIndicationMixin } from '../lib/ApprovedIndication';

export const ApprovedIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  ApprovedIndicationMixin as Mixin];
