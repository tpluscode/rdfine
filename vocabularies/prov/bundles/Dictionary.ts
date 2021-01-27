import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DictionaryMixin } from '../lib/Dictionary';
import { KeyEntityPairMixin } from '../lib/KeyEntityPair';
import { InsertionMixin } from '../lib/Insertion';
import { RemovalMixin } from '../lib/Removal';

export const DictionaryBundle = [
  DictionaryMixin as Mixin,
  KeyEntityPairMixin as Mixin,
  InsertionMixin as Mixin,
  RemovalMixin as Mixin];
