import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { CableOrSatelliteServiceMixin } from '../CableOrSatelliteService';

export const CableOrSatelliteServiceDependencies = [
  ServiceMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin];
