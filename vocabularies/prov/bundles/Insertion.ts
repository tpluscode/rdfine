import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { DictionaryMixin } from '../lib/Dictionary';
import { KeyEntityPairMixin } from '../lib/KeyEntityPair';
import { InsertionMixin } from '../lib/Insertion';

export const InsertionBundle = [
  DerivationMixin as Mixin,
  DictionaryMixin as Mixin,
  KeyEntityPairMixin as Mixin,
  InsertionMixin as Mixin];
