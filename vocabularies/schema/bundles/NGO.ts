import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { NGOMixin } from '../lib/NGO';

export const NGOBundle = [
  OrganizationMixin as Mixin,
  NGOMixin as Mixin];
