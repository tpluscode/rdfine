import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { ConsortiumMixin } from '../Consortium';

export const ConsortiumBundle = [
  OrganizationMixin as Mixin,
  ConsortiumMixin as Mixin];
