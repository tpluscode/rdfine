import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { TaxiServiceMixin } from '../lib/TaxiService';

export const TaxiServiceBundle = [
  ServiceMixin as Mixin,
  TaxiServiceMixin as Mixin];
