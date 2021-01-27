import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { DictionaryMixin } from '../lib/Dictionary';
import { RemovalMixin } from '../lib/Removal';

export const RemovalBundle = [
  DerivationMixin as Mixin,
  DictionaryMixin as Mixin,
  RemovalMixin as Mixin];
