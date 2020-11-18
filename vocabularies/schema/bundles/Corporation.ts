import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { CorporationMixin } from '../lib/Corporation';

export const CorporationBundle = [
  OrganizationMixin as Mixin,
  CorporationMixin as Mixin];
