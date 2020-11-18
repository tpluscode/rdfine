import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { ConsortiumMixin } from '../lib/Consortium';

export const ConsortiumBundle = [
  OrganizationMixin as Mixin,
  ConsortiumMixin as Mixin];
