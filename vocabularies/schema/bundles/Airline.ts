import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AirlineMixin } from '../lib/Airline';
import { OrganizationMixin } from '../lib/Organization';

export const AirlineBundle = [
  AirlineMixin as Mixin,
  OrganizationMixin as Mixin];
