import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { HealthAndBeautyBusinessMixin } from '../lib/HealthAndBeautyBusiness';

export const HealthAndBeautyBusinessBundle = [
  LocalBusinessMixin as Mixin,
  HealthAndBeautyBusinessMixin as Mixin];
