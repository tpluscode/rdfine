import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { CableOrSatelliteServiceMixin } from '../CableOrSatelliteService';

export const CableOrSatelliteServiceBundle = [
  ServiceMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin];
