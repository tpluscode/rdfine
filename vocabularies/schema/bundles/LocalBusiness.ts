import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { PlaceMixin } from '../Place';
import { LocalBusinessMixin } from '../LocalBusiness';

export const LocalBusinessBundle = [
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  LocalBusinessMixin as Mixin];
