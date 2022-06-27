import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DictionaryMixin } from '../lib/Dictionary';
import { InsertionMixin } from '../lib/Insertion';
import { KeyEntityPairMixin } from '../lib/KeyEntityPair';
import { RemovalMixin } from '../lib/Removal';

export const DictionaryBundle = [
  DictionaryMixin as Mixin,
  InsertionMixin as Mixin,
  KeyEntityPairMixin as Mixin,
  RemovalMixin as Mixin];
