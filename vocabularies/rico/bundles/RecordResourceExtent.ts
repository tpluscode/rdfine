import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExtentMixin } from '../lib/Extent';
import { RecordResourceExtentMixin } from '../lib/RecordResourceExtent';

export const RecordResourceExtentBundle = [
  ExtentMixin as Mixin,
  RecordResourceExtentMixin as Mixin];
