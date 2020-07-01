import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { TaxiServiceMixin } from '../TaxiService';

export const TaxiServiceBundle = [
  ServiceMixin as Mixin,
  TaxiServiceMixin as Mixin];
