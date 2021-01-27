import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { PrimarySourceMixin } from '../lib/PrimarySource';

export const PrimarySourceBundle = [
  DerivationMixin as Mixin,
  PrimarySourceMixin as Mixin];
