import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';

export const LocalBusinessBundle = [
  LocalBusinessMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin];
