import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { HealthAndBeautyBusinessMixin } from '../HealthAndBeautyBusiness';

export const HealthAndBeautyBusinessBundle = [
  LocalBusinessMixin as Mixin,
  HealthAndBeautyBusinessMixin as Mixin];
