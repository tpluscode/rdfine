import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const LocalBusinessBundle = [
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  LocalBusinessMixin as Mixin];
