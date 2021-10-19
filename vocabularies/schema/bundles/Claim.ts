import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ClaimMixin } from '../lib/Claim';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const ClaimBundle = [
  CreativeWorkMixin as Mixin,
  ClaimMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
