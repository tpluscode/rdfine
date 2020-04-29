import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { TaxiMixin } from '../Taxi';

export const TaxiDependencies = [
  ServiceMixin as Mixin,
  TaxiMixin as Mixin];
