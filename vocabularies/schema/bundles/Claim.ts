import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ClaimMixin } from '../Claim';

export const ClaimBundle = [
  CreativeWorkMixin as Mixin,
  ClaimMixin as Mixin];
