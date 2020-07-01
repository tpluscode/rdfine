import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { CorporationMixin } from '../Corporation';

export const CorporationBundle = [
  OrganizationMixin as Mixin,
  CorporationMixin as Mixin];
