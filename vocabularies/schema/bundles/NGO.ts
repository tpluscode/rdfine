import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { NGOMixin } from '../NGO';

export const NGOBundle = [
  OrganizationMixin as Mixin,
  NGOMixin as Mixin];
