import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { AirlineMixin } from '../lib/Airline';

export const AirlineBundle = [
  OrganizationMixin as Mixin,
  AirlineMixin as Mixin];
