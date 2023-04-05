import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClaimMixin } from '../lib/Claim';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const ClaimBundle = [
  ClaimMixin as Mixin,
  CreativeWorkMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
