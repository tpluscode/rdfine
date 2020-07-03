import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { TaxiMixin } from '../Taxi';

export const TaxiBundle = [
  ServiceMixin as Mixin,
  TaxiMixin as Mixin];
