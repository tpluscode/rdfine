import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { TaxiMixin } from '../lib/Taxi';

export const TaxiBundle = [
  ServiceMixin as Mixin,
  TaxiMixin as Mixin];
