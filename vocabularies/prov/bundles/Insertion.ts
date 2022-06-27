import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { DictionaryMixin } from '../lib/Dictionary';
import { InsertionMixin } from '../lib/Insertion';
import { KeyEntityPairMixin } from '../lib/KeyEntityPair';

export const InsertionBundle = [
  DerivationMixin as Mixin,
  DictionaryMixin as Mixin,
  InsertionMixin as Mixin,
  KeyEntityPairMixin as Mixin];
