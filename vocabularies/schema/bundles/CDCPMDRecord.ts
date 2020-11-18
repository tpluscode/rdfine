import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { CDCPMDRecordMixin } from '../lib/CDCPMDRecord';

export const CDCPMDRecordBundle = [
  StructuredValueMixin as Mixin,
  CDCPMDRecordMixin as Mixin];
