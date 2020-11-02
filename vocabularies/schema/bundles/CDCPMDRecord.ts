import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { CDCPMDRecordMixin } from '../CDCPMDRecord';

export const CDCPMDRecordBundle = [
  StructuredValueMixin as Mixin,
  CDCPMDRecordMixin as Mixin];
