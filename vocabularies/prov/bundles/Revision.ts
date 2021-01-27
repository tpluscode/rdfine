import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DerivationMixin } from '../lib/Derivation';
import { RevisionMixin } from '../lib/Revision';

export const RevisionBundle = [
  DerivationMixin as Mixin,
  RevisionMixin as Mixin];
