import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../MedicalIndication';
import { ApprovedIndicationMixin } from '../ApprovedIndication';

export const ApprovedIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  ApprovedIndicationMixin as Mixin];
