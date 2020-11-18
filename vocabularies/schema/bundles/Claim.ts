import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ClaimMixin } from '../lib/Claim';

export const ClaimBundle = [
  CreativeWorkMixin as Mixin,
  ClaimMixin as Mixin];
