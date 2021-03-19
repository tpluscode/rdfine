import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { OrganizationMixin } from '../lib/Organization';

export const OrganizationBundle = [
  ObjectMixin as Mixin,
  OrganizationMixin as Mixin];
