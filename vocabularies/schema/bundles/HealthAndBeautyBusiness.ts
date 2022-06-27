import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const HealthAndBeautyBusinessBundle = [
  HealthAndBeautyBusinessMixin as Mixin,
  LocalBusinessMixin as Mixin];
