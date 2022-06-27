import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ApprovedIndicationMixin } from '../lib/ApprovedIndication';
import { MedicalIndicationMixin } from '../lib/MedicalIndication';

export const ApprovedIndicationBundle = [
  ApprovedIndicationMixin as Mixin,
  MedicalIndicationMixin as Mixin];
