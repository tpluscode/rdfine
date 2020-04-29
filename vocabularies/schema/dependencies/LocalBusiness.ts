import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { PlaceMixin } from '../Place';
import { LocalBusinessMixin } from '../LocalBusiness';

export const LocalBusinessDependencies = [
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  LocalBusinessMixin as Mixin];
