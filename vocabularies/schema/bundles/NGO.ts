import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NGOMixin } from '../lib/NGO';
import { OrganizationMixin } from '../lib/Organization';

export const NGOBundle = [
  NGOMixin as Mixin,
  OrganizationMixin as Mixin];
