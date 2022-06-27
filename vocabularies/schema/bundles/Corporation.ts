import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CorporationMixin } from '../lib/Corporation';
import { OrganizationMixin } from '../lib/Organization';

export const CorporationBundle = [
  CorporationMixin as Mixin,
  OrganizationMixin as Mixin];
