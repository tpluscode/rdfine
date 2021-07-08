import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { OrganizationMixin } from '../lib/Organization';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const LocalBusinessBundle = [
  PlaceMixin as Mixin,
  OrganizationMixin as Mixin,
  LocalBusinessMixin as Mixin];
