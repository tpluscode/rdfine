import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { AirlineMixin } from '../Airline';

export const AirlineBundle = [
  OrganizationMixin as Mixin,
  AirlineMixin as Mixin];
