import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConsortiumMixin } from '../lib/Consortium';
import { OrganizationMixin } from '../lib/Organization';

export const ConsortiumBundle = [
  ConsortiumMixin as Mixin,
  OrganizationMixin as Mixin];
