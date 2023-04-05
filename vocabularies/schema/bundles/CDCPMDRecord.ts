import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CDCPMDRecordMixin } from '../lib/CDCPMDRecord';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const CDCPMDRecordBundle = [
  CDCPMDRecordMixin as Mixin,
  StructuredValueMixin as Mixin];
