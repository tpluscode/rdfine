import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { CableOrSatelliteServiceMixin } from '../lib/CableOrSatelliteService';

export const CableOrSatelliteServiceBundle = [
  ServiceMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin];
