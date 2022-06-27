import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CableOrSatelliteServiceMixin } from '../lib/CableOrSatelliteService';
import { ServiceMixin } from '../lib/Service';

export const CableOrSatelliteServiceBundle = [
  CableOrSatelliteServiceMixin as Mixin,
  ServiceMixin as Mixin];
